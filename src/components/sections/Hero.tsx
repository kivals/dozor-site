import Image from "next/image";
import { hero } from "@/content/hero";
import { LeadModalTrigger } from "@/components/forms/LeadModalTrigger";
import { MessengerBadge } from "@/components/ui/MessengerBadge";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden rounded-b-[28px] bg-navy pt-[calc(var(--header-h)+1rem)] pb-10 sm:pb-12 lg:flex lg:min-h-[682px] lg:flex-col lg:rounded-b-[40px] lg:pt-[169px] lg:pb-[66px]">
      {/* Design is fixed at 1512px: cap the background layer so it doesn't stretch (and distort the photo's crop) on wider screens */}
      <div className="absolute inset-0 mx-auto hidden max-w-[1512px] overflow-hidden lg:block">
        {/* Photo offset to the right and bleeding past the edges, as in the design */}
        <div className="absolute -top-1.5 right-[-2.6%] left-[19.1%] h-[705px]">
          <Image
            src="/hero/background.jpg"
            alt=""
            fill
            priority
            quality={85}
            sizes="1512px"
            className="object-cover"
          />
        </div>
        {/* Gradients from the design: left fade-out + darkening under the header */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy from-24% to-transparent to-[58%]" />
        <div className="absolute inset-x-0 top-0 h-[152px] bg-gradient-to-b from-navy to-transparent" />

        <div className="absolute top-1/3 right-0">
          <MessengerBadge />
        </div>
      </div>

      {/* Background bleeds past the section, the content stays inside the page container */}
      <div className="container-page relative px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col gap-6 lg:max-w-xl lg:gap-0">
          <div className="flex flex-col gap-3 text-white">
            <h1 className="text-3xl leading-tight font-semibold text-balance sm:text-4xl lg:text-5xl lg:leading-[1.1]">
              {hero.title}
            </h1>
            <p className="text-base text-white/80 sm:text-lg lg:text-xl">
              {hero.subtitle}
            </p>
          </div>

          <LeadModalTrigger className="inline-flex w-fit items-center gap-4 rounded-full bg-accent px-7 py-4 text-sm font-medium text-white transition hover:bg-accent/90 sm:text-base lg:mt-[34px]">
            {hero.cta.label}
            <Image src="/hero/arrow.svg" alt="" width={12} height={7} />
          </LeadModalTrigger>

          {/* Mobile/tablet: full-bleed photo strip, not a rounded inset card */}
          <div className="relative -mx-4 h-56 overflow-hidden rounded-b-[20px] sm:-mx-6 sm:h-64 lg:hidden">
            <Image
              src="/hero/background.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 top-0 h-3/4 bg-gradient-to-b from-navy to-transparent" />
          </div>

          <ul className="flex flex-col gap-6 sm:flex-row sm:gap-10 lg:mt-[74px] lg:gap-3">
            {hero.features.map((feature) => (
              <li key={feature.title} className="flex items-start gap-3">
                <Image
                  src="/hero/shield.svg"
                  alt=""
                  width={31}
                  height={36}
                  className="mt-1 shrink-0"
                />
                <div className="flex flex-col gap-0.5 lg:max-w-[224px]">
                  <p className="text-base leading-snug font-semibold text-accent">
                    {feature.title}
                  </p>
                  <p className="text-sm leading-snug text-white/70">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute top-[calc(var(--header-h)+5rem)] right-0 lg:hidden">
        <MessengerBadge />
      </div>
    </section>
  );
}
