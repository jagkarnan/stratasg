"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import Link from "next/link"

interface Project {
  id: number
  slug: string
  title: string
  category: string
  location: string
  duration: string
  designer: string
  style: string
  mainImage: string
  gallery: string[]
  description: string
  fullDescription?: string
}

interface ProjectGalleryProps {
  project: Project
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  const openImageOverlay = (index: number) => {
    setSelectedImageIndex(index)
  }

  const closeImageOverlay = () => {
    setSelectedImageIndex(null)
  }

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link href="/projects" className="text-sm text-muted-foreground hover:text-primary mb-4 inline-block">
            ← Back to Projects
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{project.title}</h1>
          <p className="text-lg text-primary mb-4">Designed by {project.designer}</p>
          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.style}</span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {project.gallery.map((image, index) => (
              <div
                key={index}
                className="relative cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => openImageOverlay(index)}
              >
                <div className="relative overflow-hidden rounded-lg bg-muted aspect-square">
                  {!loadedImages.has(index) && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 animate-pulse">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </div>
                  )}
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className={`object-cover transition-all duration-500 ${
                      loadedImages.has(index) ? "opacity-100" : "opacity-0"
                    }`}
                    quality={75}
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    loading={index < 15 ? "eager" : "lazy"}
                    onLoad={() => handleImageLoad(index)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-muted-foreground">{project.description}</p>
        </div>

        {/* Project Details */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Location:</p>
              <p className="text-muted-foreground">{project.location}</p>
            </div>
            <div>
              <p className="font-semibold">Duration:</p>
              <p className="text-muted-foreground">{project.duration}</p>
            </div>
            <div>
              <p className="font-semibold">Style:</p>
              <p className="text-muted-foreground">{project.style}</p>
            </div>
          </div>
        </div>
      </div>

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeImageOverlay}
        >
          <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center">
            {/* Expanded image */}
            <div className="relative w-full h-full max-w-3xl max-h-[80vh]">
              <Image
                src={project.gallery[selectedImageIndex] || "/placeholder.svg"}
                alt={`${project.title} - Image ${selectedImageIndex + 1}`}
                fill
                className="object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />

              <Button
                variant="secondary"
                size="icon"
                onClick={closeImageOverlay}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white border-0 h-10 w-10 z-10"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Image counter */}
            <div className="absolute bottom-4 right-4">
              <Badge className="bg-black/50 text-white border-0">
                {selectedImageIndex + 1} / {project.gallery.length}
              </Badge>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
