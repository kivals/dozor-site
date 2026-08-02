import Image from "next/image";
import Link from "next/link";
import { LeadModalTrigger } from "@/components/forms/LeadModalTrigger";
import { MessengerBadge } from "@/components/ui/MessengerBadge";
import type { Service } from "@/content/types";

export function ServiceHero({ service }: { service: Service }) {
  const hero = service.hero;

  return (
    <section className="relative px-4 pt-[calc(var(--header-h)+0.5rem)] sm:px-6 lg:px-7">
      <nav aria-label="Хлебные крошки" className="pb-3.5 lg:pl-12">
        <ol className="flex flex-wrap items-center gap-2 text-sm font-medium">
          <li>
            <Link href="/" className="text-accent transition hover:opacity-80">
              Главная
            </Link>
          </li>
          <li aria-hidden className="text-navy/30">
            |
          </li>
          <li>
            <Link
              href="/uslugi"
              className="text-accent transition hover:opacity-80"
            >
              Услуги
            </Link>
          </li>
          <li aria-current="page" className="text-navy/50">
            - {service.title}
          </li>
        </ol>
      </nav>

      <div className="relative isolate flex min-h-[420px] flex-col justify-center overflow-hidden rounded-[20px] bg-navy px-5 py-10 lg:min-h-[475px] lg:rounded-[40px] lg:px-[60px] lg:py-10">
        {hero && (
          // Desktop: photo keeps the design offset (329/-48 in a 1457x475 card);
          // mobile falls back to a plain cover fill
          <div className="absolute inset-0 lg:inset-auto lg:top-[-10.1%] lg:left-[22.6%] lg:h-[120.2%] lg:w-[98%]">
            <Image
              src={hero.image}
              alt=""
              fill
              priority
              quality={85}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        )}
        <div className="absolute inset-x-0 top-0 h-[152px] bg-gradient-to-b from-navy/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-navy/0 lg:from-24% lg:via-navy/50" />

        <div className="relative flex flex-col gap-6 lg:max-w-[650px] lg:gap-[34px]">
          <div className="flex flex-col gap-2.5">
            <h1 className="text-3xl leading-tight font-medium text-balance text-white sm:text-4xl lg:text-[50px] lg:leading-[55px]">
              {hero?.title ?? service.title}
            </h1>
            <p className="text-base text-white lg:text-xl">
              {hero?.description ?? service.description}
            </p>
          </div>

          <LeadModalTrigger className="inline-flex w-fit items-center gap-[18px] rounded-[30px] bg-accent px-[30px] py-[15px] text-base text-white transition hover:bg-accent/90">
            {hero?.cta ?? "Получить расчет"}
            <Image src="/hero/arrow.svg" alt="" width={12} height={7} />
          </LeadModalTrigger>
        </div>
      </div>

      <div className="absolute top-1/2 right-0 hidden lg:block">
        <MessengerBadge />
      </div>
    </section>
  );
}
