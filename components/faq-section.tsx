import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuánto dura una serenata?",
    answer:
      "Ofrecemos dos opciones: media hora (hasta 6 canciones) por S/ 180, y una hora completa (hasta 12 canciones) por S/ 250. Puedes elegir la duración que mejor se adapte a tu ocasión especial.",
  },
  {
    question: "¿Qué incluye el servicio?",
    answer:
      "Nuestro servicio incluye presentación elegante con trajes de mariachi, músicos profesionales, instrumentos de calidad, el repertorio acordado, puntualidad garantizada y dedicatoria especial. Todo lo necesario para una experiencia memorable.",
  },
  {
    question: "¿Se puede elegir el repertorio?",
    answer:
      "¡Por supuesto! Puedes elegir las canciones que desees de nuestro amplio repertorio que incluye clásicos mexicanos, románticas, mañanitas, y mucho más. Al momento de reservar, coordinamos contigo el repertorio perfecto para tu ocasión.",
  },
  {
    question: "¿Qué zonas cubren?",
    answer:
      "Cubrimos toda la ciudad de Piura y alrededores, incluyendo Paita, Sullana, Castilla y más. Para destinos fuera de Piura, el precio puede variar según la distancia. Contáctanos por WhatsApp para una cotización personalizada.",
  },
  {
    question: "¿Cómo funciona el adelanto?",
    answer:
      "Para asegurar tu fecha, solicitamos un adelanto al momento de la reserva. Este adelanto garantiza la disponibilidad del grupo para tu evento y demuestra el compromiso de ambas partes. El monto restante se paga el día de la presentación.",
  },
  {
    question: "¿Qué pasa si llueve o hay cambios de última hora?",
    answer:
      "Entendemos que pueden surgir imprevistos. Si necesitas cambiar la fecha o hay condiciones climáticas adversas, podemos reprogramar tu serenata con previo aviso. Contáctanos lo antes posible y buscaremos la mejor solución juntos.",
  },
  {
    question: "¿Cuánto tiempo de anticipación debo reservar?",
    answer:
      "Recomendamos reservar con al menos 3-5 días de anticipación para asegurar disponibilidad, especialmente para fechas especiales como San Valentín, Día de las Madres o fin de año. Sin embargo, también manejamos reservas de último momento según disponibilidad.",
  },
  {
    question: "¿Ofrecen servicios para eventos corporativos?",
    answer:
      "Sí, tenemos experiencia en eventos corporativos, inauguraciones, cenas empresariales y celebraciones de empresa. Podemos adaptar nuestro repertorio y presentación al tipo de evento. Contáctanos para una cotización especial.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-balance">
            <span className="text-foreground">Preguntas</span> <span className="text-primary">Frecuentes</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Resolvemos tus dudas para que reserves con total confianza.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg px-6 data-[state=open]:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
