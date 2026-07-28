import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ObjectTypes } from "@/components/sections/ObjectTypes";
import { Services } from "@/components/sections/Services";
import { Control } from "@/components/sections/Control";
import { Clients } from "@/components/sections/Clients";
import { ContactSection } from "@/components/sections/ContactSection";
import { Vacancies } from "@/components/sections/Vacancies";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col gap-5 lg:gap-12">
      {/* Hero is full-bleed; everything below is capped at the design width. */}
      <Hero />
      <div className="container-page flex flex-col gap-5 lg:gap-12">
        {/* About + ObjectTypes — одна непрерывная светлая зона (без зазора) */}
        <div className="flex flex-col">
          <About />
          <ObjectTypes />
        </div>
        <Services />
        <Control />
        <Clients />
      </div>
      <ContactSection />
      <div className="container-page flex flex-col gap-5 lg:gap-12">
        <Vacancies />
      </div>
    </main>
  );
}
