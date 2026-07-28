import Image from "next/image";
import { contact } from "@/content/contact";
import { ContactForm } from "@/components/forms/ContactForm";

export function ContactSection() {
  return (
    <section id="contacts" className="py-6 lg:py-10">
      {/* Background is full-bleed, the content stays inside the page container */}
      <div className="relative overflow-hidden rounded-[20px] bg-navy pt-10 lg:rounded-[40px] lg:py-14">
        {/* Soft glow accent */}
        <div className="pointer-events-none absolute -top-40 -left-20 hidden h-[413px] w-[895px] rounded-full bg-[#7eb4f8] opacity-25 blur-[160px] lg:block" />

        <div className="container-page relative px-5 lg:px-16">
          <div className="relative z-10 flex flex-col gap-8 lg:max-w-[640px]">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
                {contact.eyebrow}
              </p>
              <h2 className="text-3xl leading-tight font-medium text-white">
                {contact.title}
              </h2>
              <p className="text-base text-white">{contact.subtitle}</p>
            </div>

            <ContactForm />
          </div>

          {/* Guards photo: full-bleed under the form on mobile, side image on desktop */}
          <Image
            src="/contact/guards.png"
            alt="Сотрудники охраны ГК «Дозор»"
            width={590}
            height={396}
            sizes="(min-width: 1024px) 590px, 100vw"
            priority={false}
            className="pointer-events-none relative z-0 -mx-5 mt-4 w-[calc(100%+2.5rem)] max-w-none object-contain lg:absolute lg:inset-auto lg:right-0 lg:bottom-0 lg:m-0 lg:h-full lg:w-auto lg:object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
