"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import { objectTypes } from "@/content/object-types";
import type { ObjectType } from "@/content/types";
import { CarouselArrows } from "@/components/ui/CarouselArrows";

export function ObjectTypes({
  items = objectTypes.items,
  className = "rounded-b-[28px] bg-surface lg:rounded-b-[40px]",
}: {
  items?: ObjectType[];
  className?: string;
}) {
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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect(emblaApi);
    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className={`px-4 py-10 sm:px-6 lg:px-16 lg:py-10 ${className}`}>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
        <div className="flex flex-col gap-8 lg:w-[314px] lg:shrink-0">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
              {objectTypes.eyebrow}
            </p>
            <h2 className="text-3xl leading-tight font-medium text-black">
              {objectTypes.heading}
            </h2>
            <p className="text-base text-black">{objectTypes.subtitle}</p>
          </div>
          <CarouselArrows
            canPrev={canPrev}
            canNext={canNext}
            onPrev={scrollPrev}
            onNext={scrollNext}
            label="типы объектов"
            className="hidden lg:flex"
          />
        </div>

        <div
          ref={emblaRef}
          className="-mx-4 min-w-0 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:flex-1 lg:px-0"
        >
          <ul className="flex gap-5">
            {items.map((item) => (
              <li
                key={item.slug}
                className="min-w-0 shrink-0 grow-0 basis-[82%] sm:basis-[46%] lg:basis-[calc((100%-40px)/3)]"
              >
                <article className="flex h-full flex-col overflow-hidden rounded-[20px] bg-white">
                  <div className="relative aspect-[351/265] w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 340px, 82vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1 px-6 pt-5 pb-6">
                    <h3 className="text-[22px] leading-tight font-semibold text-black">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-snug text-black">
                      {item.description}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>

        <CarouselArrows
          canPrev={canPrev}
          canNext={canNext}
          onPrev={scrollPrev}
          onNext={scrollNext}
          label="типы объектов"
          className="justify-center lg:hidden"
        />
      </div>
    </section>
  );
}
