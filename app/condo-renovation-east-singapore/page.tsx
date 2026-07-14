import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Check, MapPin, MessageCircle, Ruler, ShieldCheck } from "lucide-react"
import { CondoLeadForm } from "@/components/condo-lead-form"

export const metadata: Metadata = {
  title: "Condo Renovation East Singapore | Free 2026 Budget Planner | Strata.sg",
  description: "Planning a full condo or landed-home renovation in East Singapore? Get Strata.sg's free 2026 budget and timeline planner, then discuss your project on WhatsApp.",
  alternates: { canonical: "https://www.strata.sg/condo-renovation-east-singapore" },
  openGraph: {
    title: "Plan Your East Singapore Condo Renovation",
    description: "Free Singapore condo renovation budget and timeline planner from Strata.sg.",
    url: "https://www.strata.sg/condo-renovation-east-singapore",
    images: [{ url: "/images/hero-interior.jpg", width: 1200, height: 630 }],
  },
}

const whatsappUrl = "https://wa.me/6581888935?text=Hi%20Strata.sg%2C%20I%20am%20planning%20a%20full%20condo%20or%20landed-home%20renovation%20in%20Singapore.%20Can%20we%20discuss%20my%20project%3F"

export default function EastCondoRenovationPage() {
  return (
    <main className="min-h-screen bg-[#f4efe5] text-[#10263d]">
      <section className="relative isolate min-h-[90vh] overflow-hidden bg-[#10283e] text-white">
        <Image src="/images/hero-interior.jpg" alt="Completed contemporary home interior by Strata.sg" fill priority className="object-cover opacity-35" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,31,48,.96)_0%,rgba(10,31,48,.78)_45%,rgba(10,31,48,.28)_100%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px]" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-8">
          <Link href="/" className="font-serif text-2xl tracking-wide">STRATA<span className="text-[#d5ae64]">.SG</span></Link>
          <a href={whatsappUrl} className="hidden items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold backdrop-blur transition hover:bg-white hover:text-[#10283e] sm:flex">
            <MessageCircle className="size-4" /> WhatsApp +65 8188 8935
          </a>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-8 md:px-8 lg:grid-cols-[1.12fr_.88fr] lg:pb-24 lg:pt-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5ae64]/35 bg-[#d5ae64]/10 px-4 py-2 font-mono text-xs uppercase tracking-[.17em] text-[#f1d9a8]">
              <MapPin className="size-4" /> East Singapore renovation specialists
            </div>
            <h1 className="mt-7 max-w-3xl font-serif text-5xl leading-[.98] tracking-[-.035em] sm:text-6xl lg:text-7xl">
              A full-home renovation, <span className="text-[#e2bd75]">planned before it begins.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
              For condo and landed-home owners who want a considered design, a clear scope, and one accountable team from planning through handover.
            </p>
            <ul className="mt-8 grid gap-3 text-sm text-white/85 sm:grid-cols-2">
              {["Budget checkpoints before quotation", "Renovation timeline by project phase", "Condo management submission checklist", "Questions to ask before appointing a firm"].map((item) => (
                <li key={item} className="flex items-center gap-3"><span className="flex size-6 items-center justify-center rounded-full bg-[#d5ae64] text-[#10283e]"><Check className="size-4" /></span>{item}</li>
              ))}
            </ul>
            <p className="mt-9 font-mono text-xs uppercase tracking-[.2em] text-white/50">Designed in Singapore / Delivered by Strata.sg</p>
          </div>
          <CondoLeadForm />
        </div>
      </section>

      <section className="border-b border-[#10263d]/10 bg-[#eadfca]">
        <div className="mx-auto grid max-w-7xl divide-y divide-[#10263d]/10 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-8">
          {[
            [Ruler, "Scope first", "Align layout, finishes, budget and constraints before works begin."],
            [ShieldCheck, "One accountable team", "A single point of contact from design coordination to handover."],
            [MapPin, "East-side focus", "Preferred service for condos and landed homes across East Singapore."],
          ].map(([Icon, title, text]) => {
            const FeatureIcon = Icon as typeof Ruler
            return <div key={title as string} className="flex gap-4 px-4 py-8 sm:px-7"><FeatureIcon className="mt-1 size-6 shrink-0 text-[#9a6b28]" /><div><h2 className="font-serif text-xl">{title as string}</h2><p className="mt-2 text-sm leading-6 text-[#50606d]">{text as string}</p></div></div>
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-[.85fr_1.15fr] lg:py-28">
        <div>
          <p className="font-mono text-xs uppercase tracking-[.2em] text-[#976a2a]">The planning advantage</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">The expensive mistakes happen before demolition.</h2>
          <p className="mt-6 max-w-xl leading-7 text-[#52616e]">The planner helps you define the decisions that affect cost and schedule: scope boundaries, owner-supplied items, management approvals, long-lead materials and variation controls.</p>
          <a href={whatsappUrl} className="mt-8 inline-flex items-center gap-2 border-b border-[#10263d] pb-1 font-semibold">Discuss your renovation <ArrowUpRight className="size-4" /></a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {["01 / Define", "02 / Design", "03 / Deliver", "04 / Handover"].map((title, index) => (
            <article key={title} className={`${index === 0 ? "bg-[#17344d] text-white" : "border border-[#10263d]/15 bg-[#f8f4ec]"} min-h-52 rounded-[1.75rem] p-7`}>
              <p className="font-mono text-xs uppercase tracking-[.16em] opacity-60">{title}</p>
              <h3 className="mt-8 font-serif text-2xl">{["Brief, priorities and budget", "Layouts, finishes and coordination", "Site works with visible milestones", "Checks, close-out and care"][index]}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#10283e] px-5 py-16 text-white md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div><p className="font-mono text-xs uppercase tracking-[.2em] text-[#d5ae64]">Planning a substantial renovation?</p><h2 className="mt-3 max-w-2xl font-serif text-3xl md:text-4xl">Tell us what you are working with. We will tell you what to plan for.</h2></div>
          <a href={whatsappUrl} className="flex shrink-0 items-center gap-2 rounded-full bg-[#25d366] px-6 py-4 font-semibold text-[#052d15]"><MessageCircle className="size-5" /> WhatsApp Strata.sg</a>
        </div>
      </section>
    </main>
  )
}

