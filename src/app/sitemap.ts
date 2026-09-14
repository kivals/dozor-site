import type { MetadataRoute } from "next";
import { env } from "@/lib/env";
import { homeUpdatedAt, privacyUpdatedAt } from "@/content/company";
import { publishedServices } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = env.NEXT_PUBLIC_SITE_URL;

  return [
    { url: base, lastModified: new Date(homeUpdatedAt), priority: 1 },
    ...publishedServices.map((service) => ({
      url: `${base}/uslugi/${service.slug}`,
      lastModified: service.updatedAt ? new Date(service.updatedAt) : undefined,
      priority: 0.8,
    })),
    {
      url: `${base}/politika-konfidencialnosti`,
      lastModified: new Date(privacyUpdatedAt),
      priority: 0.3,
    },
  ];
}
