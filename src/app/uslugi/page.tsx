import type { Metadata } from "next";
import { services } from "@/content/services";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Услуги",
  description:
    "Физическая охрана объектов, пультовая охрана, видеонаблюдение и мониторинг.",
};

export default function ServicesPage() {
  return (
    <>
      <main className="flex-1">
        <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Услуги
          </h1>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.slug} className="rounded-2xl border p-6">
                <h2 className="text-lg font-semibold">{service.title}</h2>
                <p className="mt-2 text-sm text-neutral-600">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
