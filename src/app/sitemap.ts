import type { MetadataRoute } from "next";
import { env } from "@/lib/env";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = env.NEXT_PUBLIC_SITE_URL;
  const now = new Date();

  return [
    { url: base, lastModified: now, priority: 1 },
    { url: `${base}/uslugi`, lastModified: now, priority: 0.8 },
  ];
}
