import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Hammer, Zap, Wrench, Paintbrush, HardHat, Home } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Renovation",
      description: "Complete home and office renovations tailored to your needs and budget.",
    },
    {
      icon: Hammer,
      title: "Carpentry",
      description: "Custom carpentry work including built-in wardrobes, kitchen cabinets, and more.",
    },
    {
      icon: Zap,
      title: "Electrical",
      description: "Professional electrical installations and repairs by licensed electricians.",
    },
    {
      icon: Wrench,
      title: "Plumbing",
      description: "Expert plumbing services for bathrooms, kitchens, and water systems.",
    },
    {
      icon: Paintbrush,
      title: "Painting",
      description: "Interior and exterior painting with premium quality paints and finishes.",
    },
    {
      icon: HardHat,
      title: "Hacking & Reinstatement",
      description: "Safe demolition and restoration services with proper permits and compliance.",
    },
  ]

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Our <span className="text-primary">Renovation Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From concept to completion, we provide comprehensive renovation solutions for residential and commercial
            properties across Singapore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-secondary/10 rounded-full w-fit group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
