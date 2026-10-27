import type { Metadata } from "next"
import Image from "next/image"
import { FbEnquiry } from "@/components/fb-enquiry"

export const metadata: Metadata = {
  title: "Is Strata right for your renovation?",
  description: "Answer a few quick questions about your renovation project.",
  robots: { index: false, follow: false },
}

export default function RenovationEnquiryPage() {
  return (
    <main className="min-h-screen bg-[#faf8f4]">
      <header className="px-4 py-4">
        <Image src="/images/strata-logo.png" alt="Strata.sg" width={150} height={50} className="h-12 w-auto" priority />
      </header>
      <div className="mx-auto max-w-xl px-4 pb-12 sm:px-0">
        <FbEnquiry
          intro={
            <>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
              <Image src="/images/hero-interior.jpg" alt="Interior renovated by Strata.sg" fill priority className="object-cover" sizes="(min-width: 640px) 576px, 100vw" />
            </div>
            <div className="pt-8">
              <h1 className="font-serif text-4xl leading-tight text-[#10263d]">Is Strata right for your renovation?</h1>
              <p className="mb-8 mt-3 text-lg text-slate-600">Answer a few quick questions about your project.</p>
            </div>
            </>
          }
        />
      </div>
    </main>
  )
}
