"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/strata-logo.png" alt="Strata.SG Logo" width={200} height={66} className="h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              size="sm"
              className="flex items-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              <a
                href="https://wa.me/6581888935?text=Strata.sg%20Website%20-%20I%20am%20interested%20in%20your%20renovation%20services.%20Please%20contact%20me."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 justify-center bg-transparent"
                >
                  <a href="tel:6581888935">
                    <Phone className="h-4 w-4" />
                    Call Us
                  </a>
                </Button>
                <Button
                  asChild
                  size="sm"
                  className="flex items-center gap-2 justify-center bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  <a
                    href="https://wa.me/6581888935?text=Strata.sg%20Website%20-%20I%20am%20interested%20in%20your%20renovation%20services.%20Please%20contact%20me."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
