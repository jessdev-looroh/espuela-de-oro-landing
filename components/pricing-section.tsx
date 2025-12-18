"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Check, MapPin, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const pricingPlans = [
  {
    duration: "Media Hora",
    price: "S/ 190",
    icon: Clock,
    features: [
      "Hasta 6 canciones",
      "4 Integrantes",
      "Presentación elegante",
      "Repertorio a elección",
      "Puntualidad garantizada",
      "Amplificación",
      "Movilidad",
    ],
    popular: false,
  },
  {
    duration: "Una Hora",
    price: "S/ 250",
    icon: Clock,
    features: [
      "Hasta 12 canciones",
      "4 Integrantes",
      "Presentación completa",
      "Repertorio personalizado",
      "Puntualidad garantizada",
      "Dedicatoria especial",
      "Amplificación",
      "Movilidad",
    ],
    popular: true,
  },
];

export function PricingSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  const handleWhatsApp = (duration: string) => {
    const message = `Hola, me gustaría reservar una serenata de ${duration}`;
    window.open(
      `https://wa.me/51912614833?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleOutsideQuote = () => {
    const message =
      "Hola, necesito una cotización para una serenata fuera de Piura";
    window.open(
      `https://wa.me/51912614833?text=${encodeURIComponent(message)}`,
      "_blank"
    );
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
            <span className="text-foreground">Precios</span>{" "}
            <span className="text-primary">Transparentes</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Calidad premium a precios justos. Elige la duración perfecta para tu
            ocasión.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-card/50 backdrop-blur-sm p-8 transition-all duration-300 ${
                plan.popular
                  ? "border-primary shadow-xl shadow-primary/20 scale-105"
                  : "border-primary/20 hover:border-primary/40"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1">
                  Más Popular
                </Badge>
              )}

              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <plan.icon className="w-8 h-8 text-primary shrink-0 mt-0.5" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    {plan.duration}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-serif text-5xl font-bold text-primary">
                      {plan.price}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleWhatsApp(plan.duration)}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                  size="lg"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Reservar este tiempo
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Outside Piura CTA */}
        <Card className="max-w-3xl mx-auto bg-gradient-to-r from-secondary/20 to-primary/20 border-primary/30 p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4 text-left">
              <MapPin className="w-8 h-8 text-primary shrink-0" />
              <div className="space-y-2">
                <h3 className="font-serif text-xl font-bold text-foreground">
                  ¿Fuera de Piura?
                </h3>
                <p className="text-muted-foreground">
                  Cubrimos Paita, Sullana y más. Cotización rápida por WhatsApp
                  según destino.
                </p>
              </div>
            </div>
            <Button
              onClick={handleOutsideQuote}
              variant="outline"
              className="border-primary hover:bg-primary/10 shrink-0 bg-transparent"
              size="lg"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Cotizar ahora
            </Button>
          </div>
        </Card>

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
