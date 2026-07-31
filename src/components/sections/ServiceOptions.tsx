"use client";

import Image from "next/image";
import { useCarousel } from "@/components/ui/useCarousel";
import { CarouselArrows } from "@/components/ui/CarouselArrows";
import type { ServiceOptions as ServiceOptionsContent } from "@/content/types";

type Variant = "base" | "extra";

const cardStyles: Record<Variant, string> = {
  base: "bg-white",
  extra: "bg-navy",
};

const titleStyles: Record<Variant, string> = {
  base: "text-black",
  extra: "text-white",
};

const chipStyles: Record<Variant, string> = {
  base: "bg-navy text-white",
  extra: "bg-white text-navy",
};

const icons: Record<Variant, { src: string; width: number; height: number }> = {
  base: { src: "/services/options-base.svg", width: 25, height: 31 },
  extra: { src: "/services/options-extra.svg", width: 33, height: 31 },
};

function OptionsCard({
  variant,
  title,
  rows,
  className,
}: {
  variant: Variant;
  title: string;
  rows: string[][];
  className?: string;
}) {
  const icon = icons[variant];

  return (
    <div
      className={`flex flex-col gap-5 rounded-[20px] p-[30px] lg:px-5 ${cardStyles[variant]} ${className ?? ""}`}
    >
      <div className="flex items-start justify-between gap-4">
        <h3
          className={`text-2xl leading-tight font-semibold ${titleStyles[variant]}`}
        >
          {title}
        </h3>
        <div className="flex size-[61px] shrink-0 items-center justify-center rounded-[15px] bg-accent">
          <Image
            src={icon.src}
            alt=""
            width={icon.width}
            height={icon.height}
          />
        </div>
      </div>

      {/* Rows come from the design: odd rows sit flush left, even ones are centered. */}
      <ul className="flex flex-col gap-5">
        {rows.map((row, index) => (
          <li key={row[0]}>
            <ul
              className={`flex flex-wrap gap-2 ${
                index % 2 === 0 ? "lg:justify-start" : "lg:justify-center"
              }`}
            >
              {row.map((item) => (
                <li
                  key={item}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold ${chipStyles[variant]}`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServiceOptions({
  options,
}: {
  options: ServiceOptionsContent;
}) {
  // Cards slide on mobile and sit side by side from lg up, as in the design.
  const [emblaRef, emblaApi, snaps, selected] = useCarousel({
    containScroll: "trimSnaps",
    breakpoints: { "(min-width: 1024px)": { active: false } },
  });

  return (
    <section className="rounded-[20px] bg-surface px-4 py-10 sm:px-6 lg:px-16 lg:py-14">
      <div className="mb-8 flex flex-col gap-2.5 lg:mb-[46px]">
        <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
          {options.eyebrow}
        </p>
        <h2 className="text-3xl leading-tight font-medium text-black">
          {options.title}
        </h2>
      </div>

      <div ref={emblaRef} className="overflow-hidden lg:overflow-visible">
        <div className="flex items-stretch gap-4 lg:gap-6">
          <OptionsCard
            variant="base"
            title={options.base.title}
            rows={options.base.rows}
            className="min-w-0 shrink-0 grow-0 basis-full lg:basis-auto lg:flex-[709]"
          />
          <OptionsCard
            variant="extra"
            title={options.extra.title}
            rows={options.extra.rows}
            className="min-w-0 shrink-0 grow-0 basis-full lg:basis-auto lg:flex-[627]"
          />
        </div>
      </div>

      <CarouselArrows
        canPrev={selected > 0}
        canNext={selected < snaps.length - 1}
        onPrev={() => emblaApi?.scrollPrev()}
        onNext={() => emblaApi?.scrollNext()}
        label="опции услуги"
        className="mt-8 justify-center lg:hidden"
      />
    </section>
  );
}
