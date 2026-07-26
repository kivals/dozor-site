import { about } from "@/content/about";
import { stats } from "@/content/stats";

export function About() {
  return (
    <section id="about" className="rounded-t-[28px] bg-surface px-6 pt-14 pb-10 lg:rounded-t-[40px] lg:px-16 lg:pt-20 lg:pb-10">
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-[150px]">
        <div className="flex max-w-[656px] flex-col gap-3">
          <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            {about.eyebrow}
          </p>
          <h2 className="text-3xl leading-tight font-medium text-black">
            {about.heading}
          </h2>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-black">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-x-8 gap-y-8 lg:w-[520px] lg:shrink-0 lg:gap-x-12">
          {stats.map((stat) => (
            <li key={stat.value} className="flex flex-col gap-1">
              <p className="text-[40px] leading-tight font-semibold text-accent">
                {stat.value}
              </p>
              <p className="text-base leading-snug text-black">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
