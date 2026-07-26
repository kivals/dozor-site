import Image from "next/image";
import Link from "next/link";
import { footer } from "@/content/footer";
import { YandexMap } from "@/components/maps/YandexMap";
import { PhoneBlock } from "@/components/ui/PhoneBlock";

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

export function Footer() {
  return (
    <footer className="lg:px-16">
      <div className="rounded-t-[20px] bg-navy px-2.5 py-10 text-white lg:rounded-t-[40px] lg:px-16 lg:py-14">
        {/* Top: contacts + map */}
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
                <Image
                  src="/footer/location.svg"
                  alt=""
                  width={17}
                  height={21}
                />
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
    </footer>
  );
}
