import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Script from "next/script"
import type { Metadata } from "next"

const ContactSection = dynamic(
  () => import("@/components/contact-section").then((mod) => ({ default: mod.ContactSection })),
  {
    loading: () => <div className="min-h-[800px] animate-pulse bg-muted" />,
  },
)

const FAQSection = dynamic(
  () => import("@/components/faq-section").then((mod) => ({ default: mod.FAQSection })),
  {
    loading: () => <div className="min-h-[600px] animate-pulse bg-muted" />,
  },
)

export const metadata: Metadata = {
  // ✅ SEO Title & Description
  title: "Singapore Contractors – Expert Strata Interior Designer",
  description:
    "Reach out to Singapore Contractors for professional strata interior design services. Expert solutions for residential and commercial spaces.",

  // ✅ Canonical URL
  alternates: {
    canonical: "https://www.strata.sg/contact",
  },

  // ✅ Open Graph (Facebook / LinkedIn)
  openGraph: {
    url: "https://www.strata.sg/contact",
    type: "website",
    title: "Singapore Contractors – Expert Strata Interior Designer",
    description:
      "Reach out to Singapore Contractors for professional strata interior design services. Expert solutions for residential and commercial spaces.",
    images: [
      {
        url: "https://www.strata.sg/images/strata-logo.png",
        width: 1200,
        height: 630,
        alt: "Interior Design Singapore – Strata.sg Renovation Experts",
      },
    ],
    siteName: "Strata.sg",
  },

  // ✅ Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Singapore Contractors – Expert Strata Interior Designer",
    description:
      "Reach out to Singapore Contractors for professional strata interior design services. Expert solutions for residential and commercial spaces.",
    images: ["https://www.strata.sg/images/strata-logo.png"],
  },

  // ✅ Additional Meta Tags for Compatibility
  other: {
    "title": "Singapore Contractors – Expert Strata Interior Designer",
    "og:image": "https://www.strata.sg/images/strata-logo.png",
    "og:image:alt": "Interior Design Singapore – Strata.sg Renovation Experts",
    "twitter:image": "https://www.strata.sg/images/strata-logo.png",
    "twitter:image:alt": "Interior Design Singapore – Strata.sg Renovation Experts",
  },

  // ✅ Apple Icon
  icons: {
    apple: "https://www.strata.sg/images/strata-logo.png",
  },
}

export default function ContactPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.strata.sg/#organization",
        name: "Strata.sg",
        url: "https://www.strata.sg/",
        logo: "https://www.strata.sg/images/strata-logo.png",
        sameAs: [
          "https://www.instagram.com/strata.sg/",
          "https://www.facebook.com/sgstrata",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+65 8188 8935",
            contactType: "customer service",
            areaServed: "SG",
            availableLanguage: "English",
            email: "hello@strata.sg",
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.strata.sg/contact#localbusiness",
        name: "Strata Interior Design",
        image: "https://www.strata.sg/images/strata-logo.png",
        url: "https://www.strata.sg/contact",
        telephone: "+65 8188 8935",
        email: "hello@strata.sg",
        address: {
          "@type": "PostalAddress",
          streetAddress: "540 Sims Avenue, Singapore 387603",
          addressLocality: "Singapore",
          postalCode: "387603",
          addressCountry: "SG",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 1.3168149117891819,
          longitude: 103.88960000688657,
        },
        priceRange: "$$",
        openingHours: "Mo-Fr 09:00-18:00",
        sameAs: [
          "https://www.instagram.com/strata.sg/",
          "https://www.facebook.com/sgstrata",
        ],
      },
    ],
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <ContactSection />
        <FAQSection />
      </div>
      <Footer />

      {/* ✅ Structured Data for SEO */}
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </main>
  )
}
