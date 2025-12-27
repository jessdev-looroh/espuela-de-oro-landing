"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Check, MapPin, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { wa } from "@/lib/utils";

const serviceOptions = [
  {
    duration: "Media Hora",
    durationMinutes: "30 min",
    description: "Perfecta para sorpresas rápidas",
    icon: Clock,
  },
  {
    duration: "45 Minutos",
    durationMinutes: "45 min",
    description: "Duración ideal para celebraciones",
    icon: Clock,
  },
  {
    duration: "Una Hora",
    durationMinutes: "60 min",
    description: "Presentación completa y dedicada",
    icon: Clock,
  },
];

const musicianOptions = [
  {
    count: 4,
    description: "Serenata clásica",
    icon: Users,
  },
  {
    count: 5,
    description: "Grupo estándar",
    icon: Users,
  },
  {
    count: 6,
    description: "Sonido pleno",
    icon: Users,
  },
];

const zoneOptions = [
  {
    name: "Piura Ciudad",
    locations: ["Castilla", "26 de Octubre", "Piura Centro"],
    icon: MapPin,
  },
  {
    name: "Zona de Alrededores",
    locations: [
      "Paita",
      "Sullana",
      "La Unión",
      "Tambogrande",
      "Catacaos",
      "Curumí",
    ],
    icon: MapPin,
  },
  {
    name: "Fuera de Piura",
    locations: ["Otra provincia o región"],
    icon: MapPin,
  },
];

export function PricingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState("Media Hora");
  const [selectedMusicians, setSelectedMusicians] = useState(4);
  const [selectedZone, setSelectedZone] = useState("Piura Ciudad");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleWhatsApp = () => {
    const message = `Hola, me gustaría cotizar una serenata de ${selectedDuration} con ${selectedMusicians} mariachis para ${selectedZone}`;
    wa(message);
  };

  return (
    <section
      ref={sectionRef}
      id="precios"
      className="py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-dark-2)] via-[var(--bg-dark-1)] to-[var(--bg-dark-2)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--gold-glow),transparent_60%)]" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div
        className={`container mx-auto px-4 relative z-10 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-balance">
            <span className="text-foreground">Nuestros</span>{" "}
            <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Elige la duración y cantidad de mariachis que mejor se adapte a tu
            celebración. Los precios se cotizarán directamente en WhatsApp según
            tus necesidades.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Duration Options */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground ml-2">
              Duración de la serenata
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {serviceOptions.map((option) => (
                <Card
                  key={option.duration}
                  onClick={() => setSelectedDuration(option.duration)}
                  className={`p-6 cursor-pointer transition-all duration-300 ${
                    selectedDuration === option.duration
                      ? "border-primary bg-primary/10 shadow-lg shadow-primary/30"
                      : "border-primary/20 bg-card/50 hover:border-primary/40"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <option.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-foreground">
                        {option.duration}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {option.durationMinutes}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2 italic">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Musician Count Options */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground ml-2">
              Cantidad de mariachis
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {musicianOptions.map((option) => (
                <Card
                  key={option.count}
                  onClick={() => setSelectedMusicians(option.count)}
                  className={`p-6 cursor-pointer transition-all duration-300 ${
                    selectedMusicians === option.count
                      ? "border-primary bg-primary/10 shadow-lg shadow-primary/30"
                      : "border-primary/20 bg-card/50 hover:border-primary/40"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <option.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-foreground">
                        {option.count} Mariachis
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground ml-2">
              Zona de cobertura
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {zoneOptions.map((option) => (
                <Card
                  key={option.name}
                  onClick={() => setSelectedZone(option.name)}
                  className={`p-6 cursor-pointer transition-all duration-300 ${
                    selectedZone === option.name
                      ? "border-primary bg-primary/10 shadow-lg shadow-primary/30"
                      : "border-primary/20 bg-card/50 hover:border-primary/40"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <option.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-bold text-foreground">
                        {option.name}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-2">
                        {option.locations.join(", ")}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-lg p-8 text-center space-y-4">
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Solicita tu Cotización
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {selectedDuration} con {selectedMusicians} mariachis •{" "}
              {selectedZone}
            </p>
            <Button
              onClick={handleWhatsApp}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
              size="lg"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Cotizar en WhatsApp
            </Button>
            <p className="text-sm text-muted-foreground italic">
              Responderemos en menos de 1 hora con presupuesto y disponibilidad
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground italic">
            Próximamente: sistema de reservas online con calendario y adelanto
            automático
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
