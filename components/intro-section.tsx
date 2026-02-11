import { CheckCircle } from "lucide-react"

export function IntroSection() {
  const trustFactors = ["Transparent Pricing", "On-Time Delivery", "Quality Materials", "500+ Happy Clients"]

  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground text-pretty">
            From Residential to Commercial Spaces – We deliver quality, on-time, and stress-free renovation services in
            Singapore.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustFactors.map((factor, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-foreground">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-sm md:text-base font-medium">{factor}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
