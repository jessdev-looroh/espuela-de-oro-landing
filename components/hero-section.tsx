"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Calendar, Music2, Star } from "lucide-react";
import { Background } from "./Background";
import { ASSETS } from "@/lib/constants";
import { wa } from "@/lib/utils";

export function HeroSection() {
  const handleWhatsApp = () => {
    wa("Hola, me gustaría reservar una serenata");
  };

  const scrollToPricing = () => {
    document.getElementById("precios")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <Background src={ASSETS.background.hero} />

      <div className="container mx-auto px-4 relative z-10 mt-5">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Badge
              variant="outline"
              className="bg-card/50 backdrop-blur-sm border-primary/30 text-foreground px-4 py-2"
            >
              <Music2 className="w-4 h-4 mr-2 text-primary" />
              Piura y alrededores
            </Badge>
            <Badge
              variant="outline"
              className="bg-card/50 backdrop-blur-sm border-primary/30 text-foreground px-4 py-2"
            >
              <Star className="w-4 h-4 mr-2 text-primary" />
              Puntualidad garantizada
            </Badge>
            <Badge
              variant="outline"
              className="bg-card/50 backdrop-blur-sm border-primary/30 text-foreground px-4 py-2"
            >
              <Calendar className="w-4 h-4 mr-2 text-primary" />
              Toda ocasión
            </Badge>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            <span className="text-foreground">Sorprende con una</span>
            <br />
            <span className="text-primary">Serenata Inolvidable</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Momentos especiales merecen música especial. Con{" "}
            <span className="text-primary font-semibold">
              puntualidad impecable
            </span>
            ,{" "}
            <span className="text-primary font-semibold">
              repertorio amplio
            </span>{" "}
            y{" "}
            <span className="text-primary font-semibold">
              presentación elegante
            </span>
            , convertimos tus celebraciones en recuerdos eternos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className=" cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/30 group px-8 py-6 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Reservar por WhatsApp
            </Button>
            <Button
              onClick={scrollToPricing}
              size="lg"
              variant="outline"
              className="cursor-pointer border-primary/30 hover:bg-primary/10 px-8 py-6 text-lg bg-transparent"
            >
              Ver Precios
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-3 pb-3 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="text-center space-y-1">
              <div className="text-3xl font-bold text-primary font-serif">
                20+
              </div>
              <div className="text-sm text-muted-foreground">
                Años de experiencia
              </div>
            </div>
            <div className="text-center space-y-1 border-x border-primary/20">
              <div className="text-3xl font-bold text-primary font-serif">
                2000+
              </div>
              <div className="text-sm text-muted-foreground">
                Serenatas realizadas
              </div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-3xl font-bold text-primary font-serif">
                100%
              </div>
              <div className="text-sm text-muted-foreground">
                Satisfacción garantizada
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
}
