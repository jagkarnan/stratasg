// Shared by the FB landing form and /api/fb-lead. Qualification rules are proposed and need Strata's confirmation.
export const PROPERTY_TYPES = ["HDB", "Condominium", "Landed", "Commercial / Office"]
export const SCOPES = ["Full home renovation", "Partial renovation (a few rooms)", "Kitchen / bathroom only", "Not sure yet"]
export const START_DATES = ["Within 3 months", "In 3-6 months", "More than 6 months from now", "Not sure yet"]

export function isQualified(lead: { scope: string; startDate: string }) {
  const soon = ["Within 3 months", "In 3-6 months"].includes(lead.startDate)
  const bigScope = ["Full home renovation", "Partial renovation (a few rooms)"].includes(lead.scope)
  return soon && bigScope
}

export const LEAD_STORAGE_KEY = "strata_fb_lead"
