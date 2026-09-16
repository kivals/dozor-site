import type { MetadataRoute } from "next";
import { env } from "@/lib/env";
import { homeUpdatedAt } from "@/content/company";
import { consent, privacyPolicy } from "@/content/legal";
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
      lastModified: new Date(privacyPolicy.updatedAt),
      priority: 0.3,
    },
    {
      url: `${base}/soglasie-na-obrabotku-personalnyh-dannyh`,
      lastModified: new Date(consent.updatedAt),
      priority: 0.3,
    },
  ];
}
