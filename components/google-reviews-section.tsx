"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

export function GoogleReviewsSection() {
  const allReviews = [
    {
      name: "Thirumalai Srinivasan",
      rating: 5,
      text: "My office renovation in Singapore was managed by strata.sg. The team was responsive and professional. They gave me modern interior design suggestions that made sense. Glad I found them while looking for a renovation contractor near me.",
      date: "a week ago",
    },
    {
      name: "liong patrick",
      rating: 5,
      text: "Attentive to needs and requirement",
      date: "a week ago",
    },
    {
      name: "Vijaya Ramanathan K",
      rating: 5,
      text: "I got some renovation work done. Jag was very professional and took the job very seriously and ensured his team got the work completed on time and quality of work is very good. Excellent service.",
      date: "a week ago",
    },
    {
      name: "Jeeva Jasper Arvin",
      rating: 5,
      text: "Had a great experience with him at strata.sg. He's genuine, professional, and always ready to guide clearly. Highly recommend if you want someone you can trust",
      date: "a week ago",
    },
    {
      name: "Vishal Khattri",
      rating: 5,
      text: "I had an outstanding experience working with Strata.sg and Jag Karnan for the renovation of my condo unit. The team was incredibly efficient, working tirelessly day and night to meet a tight deadline without compromising on quality. The results exceeded my expectations — the workmanship was fantastic, attention to detail was spot on, and everything was completed at a very reasonable cost. What impressed me most was their professionalism, responsiveness, and commitment to delivering exactly what I envisioned. I would highly recommend them to anyone in Singapore looking to renovate their unit. Truly a reliable and top-notch renovation contractor!",
      date: "3 weeks ago",
    },
    {
      name: "Chong Wei Ang",
      rating: 5,
      text: "I engaged strata.sg for home renovation in Singapore. They were easy to work with and kept me updated. Their premium interior design touches gave my space a better look. Felt comfortable dealing with their Sims Avenue office.",
      date: "2 days ago",
    },
  ]

  const [displayedReviews, setDisplayedReviews] = useState<typeof allReviews>([])

  useEffect(() => {
    // Shuffle reviews randomly on each page load
    const shuffled = [...allReviews].sort(() => Math.random() - 0.5)
    // Display 6 random reviews
    setDisplayedReviews(shuffled.slice(0, 6))
  }, [])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            What Our <span className="text-primary">Customers Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don't just take our word for it. Here's what our satisfied customers have to say about our renovation
            services.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">{renderStars(5)}</div>
            <span className="text-sm text-muted-foreground">5.0 on Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((review, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">{renderStars(review.rating)}</div>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-secondary">
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">Google Review</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://maps.app.goo.gl/18ZSvwifqYYEZKm5A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            View All Reviews on Google
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
