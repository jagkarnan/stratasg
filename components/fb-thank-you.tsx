"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Check, FileText } from "lucide-react"
import { LEAD_STORAGE_KEY } from "@/lib/fb-lead"
import { trackMarketingEvent } from "@/lib/marketing-events"

const btn = "mt-8 inline-flex w-full items-center justify-center rounded-lg bg-[#10263d] px-6 py-4 font-semibold text-white transition hover:bg-[#0a1a2b]"

export function FbThankYou({ qualified }: { qualified: boolean }) {
  const router = useRouter()
  const [ready, setReady] = useState(false)
  const [whatsappUrl, setWhatsappUrl] = useState("https://wa.me/6581888935")

  useEffect(() => {
    let lead: { id?: string; qualified?: boolean; details?: Record<string, string> } | null = null
    try {
      lead = JSON.parse(sessionStorage.getItem(LEAD_STORAGE_KEY) || "null")
    } catch {}
    // Only people who just submitted see these pages; the right page for their outcome.
    if (!lead?.id || Boolean(lead.qualified) !== qualified) {
      router.replace("/renovation-enquiry")
      return
    }
    const d = lead.details
    if (d) {
      const text = `Hi Strata.sg, I just submitted a renovation enquiry.\n\nName: ${d.name}\nProperty type: ${d.propertyType}\nRenovation scope: ${d.scope}\nStart: ${d.startDate}\nMobile: ${d.phone}`
      setWhatsappUrl(`https://wa.me/6581888935?text=${encodeURIComponent(text)}`)
    }
    setReady(true)
    if (!qualified) return
    // Fire once per lead: refreshing or revisiting never re-fires.
    const firedKey = `${LEAD_STORAGE_KEY}_fired_${lead.id}`
    try {
      if (sessionStorage.getItem(firedKey)) return
      sessionStorage.setItem(firedKey, "1")
    } catch {}
    trackMarketingEvent("qualified_lead", { landing_page: "fb_enquiry" })
  }, [qualified, router])

  if (!ready) return null

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-[#c7a86b]/40 bg-white p-8 text-center text-[#10263d] shadow-xl">
      <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-[#b98b3c] text-white">
        {qualified ? <Check className="size-7" /> : <FileText className="size-7" />}
      </div>
      {qualified ? (
        <>
          <h1 className="mt-6 font-serif text-3xl leading-tight">Thanks! Your project looks like a potential fit.</h1>
          <p className="mt-3 text-slate-600">Our team will review your details and contact you.</p>
          <a
            href={whatsappUrl}
            onClick={() => trackMarketingEvent("whatsapp_click", { location: "fb_thank_you" })}
            className={btn}
          >
            Continue on WhatsApp
          </a>
        </>
      ) : (
        <>
          <h1 className="mt-6 font-serif text-3xl leading-tight">Thanks! We&apos;ve received your enquiry.</h1>
          <p className="mt-3 text-slate-600">Our team will review your requirements.</p>
          <Link href="/projects" className={btn}>Explore completed projects</Link>
        </>
      )}
    </div>
  )
}
