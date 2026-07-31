"use client";

import Image from "next/image";
import { useCarousel } from "@/components/ui/useCarousel";
import { CarouselArrows } from "@/components/ui/CarouselArrows";
import type { ServiceCases as ServiceCasesContent } from "@/content/types";

export function ServiceCases({ cases }: { cases: ServiceCasesContent }) {
  const [emblaRef, emblaApi, snaps, selected] = useCarousel({
    containScroll: "trimSnaps",
  });

  return (
    <section className="rounded-[20px] bg-surface px-4 py-10 sm:px-6 lg:px-16 lg:py-[42px]">
      <div className="flex flex-col gap-2.5">
        <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
          {cases.eyebrow}
        </p>
        <h2 className="text-3xl leading-tight font-medium text-black">
          {cases.title}
        </h2>
      </div>

      <CarouselArrows
        canPrev={selected > 0}
        canNext={selected < snaps.length - 1}
        onPrev={() => emblaApi?.scrollPrev()}
        onNext={() => emblaApi?.scrollNext()}
        label="кейсы"
        className="mt-5"
      />

      <div ref={emblaRef} className="mt-6 overflow-hidden lg:mt-[30px]">
        {/* Cards only share a height from lg up, where the design fixes it. */}
        <ul className="flex items-start gap-6 lg:items-stretch">
          {cases.items.map((item) => (
            <li
              key={item.slug}
              className="flex min-w-0 shrink-0 grow-0 basis-[85%] flex-col gap-6 rounded-[20px] bg-white p-[29px] sm:basis-[60%] lg:basis-[calc(50%-12px)]"
            >
              <div className="flex flex-col gap-[5px]">
                <h3 className="text-[25px] leading-[30px] font-medium text-black">
                  {item.title}
                </h3>
                <p className="text-base leading-[22px] text-black">
                  {item.description}
                </p>
              </div>

              <div className="relative aspect-[625/294] w-full overflow-hidden rounded-[20px] lg:mt-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
