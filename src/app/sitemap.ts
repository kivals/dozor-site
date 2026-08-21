import type { MetadataRoute } from "next";
import { env } from "@/lib/env";
import { publishedServices } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = env.NEXT_PUBLIC_SITE_URL;
  const now = new Date();

  return [
    { url: base, lastModified: now, priority: 1 },
    ...publishedServices.map((service) => ({
      url: `${base}/uslugi/${service.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
  ];
}
