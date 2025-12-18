"use client"

import { Card } from "@/components/ui/card"
import { Heart, Cake, Users, Gift, Building2, Flower2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Heart,
    title: "Reconciliación",
    description: "Las palabras más sinceras se dicen con música. Reconquista ese amor especial.",
    color: "text-secondary",
  },
  {
    icon: Cake,
    title: "Cumpleaños",
    description: "Celebra la vida con las mañanitas y el repertorio más alegre.",
    color: "text-primary",
  },
  {
    icon: Gift,
    title: "Aniversarios",
    description: "Renueva los votos de amor con las canciones que marcaron su historia.",
    color: "text-secondary",
  },
  {
    icon: Users,
    title: "Matrimonios",
    description: "El día más importante merece la música más elegante y emotiva.",
    color: "text-primary",
  },
  {
    icon: Building2,
    title: "Eventos Corporativos",
    description: "Dale un toque especial y memorable a tus eventos empresariales.",
    color: "text-secondary",
  },
  {
    icon: Flower2,
    title: "Ceremonias Especiales",
    description: "Con respeto y dignidad, acompañamos momentos de despedida y homenaje.",
    color: "text-primary",
  },
]

export function ServicesSection() {
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
    <section ref={sectionRef} id="servicios" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/mariachi-musicians-with-guitars.jpg')] bg-cover bg-center opacity-[0.08] blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark-1)] via-[var(--bg-dark-2)] to-[var(--bg-dark-1)]" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className={`container mx-auto px-4 relative z-10 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-balance">
            <span className="text-foreground">Serenatas para</span> <span className="text-primary">Toda Ocasión</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Cada momento especial tiene su propia música. Descubre cómo podemos hacer inolvidable tu celebración.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 p-6 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div
                  className={`w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
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
