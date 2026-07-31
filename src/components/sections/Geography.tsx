import Image from "next/image";
import { geography } from "@/content/geography";
import { LeadModalTrigger } from "@/components/forms/LeadModalTrigger";

function CityTicker() {
  return (
    <div className="overflow-hidden rounded-[20px] bg-navy py-6">
      <div className="animate-marquee flex w-max gap-[61px] pl-[61px]">
        {/* Duplicated so the -50% shift loops without a visible seam. */}
        {[0, 1].map((pass) => (
          <ul
            key={pass}
            className="flex shrink-0 gap-[61px]"
            aria-hidden={pass === 1}
          >
            {geography.cities.map((city) => (
              <li key={city} className="text-base whitespace-nowrap text-white">
                {city}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export function Geography() {
  return (
    <section className="relative rounded-[20px] bg-surface px-4 pt-8 pb-6 sm:px-6 lg:px-[59px] lg:pt-[62px] lg:pb-[125px]">
      <div className="relative flex flex-col gap-7 lg:w-[568px]">
        <div className="flex flex-col gap-2.5">
          <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            {geography.eyebrow}
          </p>
          <h2 className="text-3xl leading-tight font-medium text-black">
            {geography.title}
          </h2>
          <p className="text-base text-black">{geography.description}</p>
        </div>

        <LeadModalTrigger className="inline-flex w-fit items-center gap-[18px] rounded-[30px] bg-accent px-[30px] py-[15px] text-base text-white transition hover:bg-accent/90">
          {geography.cta}
          <Image src="/hero/arrow.svg" alt="" width={12} height={7} />
        </LeadModalTrigger>

        <ul className="flex flex-col gap-6 sm:flex-row sm:gap-3">
          {geography.features.map((feature) => (
            <li key={feature.title} className="flex gap-[19px] sm:flex-1">
              <Image
                src="/icons/shield-check.svg"
                alt=""
                width={31}
                height={36}
                className="h-9 w-auto shrink-0"
              />
              <div className="flex flex-col gap-[11px]">
                <p className="text-base leading-tight font-medium text-accent">
                  {feature.title}
                </p>
                <p className="text-sm leading-tight text-black">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop: the map bleeds above the card, as in the design. */}
      <Image
        src="/images/geography-map.png"
        alt="Карта Москвы и Московской области с объектами под охраной"
        width={858}
        height={658}
        sizes="(min-width: 1024px) 845px, 100vw"
        className="relative z-0 mx-auto mt-6 w-full max-w-[420px] lg:absolute lg:-bottom-1 lg:right-[11px] lg:mx-0 lg:mt-0 lg:w-[845px] lg:max-w-none"
      />

      {/* Sits above the map, which runs under it as in the design. */}
      <div className="relative z-10 mt-8 lg:absolute lg:inset-x-0 lg:bottom-7 lg:mt-0">
        <CityTicker />
      </div>
    </section>
  );
}
