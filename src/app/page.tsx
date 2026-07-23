import { company } from "@/content/company";

export default function HomePage() {
  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {company.slogan}
        </h1>
        <p className="mt-4 max-w-2xl text-base text-neutral-600 sm:text-lg">
          {company.legalName} — профессиональная команда с многолетним опытом
          организации охраны объектов.
        </p>
      </section>
      {/* Секции добавляются по блокам: Hero, About, Services, Principles,
          Clients, ContactSection — mobile-first. */}
    </main>
  );
}
