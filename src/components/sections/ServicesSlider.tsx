"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import type { Service } from "@/content/types";
import { CarouselArrows } from "@/components/ui/CarouselArrows";

const iconWidth: Record<string, number> = {
  "shield-check": 29,
  access: 48,
  "lock-shield": 31,
  search: 36,
  people: 43,
  camera: 50,
  fire: 36,
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/uslugi/${service.slug}`}
      className="group flex h-full flex-col gap-3 rounded-[20px] border border-surface p-[30px] transition-colors duration-500 hover:border-accent hover:bg-accent"
    >
      <Image
        src={`/services/${service.icon}.svg`}
        alt=""
        width={iconWidth[service.icon] ?? 36}
        height={36}
        className="h-9 w-auto shrink-0 self-start transition duration-500 group-hover:brightness-0 group-hover:invert"
      />
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg leading-snug font-semibold text-black transition-colors duration-500 group-hover:text-white">
          {service.title}
        </h3>
        <p className="text-base leading-snug text-black transition-colors duration-500 group-hover:text-white">
          {service.description}
        </p>
      </div>
    </Link>
  );
}

export function ServicesSlider({ services }: { services: Service[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }
    // Read initial edge state from Embla's imperative API once on mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect(emblaApi);
    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="flex min-w-0 flex-col gap-6 lg:flex-1">
      {/* Mobile/tablet: swipeable carousel */}
      <div
        ref={emblaRef}
        className="-mx-4 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden"
      >
        <ul className="flex gap-2.5">
          {services.map((service) => (
            <li key={service.slug} className="min-w-0 shrink-0 basis-[240px]">
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop: static grid */}
      <ul className="hidden gap-2.5 lg:grid lg:grid-cols-3">
        {services.map((service) => (
          <li key={service.slug}>
            <ServiceCard service={service} />
          </li>
        ))}
      </ul>

      <CarouselArrows
        canPrev={canPrev}
        canNext={canNext}
        onPrev={() => emblaApi?.scrollPrev()}
        onNext={() => emblaApi?.scrollNext()}
        label="услуги"
        className="justify-center lg:hidden"
      />
    </div>
  );
}
