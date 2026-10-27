"use client"

import { FormEvent, useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react"
import { COUNTRIES, DEFAULT_COUNTRY } from "@/lib/countries"
import { LEAD_STORAGE_KEY, PROPERTY_TYPES, SCOPES, START_DATES } from "@/lib/fb-lead"

const field = "mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#b98b3c] focus:ring-2 focus:ring-[#b98b3c]/20"
const cta = "inline-flex items-center justify-center gap-2 rounded-lg bg-[#10263d] px-6 py-4 font-semibold text-white transition hover:bg-[#0a1a2b] disabled:opacity-40"

const empty = { propertyType: "", scope: "", startDate: "", name: "", phone: "", consent: false }

// Digits only, no leading zeros. Singapore numbers are exactly 8 digits; others 6-12.
const nationalNumber = (phone: string) => phone.replace(/^0+/, "")
const phoneOk = (phone: string, code: string) => {
  const n = nationalNumber(phone).length
  return code === "65" ? n === 8 : n >= 6 && n <= 12
}

function Select({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (v: string) => void }) {
  return (
    <label className="block text-sm font-medium">
      {label}
      <select value={value} onChange={(e) => onChange(e.target.value)} className={field}>
        <option value="" disabled>Select an option</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  )
}

function CountryPicker({ value, onChange }: { value: { name: string; code: string }; onChange: (c: { name: string; code: string }) => void }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const box = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const close = (e: MouseEvent) => !box.current?.contains(e.target as Node) && setOpen(false)
    document.addEventListener("mousedown", close)
    return () => document.removeEventListener("mousedown", close)
  }, [])

  const q = query.trim().toLowerCase().replace(/^\+/, "")
  const matches = COUNTRIES.filter((c) => !q || c.name.toLowerCase().includes(q) || c.code.startsWith(q))

  return (
    <div ref={box} className="relative">
      <button type="button" aria-label="Country code" aria-expanded={open} onClick={() => setOpen(!open)} className={`${field} mt-0 flex w-28 items-center justify-between gap-1`}>
        {value.name === "Singapore" ? "SG" : value.name.slice(0, 2).toUpperCase()} +{value.code}
        <ChevronDown className="size-4 shrink-0" />
      </button>
      {open && (
        <div className="absolute left-0 z-20 mt-1 w-64 rounded-lg border border-slate-200 bg-white p-2 shadow-xl">
          <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search country or code" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#b98b3c]" />
          <ul className="mt-2 max-h-52 overflow-y-auto text-sm">
            {matches.map((c) => (
              <li key={c.name}>
                <button type="button" onClick={() => { onChange(c); setOpen(false); setQuery("") }} className="flex w-full justify-between rounded px-2 py-1.5 text-left hover:bg-slate-100">
                  <span>{c.name}</span><span className="text-slate-500">+{c.code}</span>
                </button>
              </li>
            ))}
            {matches.length === 0 && <li className="px-2 py-1.5 text-slate-500">No match</li>}
          </ul>
        </div>
      )}
    </div>
  )
}

