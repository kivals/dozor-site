import { services, servicesIntro } from "@/content/services";
import type { Service } from "@/content/types";
import { ServicesSlider } from "./ServicesSlider";

export function Services({ items = services }: { items?: Service[] }) {
  return (
    <section id="services" className="px-4 py-6 sm:px-6 lg:px-16 lg:py-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
        <div className="flex flex-col gap-5 lg:w-[333px] lg:shrink-0">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
              {servicesIntro.eyebrow}
            </p>
            <h2 className="text-3xl leading-tight font-medium text-black">
              {servicesIntro.title}
            </h2>
            <p className="text-base text-black">{servicesIntro.subtitle}</p>
          </div>
        </div>

        <ServicesSlider services={items} />
      </div>
    </section>
  );
}
