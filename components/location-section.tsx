"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, MessageCircle } from "lucide-react";
import { wa } from "@/lib/utils";

export function LocationSection() {
  const address = "MZ. E LOTE 35 Enace II Etapa Piura";
  const encodedAddress = encodeURIComponent(address);

  const handleOpenMap = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
      "_blank"
    );
  };

  const handleWhatsApp = () => {
    wa("Hola, me gustaría más información sobre cómo contratar");
  };

  return (
    <section id="ubicacion" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-balance">
            <span className="text-foreground">Visítanos o</span>{" "}
            <span className="text-primary">Contáctanos</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Estamos en Piura listos para hacer tu evento inolvidable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden">
            <div className="aspect-video bg-muted/20 relative">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}`}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">
                    Nuestra dirección
                  </p>
                  <p className="text-muted-foreground text-sm">{address}</p>
                </div>
              </div>
              <Button
                onClick={handleOpenMap}
                variant="outline"
                className="w-full border-primary/30 hover:bg-primary/10 bg-transparent"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Abrir en Google Maps
              </Button>
            </div>
          </Card>

          {/* Contact Card */}
          <Card className="bg-gradient-to-br from-secondary/20 via-card/50 to-primary/20 backdrop-blur-sm border-primary/20 p-8">
            <div className="space-y-6 h-full flex flex-col justify-between">
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/20">
                  <MessageCircle className="w-8 h-8 text-primary-foreground" />
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    ¿Listo para tu serenata?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Contáctanos por WhatsApp para coordinar todos los detalles
                    de tu evento especial. Te respondemos rápido y con toda la
                    información que necesites.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-foreground">
                    <span className="font-semibold">WhatsApp:</span>
                    <span className="text-primary">+51 912 614 833</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <span className="font-semibold">Cobertura:</span>
                    <span>Piura y alrededores</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleWhatsApp}
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Escríbenos por WhatsApp
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  Respondemos de Lunes a Domingo, 8:00 AM - 10:00 PM
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
