import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import Script from "next/script"
import FloatingWhatsApp from "@/components/floating-whatsapp"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Strata.SG - Singapore Renovation Company | HDB & Condo Specialists",
  description:
    "Professional renovation services in Singapore. From HDB to condos to commercial spaces - we deliver quality, on-time, and stress-free renovation solutions.",
  keywords:
    "renovation company Singapore, HDB renovation contractor Singapore, condo renovation Singapore, commercial renovation Singapore, office renovation Singapore",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Ads Global Site Tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17630860223"
        />
        <Script id="google-ads-base" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17630860223');
          `}
        </Script>

        {/* Outbound Click Conversion Tracker: WhatsApp, tel:, any external link */}
        <Script id="outbound-click-tracker" strategy="afterInteractive">
          {`
            document.addEventListener('click', function(e) {
              var el = e.target && (e.target.closest ? e.target.closest('a') : null);
              if (!el) return;
              var href = el.getAttribute('href') || '';
              var hostOk = typeof el.hostname === 'string';
              var isOutbound = hostOk && el.hostname !== window.location.hostname;
              var isWhatsApp = href.includes('wa.me') || href.includes('api.whatsapp.com');
              var isCall = href.startsWith('tel:');
              if (isOutbound || isWhatsApp || isCall) {
                if (typeof gtag === 'function') {
                  gtag('event', 'conversion', {
                    send_to: 'AW-17630860223/jOHWCKGV7KwbEL-nhtdB'
                  });
                }
              }
            });
          `}
        </Script>
      </head>
      <body className="bg-white">
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <FloatingWhatsApp />
        </Suspense>
      </body>
    </html>
  )
}
