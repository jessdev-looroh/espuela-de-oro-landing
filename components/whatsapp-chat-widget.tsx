"use client";

import { wa } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const openWhatsApp = () => {
    const text = "Hola, me gustaría cotizar una serenata";
    wa(text);
  };

  return (
    <button
      onClick={openWhatsApp}
      aria-label="Contactar por WhatsApp"
      className="
        fixed bottom-6 right-6 z-[9999]
        w-16 h-16 rounded-full
        bg-[#25D366]
        shadow-2xl shadow-black/30
        flex items-center justify-center
        hover:bg-[#20BD5A]
        hover:scale-110
        transition-all duration-300
        cursor-pointer
      "
    >
      <MessageCircle className="w-8 h-8 text-white" />
      {/* Efecto de pulso */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping" />
    </button>
  );
}
