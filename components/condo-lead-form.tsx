"use client"

import { FormEvent, useState } from "react"
import { ArrowRight, Check, Download, MessageCircle } from "lucide-react"
import { trackMarketingEvent } from "@/lib/marketing-events"

type LeadForm = {
  name: string
  phone: string
  email: string
  propertyType: string
  area: string
  budget: string
  startDate: string
  consent: boolean
  website: string
}

const initialForm: LeadForm = {
  name: "",
  phone: "",
  email: "",
  propertyType: "Condominium - full renovation",
  area: "East Singapore",
  budget: "SGD 80,000 - 120,000",
  startDate: "Within 3 months",
  consent: false,
  website: "",
}

export function CondoLeadForm() {
  const [form, setForm] = useState(initialForm)
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [error, setError] = useState("")
  const [hasStarted, setHasStarted] = useState(false)

  const update = (field: keyof LeadForm, value: string | boolean) => {
    if (!hasStarted) {
      setHasStarted(true)
      trackMarketingEvent("lead_form_start", { landing_page: "east_condo" })
    }
    setForm((current) => ({ ...current, [field]: value }))
  }

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setState("submitting")
    setError("")

    const params = new URLSearchParams(window.location.search)
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        page: window.location.pathname,
        source: params.get("utm_source") || "direct",
        medium: params.get("utm_medium") || "none",
        campaign: params.get("utm_campaign") || "none",
        content: params.get("utm_content") || "none",
        keyword: params.get("utm_term") || "none",
        gclid: params.get("gclid") || "",
        fbclid: params.get("fbclid") || "",
      }),
    })

    const result = await response.json().catch(() => ({}))
    if (!response.ok) {
      setState("error")
      setError(result.error || "We could not send your request. Please WhatsApp us instead.")
      return
    }

    setState("success")
    trackMarketingEvent("lead_submit", { lead_score: result.score, landing_page: "east_condo" })
    if (result.qualified) {
      trackMarketingEvent("qualified_lead", { lead_score: result.score, landing_page: "east_condo" })
    }
    trackMarketingEvent("lead_magnet_download", { lead_magnet: "condo_planner_2026" })
  }

  if (state === "success") {
    const whatsappText = encodeURIComponent(
      `Hi Strata.sg, I downloaded the Condo Renovation Planner. I am planning a ${form.propertyType.toLowerCase()} in ${form.area}, budget ${form.budget}, starting ${form.startDate.toLowerCase()}. My name is ${form.name}.`,
    )

    return (
      <div className="rounded-[2rem] border border-[#c7a86b]/40 bg-[#f6f0e5] p-7 text-[#10263d] shadow-2xl shadow-black/10 md:p-10">
        <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-[#17344d] text-white">
          <Check className="size-7" />
        </div>
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-[#8b6a2f]">Planner unlocked</p>
        <h2 className="font-serif text-3xl leading-tight md:text-4xl">Your renovation planning kit is ready.</h2>
        <p className="mt-4 leading-7 text-[#455565]">
          Download the planner now, then send your project details on WhatsApp for a no-obligation scope review.
        </p>
        <div className="mt-7 grid gap-3">
          <a
            href="/downloads/strata-condo-renovation-planner-2026.pdf"
            download
            className="flex items-center justify-center gap-2 rounded-full bg-[#17344d] px-6 py-4 font-semibold text-white transition hover:bg-[#0d2438]"
          >
            <Download className="size-5" /> Download the planner
          </a>
          <a
            href={`https://wa.me/6581888935?text=${whatsappText}`}
            onClick={() => trackMarketingEvent("whatsapp_click", { location: "lead_success" })}
            className="flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-6 py-4 font-semibold text-[#052d15] transition hover:bg-[#20bd5a]"
          >
            <MessageCircle className="size-5" /> Discuss my project on WhatsApp
          </a>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="rounded-[2rem] border border-white/15 bg-white p-6 text-[#10263d] shadow-2xl shadow-black/30 md:p-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#8b6a2f]">Free 2026 planning kit</p>
      <h2 className="mt-2 font-serif text-3xl leading-tight">Get your condo budget & timeline planner</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">Built for Singapore condo and landed-home owners planning a substantial renovation.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium sm:col-span-1">
          Name
          <input required value={form.name} onChange={(e) => update("name", e.target.value)} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-[#fbfaf7] px-4 py-3 outline-none transition focus:border-[#b98b3c] focus:ring-2 focus:ring-[#b98b3c]/15" />
        </label>
        <label className="text-sm font-medium sm:col-span-1">
          WhatsApp number
          <input required type="tel" inputMode="tel" placeholder="e.g. 9123 4567" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-[#fbfaf7] px-4 py-3 outline-none transition focus:border-[#b98b3c] focus:ring-2 focus:ring-[#b98b3c]/15" />
        </label>
        <label className="text-sm font-medium sm:col-span-2">
          Email for the planner
          <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-[#fbfaf7] px-4 py-3 outline-none transition focus:border-[#b98b3c] focus:ring-2 focus:ring-[#b98b3c]/15" />
        </label>
        <label className="text-sm font-medium sm:col-span-1">
          Property
          <select value={form.propertyType} onChange={(e) => update("propertyType", e.target.value)} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-[#fbfaf7] px-4 py-3 outline-none focus:border-[#b98b3c]">
            <option>Condominium - full renovation</option>
            <option>Landed home - full renovation</option>
            <option>Condominium - selected rooms</option>
            <option>HDB - full renovation</option>
          </select>
        </label>
        <label className="text-sm font-medium sm:col-span-1">
          Location
          <select value={form.area} onChange={(e) => update("area", e.target.value)} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-[#fbfaf7] px-4 py-3 outline-none focus:border-[#b98b3c]">
            <option>East Singapore</option>
            <option>North-East Singapore</option>
            <option>Central Singapore</option>
            <option>West Singapore</option>
            <option>North Singapore</option>
          </select>
        </label>
        <label className="text-sm font-medium sm:col-span-1">
          Estimated budget
          <select value={form.budget} onChange={(e) => update("budget", e.target.value)} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-[#fbfaf7] px-4 py-3 outline-none focus:border-[#b98b3c]">
            <option>Below SGD 50,000</option>
            <option>SGD 50,000 - 80,000</option>
            <option>SGD 80,000 - 120,000</option>
            <option>SGD 120,000 - 180,000</option>
            <option>Above SGD 180,000</option>
          </select>
        </label>
        <label className="text-sm font-medium sm:col-span-1">
          Ideal start
          <select value={form.startDate} onChange={(e) => update("startDate", e.target.value)} className="mt-1.5 w-full rounded-xl border border-slate-200 bg-[#fbfaf7] px-4 py-3 outline-none focus:border-[#b98b3c]">
            <option>Within 1 month</option>
            <option>Within 3 months</option>
            <option>Within 3 - 6 months</option>
            <option>More than 6 months</option>
            <option>Just researching</option>
          </select>
        </label>
      </div>

      <input tabIndex={-1} autoComplete="off" aria-hidden="true" value={form.website} onChange={(e) => update("website", e.target.value)} className="absolute left-[-9999px]" />

      <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-slate-500">
        <input required type="checkbox" checked={form.consent} onChange={(e) => update("consent", e.target.checked)} className="mt-1 size-4 accent-[#17344d]" />
        <span>I agree that Strata.sg may contact me about this renovation enquiry and send the requested planner. I can opt out anytime. See the <a href="/privacy" className="underline">Privacy Policy</a>.</span>
      </label>

      {state === "error" ? <p className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p> : null}

      <button disabled={state === "submitting"} className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#17344d] px-6 py-4 font-semibold text-white transition hover:bg-[#0d2438] disabled:opacity-60">
        {state === "submitting" ? "Preparing your planner..." : "Send me the free planner"}
        <ArrowRight className="size-5" />
      </button>
      <p className="mt-3 text-center text-xs text-slate-500">No spam. No obligation. For renovation planning enquiries only.</p>
    </form>
  )
}

