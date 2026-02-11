import { Badge } from "@/components/ui/badge"
import { Shield, Clock, Award, Users } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const certifications = ["HDB-Licensed", "BCA Certified", "15+ Years Experience", "500+ Projects Completed"]

  const stats = [
    { icon: Shield, label: "Licensed", value: "100%" },
    { icon: Clock, label: "On-Time Completion", value: "98%" },
    { icon: Award, label: "Client Satisfaction", value: "99%" },
    { icon: Users, label: "Happy Clients", value: "500+" },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              A Singapore <span className="text-primary">Renovation Partner</span> You Can Trust
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-pretty">
              With over 15 years of experience, we specialize in transforming HDBs, condos, and offices into safe,
              stylish, and lasting spaces. As an HDB-licensed and BCA-certified contractor, we combine compliance with
              workmanship to deliver renovations you can trust.
            </p>
            <p className="text-muted-foreground mb-8">
              Our team of skilled designers, workmen, and project managers work hand-in-hand to bring your vision to
              life. From concept to completion, we focus on quality, transparency, and your satisfaction—ensuring every
              project meets the highest standards in design, safety, and durability.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2 mb-8">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src="/images/renovation-bar-interior.jpg"
                alt="Modern bar renovation showcasing Strata.SG quality work"
                fill
                className="object-cover"
              />
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6 border">
              {/* Stats content */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="h-6 w-6 text-secondary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
