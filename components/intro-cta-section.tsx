import { CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function IntroCTASection() {
  const trustFactors = ["Transparent Pricing", "On-Time Delivery", "Quality Materials", "500+ Happy Clients"]

  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground text-pretty">
            From Residential to Commercial Spaces – We deliver quality, on-time, and stress-free renovation services in
            Singapore.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {trustFactors.map((factor, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-foreground">
                <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-sm md:text-base font-medium">{factor}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-4">
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4 bg-transparent"
              asChild
            >
              <a
                href="https://wa.me/6581888935?text=Strata.sg%20Website%20-%20I%20am%20interested%20in%20your%20renovation%20services.%20Please%20contact%20me."
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
