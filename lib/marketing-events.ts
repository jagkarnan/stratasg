export type MarketingEventName =
  | "lead_form_start"
  | "lead_submit"
  | "qualified_lead"
  | "whatsapp_click"
  | "lead_magnet_download"

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

export function trackMarketingEvent(
  event: MarketingEventName,
  parameters: Record<string, string | number | boolean> = {},
) {
  if (typeof window === "undefined") return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...parameters })
  window.gtag?.("event", event, parameters)

  if (event === "lead_submit") window.fbq?.("track", "Lead", parameters)
  if (event === "qualified_lead") window.fbq?.("trackCustom", "QualifiedLead", parameters)
}

