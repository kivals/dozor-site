import Image from "next/image";
import { LeadModalTrigger } from "@/components/forms/LeadModalTrigger";
import type { ServiceProcess as ServiceProcessContent } from "@/content/types";

export function ServiceProcess({
  process,
}: {
  process: ServiceProcessContent;
}) {
  return (
    <section className="relative isolate overflow-hidden rounded-[20px] bg-navy px-4 py-10 sm:px-6 lg:px-16 lg:py-[55px]">
      {/* Soft blue glow behind the cards */}
      <div className="pointer-events-none absolute top-8 left-1/4 -z-10 hidden h-[473px] w-[1026px] rounded-full bg-[#7eb4f8] opacity-30 blur-[300px] lg:block" />

      <div className="flex flex-col gap-10 lg:flex-row lg:gap-10">
        <div className="flex flex-col gap-5 lg:w-[333px] lg:shrink-0">
          <div className="flex flex-col gap-2.5">
            <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
              {process.eyebrow}
            </p>
            <h2 className="text-3xl leading-tight font-medium text-white">
              {process.title}
            </h2>
            <p className="text-base text-white">{process.subtitle}</p>
          </div>
          <LeadModalTrigger className="inline-flex w-fit items-center gap-[18px] rounded-[30px] bg-accent px-[30px] py-[15px] text-base text-white transition hover:bg-accent/90">
            {process.cta}
            <Image src="/hero/arrow.svg" alt="" width={12} height={7} />
          </LeadModalTrigger>
        </div>

        <ol className="grid gap-10 pt-5 sm:grid-cols-2 lg:flex-1 lg:grid-cols-3 lg:gap-x-5">
          {process.steps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-[25px] bg-white px-[30px] pt-[52px] pb-[30px] lg:min-h-[189px]"
            >
              <span className="absolute -top-5 left-[22px] flex size-[60px] items-center justify-center rounded-full bg-accent text-[33px] leading-none font-semibold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold text-black">{step.title}</h3>
              <p className="mt-1 text-base text-black">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
