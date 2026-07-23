import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // cacheComponents: true, // enable when 'use cache' is actually needed
};

export default nextConfig;
