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
  keywords: [
    "mariachi",
    "serenatas",
    "Piura",
    "música mexicana",
    "eventos",
    "cumpleaños",
    "aniversarios",
    "bodas",
    "serenata romántica",
    "mariachis Piura",
  ],
  metadataBase: new URL("https://mariachiespeueladeoro.com"),
  authors: [
    {
      name: "Mariachi Espuela de Oro",
      url: "https://mariachiespeueladeoro.com",
    },
    {
      name: "Jess Figueroa - Looroh",
      url: "https://looroh.com/",
    },
  ],
  creator: "Jess Figueroa",
  category: "Entertainment",
  applicationName: "Mariachi Espuela de Oro Piura",
  referrer: "strict-origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: ASSETS.brand.icon,
    shortcut: ASSETS.brand.icon,
    apple: ASSETS.brand.icon,
    other: {
      rel: "icon",
      url: ASSETS.brand.icon,
      type: "image/png",
    },
  },
  openGraph: {
    title: "Mariachi Espuela de Oro | Serenatas Profesionales en Piura",
    description:
      "Calidad, Puntualidad y Elegancia. Serenatas para toda ocasión con repertorio a elección.",
    url: "https://mariachiespeueladeoro.com",
    siteName: "Mariachi Espuela de Oro Piura",
    images: [
      {
        url: ASSETS.brand.preview,
        width: 1200,
        height: 630,
        alt: "Mariachi Espuela de Oro - Serenatas en Piura",
        type: "image/png",
      },
      {
        url: ASSETS.brand.preview,
        width: 800,
        height: 600,
        alt: "Mariachi Espuela de Oro",
        type: "image/png",
      },
    ],
    type: "website",
    locale: "es_PE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mariachi Espuela de Oro | Serenatas en Piura",
    description:
      "Calidad, Puntualidad y Elegancia. Serenatas para toda ocasión.",
    images: [ASSETS.brand.logo_text],
    creator: "@mariachiespeueladeoropiura",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: "cover",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "theme-color": "#0a0a0a",
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
