"use client";

import { useCallback, useEffect, useState } from "react";
import type { ComponentType } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import type { ControlItem } from "@/content/types";
import { CarouselArrows } from "@/components/ui/CarouselArrows";
import { ControlVisual } from "./ControlVisual";
import {
  BarrierIcon,
  CameraIcon,
  PedestrianIcon,
  GuardIcon,
  BellIcon,
  DocumentIcon,
} from "./control-icons";

const cardIcon: Record<string, ComponentType<{ className?: string }>> = {
  dostup: BarrierIcon,
  videonablyudenie: CameraIcon,
  patrulirovanie: PedestrianIcon,
  inspektirovanie: GuardIcon,
  reagirovanie: BellIcon,
  otchetnost: DocumentIcon,
};

function ControlCard({ item }: { item: ControlItem }) {
  const Icon = cardIcon[item.icon] ?? BarrierIcon;
  return (
    <div className="flex h-full items-center rounded-[30px] bg-white p-[30px]">
      <div className="flex items-start gap-6">
        <Icon className="h-14 w-auto shrink-0 text-accent" />
        <div className="flex flex-col gap-1.5">
          <h3 className="text-lg leading-snug font-semibold text-black">
            {item.title}
          </h3>
          <p className="text-base leading-snug text-black">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function ControlBody({ items }: { items: ControlItem[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }
    // Sync initial state from Embla's imperative API once on mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect(emblaApi);
    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <>
      <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <ControlVisual
          activeIndex={selectedIndex}
          onSelect={(index) => emblaApi?.scrollTo(index)}
        />
      </div>

      <div className="flex flex-col gap-6 lg:col-start-1 lg:row-start-2">
        <div
          ref={emblaRef}
          className="-mx-4 -my-8 overflow-hidden px-4 py-8 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
        >
          <ul className="flex gap-2.5">
            {items.map((item) => (
              <li
                key={item.title}
                className="min-w-0 shrink-0 basis-full"
              >
                <ControlCard item={item} />
              </li>
            ))}
          </ul>
        </div>

        <CarouselArrows
          canPrev={canPrev}
          canNext={canNext}
          onPrev={() => emblaApi?.scrollPrev()}
          onNext={() => emblaApi?.scrollNext()}
          label="контроль объектов"
          className="justify-center lg:justify-start"
        />
      </div>
    </>
  );
}
