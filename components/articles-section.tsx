import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"

export function ArticlesSection() {
  const articles = [
    {
      id: 1,
      title: "5 Common Renovation Mistakes to Avoid in Singapore",
      excerpt:
        "Learn from the most frequent renovation pitfalls that Singapore homeowners encounter and how to avoid them for a smooth renovation experience.",
      category: "Tips & Guides",
      readTime: "5 min read",
      publishDate: "Dec 15, 2024",
      image: "/placeholder.svg?height=200&width=400",
      slug: "common-renovation-mistakes-singapore",
    },
    {
      id: 2,
      title: "HDB Renovation Permit Rules Explained (2025 Update)",
      excerpt:
        "Complete guide to HDB renovation permits, what you need to know about the latest regulations, and how to ensure your renovation is compliant.",
      category: "Regulations",
      readTime: "8 min read",
      publishDate: "Dec 10, 2024",
      image: "/placeholder.svg?height=200&width=400",
      slug: "hdb-renovation-permit-rules-2025",
    },
    {
      id: 3,
      title: "How Much Does a Condo Renovation Cost in Singapore?",
      excerpt:
        "Detailed breakdown of condo renovation costs in Singapore, including factors that affect pricing and tips to maximize your renovation budget.",
      category: "Cost Guide",
      readTime: "6 min read",
      publishDate: "Dec 5, 2024",
      image: "/placeholder.svg?height=200&width=400",
      slug: "condo-renovation-cost-singapore",
    },
    {
      id: 4,
      title: "Top Interior Design Trends for Singapore Homes in 2025",
      excerpt:
        "Discover the latest interior design trends that are perfect for Singapore's climate and lifestyle, from sustainable materials to smart home integration.",
      category: "Design Trends",
      readTime: "7 min read",
      publishDate: "Nov 28, 2024",
      image: "/placeholder.svg?height=200&width=400",
      slug: "interior-design-trends-singapore-2025",
    },
    {
      id: 5,
      title: "Space-Saving Solutions for Small HDB Flats",
      excerpt:
        "Maximize your HDB flat's potential with clever space-saving solutions and storage ideas that make small spaces feel larger and more functional.",
      category: "Space Planning",
      readTime: "5 min read",
      publishDate: "Nov 20, 2024",
      image: "/placeholder.svg?height=200&width=400",
      slug: "space-saving-solutions-hdb-flats",
    },
    {
      id: 6,
      title: "Choosing the Right Contractor for Your Renovation",
      excerpt:
        "Essential tips for selecting a reliable renovation contractor in Singapore, including red flags to watch out for and questions to ask.",
      category: "Contractor Guide",
      readTime: "6 min read",
      publishDate: "Nov 15, 2024",
      image: "/placeholder.svg?height=200&width=400",
      slug: "choosing-right-renovation-contractor",
    },
  ]

  const categories = ["All", "Tips & Guides", "Regulations", "Cost Guide", "Design Trends", "Space Planning"]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Renovation <span className="text-primary">Tips & Guides</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Stay informed with our expert insights, renovation tips, and the latest updates on Singapore's building
            regulations.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-[16/10] lg:aspect-auto relative">
                <Image
                  src={articles[0].image || "/placeholder.svg"}
                  alt={articles[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="secondary">{articles[0].category}</Badge>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {articles[0].publishDate}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {articles[0].readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-balance">{articles[0].title}</h3>
                <p className="text-muted-foreground mb-6 text-pretty">{articles[0].excerpt}</p>
                <Button className="w-fit bg-primary text-primary-foreground hover:bg-primary/90">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article) => (
            <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-3">
                  <Badge variant="outline" className="text-xs">
                    {article.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {article.publishDate}
                  </div>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors text-balance">
                  {article.title}
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 text-pretty">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </div>
                  <Button variant="link" className="p-0 h-auto text-secondary hover:text-secondary/80">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="bg-transparent hover:bg-primary hover:text-primary-foreground">
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
