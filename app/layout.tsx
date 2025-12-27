import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Script from "next/script";
import { ASSETS } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mariachi Espuela de Oro | Serenatas en Piura",
  description:
    "Sorprende con una serenata inolvidable en Piura. Mariachi Espuela de Oro – Calidad, Puntualidad y Elegancia.",
  keywords:
    "mariachi, serenatas, Piura, música mexicana, eventos, cumpleaños, aniversarios",
  metadataBase: new URL("https://mariachiespueladeoropiura.com"),
  openGraph: {
    title: "Mariachi Espuela de Oro Piura",
    description:
      "Serenatas profesionales en Piura — Calidad, Puntualidad y Elegancia.",
    url: "https://mariachiespueladeoropiura.com",
    siteName: "Mariachi Espuela de Oro Piura",
    images: [
      {
        url: `/${ASSETS.brand.preview}`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mariachi Espuela de Oro Piura",
    description: "Sorprende con una serenata inolvidable en Piura.",
    images: [ASSETS.brand.preview],
  },
  icons: {
    icon: ASSETS.brand.logo_img,
    shortcut: ASSETS.brand.logo_img,
    apple: ASSETS.brand.logo_img,
    other: {
      rel: "icon",
      url: ASSETS.brand.logo_img,
      type: "image/png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA4_ID;
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
