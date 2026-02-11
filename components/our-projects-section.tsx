"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230107_113909.jpg-qLi5WdPAdN7Azp1a31wzG3h5x4t3Fg.jpeg",
    alt: "Creative storage solution with golden and wood-grain panels featuring decorative square cutouts",
  },
  {
    id: 2,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20221215_185305.jpg-U2P5eegR006XFNRNwRtgu7q0fVyjZB.jpeg",
    alt: "Luxurious bathroom with brown textured wall tiles, white marble tiles, and jetted bathtub",
  },
  {
    id: 3,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20221215_185247.jpg-MSKs0pV7xh6qmsuVUMLg1VRCdZnuGg.jpeg",
    alt: "Modern bedroom with built-in wardrobe featuring mirrored sliding doors and wooden flooring",
  },
  {
    id: 4,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20221207_074615.jpg-7ofA2yze46p6uYd8qDQBMGj8oN850o.jpeg",
    alt: "Contemporary kitchen with white cabinets, black countertops, and large windows",
  },
  {
    id: 5,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230107_121052.jpg-RJdLf7QEYcyYBU7IhZ8Iog5mn7IBtL.jpeg",
    alt: "Open-plan dining and living area with white dining table and wooden accents",
  },
  {
    id: 6,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20221215_185255.jpg-5XfA3MHqBvYJ573v1BtKez53bdGPvX.jpeg",
    alt: "Spacious bedroom with large windows, wooden flooring, and built-in window seating",
  },
  {
    id: 7,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20221215_185208.jpg-sJvHkjJo6U7RZuH3IACSYVg2Yi2ftP.jpeg",
    alt: "Modern bathroom with glass shower enclosure, floating vanity, and dark floor tiles",
  },
  {
    id: 8,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20221215_184900.jpg-nK66XSqUzbB2BS1Hl8gY3gHgePEwJF.jpeg",
    alt: "Elegant living area with marble-like flooring and open kitchen concept",
  },
  {
    id: 9,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230107_120701.jpg-cn2dSB6fde69lHFaZ1oMiY481YZj4W.jpeg",
    alt: "Compact kitchen with white upper cabinets, burgundy lower cabinets, and marble flooring",
  },
  {
    id: 10,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230107_113918.jpg-JJaL0x5corSiQHduW0OtSPj36k02ls.jpeg",
    alt: "Close-up view of decorative storage panels with gold and wood grain pattern",
  },
  {
    id: 11,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20240824_115756277.jpg-UmmW0Tdzb7RXwBuVAwTSvGDwTE2vRd.jpeg",
    alt: "Clean bedroom with gray built-in wardrobes, white walls, and polished floors",
  },
  {
    id: 12,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230524_181601.jpg-GbCuIEQfJLgKcjOwYewAxxWM0YbcKZ.jpeg",
    alt: "Construction renovation in progress showing metal framework and HVAC installation",
  },
  {
    id: 13,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230107_121113.jpg-RWxLxdMt8Izu5u6kICvJgpSlB6PwQ9.jpeg",
    alt: "Elegant dining area with modern wave-pattern pendant light and wooden accents",
  },
  {
    id: 14,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230324_084409.jpg-8JC5fKh8B2MTLJGhHXVW9AwT0DGw4O.jpeg",
    alt: "Hallway entryway with white built-in storage, wooden handles, and floating shelves",
  },
  {
    id: 15,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20240824_115710047.jpg-WwnBq3NXcxZdNcdcP3KVwHe9wmSWgH.jpeg",
    alt: "Modern kitchen with dark wood grain cabinets, black countertops, and white tile floors",
  },
  {
    id: 16,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230524_181559.jpg-sfKYiAw1ssPMCMReIo6BjUMfq48fFQ.jpeg",
    alt: "Construction phase showing detailed metal framework and HVAC duct installation",
  },
  {
    id: 17,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230324_084603.jpg-BxkkPXN9cVfDXfJHGSimFYOLkznQlH.jpeg",
    alt: "Bedroom with blue accent wall, white built-in wardrobes, and wooden flooring",
  },
  {
    id: 18,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230107_121139.jpg-Cgdx1I3DKSoBuibFC7bW1kDAZUViGa.jpeg",
    alt: "Living dining area with wooden divider, large windows, and modern fixtures",
  },
  {
    id: 19,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230324_084513.jpg-mO7rrCDPKBBCK4ACkAqGubiUeXQU8t.jpeg",
    alt: "Bathroom with dramatic slate feature wall in shower and modern fixtures",
  },
  {
    id: 20,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230324_084447.jpg-CZUFB8PaB2HUh1BsyhdtiqBFVyEkr5.jpeg",
    alt: "Bedroom with teal accent wall, built-in wardrobes, and balcony access",
  },
  {
    id: 21,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20240824_115955276.jpg-caV9GZBWAnpU0sK8H1ySr5kzhLKYNV.jpeg",
    alt: "Modern open-plan kitchen and living area with black and white design, track lighting, and built-in storage",
  },
  {
    id: 22,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250426-WA0005.jpg-elxWAY4Si2MLJbkE5CTftW495hlKFJ.jpeg",
    alt: "Construction phase showing ceiling framework installation with metal grid system and scaffolding",
  },
  {
    id: 23,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250426-WA0002.jpg-7oCHfN1jdmQwf2nWQt1YWrTeock9Rq.jpeg",
    alt: "Commercial space renovation in progress with orange walls and worker installing flooring",
  },
  {
    id: 24,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250402-WA0020.jpg-9BUK5qUsJPiqst3M52zETon0hnddWF.jpeg",
    alt: "Elegant kitchen with warm wood cabinets, blue tile backsplash, and diamond-pattern wine storage",
  },
  {
    id: 25,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20240824_115802896.jpg-wndH6Fhoz9xQcwWdbJi9nQoaGe6AGU.jpeg",
    alt: "Clean bedroom corner with gray built-in wardrobes featuring textured panels and polished floors",
  },
  {
    id: 26,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20230621_024621392.jpg-vuPw8dzs1cX32VfSjkcKto2mAK1DUR.jpeg",
    alt: "Modern bathroom with mosaic tile accents, green vanity, textured walls, and contemporary fixtures",
  },
  {
    id: 27,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250426-WA0008.jpg-ggcP0v0zaqXGWL3CEUGVPFEmWp0L1F.jpeg",
    alt: "Construction phase showing drywall installation with exposed ceiling framework and electrical work",
  },
  {
    id: 28,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250426-WA0003.jpg-9sAMABCpp4PUUjDSgE2TBqIBSOxObX.jpeg",
    alt: "Construction site showing ceiling framework installation with worker and scaffolding systems",
  },
  {
    id: 29,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250402-WA0019.jpg-TFukjq6skoDXOrIiqnJJvnj9NNfleo.jpeg",
    alt: "Commercial storefront with curved ceiling design, glass security gates, and modern lighting",
  },
  {
    id: 30,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20240824_115824908.jpg-xF72D5x44SzyfKO9mvA8xkHr0HZKQr.jpeg",
    alt: "Minimalist living room with built-in entertainment center and white textured feature wall",
  },
  {
    id: 31,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20230630_143602868.jpg-sw3xOf85f8FMIRf9ifFbtaDSJHlBTx.jpeg",
    alt: "Modern commercial office space with marble-effect walls, glass partitions, and dark wood flooring",
  },
  {
    id: 32,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20230630_143818402.jpg-pwwR8u9yZvTr0yfV1jvaOB892nDUqA.jpeg",
    alt: "Commercial corridor with True Harmony signage, marble walls, and modern lighting design",
  },
  {
    id: 33,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20230630_143544885.jpg-OijpQWwpAAf99ne7uc6OOvUY5s6YWq.jpeg",
    alt: "Reception area with curved ceiling, True Harmony branding, marble finishes, and celebration decorations",
  },
  {
    id: 34,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20230630_143631872.jpg-VgfKagWArR5UVzkCl3vNeWy3VcUS66.jpeg",
    alt: "Office hallway with light wood cabinetry, built-in storage, and modern flooring",
  },
  {
    id: 35,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20230630_143625166.jpg-5S7ptjgdv3MnRukirkcLkVoI0CP1Pq.jpeg",
    alt: "Medical office corridor with treatment rooms, modern equipment, and professional lighting",
  },
  {
    id: 36,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20230621_025237706.jpg-V0LWUYdQp4BjZkBHMyvnVGVp6jPn0X.jpeg",
    alt: "Modern bathroom with mosaic tile accents, green vanity, textured walls, and contemporary fixtures",
  },
  {
    id: 37,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20230621_025121219.jpg-hiyBvrmqwFUhat1QD645HuaCrMgqVx.jpeg",
    alt: "Elegant dining room with geometric patterned sliding doors, crystal chandelier, and polished black floors",
  },
  {
    id: 38,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20230630_143727316.jpg-Z42MXRpjyIwalchzloumiorzJVJMTG.jpeg",
    alt: "Treatment room with massage table, built-in storage, and professional medical equipment",
  },
  {
    id: 39,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20230630_143605628.jpg-P8kuZVUtqFEJBpnzHp1i9GFAkmLvRd.jpeg",
    alt: "Commercial corridor with marble columns, glass partitions, and modern office design",
  },
  {
    id: 40,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20230630_143558368.jpg-UUb9T5SgURFJB5PedmWL11fsbmWYvZ.jpeg",
    alt: "Reception area with True Harmony branding, curved reception desk, and modern commercial interior",
  },
  {
    id: 41,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-08-02%20at%2015.24.57.jpg-gpkLuJ3sRLw2mUYm8rzozJsjNtP1c2.jpeg",
    alt: "Custom built-in entertainment unit with light wood finish, featuring arched display niche with shelving and drawers",
  },
  {
    id: 42,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20240523_044428752.jpg-vMHLgMScREBJPZ1ALFwKWRJpMD4ZA9.jpeg",
    alt: "Modern bar interior with extensive backlit shelving displaying bottles, marble countertop, and contemporary lighting",
  },
  {
    id: 43,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-08-02%20at%2015.24.32%20%281%29-CbxGgOkTDXYbgNwzqFxxP3bYYu24mH.jpeg",
    alt: "Modern bedroom with dark gray built-in wardrobes, window seating area, and construction materials on floor",
  },
  {
    id: 44,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20231226_083316986.jpg-rSALfRv9Zov8FhYOvyRP3yAyiQRyve.jpeg",
    alt: "Luxury bathroom with marble walls, glass shower enclosure, black marble vessel sink, and high-end fixtures",
  },
  {
    id: 45,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-08-02%20at%2015.24.51%20%281%29-WH6cWFBZrXRVPhgnI4eGIDigABRCuK.jpeg",
    alt: "Contemporary bedroom with dark gray wardrobes, yellow accent handles, built-in bed niche, and warm wood flooring",
  },
  {
    id: 46,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-08-02%20at%2015.24.51-rMxk0oIDAtrnbU1HO3Ln4sgziNA2XV.jpeg",
    alt: "Modern bedroom with dark gray built-in storage, study desk area, and large windows",
  },
  {
    id: 47,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-08-02%20at%2015.24.33-AzLPtuEANcmD17fqwdgvRjQ2KxVmgH.jpeg",
    alt: "Study room with dark blue built-in desk and storage, minimalist design with construction materials visible",
  },
  {
    id: 48,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-08-02%20at%2015.25.16-8GjLVTGaxUmL3xIoqLb2nigUgPT6nA.jpeg",
    alt: "Clean white built-in wardrobes in bedroom, simple modern design",
  },
  {
    id: 49,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-08-02%20at%2015.25.19-sNGWr7ii6SfpSkF2j8RCvfgWCnqZzj.jpeg",
    alt: "Corner wardrobe system under construction with light wood finish and integrated desk area",
  },
  {
    id: 50,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20240327_022209757.jpg-aiHGybkNEitSyfEKqufJ3espN7qb8e.jpeg",
    alt: "Elegant hallway with extensive light wood built-in storage, arched doorways, and polished floors",
  },
]

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function OurProjectsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const [visibleCount, setVisibleCount] = useState(10)
  const [randomizedProjects, setRandomizedProjects] = useState(projects)

  useEffect(() => {
    setRandomizedProjects(shuffleArray(projects))
  }, [])

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => new Set(prev).add(id))
  }

  const loadMore = () => {
    setVisibleCount(randomizedProjects.length)
  }

  const showLess = () => {
    setVisibleCount(10)
  }

  const visibleProjects = randomizedProjects.slice(0, visibleCount)
  const hasMore = visibleCount < randomizedProjects.length
  const showingAll = visibleCount === randomizedProjects.length

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our completed renovation projects showcasing quality craftsmanship and attention to detail.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="break-inside-avoid mb-4 group cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100">
                {!loadedImages.has(project.id) && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </div>
                )}

                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.alt}
                  width={400}
                  height={300}
                  className={`w-full h-auto object-cover group-hover:scale-105 transition-all duration-500 ${
                    loadedImages.has(project.id) ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  quality={80}
                  loading={project.id <= 6 ? "eager" : "lazy"}
                  onLoad={() => handleImageLoad(project.id)}
                />
              </div>
            </div>
          ))}
        </div>

        {(hasMore || showingAll) && (
          <div className="text-center mt-12">
            {hasMore ? (
              <Button
                onClick={loadMore}
                variant="outline"
                size="lg"
                className="px-8 py-3 text-primary border-primary hover:bg-primary hover:text-white transition-colors duration-300 bg-transparent"
              >
                Load More Projects
              </Button>
            ) : (
              <Button
                onClick={showLess}
                variant="outline"
                size="lg"
                className="px-8 py-3 text-primary border-primary hover:bg-primary hover:text-white transition-colors duration-300 bg-transparent"
              >
                Show Less
              </Button>
            )}
          </div>
        )}

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Project detail"
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(null)
                }}
                className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-all duration-200 backdrop-blur-sm shadow-lg"
                style={{ color: "#021c41" }}
                aria-label="Close image"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
