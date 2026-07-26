"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";

/** Embla setup shared by the sliders: exposes snaps and edge state. */
export function useCarousel(options?: EmblaOptionsType) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", ...options });
  const [snaps, setSnaps] = useState<number[]>([]);
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelected(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);
    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return [emblaRef, emblaApi, snaps, selected] as const;
}
