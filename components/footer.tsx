"use client";

import { Button } from "@/components/ui/button";
import { ASSETS } from "@/lib/constants";
import { wa } from "@/lib/utils";
import { MessageCircle, Facebook, Youtube } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const handleWhatsApp = () => {
    wa("Hola, me gustaría reservar una serenata");
  };

  return (
    <footer className="relative border-t border-primary/20 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start pt-5">
              <img
                alt="Mariachi Espuela De Oro"
                src={ASSETS.brand.logo_text}
                loading="lazy"
                className="w-auto h-30"
                // style={{ maxWidth: "200px" }}
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-3">
            <p className="text-foreground font-semibold">
              ¿Listo para tu serenata?
            </p>
            <Button
              onClick={handleWhatsApp}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Reservar ahora
            </Button>
          </div>

          {/* Social */}
          <div className="space-y-3 text-center md:text-right">
            <p className="text-sm text-muted-foreground">Síguenos en redes</p>
            <div className="flex items-center gap-3 justify-center md:justify-end">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-primary/20 hover:border-primary/40 hover:bg-primary/10 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-card border border-primary/20 hover:border-primary/40 hover:bg-primary/10 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/10 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Mariachi Espuela de Oro. Todos los
            derechos reservados.
          </p>
          <p className="mt-2">Piura, Perú | WhatsApp: +51 912 614 833</p>
        </div>
      </div>
    </footer>
  );
}
