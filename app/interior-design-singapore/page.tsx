import dynamic from "next/dynamic"
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InteriorDesignHero } from "@/components/interior-design-hero"

const InteriorDesignContent = dynamic(
  () => import("@/components/interior-design-content").then((mod) => ({ default: mod.InteriorDesignContent })),
  { loading: () => <div className="min-h-[1000px] animate-pulse bg-muted" /> }
)

const InteriorDesignForm = dynamic(
  () => import("@/components/interior-design-form").then((mod) => ({ default: mod.InteriorDesignForm })),
  { loading: () => <div className="min-h-[600px] animate-pulse bg-muted" /> }
)

export const metadata = {
  title: "Interior Design Singapore | Modern, Affordable & Professional Solutions",
  description:
    "Transform your home or office with expert Interior Design in Singapore. Stylish, functional, and budget-friendly interiors.",
  keywords:
    "renovation company Singapore, HDB renovation contractor Singapore, condo renovation Singapore, commercial renovation Singapore, office renovation Singapore",
  alternates: {
    canonical: "https://www.strata.sg/interior-design-singapore/",
  },
  openGraph: {
    title: "Interior Design Singapore Experts | Transform Your Space",
    description:
      "Transform your home or office with expert Interior Design in Singapore. Stylish, functional, and budget-friendly interiors.",
    url: "https://www.strata.sg/interior-design-singapore/",
    siteName: "Strata",
    type: "website",
    images: [
      {
        url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/AwvXD01g6pTXBqOg/strata.sg-logo-latest-mk3vKM8KLliEqb9j.png",
        width: 375,
        height: 375,
        alt: "Strata.sg Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Singapore Experts | Transform Your Space",
    description:
      "Transform your home or office with expert Interior Design in Singapore. Stylish, functional, and budget-friendly interiors.",
    images: [
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop,q=95/AwvXD01g6pTXBqOg/strata.sg-logo-latest-mk3vKM8KLliEqb9j.png",
    ],
  },
  other: {
    "language": "English",
    "author": "Strata",
    "geo.region": "SG",
    "geo.placename": "Singapore",
  },
}

export default function InteriorDesignPage() {
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
        "@id": "https://www.strata.sg/interior-design-singapore/#localbusiness",
        name: "Strata Interior Design",
        image: "https://www.strata.sg/images/strata-logo.png",
        url: "https://www.strata.sg/interior-design-singapore/",
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
          "@id": "https://www.strata.sg/interior-design-singapore/",
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.strata.sg/interior-design-singapore/#service",
        name: "Interior Design Services in Singapore",
        provider: {
          "@id": "https://www.strata.sg/interior-design-singapore/#localbusiness",
        },
        description:
          "Transform your home or office with expert Interior Design in Singapore. Stylish, functional, and budget-friendly interiors.",
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
        "@id": "https://www.strata.sg/interior-design-singapore/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the cost of interior design in Singapore?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The cost depends on the size, style, and scope of your project. After an initial consultation, we provide a transparent quotation tailored to your requirements and budget.",
            },
          },
          {
            "@type": "Question",
            name: "How long does a project take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For most apartments, the renovation timeline is approximately 6–10 weeks. Larger or more complex projects may require 12–20 weeks.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer design-only packages?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We offer flexible design consultancy packages where we handle the creative planning and design while your contractors manage the execution.",
            },
          },
          {
            "@type": "Question",
            name: "Can you help with permits or regulatory requirements?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We take care of all necessary approvals with HDB, BCA, or your condo management and ensure your renovation complies with Singapore’s building regulations.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer sustainable or eco-friendly design solutions?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We incorporate eco-friendly materials and energy-efficient designs to create sustainable, stylish interiors.",
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
            name: "Interior Design Singapore",
            item: "https://www.strata.sg/interior-design-singapore/",
          },
        ],
      },
      {
        "@type": "WebPage",
        "@id": "https://www.strata.sg/interior-design-singapore/#webpage",
        url: "https://www.strata.sg/interior-design-singapore/",
        name: "Strata.sg - Interior Design Singapore",
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
  };


  return (
    <main className="min-h-screen">
      {/* Inject JSON-LD Schema */}
      <Script
        id="schema-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Header />
      <InteriorDesignHero />
      <InteriorDesignContent />
      {/* <InteriorDesignForm /> */}
      <Footer />
    </main>
  )
}
