import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // 90 — for large hero/cover photos, where the default 75 shows artifacts
    qualities: [75, 85],
  },
  // cacheComponents: true, // enable when 'use cache' is actually needed
};

export default nextConfig;
