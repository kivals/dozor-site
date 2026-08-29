"use client";

import Image from "next/image";
import { reviews } from "@/content/reviews";
import type { Review } from "@/content/types";
import { useCarousel } from "@/components/ui/useCarousel";
import { CarouselArrows } from "@/components/ui/CarouselArrows";

export function Reviews({ items = reviews.items }: { items?: Review[] }) {
  const [emblaRef, emblaApi, snaps, selected] = useCarousel({
    containScroll: "trimSnaps",
  });

  return (
    <section className="px-4 py-6 sm:px-6 lg:px-16 lg:py-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-5">
        <div className="flex flex-col gap-5 lg:w-[333px] lg:shrink-0">
          <div className="flex flex-col gap-2.5">
            <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
              {reviews.eyebrow}
            </p>
            <h2 className="text-3xl leading-tight font-medium text-black">
              {reviews.title}
            </h2>
            <p className="text-base text-black">{reviews.subtitle}</p>
          </div>

          <CarouselArrows
            canPrev={selected > 0}
            canNext={selected < snaps.length - 1}
            onPrev={() => emblaApi?.scrollPrev()}
            onNext={() => emblaApi?.scrollNext()}
            label="отзывы"
          />
        </div>

        <div ref={emblaRef} className="min-w-0 overflow-hidden lg:flex-1">
          <ul className="flex gap-2.5">
            {items.map((review) => (
              <li
                key={review.author}
                className="flex min-w-0 shrink-0 grow-0 basis-[85%] flex-col gap-5 rounded-[20px] border border-surface p-[30px] sm:basis-[60%] lg:basis-[calc(33.333%-7px)]"
              >
                <p className="flex items-center gap-2.5 text-[17px] font-bold text-accent">
                  <Image
                    src="/icons/star.svg"
                    alt=""
                    width={28}
                    height={27}
                    className="shrink-0"
                  />
                  {review.rating}
                </p>

                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-[5px]">
                    <p className="text-lg leading-[22px] font-semibold text-black">
                      {review.author}
                    </p>
                    <p className="text-base leading-[22px] text-accent">
                      {review.objectType}
                    </p>
                  </div>

                  <p className="text-sm leading-5 text-black">{review.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
