"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"

export function TeamSection() {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  const teamMembers = [
    {
      name: "Jag Karnan",
      role: "Founder & Director",
      experience: "15+ Years",
      image: "/images/jag-karnan.png",
      bio: "Jag founded Strata.sg to transform Singapore's renovation scene with quality, trust, and service from the heart.",
    },
    {
      name: "Sarah Chen",
      role: "Lead Interior Designer",
      experience: "10+ years",
      image: "/images/sarah-chen-new.png",
      bio: "Sarah brings creative vision to every project, specializing in modern Residential and Commercial interior transformations. She is the force behind the inspiring designs from us.",
    },
    {
      name: "Ram Devraj",
      role: "Senior Project Manager",
      experience: "12+ years",
      image: "/images/ram-devraj.png",
      bio: "Ram ensures every project runs smoothly from start to finish, coordinating teams, maintaining quality standards, and making sure every client is fully satisfied and happy with the results.",
    },
    {
      name: "Jennifer Wong",
      role: "Client Relations Manager",
      experience: "8+ years",
      image: "/images/jennifer-wong-latest.png",
      bio: "Jennifer is your main point of contact, ensuring clear communication and exceptional customer service throughout your renovation journey.",
    },
  ]

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index))
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Meet Our <span className="text-primary">Expert Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our experienced professionals are dedicated to delivering exceptional renovation results for every client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <div className="aspect-square w-32 relative rounded-full overflow-hidden bg-gray-200">
                    {!loadedImages.has(index) && (
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-full" />
                    )}
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className={`object-cover transition-opacity duration-500 ${
                        loadedImages.has(index) ? "opacity-100" : "opacity-0"
                      }`}
                      quality={85}
                      onLoad={() => handleImageLoad(index)}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-secondary font-medium">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.experience}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
