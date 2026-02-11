import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTAButtons() {
  return (
    <section className="py-6 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
    </section>
  )
}
