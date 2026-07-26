import { clients } from "@/content/clients";
import { ClientsSlider } from "./ClientsSlider";

export function Clients() {
  return (
    <section id="clients" className="flex flex-col gap-10 px-4 py-6 sm:px-6 lg:px-16 lg:py-10">
      <div className="flex flex-col gap-3 lg:max-w-[640px]">
        <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
          {clients.eyebrow}
        </p>
        <h2 className="text-3xl leading-tight font-medium text-black">
          {clients.title}
        </h2>
        <p className="text-base leading-relaxed text-black">
          {clients.subtitle}
        </p>
      </div>

      <ClientsSlider clients={clients.items} />
    </section>
  );
}
