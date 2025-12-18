"use client"

import { Card } from "@/components/ui/card"
import { MessageCircle, Calendar, CreditCard, Music } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Escríbenos por WhatsApp",
    description: "Cuéntanos sobre tu ocasión especial, la fecha, hora y ubicación.",
  },
  {
    number: "02",
    icon: Calendar,
    title: "Confirmamos detalles",
    description: "Acordamos fecha, hora, dirección y el repertorio especial que deseas.",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Adelanto para reserva",
    description: "Un adelanto asegura tu fecha. El adelanto garantiza tu serenata.",
  },
  {
    number: "04",
    icon: Music,
    title: "Presentación puntual",
    description: "Llegamos a tiempo con elegancia, calidad y profesionalismo garantizado.",
  },
]

export function HowItWorksSection() {
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
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark-1)] via-[var(--bg-dark-3)] to-[var(--bg-dark-1)]" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className={`container mx-auto px-4 relative z-10 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-balance">
            <span className="text-foreground">¿Cómo</span> <span className="text-primary">Reservar?</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Un proceso simple y transparente para garantizar tu serenata perfecta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent -translate-x-1/2 z-0" />
              )}
              <Card className="relative bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 p-6 h-full">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/20">
                      <step.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="font-serif text-4xl font-bold text-primary/20">{step.number}</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground italic">
            * El adelanto asegura la disponibilidad y compromiso para tu fecha especial
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  )
}
