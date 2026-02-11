import dynamic from "next/dynamic"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import RenovationHero from "@/components/renovation-hero"

const RenovationContent = dynamic(() => import("@/components/renovation-content"), {
  loading: () => <div className="min-h-[1000px] animate-pulse bg-muted" />,
})

const RenovationForm = dynamic(() => import("@/components/renovation-form"), {
  loading: () => <div className="min-h-[600px] animate-pulse bg-muted" />,
})

export const metadata: Metadata = {
  title: "Renovation Contractor Singapore – Quality Renovations",
  description:
    "Looking for a reliable renovation contractor in Singapore? We deliver high-quality home and office renovation services tailored to your style and budget.",
  openGraph: {
    title: "Trusted Renovation Contractor Singapore",
    description:
      "Looking for a reliable renovation contractor in Singapore? We deliver high-quality home and office renovation services tailored to your style and budget.",
    url: "https://www.strata.sg/renovation-contractor-singapore/",
    siteName: "Strata.sg",
    images: [
      {
        url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/AwvXD01g6pTXBqOg/strata.sg-logo-latest-mk3vKM8KLliEqb9j.png",
        width: 375,
        height: 375,
        alt: "Strata.sg Logo",
      },
    ],
    locale: "en_SG",
    type: "website",
  },
  alternates: {
    canonical: "https://www.strata.sg/renovation-contractor-singapore/",
  },
}

export default function RenovationContractorPage() {
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
        "@id": "https://www.strata.sg/renovation-contractor-singapore/#localbusiness",
        name: "Strata Interior Design",
        image: "https://www.strata.sg/images/strata-logo.png",
        url: "https://www.strata.sg/renovation-contractor-singapore/",
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
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "14:00",
          },
        ],
        founder: { "@type": "Person", name: "Jag Karnan" },
        areaServed: { "@type": "Place", name: "Singapore" },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://www.strata.sg/renovation-contractor-singapore/",
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.strata.sg/renovation-contractor-singapore/#service",
        name: "Renovation Contractor Singapore",
        provider: {
          "@id": "https://www.strata.sg/renovation-contractor-singapore/#localbusiness",
        },
        description:
          "Looking for a reliable renovation contractor in Singapore? We deliver high-quality home and office renovation services tailored to your style and budget.",
        serviceType: [
          "Residential Interior Design",
          "Office Interior Design",
          "Commercial Interior Design",
          "Turnkey Interior Solutions",
          "Custom Furniture & Carpentry",
          "Retail Interior Design",
        ],
        audience: { "@type": "Audience", audienceType: ["Homeowners", "Businesses"] },
        areaServed: { "@type": "Place", name: "Singapore" },
        offers: {
          "@type": "Offer",
          price: "Request Quote",
          priceCurrency: "SGD",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.strata.sg/renovation-contractor-singapore/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How long does a renovation project typically take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The timeline depends on the size and complexity of the project. Most HDB or condo renovations take 6–12 weeks, while larger commercial or office projects may require 12–20 weeks.",
            },
          },
          {
            "@type": "Question",
            name: "How much does a renovation cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Renovation costs vary depending on the project type, size, materials, and finishes. After an initial consultation, we provide a transparent, detailed quotation tailored to your budget and requirements.",
            },
          },
          {
            "@type": "Question",
            name: "Can you help with permits and regulatory requirements?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. We manage all approvals with HDB, BCA, and condo management, ensuring your project fully complies with Singapore’s building regulations and safety standards.",
            },
          },
          {
            "@type": "Question",
            name: "Can you customize furniture and carpentry?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Our skilled carpenters craft custom furniture, built-in storage, and cabinetry designed to fit your space perfectly while maintaining style and durability.",
            },
          },
          {
            "@type": "Question",
            name: "Do you use eco-friendly and durable materials?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We incorporate premium, long-lasting materials and offer sustainable solutions such as energy-efficient lighting and space-saving designs to create environmentally responsible spaces.",
            },
          },
          {
            "@type": "Question",
            name: "Can you handle both small and large projects?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. We manage everything from single-room makeovers to full-home, office, or commercial renovations, ensuring consistent quality and professionalism at every scale.",
            },
          },
          {
            "@type": "Question",
            name: "What makes Strata.sg different from other renovation contractors?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We provide a transparent, customer-centric process, combining design expertise, high-quality craftsmanship, and clear communication from consultation to aftercare. Every project is tailored to your lifestyle, brand, and budget.",
            },
          },
        ],
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
            name: "Renovation Contractor Singapore",
            item: "https://www.strata.sg/renovation-contractor-singapore/",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://www.strata.sg/renovation-contractor-singapore/#webpage",
        url: "https://www.strata.sg/renovation-contractor-singapore/",
        name: "Strata.sg - Renovation Contractor Singapore",
        isPartOf: {
          "@id": "https://www.strata.sg/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.strata.sg/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  }

  return (
    <main className="min-h-screen">
      <Header />
      <RenovationHero />
      <RenovationContent />
      {/* <RenovationForm /> */}
      <Footer />
      {/* ✅ Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </main>
  )
}
