"use client"

import { Clock, Music, Users, Zap, Truck, Sparkles, Speaker, Mic } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const includes = [
  {
    icon: Clock,
    title: "Tiempo Completo",
    description: "Se toca toda la duración contratada sin interrupciones",
    color: "text-primary",
  },
  {
    icon: Users,
    title: "Elegancia Garantizada",
    description: "Todos nuestros mariachis lucen trajes tradicionales con sombreros de lujo",
    color: "text-secondary",
  },
  {
    icon: Music,
    title: "Repertorio a Elección",
    description: "Elige las canciones que acompañarán tu momento especial",
    color: "text-primary",
  },
  {
    icon: Zap,
    title: "Puntualidad Garantizada",
    description: "Llegamos a la hora exacta, porque tu momento no puede esperar",
    color: "text-secondary",
  },
  {
    icon: Mic,
    title: "Sonido y Microfonía",
    description: "Llevamos nuestro propio sistema de sonido y micrófonos. ¡Tú solo disfruta el show!",
    color: "text-primary",
  },
  {
    icon: Sparkles,
    title: "Movilidad Incluida",
    description: "Nos trasladamos a cualquier punto dentro de tu zona seleccionada",
    color: "text-secondary",
  },
]

export function IncludesSection() {
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
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark-1)] via-[var(--bg-dark-2)] to-[var(--bg-dark-1)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gold-glow),transparent_70%)]" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className={`container mx-auto px-4 relative z-10 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-balance">
            <span className="text-foreground">Todos Nuestros</span>{" "}
            <span className="text-primary">Servicios Incluyen</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Sin sorpresas. Sin costos ocultos. Solo calidad y profesionalismo en cada nota.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {includes.map((item, index) => (
            <div key={index} className="group relative" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative bg-card/40 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:border-primary/40 transition-all duration-300 space-y-4 h-full">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  )
}
