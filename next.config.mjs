const nextConfig = {
  output: "export", // export estático
  trailingSlash: true,
  images: {
    unoptimized: true, // GitHub Pages no tiene el optimizador de next/image
  },
};

export default nextConfig;
