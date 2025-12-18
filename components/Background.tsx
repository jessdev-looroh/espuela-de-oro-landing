"use client";

type BackgroundProps = {
  src: string;
};

export const Background = ({ src }: BackgroundProps) => {
  const isVideo = src.endsWith(".mp4") || src.endsWith(".webm");

  return (
    <>
      {/* Media */}
      <div className="absolute inset-0 pointer-events-none">
        {isVideo ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <img
            src={src}
            alt="Mariachi background"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-background/80 to-background/95" />

      {/* Accent glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-primary/10 to-transparent" />
    </>
  );
};
