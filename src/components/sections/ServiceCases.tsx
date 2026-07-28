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

      <div ref={emblaRef} className="mt-8 overflow-hidden lg:mt-[43px]">
        <ul className="flex">
          {cases.items.map((item) => (
            <li
              key={item.slug}
              className="min-w-0 shrink-0 grow-0 basis-full rounded-[20px] bg-white p-[30px] lg:min-h-[519px] lg:p-[34px]"
            >
              <div className="flex flex-col gap-8 lg:h-full lg:flex-row lg:gap-10">
                <div className="flex flex-col justify-between gap-8 lg:w-[41%] lg:shrink-0 lg:pl-2.5">
                  <div className="flex max-w-[349px] flex-col gap-[5px]">
                    <h3 className="text-3xl leading-tight font-medium text-black">
                      {item.title}
                    </h3>
                    <p className="text-base text-black">{item.description}</p>
                  </div>

                  <ul className="flex flex-wrap gap-3">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-surface px-4 py-[7px] text-xs font-semibold text-navy"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <CarouselArrows
                    canPrev={selected > 0}
                    canNext={selected < snaps.length - 1}
                    onPrev={() => emblaApi?.scrollPrev()}
                    onNext={() => emblaApi?.scrollNext()}
                    label="кейсы"
                  />
                </div>

                <div className="relative aspect-[791/455] overflow-hidden rounded-[20px] lg:h-auto lg:flex-1">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
