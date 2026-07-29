import { about } from "@/content/about";
import { stats } from "@/content/stats";

export function About({
  rounded = "rounded-t-[28px] lg:rounded-t-[40px]",
  highlights,
}: {
  rounded?: string;
  /** Replaces the stats grid with a numbered list (service pages). */
  highlights?: string[];
}) {
  return (
    <section
      id="about"
      className={`bg-surface px-6 pt-14 pb-10 lg:px-16 lg:pt-20 lg:pb-10 ${rounded}`}
    >
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-[150px]">
        <div className="flex max-w-[656px] flex-col gap-3">
          <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            {about.eyebrow}
          </p>
          <h2 className="text-3xl leading-tight font-medium text-black">
            {about.heading} —
          </h2>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-black">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        {highlights ? (
          <ol className="grid grid-cols-2 gap-x-[59px] gap-y-10 sm:grid-cols-3 lg:w-[562px] lg:shrink-0 lg:gap-y-[68px]">
            {highlights.map((highlight, index) => (
              <li
                key={highlight}
                className="flex flex-col gap-3 last:col-span-2 sm:last:col-span-2"
              >
                <p className="text-[40px] leading-none font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="text-base leading-snug text-black">{highlight}</p>
              </li>
            ))}
          </ol>
        ) : (
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
        )}
      </div>
    </section>
  );
}
