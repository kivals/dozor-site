"use client";

import Image from "next/image";
import type { Client } from "@/content/types";
import { useCarousel } from "@/components/ui/useCarousel";
import { useMediaQuery } from "@/components/ui/useMediaQuery";

/** Logos per pagination page — matches the seven-per-view desktop strip. */
const PAGE_SIZE = 7;
/** Mobile pages are a 3×2 grid. */
const MOBILE_PAGE_SIZE = 6;

function ClientLogo({ client }: { client: Client }) {
  return (
    <Image
      src={`/clients/${client.logo}.png`}
      alt={client.name}
      width={client.width}
      height={80}
      className="h-20 w-auto max-w-full object-contain grayscale transition-[filter] duration-500 hover:grayscale-0"
    />
  );
}

function Dots({
  count,
  selected,
  onSelect,
}: {
  count: number;
  selected: number;
  onSelect: (index: number) => void;
}) {
  if (count < 2) {
    return null;
  }
  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onSelect(index)}
          aria-label={`Слайд ${index + 1}`}
          aria-current={index === selected}
          className={`h-2.5 rounded-full transition-all ${
            index === selected ? "w-4 bg-accent" : "w-2.5 bg-navy/70"
          }`}
        />
      ))}
    </div>
  );
}

/** Mobile: pages of 3×2 logos. */
function ClientPages({ clients }: { clients: Client[] }) {
  const [emblaRef, emblaApi, snaps, selected] = useCarousel();
  const pages = Array.from(
    { length: Math.ceil(clients.length / MOBILE_PAGE_SIZE) },
    (_, page) =>
      clients.slice(page * MOBILE_PAGE_SIZE, (page + 1) * MOBILE_PAGE_SIZE),
  );

  return (
    <>
      <div ref={emblaRef} className="-mx-4 overflow-hidden sm:-mx-6">
        <ul className="flex">
          {pages.map((page, index) => (
            <li key={index} className="flex-[0_0_100%] px-4 sm:px-6">
              <div className="grid grid-cols-3 items-center justify-items-center gap-x-4 gap-y-12">
                {page.map((client) => (
                  <ClientLogo key={client.logo} client={client} />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Dots
        count={snaps.length}
        selected={selected}
        onSelect={(index) => emblaApi?.scrollTo(index)}
      />
    </>
  );
}

/** Desktop: seven logos per view, scrolled one at a time, dots mark pages. */
function ClientStrip({ clients }: { clients: Client[] }) {
  const [emblaRef, emblaApi, snaps, selected] = useCarousel({ loop: true });

  return (
    <>
      <div ref={emblaRef} className="overflow-hidden">
        <ul className="-ml-10 flex items-center">
          {clients.map((client) => (
            <li
              key={client.logo}
              className="flex flex-[0_0_14.285%] justify-center pl-10"
            >
              <ClientLogo client={client} />
            </li>
          ))}
        </ul>
      </div>

      <Dots
        count={Math.ceil(snaps.length / PAGE_SIZE)}
        selected={Math.floor(selected / PAGE_SIZE)}
        onSelect={(index) => emblaApi?.scrollTo(index * PAGE_SIZE)}
      />
    </>
  );
}

export function ClientsSlider({ clients }: { clients: Client[] }) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="flex flex-col gap-8">
      {isDesktop ? (
        <ClientStrip clients={clients} />
      ) : (
        <ClientPages clients={clients} />
      )}
    </div>
  );
}
