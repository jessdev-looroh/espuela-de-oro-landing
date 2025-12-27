import type { MetadataRoute } from "next";

export const dynamic = "force-static"; // 👈 obligatorio con output: "export"

const BASE_URL = "https://mariachiespueladeoropiura.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
