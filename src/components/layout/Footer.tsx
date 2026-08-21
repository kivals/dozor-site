import Image from "next/image";
import Link from "next/link";
import { footer } from "@/content/footer";
import type { FeedbackContent } from "@/content/types";
import { YandexMap } from "@/components/maps/YandexMap";
import { PhoneBlock } from "@/components/ui/PhoneBlock";
import { ContactForm } from "@/components/forms/ContactForm";

function MailIcon() {
  return (
    <svg
      viewBox="0 0 20 16"
      fill="none"
      className="w-[18px] text-accent"
      aria-hidden
    >
      <rect
        x="1"
        y="1"
        width="18"
        height="14"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m2 3 8 5 8-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ContactsWithMap() {
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-20">
      <div className="flex flex-col gap-8 lg:w-[482px] lg:shrink-0">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
            {footer.eyebrow}
          </p>
          <p className="text-3xl leading-tight font-medium text-white">
            {footer.title}
          </p>
        </div>

        <div className="flex gap-7">
          {footer.socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              aria-label={social.name}
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src={social.icon}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10"
              />
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-8">
          <PhoneBlock />

          <div className="flex items-center gap-4">
            <Image src="/footer/location.svg" alt="" width={17} height={21} />
            <div>
              <p className="text-xs text-surface">адрес:</p>
              <p className="text-xl leading-snug font-medium text-white">
                {footer.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MailIcon />
            <div>
              <p className="text-xs text-surface">e-mail:</p>
              <a
                href={`mailto:${footer.email}`}
                className="text-xl font-medium text-white transition-colors hover:text-accent"
              >
                {footer.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="-mx-2.5 w-[calc(100%+1.25rem)] lg:mx-0 lg:w-auto lg:flex-1">
        <YandexMap
          query={footer.map.query}
          className="h-[328px] w-full rounded-[20px] lg:h-full lg:min-h-[400px]"
        />
      </div>
    </div>
  );
}

function FeedbackCard({
  feedback = footer.feedback,
}: {
  feedback?: FeedbackContent;
}) {
  return (
    <div className="relative overflow-hidden rounded-[20px] bg-surface px-5 py-8 sm:px-10 lg:rounded-[30px] lg:px-10 lg:py-5">
      {/* Soft glow accent from the design */}
      <div className="pointer-events-none absolute -top-40 left-1/4 hidden h-[413px] w-[895px] rounded-full bg-[#7eb4f8] opacity-25 blur-[160px] lg:block" />

      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-[150px]">
        <div className="flex flex-col gap-5 lg:flex-1">
          <div className="flex flex-col gap-2.5">
            <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
              {feedback.eyebrow}
            </p>
            <p className="text-3xl leading-tight font-medium text-black">
              {feedback.title}
            </p>
            <p className="max-w-[846px] text-base text-black">
              {feedback.subtitle}
            </p>
          </div>

          <ContactForm tone="light" submitLabel={feedback.submitLabel} />
        </div>

        <div className="flex flex-col gap-8 lg:w-[232px] lg:shrink-0">
          <div>
            <p className="text-xs text-accent">адрес:</p>
            <p className="text-xl leading-snug font-medium text-black">
              {footer.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>

          <div>
            <p className="text-xs text-accent">e-mail:</p>
            <a
              href={`mailto:${footer.email}`}
              className="text-xl font-medium text-black transition-colors hover:text-accent"
            >
              {footer.email}
            </a>
          </div>

          <div className="flex gap-7">
            {footer.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src={social.icon}
                  alt=""
                  width={41}
                  height={41}
                  className="h-10 w-10"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Footer({
  variant = "contacts",
  feedback,
}: {
  variant?: "contacts" | "feedback";
  feedback?: FeedbackContent;
}) {
  return (
    <footer>
      {/* Background is full-bleed, the content stays inside the page container */}
      <div className="rounded-t-[20px] bg-navy py-10 text-white lg:rounded-t-[40px] lg:py-14">
        <div className="container-page px-2.5 lg:px-16">
          {variant === "feedback" ? (
            <FeedbackCard feedback={feedback} />
          ) : (
            <ContactsWithMap />
          )}

          {/* Bottom: logo + nav + phone */}
          <div className="mt-12 flex flex-col gap-8 lg:mt-16 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            <div className="flex flex-col gap-3">
              <Image
                src="/footer/logo.png"
                alt="ГК «Дозор»"
                width={184}
                height={57}
                unoptimized
                className="h-auto w-[160px]"
              />
              <p className="text-xs text-white">{footer.copyright}</p>
            </div>

            <nav className="flex flex-wrap gap-x-8 gap-y-3">
              {footer.nav.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-base text-white transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="lg:shrink-0">
              <PhoneBlock align="right" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
