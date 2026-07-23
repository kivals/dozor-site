import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Политика конфиденциальности
        </h1>
        <p className="mt-4 text-neutral-600">
          Текст политики обработки персональных данных (152-ФЗ) добавляется
          позже.
        </p>
      </section>
    </main>
  );
}
