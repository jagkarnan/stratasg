import dynamic from "next/dynamic"
import type { Metadata } from "next"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const AboutSection = dynamic(
  () => import("@/components/about-section").then((mod) => ({ default: mod.AboutSection })),
  {
    loading: () => <div className="min-h-[500px] animate-pulse bg-muted" />,
  },
)

const TeamSection = dynamic(() => import("@/components/team-section").then((mod) => ({ default: mod.TeamSection })), {
  loading: () => <div className="min-h-[600px] animate-pulse bg-muted" />,
})

export const metadata: Metadata = {
  // ✅ SEO Title & Description
  title: "Renovation Company Singapore – Quality Renovations by Strata",
  description:
    "Strata is a leading renovation company in Singapore, offering expert home & office renovation services with quality workmanship and timely delivery.",

  // ✅ Canonical URL
  alternates: {
    canonical: "https://www.strata.sg/about",
  },

  // ✅ Open Graph (Facebook / LinkedIn)
  openGraph: {
    url: "https://www.strata.sg/about-stratasg",
    type: "website",
    title: "Renovation Company Singapore | Strata Experts",
    description:
      "Strata is a leading renovation company in Singapore, offering expert home & office renovation services with quality workmanship and timely delivery.",
    images: [
      {
        url: "https://assets.zyrosite.com/AwvXD01g6pTXBqOg/resi-8-AGB2PovoZ7tJGZqp.jpeg",
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
    title: "Renovation Company Singapore | Strata Experts",
    description:
      "Strata is a leading renovation company in Singapore, offering expert home & office renovation services with quality workmanship and timely delivery.",
    images: [
      "https://assets.zyrosite.com/AwvXD01g6pTXBqOg/resi-13-AQExaveevauZvG1L.jpeg",
    ],
  },

  // ✅ Custom meta fields for missing tags
  other: {
    "title": "Renovation Company Singapore | Strata Experts",
    "og:image": "https://assets.zyrosite.com/AwvXD01g6pTXBqOg/resi-8-AGB2PovoZ7tJGZqp.jpeg",
    "og:image:alt": "Interior Design Singapore – Strata.sg Renovation Experts",
    "twitter:image": "https://assets.zyrosite.com/AwvXD01g6pTXBqOg/resi-13-AQExaveevauZvG1L.jpeg",
    "twitter:image:alt": "Interior Design Singapore – Strata.sg Renovation Experts",
  },
}

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.strata.sg/about/#organization",
        name: "Strata.sg",
        url: "https://www.strata.sg/about",
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
        employee: [
          {
            "@type": "Person",
            name: "Jag Karnan",
            jobTitle: "Founder & Director",
            description:
              "Jag founded Strata.sg to transform Singapore's renovation scene with quality, trust, and service from the heart.",
            worksFor: { "@id": "https://www.strata.sg/about/#organization" },
          },
          {
            "@type": "Person",
            name: "Sarah Chen",
            jobTitle: "Lead Interior Designer",
            description:
              "Sarah brings creative vision to every project, specializing in modern Residential and Commercial interior transformations.",
            worksFor: { "@id": "https://www.strata.sg/about/#organization" },
          },
          {
            "@type": "Person",
            name: "Ram Devraj",
            jobTitle: "Senior Project Manager",
            description:
              "Ram ensures every project runs smoothly from start to finish, coordinating teams, maintaining quality standards, and ensuring client satisfaction.",
            worksFor: { "@id": "https://www.strata.sg/about/#organization" },
          },
          {
            "@type": "Person",
            name: "Jennifer Wong",
            jobTitle: "Client Relations Manager",
            description:
              "Jennifer is the main point of contact, ensuring clear communication and exceptional customer service throughout every renovation journey.",
            worksFor: { "@id": "https://www.strata.sg/about/#organization" },
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.strata.sg/about#localbusiness",
        name: "Strata Interior Design",
        image: "https://www.strata.sg/images/strata-logo.png",
        url: "https://www.strata.sg/about",
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
          "@id": "https://www.strata.sg/about",
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.strata.sg/services#hdb-renovation",
        name: "HDB Renovation",
        provider: { "@id": "https://www.strata.sg/about#localbusiness" },
        areaServed: { "@type": "Place", name: "Singapore" },
        offers: {
          "@type": "Offer",
          url: "https://www.strata.sg/hdb-renovation",
          price: "Request Quote",
          priceCurrency: "SGD",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.strata.sg/services#condo-renovation",
        name: "Condo Renovation",
        provider: { "@id": "https://www.strata.sg/about#localbusiness" },
        areaServed: { "@type": "Place", name: "Singapore" },
        offers: {
          "@type": "Offer",
          url: "https://www.strata.sg/condo-renovation",
          price: "Request Quote",
          priceCurrency: "SGD",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.strata.sg/projects#commercial-renovation",
        name: "Commercial Renovation",
        provider: { "@id": "https://www.strata.sg/about#localbusiness" },
        areaServed: { "@type": "Place", name: "Singapore" },
        offers: {
          "@type": "Offer",
          url: "https://www.strata.sg/commercial-renovation",
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
            name: "About Us",
            item: "https://www.strata.sg/about",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://www.strata.sg/about/#webpage",
        url: "https://www.strata.sg/about",
        name: "About Strata.sg - Interior Design & Renovation Experts in Singapore",
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
        <AboutSection />
        <TeamSection />
      </div>
      <Footer />

      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </main>
  )
}
