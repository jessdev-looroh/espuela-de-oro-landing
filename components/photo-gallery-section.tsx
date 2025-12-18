"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { X } from "lucide-react"

// Mock photo data with placeholders
const photos = [
  { id: 1, url: "/assets/gallery-1.jpg", alt: "Presentación nocturna" },
  { id: 2, url: "/assets/gallery-2.jpg", alt: "Músicos con guitarras" },
  { id: 3, url: "/assets/gallery-3.jpg", alt: "Serenata romántica" },
  { id: 4, url: "/assets/gallery-4.jpg", alt: "Trompetista" },
  { id: 5, url: "/assets/gallery-5.jpg", alt: "Celebración de cumpleaños" },
  { id: 6, url: "/assets/gallery-6.jpg", alt: "Trajes elegantes" },
  { id: 7, url: "/assets/gallery-7.jpg", alt: "Presentación en boda" },
  { id: 8, url: "/assets/gallery-8.jpg", alt: "Violinista" },
]

export function PhotoGallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[0] | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="galeria" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-dark-1)] via-[var(--bg-dark-2)] to-[var(--bg-dark-3)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gold-soft),transparent_50%)]" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className={`container mx-auto px-4 relative z-10 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-balance">
            <span className="text-foreground">Galería de</span>{" "}
            <span className="text-primary">Momentos Especiales</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Cada imagen cuenta una historia de alegría, amor y música.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 max-w-7xl mx-auto">
          {photos.map((photo) => (
            <Card
              key={photo.id}
              className="group relative mb-4 break-inside-avoid bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={photo.url || "/placeholder.svg"}
                  alt={photo.alt}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:bg-primary/20 transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
          <img
            src={selectedPhoto.url || "/placeholder.svg"}
            alt={selectedPhoto.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl shadow-primary/20"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
