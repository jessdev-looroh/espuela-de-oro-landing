"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppFloatButton() {
  const [showTooltip, setShowTooltip] = useState(false)

  const handleClick = () => {
    window.open("https://wa.me/51912614833?text=Hola, me gustaría cotizar una serenata", "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-card border border-primary/20 rounded-lg shadow-xl whitespace-nowrap animate-in fade-in slide-in-from-bottom-2">
            <p className="text-sm font-medium text-foreground">¿Cotizamos tu serenata?</p>
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-card border-r border-b border-primary/20 rotate-45" />
          </div>
        )}

        {/* Button */}
        <Button
          size="lg"
          onClick={handleClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] shadow-2xl shadow-black/20 hover:shadow-[#25D366]/30 hover:scale-110 transition-all duration-300 p-0"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </Button>

        {/* Pulse animation ring */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </div>
    </div>
  )
}
