import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuáles son las opciones de duración disponibles?",
    answer:
      "Ofrecemos tres opciones de duración: media hora, 45 minutos y una hora completa. Puedes elegir la duración que mejor se adapte a tu ocasión especial. Los precios se cotizan directamente en WhatsApp según tu selección.",
  },
  {
    question: "¿Cuántos mariachis puedo contratar?",
    answer:
      "Puedes seleccionar la cantidad de mariachis que desees: 4, 5 o 6 músicos. Cada configuración brinda una experiencia diferente, desde una serenata íntima hasta una presentación más grandiosa. La cotización se realiza en WhatsApp basada en tu elección.",
  },
  {
    question: "¿Qué está incluido en todos nuestros servicios?",
    answer:
      "Todos nuestros servicios incluyen: tiempo completo de presentación, músicos elegantemente vestidos con sombreros de mariachi, repertorio a tu elección, puntualidad garantizada, amplificación y movilidad incluida. Una experiencia premium sin sorpresas.",
  },
  {
    question: "¿Cuáles son las zonas de cobertura?",
    answer:
      "Cubrimos Piura ciudad (Castilla, 26 de Octubre, Piura centro y más), zonas de alrededores (Paita, Sullana, La Unión, Tambogrande, Catacaos, Curumí) y también realizamos servicios fuera de Piura. Para cualquier ubicación, contáctanos por WhatsApp y te daremos una cotización personalizada.",
  },
  {
    question: "¿Se puede elegir el repertorio?",
    answer:
      "¡Por supuesto! Puedes elegir las canciones que desees de nuestro amplio repertorio que incluye clásicos mexicanos, románticas, mañanitas, y mucho más. Al momento de reservar por WhatsApp, coordinamos contigo el repertorio perfecto para tu ocasión.",
  },
  {
    question: "¿Cómo funciona el proceso de reserva?",
    answer:
      "Es muy simple: selecciona la duración de la serenata, cantidad de mariachis y zona de cobertura que prefieres. Luego haz clic en 'Cotizar en WhatsApp' y especifica tus datos. Nuestro equipo te contactará con la cotización exacta, opciones de pago y confirmará tu reserva.",
  },
  {
    question: "¿Cuánto tiempo de anticipación debo reservar?",
    answer:
      "Recomendamos reservar con al menos 3-5 días de anticipación para asegurar disponibilidad, especialmente para fechas especiales como San Valentín, Día de las Madres o fin de año. Sin embargo, también manejamos reservas de último momento según disponibilidad.",
  },
  {
    question: "¿Qué pasa si llueve o hay cambios de última hora?",
    answer:
      "Entendemos que pueden surgir imprevistos. Si necesitas cambiar la fecha o hay condiciones climáticas adversas, podemos reprogramar tu serenata con previo aviso. Contáctanos lo antes posible por WhatsApp y buscaremos la mejor solución juntos.",
  },
  {
    question: "¿Ofrecen servicios para eventos corporativos?",
    answer:
      "Sí, tenemos experiencia en eventos corporativos, inauguraciones, cenas empresariales y celebraciones de empresa. Puedes seleccionar el número de mariachis y duración que mejor se adapte a tu evento. Contáctanos por WhatsApp para una cotización especial.",
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
