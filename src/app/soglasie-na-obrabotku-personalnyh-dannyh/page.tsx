import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { LegalDocument } from "@/components/sections/LegalDocument";
import { consent } from "@/content/legal";

export const metadata: Metadata = {
  title: consent.title,
  description:
    "Условия согласия на обработку персональных данных, которое пользователь предоставляет при отправке формы на сайте ГК «Дозор».",
  alternates: { canonical: "/soglasie-na-obrabotku-personalnyh-dannyh" },
};

export default function ConsentPage() {
  return (
    <>
      <main className="flex-1">
        <LegalDocument document={consent} />
      </main>
      <Footer />
    </>
  );
}
