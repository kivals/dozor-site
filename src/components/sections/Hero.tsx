import Image from "next/image";
import Link from "next/link";
import { hero } from "@/content/hero";

function MessengerBadge() {
  return (
    <div className="flex shrink-0 flex-col gap-2 rounded-tl-2xl rounded-bl-2xl bg-white p-2">
      <span className="relative block size-8 overflow-hidden rounded-full">
        <Image
          src="/hero/messenger-1.png"
          alt="Написать нам"
          fill
          className="object-cover"
        />
        <Image
          src="/hero/glyph.svg"
          alt=""
          width={18}
          height={18}
          className="absolute inset-0 m-auto"
        />
      </span>
      <Image
        src="/hero/messenger-2.svg"
        alt="Написать в Telegram"
        width={32}
        height={32}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden rounded-b-[28px] bg-navy px-4 pt-8 pb-10 sm:px-6 sm:pt-10 sm:pb-12 lg:flex lg:min-h-[682px] lg:flex-col lg:justify-center lg:rounded-b-[40px] lg:px-16 lg:py-16">
      {/* Desktop: full-bleed background photo behind the text */}
      <Image
        src="/hero/background.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hidden object-cover lg:block"
      />
      <div className="absolute inset-0 hidden lg:block lg:bg-gradient-to-r lg:from-navy lg:via-navy/60 lg:to-navy/0" />

      <div className="relative flex flex-col gap-6 lg:max-w-xl lg:gap-10">
        <div className="flex flex-col gap-3 text-white">
          <h1 className="text-3xl leading-tight font-semibold text-balance sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            {hero.title}
          </h1>
          <p className="text-base text-white/80 sm:text-lg lg:text-xl">
            {hero.subtitle}
          </p>
        </div>

        <Link
          href={hero.cta.href}
          className="inline-flex w-fit items-center gap-4 rounded-full bg-accent px-7 py-4 text-sm font-medium text-white transition hover:bg-accent/90 sm:text-base"
        >
          {hero.cta.label}
          <Image src="/hero/arrow.svg" alt="" width={12} height={7} />
        </Link>

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

        <ul className="flex flex-col gap-6 sm:flex-row sm:gap-10">
          {hero.features.map((feature) => (
            <li key={feature.title} className="flex items-start gap-3">
              <Image
                src="/hero/shield.svg"
                alt=""
                width={31}
                height={36}
                className="mt-1 shrink-0"
              />
              <div className="flex flex-col gap-0.5">
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

      <div className="absolute top-28 right-0 sm:top-32 lg:hidden">
        <MessengerBadge />
      </div>
      <div className="absolute top-6 right-0 hidden lg:top-1/3 lg:block">
        <MessengerBadge />
      </div>
    </section>
  );
}
