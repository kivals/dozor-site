import Image from "next/image";
import Link from "next/link";
import { services, servicesIntro } from "@/content/services";
import { ServicesSlider } from "./ServicesSlider";

export function Services() {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-16 lg:py-10">
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
          <Link
            href={servicesIntro.cta.href}
            className="inline-flex w-fit items-center gap-4 rounded-full bg-accent px-7 py-4 text-base text-white transition hover:bg-accent/90"
          >
            {servicesIntro.cta.label}
            <Image src="/hero/arrow.svg" alt="" width={12} height={7} />
          </Link>
        </div>

        <ServicesSlider services={services} />
      </div>
    </section>
  );
}
