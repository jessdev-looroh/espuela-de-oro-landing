"use client"

import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const reviews = [
  {
    name: "María González",
    date: "Hace 2 semanas",
    rating: 5,
    text: "Increíble experiencia! Llegaron puntuales y mi esposo quedó encantado con la sorpresa de aniversario. Las canciones que tocaron fueron perfectas y muy emotivas. 100% recomendados!",
    occasion: "Aniversario",
  },
  {
    name: "Carlos Ramírez",
    date: "Hace 1 mes",
    rating: 5,
    text: "Contraté sus servicios para el cumpleaños de mi madre y fue todo un éxito. La presentación fue muy elegante y profesional. Mi madre lloró de emoción. Gracias por hacer su día tan especial.",
    occasion: "Cumpleaños",
  },
  {
    name: "Ana Luisa Pérez",
    date: "Hace 3 semanas",
    rating: 5,
    text: "Los mejores! Mi novio me pidió perdón con una serenata hermosa. Tocaron todas mis canciones favoritas y el ambiente fue mágico. Recomendadísimos para cualquier ocasión romántica.",
    occasion: "Reconciliación",
  },
  {
    name: "Roberto Díaz",
    date: "Hace 1 semana",
    rating: 5,
    text: "Excelente servicio para nuestra boda. Muy profesionales, puntuales y con un repertorio variado. Los invitados no dejaban de elogiar la música. Definitivamente los volveríamos a contratar.",
    occasion: "Matrimonio",
  },
  {
    name: "Lucía Morales",
    date: "Hace 2 meses",
    rating: 5,
    text: "Sorprendí a mi hermana en su graduación y fue perfecto. La calidad musical es impresionante y se nota la experiencia. Son muy atentos y cumplen todo lo acordado. Gracias por tanto!",
    occasion: "Graduación",
  },
  {
    name: "Fernando Castro",
    date: "Hace 3 semanas",
    rating: 5,
    text: "Contraté para un evento corporativo y superaron las expectativas. Muy elegantes, respetuosos y con gran presencia escénica. Nuestros clientes quedaron muy impresionados.",
    occasion: "Evento Corporativo",
  },
]

export function ReviewsSection() {
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
    <section ref={sectionRef} id="resenas" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/mariachi-serenade-romantic.jpg')] bg-cover bg-center opacity-[0.06] blur-md" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark-1)] via-[rgba(15,15,15,0.95)] to-[var(--bg-dark-1)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--gold-glow),transparent_70%)]" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className={`container mx-auto px-4 relative z-10 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-balance">
            <span className="text-foreground">Clientes</span> <span className="text-primary">Satisfechos</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            La mejor recompensa es ver sonrisas y crear recuerdos inolvidables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Quote Icon */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground leading-relaxed text-sm">"{review.text}"</p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-primary/20 via-primary/40 to-transparent" />

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <span className="text-xs text-primary font-medium">{review.occasion}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  )
}
