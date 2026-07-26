import Image from "next/image";
import { vacancies } from "@/content/vacancies";

export function Vacancies() {
  return (
    <section
      id="vacancies"
      className="px-4 py-6 sm:px-6 lg:px-16 lg:py-10"
    >
      <div className="flex flex-col gap-8 lg:gap-10">
        <div className="flex flex-col gap-6 lg:max-w-[572px] lg:gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
              {vacancies.eyebrow}
            </p>
            <h2 className="text-3xl leading-tight font-medium text-black">
              {vacancies.title}
            </h2>
            <p className="text-base leading-relaxed text-black">
              {vacancies.subtitle}
            </p>
          </div>

          <a
            href={vacancies.cta.href}
            className="inline-flex w-fit items-center gap-4 rounded-full bg-accent px-7 py-4 text-base text-white transition hover:bg-accent/90"
          >
            {vacancies.cta.label}
            <Image src="/hero/arrow.svg" alt="" width={12} height={7} />
          </a>
        </div>

        <ul className="grid grid-cols-2 gap-2.5 lg:grid-cols-3">
          {vacancies.benefits.map((benefit) => (
            <li
              key={benefit.icon}
              className="flex flex-col gap-3 rounded-[20px] border border-surface p-5 lg:rounded-[30px] lg:p-[30px]"
            >
              <Image
                src={`/vacancies/${benefit.icon}.svg`}
                alt=""
                width={benefit.width}
                height={36}
                className="h-9 w-auto shrink-0 self-start"
              />
              <p className="text-base leading-snug font-semibold text-black">
                {benefit.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
