import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { INBOX, SENDER_ADDRESS, sendEmail } from "@/lib/send-email"

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(8).max(30),
  email: z.string().trim().email().max(180),
  serviceType: z.string().max(100).optional(),
  message: z.string().trim().min(1).max(3000),
})

function escapeHtml(value: string | undefined) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

export async function POST(request: NextRequest) {
  const parsed = contactSchema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 })
  }

  const contact = parsed.data
  const webhookUrl = process.env.LEADS_WEBHOOK_URL
  const resendKey = process.env.RESEND_API_KEY
  // Shown as the sender name; the address stays on our verified domain so the email is not rejected or flagged as spoofed.
  const from = `${contact.name.replace(/[<>"\r\n]/g, "")} (${contact.email}) <${SENDER_ADDRESS}>`
  const tasks: Promise<unknown>[] = []

  if (webhookUrl) {
    tasks.push(
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact_form", submittedAt: new Date().toISOString(), ...contact }),
      }).then((response) => {
        if (!response.ok) throw new Error(`Contact webhook failed: ${response.status}`)
      }),
    )
  }

  if (resendKey) {
    const rows = [
      ["Name", contact.name], ["Phone", contact.phone], ["Email", contact.email],
      ["Service", contact.serviceType || "not specified"], ["Message", contact.message],
    ]
    tasks.push(
      sendEmail(resendKey, {
        from,
        to: [INBOX],
        reply_to: contact.email,
        subject: `Website message - ${contact.name}`,
        html: `<h2>New contact form message</h2><table>${rows.map(([k, v]) => `<tr><td style="padding:6px 16px 6px 0;vertical-align:top"><strong>${k}</strong></td><td>${escapeHtml(v).replaceAll("\n", "<br>")}</td></tr>`).join("")}</table>`,
      }),
    )
  }

  if (tasks.length === 0) {
    console.error("Contact delivery is not configured")
    return NextResponse.json({ error: "Message delivery is not configured. Please WhatsApp us directly." }, { status: 503 })
  }

  try {
    await Promise.all(tasks)
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact delivery failed", error)
    return NextResponse.json({ error: "We could not send your message. Please WhatsApp us directly." }, { status: 502 })
  }
}
