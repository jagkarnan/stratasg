import { Header } from "@/components/header"
import { GoogleReviewsSection } from "@/components/google-reviews-section"
import { Footer } from "@/components/footer"
import Script from "next/script"
import type { Metadata } from "next"

export const metadata: Metadata = {
  // ✅ SEO Title & Description
  title: "Singapore Contractors – Strata Trusted Experts",
  description:
    "Strata offers trusted Singapore contractors for residential & commercial projects, delivering quality workmanship and timely, professional service.",

  // ✅ Canonical URL
  alternates: {
    canonical: "https://www.strata.sg/reviews",
  },

  // ✅ Open Graph (Facebook / LinkedIn)
  openGraph: {
    url: "https://www.strata.sg/reviews",
    type: "website",
    title: "Singapore Contractors – Strata Trusted Experts",
    description:
      "Strata offers trusted Singapore contractors for residential & commercial projects, delivering quality workmanship and timely, professional service.",
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
    title: "Singapore Contractors – Strata Trusted Experts",
    description:
      "Strata offers trusted Singapore contractors for residential & commercial projects, delivering quality workmanship and timely, professional service.",
    images: ["https://www.strata.sg/images/strata-logo.png"],
  },

  // ✅ Extra Meta Fields for Crawlers
  other: {
    "title": "Singapore Contractors – Strata Trusted Experts",
    "og:image": "https://www.strata.sg/images/strata-logo.png",
    "og:image:alt": "Interior Design Singapore – Strata.sg Renovation Experts",
    "twitter:image": "https://www.strata.sg/images/strata-logo.png",
    "twitter:image:alt": "Interior Design Singapore – Strata.sg Renovation Experts",
  },

  // ✅ Apple Touch Icon
  icons: {
    apple: "https://www.strata.sg/images/strata-logo.png",
  },
}

export default function ReviewsPage() {
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
        "@id": "https://www.strata.sg/reviews#localbusiness",
        name: "Strata Interior Design",
        image: "https://www.strata.sg/images/strata-logo.png",
        url: "https://www.strata.sg/reviews",
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
        founder: { "@type": "Person", name: "Jag Karnan" },
        areaServed: "Singapore",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://www.strata.sg/reviews",
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.strata.sg/reviews#service",
        name: "Renovation Contractor Singapore",
        provider: { "@id": "https://www.strata.sg/reviews#localbusiness" },
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
            name: "Renovation Contractor Singapore",
            item: "https://www.strata.sg/reviews",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://www.strata.sg/reviews/#webpage",
        url: "https://www.strata.sg/reviews",
        name: "Singapore Contractors – Strata Trusted Experts",
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
        <GoogleReviewsSection />
      </div>
      <Footer />

      {/* ✅ JSON-LD Schema for SEO */}
      <Script
        id="reviews-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </main>
  )
}
