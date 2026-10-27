import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { PROPERTY_TYPES, SCOPES, START_DATES, isQualified } from "@/lib/fb-lead"
import { INBOX, SENDER_ADDRESS, sendEmail } from "@/lib/send-email"

const schema = z.object({
  propertyType: z.enum(PROPERTY_TYPES as [string, ...string[]]),
  scope: z.enum(SCOPES as [string, ...string[]]),
  startDate: z.enum(START_DATES as [string, ...string[]]),
  name: z.string().trim().min(2).max(100),
  countryCode: z.string().regex(/^\d{1,4}$/),
  phone: z.string().regex(/^[1-9]\d{5,11}$/), // digits only, no leading zero
  consent: z.literal(true),
  website: z.string().max(0), // honeypot
  campaign: z.string().max(150).optional(),
  adset: z.string().max(150).optional(),
  ad: z.string().max(150).optional(),
  fbclid: z.string().max(300).optional(),
})

const escapeHtml = (v: string | undefined) =>
  String(v ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;")

export async function POST(request: NextRequest) {
  const parsed = schema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 })
  }

  const lead = parsed.data
  if (lead.countryCode === "65" && lead.phone.length !== 8) {
    return NextResponse.json({ error: "Please enter an 8-digit Singapore mobile number." }, { status: 400 })
  }
  const fullPhone = `+${lead.countryCode} ${lead.phone}`
  const qualified = isQualified(lead)
  const leadId = crypto.randomUUID()
  const submittedAt = new Date().toISOString()
  const resendKey = process.env.RESEND_API_KEY

  if (!resendKey) {
    console.error("FB lead delivery is not configured", { leadId })
    return NextResponse.json({ error: "We could not save your enquiry. Please WhatsApp us directly." }, { status: 503 })
  }

  const rows = [
    ["Status", qualified ? "QUALIFIED" : "Needs review"],
    ["Name", lead.name], ["Mobile", fullPhone],
    ["Property", lead.propertyType], ["Scope", lead.scope],
    ["Start", lead.startDate],
    ["Campaign", lead.campaign || "none"], ["Ad set", lead.adset || "none"], ["Ad", lead.ad || "none"],
  ]

  try {
    await sendEmail(resendKey, {
      from: `Strata.sg Leads <${SENDER_ADDRESS}>`,
      to: [INBOX],
      subject: `${qualified ? "[QUALIFIED] " : ""}FB lead - ${lead.propertyType} - ${lead.name}`,
      html: `<h2>New Facebook renovation enquiry</h2><table>${rows.map(([k, v]) => `<tr><td style="padding:6px 16px 6px 0"><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`).join("")}</table><p><a href="https://wa.me/${lead.countryCode}${lead.phone}">Reply on WhatsApp</a></p><p>Lead ID: ${leadId}<br>Submitted: ${submittedAt}</p>`,
    })
    return NextResponse.json({ ok: true, leadId, qualified })
  } catch (error) {
    console.error("FB lead delivery failed", { leadId, error })
    return NextResponse.json({ error: "We could not send your enquiry. Please WhatsApp us directly." }, { status: 502 })
  }
}
