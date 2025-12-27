"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MessageCircle } from "lucide-react";
import { wa } from "@/lib/utils";

export function LimitedOfferSection() {
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Check if timer exists in localStorage
    const storedEndTime = localStorage.getItem("offerEndTime");
    const now = Date.now();

    let endTime: number;

    if (storedEndTime) {
      endTime = Number.parseInt(storedEndTime, 10);
      if (endTime <= now) {
        setIsExpired(true);
        return;
      }
    } else {
      // Set 24 hours from now
      endTime = now + 24 * 60 * 60 * 1000;
      localStorage.setItem("offerEndTime", endTime.toString());
    }

    setTimeLeft(Math.floor((endTime - now) / 1000));

    const interval = setInterval(() => {
      const remaining = Math.floor((endTime - Date.now()) / 1000);

      if (remaining <= 0) {
        setIsExpired(true);
        setTimeLeft(0);
        clearInterval(interval);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return {
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: secs.toString().padStart(2, "0"),
    };
  };

  const handleWhatsApp = () => {
    const message = isExpired
      ? "Hola, me gustaría saber sobre descuentos disponibles"
      : "Hola, me gustaría aprovechar el descuento del 12%";
    wa(message);
  };

  if (timeLeft === null) return null;

  const time = formatTime(timeLeft);

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-gradient-to-br from-secondary/30 via-card/50 to-primary/30 backdrop-blur-sm border-primary shadow-2xl shadow-primary/20 overflow-hidden">
          <div className="relative p-8 md:p-12">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center space-y-6">
              {!isExpired ? (
                <>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">
                      Oferta por tiempo limitado
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
                    <span className="text-foreground">Serenatas con</span>{" "}
                    <span className="text-primary">12% de descuento</span>
                  </h2>

                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Reserva ahora y ahorra en tu próxima serenata. ¡Oferta
                    válida por 24 horas!
                  </p>

                  {/* Countdown Timer */}
                  <div className="flex items-center justify-center gap-4 py-6">
                    <div className="text-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-card/80 backdrop-blur-sm border border-primary/30 flex items-center justify-center shadow-lg">
                        <span className="font-serif text-3xl md:text-4xl font-bold text-primary">
                          {time.hours}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground mt-2 block">
                        Horas
                      </span>
                    </div>
                    <span className="font-serif text-3xl text-primary">:</span>
                    <div className="text-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-card/80 backdrop-blur-sm border border-primary/30 flex items-center justify-center shadow-lg">
                        <span className="font-serif text-3xl md:text-4xl font-bold text-primary">
                          {time.minutes}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground mt-2 block">
                        Minutos
                      </span>
                    </div>
                    <span className="font-serif text-3xl text-primary">:</span>
                    <div className="text-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-card/80 backdrop-blur-sm border border-primary/30 flex items-center justify-center shadow-lg">
                        <span className="font-serif text-3xl md:text-4xl font-bold text-primary">
                          {time.seconds}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground mt-2 block">
                        Segundos
                      </span>
                    </div>
                  </div>

                  <Button
                    onClick={handleWhatsApp}
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/30 px-8 py-6 text-lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Aprovechar descuento ahora
                  </Button>
                </>
              ) : (
                <>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-balance">
                    <span className="text-muted-foreground">
                      La oferta terminó
                    </span>
                  </h2>

                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    ¡Pero no te preocupes! Consulta con nosotros por descuentos
                    disponibles.
                  </p>

                  <Button
                    onClick={handleWhatsApp}
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/30 px-8 py-6 text-lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Consultar descuentos
                  </Button>
                </>
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
