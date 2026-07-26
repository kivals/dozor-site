import { control } from "@/content/control";
import { ControlBody } from "./ControlBody";

export function Control() {
  return (
    <section id="control" className="px-4 py-6 sm:px-6 lg:px-16 lg:py-10">
      <div className="overflow-hidden rounded-[28px] bg-surface px-4 py-8 sm:px-6 lg:rounded-[40px] lg:px-14 lg:py-14">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[420px_minmax(0,1fr)] lg:items-center lg:gap-x-12 lg:gap-y-8">
          <div className="flex flex-col gap-3 lg:col-start-1 lg:row-start-1">
            <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
              {control.eyebrow}
            </p>
            <h2 className="text-3xl leading-tight font-medium text-black">
              {control.title}
            </h2>
            <p className="text-base text-black">{control.subtitle}</p>
          </div>

          <ControlBody items={control.items} />
        </div>
      </div>
    </section>
  );
}
