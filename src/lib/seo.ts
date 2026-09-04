import type { Metadata } from "next";
import { company } from "@/content/company";
import { env, noindex } from "./env";

const siteUrl = env.NEXT_PUBLIC_SITE_URL;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.legalName} — ${company.slogan}`,
    template: `%s — ${company.name}`,
  },
  description:
    "Профессиональная охрана коммерческих и промышленных объектов | Физическая и пультовая охрана, видеонаблюдение.",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: company.legalName,
    url: siteUrl,
  },
  ...(noindex && { robots: { index: false, follow: false } }),
};

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    url: siteUrl,
    telephone: company.phone,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.address,
      addressCountry: "RU",
    },
  };
}
