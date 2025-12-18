/** @type {import('next').NextConfig} */
const repo = "ESPUELA_DE_ORO_WEB_APP"; // 👈 cambia por el nombre EXACTO del repo

const nextConfig = {
  output: "export",           // export estático
  basePath: `/${repo}`,       // para que funcione bajo /mi-web
  assetPrefix: `/${repo}/`,
  trailingSlash: true,

  images: {
    unoptimized: true,        // GitHub Pages no tiene el optimizador de next/image
  },
};

export default nextConfig;y
