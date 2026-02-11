"use client"

import Image from "next/image"
import { useState } from "react"

export function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
        )}
        <Image
          src="/images/hero-interior.jpg"
          alt="Modern biophilic interior design with curved staircase and natural elements"
          fill
          className={`object-cover transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          priority
          quality={90}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/20 to-transparent wave-pattern wave-bottom z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold text-balance bg-black/5 backdrop-blur-sm rounded-xl px-6 py-4 inline-block">
            <span className="text-white">Quality Renovations,</span> <span className="text-white">Built to Last.</span>
          </h1>
        </div>
      </div>
    </section>
  )
}
