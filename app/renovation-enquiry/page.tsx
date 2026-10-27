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
      <div className="px-4 pb-12 pt-4">
        <FbEnquiry />
      </div>
    </main>
  )
}
