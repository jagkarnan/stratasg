"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/lib/projects-data"

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  const filters = ["All", "Residential", "Commercial"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => new Set(prev).add(id))
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Our <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our completed renovation projects across Singapore, from HDB flats to luxury condos and commercial
            spaces.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-transparent hover:bg-primary hover:text-primary-foreground"
              }
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                  {!loadedImages.has(project.id) && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 animate-pulse">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </div>
                  )}
                  <Image
                    src={project.mainImage || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className={`object-cover group-hover:scale-105 transition-all duration-500 ${
                      loadedImages.has(project.id) ? "opacity-100" : "opacity-0"
                    }`}
                    quality={80}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                    onLoad={() => handleImageLoad(project.id)}
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="text-xs bg-black/50 text-white border-0">
                      {project.gallery.length} Photos
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{project.duration}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <p className="text-xs text-muted-foreground">📍 {project.location}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