export function FbEnquiry() {
  const [step, setStep] = useState(1) // form screens 1-3
  const direction = useRef(1) // 1 = moving forward: screen scrolls up
  const [form, setForm] = useState(empty)
  const [country, setCountry] = useState(DEFAULT_COUNTRY)
  const [website, setWebsite] = useState("") // honeypot
  const [state, setState] = useState<"idle" | "submitting" | "error">("idle")
  const [error, setError] = useState("")
  const [params, setParams] = useState<URLSearchParams>()

  useEffect(() => setParams(new URLSearchParams(window.location.search)), [])

  const set = (key: keyof typeof empty) => (value: string | boolean) => setForm((f) => ({ ...f, [key]: value }))
  const go = (n: number) => {
    direction.current = n > step ? 1 : -1
    setStep(n)
    window.scrollTo(0, 0)
  }
  const valid = [
    true,
    Boolean(form.propertyType && form.scope),
    Boolean(form.startDate),
    form.name.trim().length >= 2 && phoneOk(form.phone, country.code) && form.consent,
  ]

  const submit = async (event: FormEvent) => {
    event.preventDefault()
    if (step < 3) return valid[step] && go(step + 1)
    setState("submitting")
    try {
      const response = await fetch("/api/fb-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: AbortSignal.timeout(20000), // never hang on "Sending..."
        body: JSON.stringify({
          ...form,
          phone: nationalNumber(form.phone),
          countryCode: country.code,
          website,
          campaign: params?.get("utm_campaign") || "",
          adset: params?.get("utm_content") || params?.get("adset") || "",
          ad: params?.get("utm_term") || params?.get("ad") || "",
          fbclid: params?.get("fbclid") || "",
        }),
      })
      const result = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(result.error)
      try {
        sessionStorage.setItem(LEAD_STORAGE_KEY, JSON.stringify({ id: result.leadId, qualified: result.qualified, details: { ...form, phone: `+${country.code} ${nationalNumber(form.phone)}` } }))
      } catch {}
      // Full page load: more reliable than client routing in in-app browsers (e.g. Facebook).
      window.location.assign(result.qualified ? "/renovation-enquiry/thank-you" : "/renovation-enquiry/received")
    } catch (e) {
      setState("error")
      setError(e instanceof Error && e.message ? e.message : "We could not send your enquiry. Please WhatsApp us instead.")
    }
  }

  return (
    <form onSubmit={submit} className="mx-auto max-w-md space-y-5 rounded-2xl bg-white p-6 text-[#10263d] shadow-xl">
      <div className="flex items-center justify-between text-xs font-medium text-slate-500">
        {step > 1 ? (
          <button type="button" onClick={() => go(step - 1)} className="inline-flex items-center gap-1" aria-label="Back">
            <ArrowLeft className="size-4" /> Back
          </button>
        ) : (
          <span />
        )}
        <span>Step {step} of 3</span>
      </div>
      <div className="h-1 rounded bg-slate-100"><div className="h-1 rounded bg-[#b98b3c] transition-all" style={{ width: `${(step / 3) * 100}%` }} /></div>

      {/* Enter-only animation: exit animations can get stuck and leave the old screen on top. */}
        <motion.div
          key={step}
          initial={{ y: 48 * direction.current, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="min-h-[260px] space-y-5"
        >
        {step === 1 && (
          <>
            <h2 className="font-serif text-2xl leading-tight">Tell us about your renovation</h2>
            <Select label="Property type" value={form.propertyType} options={PROPERTY_TYPES} onChange={set("propertyType")} />
            <Select label="Renovation scope" value={form.scope} options={SCOPES} onChange={set("scope")} />
          </>
        )}

        {step === 2 && (
          <fieldset>
            <legend className="font-serif text-2xl leading-tight">When are you hoping to start?</legend>
            {START_DATES.map((o) => (
              <label key={o} className={`mt-3 flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm ${form.startDate === o ? "border-[#10263d] bg-[#10263d]/5" : "border-slate-300"}`}>
                <input type="radio" name="startDate" checked={form.startDate === o} onChange={() => set("startDate")(o)} className="size-4 accent-[#10263d]" /> {o}
              </label>
            ))}
          </fieldset>
        )}

        {step === 3 && (
          <>
            <h2 className="font-serif text-2xl leading-tight">How can we reach you?</h2>
            <label className="block text-sm font-medium">
              Name
              <input name="name" autoComplete="name" placeholder="Your name" value={form.name} onChange={(e) => set("name")(e.target.value)} className={field} />
            </label>
            <div className="text-sm font-medium">
              <label htmlFor="phone">Mobile number</label>
              <div className="mt-1.5 flex gap-2">
                <CountryPicker value={country} onChange={setCountry} />
                <input id="phone" name="phone" type="tel" inputMode="numeric" autoComplete="tel-national" placeholder="e.g. 9123 4567" value={form.phone} onChange={(e) => set("phone")(e.target.value.replace(/\D/g, ""))} className={`${field} mt-0 min-w-0 flex-1`} />
              </div>
              {form.phone && !phoneOk(form.phone, country.code) && (
                <p className="mt-1 text-xs text-red-700">{country.code === "65" ? "Enter an 8-digit Singapore mobile number." : "Enter a valid mobile number (digits only)."}</p>
              )}
            </div>
            <input tabIndex={-1} autoComplete="off" aria-hidden className="hidden" value={website} onChange={(e) => setWebsite(e.target.value)} />
            <label className="flex items-start gap-2 text-xs text-slate-600">
              <input type="checkbox" checked={form.consent} onChange={(e) => set("consent")(e.target.checked)} className="mt-0.5 size-4 accent-[#10263d]" />
              I agree to be contacted about this enquiry.
            </label>
            {state === "error" && <p role="alert" className="text-sm text-red-700">{error}</p>}
          </>
        )}

        </motion.div>

      <button disabled={!valid[step] || state === "submitting"} className={`${cta} w-full`}>
        {step < 3 ? <>Continue <ArrowRight className="size-5" /></> : state === "submitting" ? "Sending..." : "Send my renovation enquiry"}
      </button>
    </form>
  )
}
