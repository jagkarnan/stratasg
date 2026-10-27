import type { Metadata } from "next"
import { FbThankYou } from "@/components/fb-thank-you"

export const metadata: Metadata = { title: "Thank you | Strata.sg", robots: { index: false, follow: false } }

export default function Page() {
  return (
    <main className="flex min-h-screen items-center bg-[#faf8f4] px-4 py-12">
      <FbThankYou qualified={true} />
    </main>
  )
}
