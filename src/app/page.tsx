import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ObjectTypes } from "@/components/sections/ObjectTypes";
import { Services } from "@/components/sections/Services";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col gap-5 lg:gap-12">
      <Hero />
      {/* About + ObjectTypes — одна непрерывная светлая зона (без зазора) */}
      <div className="flex flex-col">
        <About />
        <ObjectTypes />
      </div>
      <Services />
      {/* Секции добавляются по блокам: Principles,
          Clients, ContactSection — mobile-first. */}
    </main>
  );
}
