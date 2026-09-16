import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { LegalDocument } from "@/components/sections/LegalDocument";
import { privacyPolicy } from "@/content/legal";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description:
    "Порядок обработки и защиты персональных данных пользователей сайта ГК «Дозор» в соответствии с Федеральным законом №152-ФЗ.",
  alternates: { canonical: "/politika-konfidencialnosti" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="flex-1">
        <LegalDocument document={privacyPolicy} />
      </main>
      <Footer />
    </>
  );
}
