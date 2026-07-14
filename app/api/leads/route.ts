import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const leadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(8).max(30),
  email: z.string().trim().email().max(180),
  propertyType: z.string().max(100),
  area: z.string().max(100),
  budget: z.string().max(100),
  startDate: z.string().max(100),
  consent: z.literal(true),
  website: z.string().max(0),
  page: z.string().max(200).optional(),
  source: z.string().max(100).optional(),
  medium: z.string().max(100).optional(),
  campaign: z.string().max(150).optional(),
  content: z.string().max(150).optional(),
  keyword: z.string().max(150).optional(),
  gclid: z.string().max(300).optional(),
  fbclid: z.string().max(300).optional(),
})

function scoreLead(lead: z.infer<typeof leadSchema>) {
  let score = 0
  if (lead.propertyType.includes("full renovation")) score += 30
  if (lead.propertyType.startsWith("Condominium")) score += 10
  if (lead.area === "East Singapore") score += 20
  if (["SGD 80,000 - 120,000", "SGD 120,000 - 180,000", "Above SGD 180,000"].includes(lead.budget)) score += 25
  if (["Within 1 month", "Within 3 months"].includes(lead.startDate)) score += 15
  return score
}

function escapeHtml(value: string | number | undefined) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

async function brevoRequest(path: string, apiKey: string, body: unknown) {
  const response = await fetch(`https://api.brevo.com/v3${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    const message = await response.text().catch(() => "")
    throw new Error(`Brevo request failed: ${response.status} ${message.slice(0, 300)}`)
  }
}

export async function POST(request: NextRequest) {
  const parsed = leadSchema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 })
  }

  const lead = parsed.data
  const score = scoreLead(lead)
  const qualified = score >= 70
  const leadId = crypto.randomUUID()
  const submittedAt = new Date().toISOString()

  const webhookUrl = process.env.LEADS_WEBHOOK_URL
  const brevoKey = process.env.BREVO_API_KEY
  const brevoListId = Number(process.env.BREVO_LIST_ID || "9")
  const brevoFrom = process.env.STRATA_BREVO_FROM || "jag.karnan@gmail.com"
  const leadInbox = process.env.STRATA_LEADS_EMAIL
  const deliveryTasks: Promise<unknown>[] = []

  if (webhookUrl) {
    deliveryTasks.push(
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ leadId, submittedAt, score, qualified, ...lead }),
      }).then((response) => {
        if (!response.ok) throw new Error(`Lead webhook failed: ${response.status}`)
      }),
    )
  }

  if (brevoKey && leadInbox) {
    const details = [
      ["Lead score", `${score}/100${qualified ? " - QUALIFIED" : ""}`],
      ["Name", lead.name], ["Phone", lead.phone], ["Email", lead.email],
      ["Property", lead.propertyType], ["Area", lead.area], ["Budget", lead.budget],
      ["Start", lead.startDate], ["Source", `${lead.source} / ${lead.medium}`],
      ["Campaign", lead.campaign || "none"], ["Keyword", lead.keyword || "none"],
    ]

    deliveryTasks.push(
      brevoRequest("/contacts", brevoKey, {
        email: lead.email,
        listIds: [brevoListId],
        updateEnabled: true,
        attributes: { FIRSTNAME: lead.name },
      }),
      brevoRequest("/smtp/email", brevoKey, {
        sender: { name: "Strata.sg Leads", email: brevoFrom },
        to: [{ email: leadInbox }],
        replyTo: { email: lead.email, name: lead.name },
        subject: `${qualified ? "[QUALIFIED] " : ""}${lead.propertyType} lead - ${lead.name}`,
        htmlContent: `<h2>New Strata.sg renovation lead</h2><table>${details.map(([key, value]) => `<tr><td style="padding:6px 16px 6px 0"><strong>${escapeHtml(key)}</strong></td><td>${escapeHtml(value)}</td></tr>`).join("")}</table><p><a href="https://wa.me/${lead.phone.replace(/\D/g, "")}">Reply on WhatsApp</a></p><p>Lead ID: ${leadId}<br>Submitted: ${submittedAt}</p>`,
      }),
      brevoRequest("/smtp/email", brevoKey, {
        sender: { name: "Strata.sg Pte Ltd", email: brevoFrom },
        to: [{ email: lead.email, name: lead.name }],
        replyTo: { email: leadInbox, name: "Strata.sg Pte Ltd" },
        subject: "Your Singapore condo renovation planner",
        htmlContent: `<div style="max-width:620px;margin:auto;font-family:Arial,sans-serif;color:#1f2933"><p style="font-size:13px;letter-spacing:.12em;color:#8a6a3f">STRATA.SG</p><h1>Your renovation planner is ready</h1><p>Hi ${escapeHtml(lead.name)},</p><p>Thanks for requesting the Strata condo renovation planner. It covers budget ranges, approval checkpoints and the decisions that keep a full renovation on schedule.</p><p style="margin:28px 0"><a href="https://www.strata.sg/downloads/strata-condo-renovation-planner.pdf" style="background:#0f3d35;color:#fff;text-decoration:none;padding:14px 22px;border-radius:8px;font-weight:bold">Download the renovation planner</a></p><p>Planning a full condo or landed-home renovation? Reply to this email or WhatsApp us to discuss your property, timeline and budget.</p><p style="margin:28px 0"><a href="https://wa.me/6581888935" style="background:#25D366;color:#10231d;text-decoration:none;padding:14px 22px;border-radius:8px;font-weight:bold">WhatsApp +65 8188 8935</a></p></div>`,
      }),
    )
  }

  if (deliveryTasks.length === 0) {
    console.error("Lead delivery is not configured", { leadId })
    return NextResponse.json({ error: "Lead delivery is not configured. Please WhatsApp us directly." }, { status: 503 })
  }

  try {
    await Promise.all(deliveryTasks)
    return NextResponse.json({ ok: true, leadId, score, qualified })
  } catch (error) {
    console.error("Lead delivery failed", { leadId, error })
    return NextResponse.json({ error: "We could not send your request. Please WhatsApp us directly." }, { status: 502 })
  }
}
