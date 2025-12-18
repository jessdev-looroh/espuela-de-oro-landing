"use client";

import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Placeholder video URLs - replace with real YouTube/Facebook video IDs
const VIDEO_URLS = [
  {
    videoId: "olAM68aiqSk",
    title: "Serenata cumpleaños (Amar y vivir - Toda una vida)",
  },
  {
    videoId: "PITHBAbR7wg",
    title:
      "Mariachi Espuela de Oro en la cabalgata de caballos de paso en Macará -Ecuador",
  },
  {
    videoId: "dPqUAzgBdnk",
    title:
      "Cantando a nuestros amigos ecuatorianos en la ciudad de Macará (PALOMA QUERIDA)",
  },
  {
    videoId: "wrI19vqQ4Uo",
    title: "LAS MAÑANITAS - Mariachi Espuela de Oro - Piura",
  },

  {
    videoId: "uNuSAN3ZxoU",
    title: "SERENATA SORPRESA EN LOS ALGARROBOS - PIURA",
  },
  {
    videoId: "1reG1dr2Xk",
    title: "Sorpresa de cumpleaños",
  },
];

export function VideoGallerySection() {
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

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-dark-1)] via-[var(--bg-dark-2)] to-[var(--bg-dark-1)]" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div
        className={`container mx-auto px-4 relative z-10 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-balance">
            <span className="text-foreground">Nuestras</span>{" "}
            <span className="text-primary">Presentaciones</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Mira la calidad y el profesionalismo que llevamos a cada serenata.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {VIDEO_URLS.map((video, index) => (
            <Card
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative aspect-video bg-muted/20">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={`Video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
              <div className="p-4 border-t border-primary/10">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Play className="w-4 h-4 text-primary" />
                  <span>{video.title}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
}
