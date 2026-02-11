import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote } from "lucide-react"

export function ReviewsSection() {
  const testimonials = [
    {
      name: "Simbul Zafer",
      project: "HDB 4-Room Renovation",
      rating: 5,
      review:
        "It was amazing to have had Farhana help us style our new place. She has impeccable taste and an eye for pieces that fit so well together! She was with us right through the renovation phase, choosing the colour palette and design details to styling and accessorising the place. A big shout out to Barbara too who took to the reigns during unforeseen circumstances. A very professional and talented team indeed! We are in love with our house :)",
      googleRating: "5.0 Google Rating",
      link: "Show me their home",
    },
    {
      name: "Candy and Nick",
      project: "Condo Renovation - Marine Parade",
      rating: 5,
      review:
        "We worked with Barbara & Niamh on our first ever renovation project and couldn't be happier. From the start we knew they were the right team to work with as they were receptive, enthusiastic and practical. They perfectly captured my very long list of requirements that I've been dreaming up for 10+ years. I am a bit of a believer that you really need to like like your Interior Designer team as you talk to them almost every day for months and the entire Make Room team were a pleasure to work with throughout the entire process.",
      googleRating: "5.0 Google Rating",
      link: "Show me their home",
    },
    {
      name: "Sjoerd Kamp",
      project: "Executive Condo Renovation",
      rating: 5,
      review:
        "We selected Make Room for a major renovation project for our new apartment, including interior design and styling. We truly enjoyed working with the Make Room team, and we are delighted with the result. They really understood what we wanted, provided a lot of options, came with relevant new ideas and suggestions, and managed to source high-quality materials for reasonable prices from all over the world. The overall project management was also tight, with amazing attention to detail, and great communication throughout the project. We'd certainly use them again, and have already been recommending them to several other people!",
      googleRating: "5.0 Google Rating",
      link: "Check out their beautiful space",
    },
  ]

  const shortReviews = [
    {
      name: "Jennifer L.",
      review: "Excellent workmanship and professional service. Completed our HDB renovation on time and within budget.",
      rating: 5,
    },
    {
      name: "Michael T.",
      review:
        "The team was responsive and delivered exactly what we envisioned. Highly recommend for condo renovations.",
      rating: 5,
    },
    {
      name: "Sarah W.",
      review: "Outstanding attention to detail. Our office renovation exceeded expectations in every way.",
      rating: 5,
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <section className="py-20 bg-muted/30 wave-bottom">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take our word for it. Here's what our satisfied clients have to say about their renovation
            experience with Strata.SG.
          </p>
        </div>

        {/* Featured Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">{renderStars(testimonial.rating)}</div>
                  <span className="text-sm text-muted-foreground">{testimonial.googleRating}</span>
                </div>
                <Quote className="h-8 w-8 text-secondary mb-4" />
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{testimonial.review}</p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{testimonial.project}</p>
                  <Button variant="link" className="p-0 h-auto text-secondary hover:text-secondary/80">
                    {testimonial.link}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Short Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {shortReviews.map((review, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center gap-1 mb-3">{renderStars(review.rating)}</div>
              <p className="text-sm text-muted-foreground mb-4">"{review.review}"</p>
              <p className="font-medium text-sm">- {review.name}</p>
            </Card>
          ))}
        </div>

        {/* Google Reviews Embed Placeholder */}
        {/* <div className="text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">See More Reviews on Google</h3>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center gap-1">{renderStars(5)}</div>
              <span className="text-lg font-semibold">4.9/5</span>
              <span className="text-muted-foreground">(127 reviews)</span>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">View All Google Reviews</Button>
          </div>
        </div> */}
      </div>
    </section>
  )
}
