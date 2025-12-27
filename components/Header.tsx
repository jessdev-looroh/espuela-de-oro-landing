"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import Link from "next/link";
import { ASSETS } from "@/lib/constants";
import { smoothScrollTo, wa } from "@/lib/utils";
import { gaEvent } from "@/lib/gtag";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const navItems = [
    { label: "Servicios", href: "#servicios" },
    { label: "Precios", href: "#precios" },
    { label: "Galería", href: "#galeria" },
    { label: "Reseñas", href: "#resenas" },
    { label: "Ubicación", href: "#ubicacion" },
    { label: "FAQ", href: "#faq" },
  ];
  const onClick = (e: any, section: string) => {
    e.preventDefault();
    smoothScrollTo(`${section}`, 900);
    gaEvent(`${section}_click`, {
      event_category: "lead",
      event_label: `section_${section}`,
    });
  };
  const handleWhatsApp = () => {
    wa("Hola, me gustaría reservar una serenata");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-20 h-20 rounded-full flex items-center justify-center group-hover:shadow-primary/40 transition-shadow">
              <img src={ASSETS.brand.logo_img} alt="" />
            </div>

            <div className="hidden sm:flex flex-col">
              <span className="font-serif text-lg font-bold text-primary">
                Mariachi Espuela de Oro Piura
              </span>
              <span className="text-xs text-muted-foreground italic">
                Calidad, Puntualidad y Elegancia
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => onClick(e, item.href)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <Button
              onClick={handleWhatsApp}
              className="cursor-pointer hidden sm:flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-primary/20">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={handleWhatsApp}
              className="cursor-pointer w-full mt-4 bg-primary text-primary-foreground"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Reservar por WhatsApp
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
