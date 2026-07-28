import Image from "next/image";
import type { ServiceBenefits as ServiceBenefitsContent } from "@/content/types";

const iconWidth: Record<string, number> = {
  b2b: 32,
  location: 27,
  selection: 31,
  transparency: 36,
  license: 36,
  speed: 44,
};

export function ServiceBenefits({
  benefits,
}: {
  benefits: ServiceBenefitsContent;
}) {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-16 lg:py-10">
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
          {benefits.eyebrow}
        </p>
        <h2 className="text-3xl leading-tight font-medium text-black">
          {benefits.title}
        </h2>
        <p className="text-base text-black">{benefits.subtitle}</p>
      </div>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.items.map((item) => (
          <li
            key={item.title}
            className="flex flex-col gap-3 rounded-[20px] border border-[#eef3fa] bg-white p-[30px]"
          >
            <Image
              src={`/benefits/${item.icon}.svg`}
              alt=""
              width={iconWidth[item.icon] ?? 36}
              height={36}
              className="h-9 w-auto shrink-0 self-start"
            />
            <div className="flex flex-col gap-[5px]">
              <h3 className="text-lg font-semibold text-black">{item.title}</h3>
              <p className="text-base text-black">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
