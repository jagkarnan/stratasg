import dynamic from "next/dynamic"
import type { Metadata } from "next"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const ProjectsSection = dynamic(
  () => import("@/components/projects-section").then((mod) => ({ default: mod.ProjectsSection })),
  {
    loading: () => <div className="min-h-[800px] animate-pulse bg-muted" />,
  },
)

export const metadata: Metadata = {
  // ✅ SEO Title & Description
  title: "Full Service Interior Design for Stylish & Functional Spaces | Strata.sg",
  description:
    "Transform your home or office with expert full service interior design. Creative, functional, and tailored solutions for every space.",

  // ✅ Canonical URL
  alternates: {
    canonical: "https://www.strata.sg/projects",
  },

  // ✅ Open Graph (Facebook / LinkedIn)
  openGraph: {
    url: "https://www.strata.sg/projects",
    type: "website",
    title: "Full Service Interior Design for Stylish & Functional Spaces",
    description:
      "Transform your home or office with expert full service interior design. Creative, functional, and tailored solutions for every space.",
    images: [
      {
        url: "https://www.strata.sg/images/projects/punggol-hdb/cover.jpg",
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
    title: "Full Service Interior Design for Stylish & Functional Spaces",
    description:
      "Transform your home or office with expert full service interior design. Creative, functional, and tailored solutions for every space.",
    images: ["https://www.strata.sg/images/projects/punggol-hdb/cover.jpg"],
  },

  // ✅ Custom meta fields for missing tags
  other: {
    "title": "Full Service Interior Design for Stylish & Functional Spaces",
    "og:image": "https://www.strata.sg/images/projects/punggol-hdb/cover.jpg",
    "og:image:alt": "Interior Design Singapore – Strata.sg Renovation Experts",
    "twitter:image": "https://www.strata.sg/images/projects/punggol-hdb/cover.jpg",
    "twitter:image:alt": "Interior Design Singapore – Strata.sg Renovation Experts",
  },

  // ✅ Apple Icon
  icons: {
    apple: "https://www.strata.sg/images/projects/punggol-hdb/cover.jpg",
  },
}

export default function ProjectsPage() {
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
        "@id": "https://www.strata.sg/projects#localbusiness",
        name: "Strata Interior Design",
        image: "https://www.strata.sg/images/strata-logo.png",
        url: "https://www.strata.sg/projects",
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
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
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
        founder: {
          "@type": "Person",
          name: "Jag Karnan",
        },
        areaServed: "Singapore",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://www.strata.sg/projects",
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.strata.sg/projects#service",
        name: "Full Service Interior Design",
        provider: { "@id": "https://www.strata.sg/projects#localbusiness" },
        description:
          "Transform your home or office with expert full service interior design. Creative, functional, and tailored solutions for every space.",
        serviceType: [
          "Residential Interior Design",
          "Office Interior Design",
          "Commercial Interior Design",
          "Turnkey Interior Solutions",
          "Custom Furniture & Carpentry",
          "Retail Interior Design",
        ],
        audience: {
          "@type": "Audience",
          audienceType: ["Homeowners", "Businesses"],
        },
        areaServed: { "@type": "Place", name: "Singapore" },
        offers: {
          "@type": "Offer",
          price: "Request Quote",
          priceCurrency: "SGD",
          availability: "https://schema.org/InStock",
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
            name: "Projects",
            item: "https://www.strata.sg/projects/",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://www.strata.sg/projects/#webpage",
        url: "https://www.strata.sg/projects/",
        name: "Full Service Interior Design for Stylish & Functional Spaces | Strata.sg",
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
      <div className="pt-16">
        <ProjectsSection />
      </div>
      <Footer />

      {/* ✅ Schema JSON-LD */}
      <Script
        id="projects-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </main>
  )
}
