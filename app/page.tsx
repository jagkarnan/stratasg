import dynamic from "next/dynamic"
import type { Metadata } from "next"
import Script from "next/script"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { IntroCTASection } from "@/components/intro-cta-section"
import { Footer } from "@/components/footer"
import { SectionSeparator } from "@/components/section-separator"

const OurStorySection = dynamic(
  () => import("@/components/our-story-section").then((mod) => ({ default: mod.OurStorySection })),
  { loading: () => <div className="min-h-[400px] animate-pulse bg-muted" /> }
)

const OurProjectsSection = dynamic(
  () => import("@/components/our-projects-section").then((mod) => ({ default: mod.OurProjectsSection })),
  { loading: () => <div className="min-h-[600px] animate-pulse bg-muted" /> }
)

const GoogleReviewsSection = dynamic(
  () => import("@/components/google-reviews-section").then((mod) => ({ default: mod.GoogleReviewsSection })),
  { loading: () => <div className="min-h-[400px] animate-pulse bg-muted" /> }
)

const ServicesSection = dynamic(
  () => import("@/components/services-section").then((mod) => ({ default: mod.ServicesSection })),
  { loading: () => <div className="min-h-[500px] animate-pulse bg-muted" /> }
)
export const metadata: Metadata = {
  // ✅ SEO Title & Description
  title: "Interior Design Singapore – Trusted Experts for HDB, Condo & Commercial Spaces",
  description:
    "Interior Design Singapore experts for HDB, condo, office & landed homes. Strata.sg delivers quality renovation, 3D design & stress-free project management.",

  // ✅ Canonical URL
  alternates: {
    canonical: "https://www.strata.sg/",
  },

  // ✅ Open Graph (Facebook / LinkedIn)
  openGraph: {
    title: "Interior Design Singapore | Strata.sg Renovation Experts",
    description:
      "Expert interior design & renovation in Singapore for HDB, condo, office & landed homes. Quality work, transparent pricing & stress-free process.",
    url: "https://www.strata.sg/",
    siteName: "Strata.sg",
    images: [
      {
        url: "https://assets.zyrosite.com/AwvXD01g6pTXBqOg/resi-8-AGB2PovoZ7tJGZqp.jpeg",
        width: 1200,
        height: 630,
        alt: "Interior Design Singapore – Strata.sg Renovation Experts",
      },
    ],
    type: "website",
  },

  // ✅ Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Singapore | Strata.sg Renovation Experts",
    description:
      "Strata.sg offers quality renovation & interior design services in Singapore for HDBs, condos, offices & landed properties. Built on trust.",
    images: [
      "https://assets.zyrosite.com/AwvXD01g6pTXBqOg/resi-13-AQExaveevauZvG1L.jpeg",
    ],
  },

  // ✅ Custom Meta Tags (for title + image alt text)
  other: {
    "title": "Interior Design Singapore | Strata.sg Renovation Experts",
    "og:image": "https://assets.zyrosite.com/AwvXD01g6pTXBqOg/resi-8-AGB2PovoZ7tJGZqp.jpeg",
    "og:image:alt": "Interior Design Singapore – Strata.sg Renovation Experts",
    "twitter:image": "https://assets.zyrosite.com/AwvXD01g6pTXBqOg/resi-13-AQExaveevauZvG1L.jpeg",
    "twitter:image:alt": "Interior Design Singapore – Strata.sg Renovation Experts",
  },
}


export default function HomePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://www.strata.sg/#website",
        url: "https://www.strata.sg",
        name: "STRATA.SG",
        description:
          "Interior Design Singapore experts for HDB, condo, office & landed homes. Strata.sg delivers quality renovation, 3D design & stress-free project management.",
        publisher: { "@id": "https://www.strata.sg/#organization" },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.strata.sg/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.strata.sg/#organization",
        name: "STRATA.SG",
        url: "https://www.strata.sg/",
        logo: {
          "@type": "ImageObject",
          url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/AwvXD01g6pTXBqOg/strata.sg-logo-latest-mk3vKM8KLliEqb9j.png",
        },
        sameAs: [
          "https://x.com/strata_sg",
          "https://instagram.com/strata.sg",
          "https://www.pinterest.com/Strata24",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.strata.sg/#localbusiness",
        name: "STRATA.SG PTE LTD",
        image: "https://assets.zyrosite.com/AwvXD01g6pTXBqOg/resi-9-mePx2kggyehyezQr.jpeg",
        url: "https://www.strata.sg/",
        telephone: "+65 8188 8935",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "540 SIMS AVENUE #03-05 SIMS AVENUE CENTRE",
          addressLocality: "Singapore",
          postalCode: "387603",
          addressCountry: "SG",
        },
        sameAs: [
          "https://x.com/strata_sg",
          "https://instagram.com/strata.sg",
          "https://www.pinterest.com/Strata24",
        ],
      },
      {
        "@type": "Service",
        "@id": "https://www.strata.sg/#services",
        serviceType: "Interior Design & Renovation",
        provider: { "@id": "https://www.strata.sg/#localbusiness" },
        areaServed: { "@type": "Place", name: "Singapore" },
        offers: {
          "@type": "Offer",
          url: "https://www.strata.sg/",
          priceCurrency: "SGD",
          price: "80,000",
          eligibleRegion: { "@type": "Country", name: "Singapore" },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.strata.sg/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.strata.sg/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://www.strata.sg/services-stratasg-pte-ltd",
          },
        ],
      },
      {
        "@type": "AggregateRating",
        "@id": "https://www.strata.sg/#reviews",
        itemReviewed: { "@id": "https://www.strata.sg/#localbusiness" },
      },
    ],
  }

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <IntroCTASection />
      <SectionSeparator />
      <OurStorySection />
      <SectionSeparator />
      <OurProjectsSection />
      <SectionSeparator />
      <GoogleReviewsSection />
      <SectionSeparator />
      <ServicesSection />
      <Footer />

      {/* ✅ Inject Schema Markup */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </main>
  )
}
