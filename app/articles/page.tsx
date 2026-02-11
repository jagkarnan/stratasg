import { Header } from "@/components/header"
import { ArticlesSection } from "@/components/articles-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Articles & Tips - Strata.SG | Singapore Renovation Guides",
  description:
    "Expert renovation tips, HDB permit guides, cost breakdowns, and design trends for Singapore homeowners. Stay informed with Strata.SG's renovation insights.",
}

export default function ArticlesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <ArticlesSection />
      </div>
      <Footer />
    </main>
  )
}
