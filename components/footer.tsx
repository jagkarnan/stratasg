import Link from "next/link"
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook } from "lucide-react"

export function Footer() {
  const services = [
    "HDB Renovation",
    "Condo Renovation",
    "Commercial Renovation",
    "Office Renovation",
    "Carpentry Services",
    "Electrical Services",
  ]

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Reviews", href: "/reviews" },
    { name: "Interior Design Singapore", href: "/interior-design-singapore" },
    { name: "Renovation Contractor Singapore", href: "/renovation-contractor-singapore" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/contact#faq" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4 text-white">STRATA.SG</h2>
            <p className="text-primary-foreground/80 mb-6 text-sm">
              Singapore's trusted renovation partner. We deliver quality, on-time, and stress-free renovation services.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/sgstrata"
                className="text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/strata.sg/"
                className="text-primary-foreground/80 hover:text-secondary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href="/projects"
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80 text-sm">+65 8188 8935</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80 text-sm">+65 8188 8935</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-primary-foreground/80 text-sm">hello@strata.sg</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-secondary mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  540 Sims Avenue,
                  <br />
                  Singapore 387603
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} STRATA.SG. All Rights Reserved. | BCA Registered | HDB Licensed (HB-06-6178B)
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-primary-foreground/60 hover:text-secondary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
