type Email = {
  from: string
  to: string[]
  subject: string
  html: string
  reply_to?: string
}

export const SENDER_ADDRESS = process.env.RESEND_FROM || "sender@strata.sg"
export const INBOX = "contact@strata.sg"

export function sendEmail(apiKey: string, email: Email) {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify(email),
  }).then(async (response) => {
    if (!response.ok) {
      const message = await response.text().catch(() => "")
      throw new Error(`Resend request failed: ${response.status} ${message.slice(0, 300)}`)
    }
  })
}
