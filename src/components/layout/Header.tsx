"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/content/navigation";
import { PhoneBlock } from "@/components/ui/PhoneBlock";
import { MobileMenu } from "./MobileMenu";

function BurgerIcon() {
  return (
    <svg viewBox="0 0 41 41" fill="none" className="size-10" aria-hidden>
      <circle cx="20.5" cy="20.5" r="20" stroke="currentColor" />
      <rect x="12" y="13" width="18" height="3" rx="1.5" fill="currentColor" />
      <rect x="12" y="19" width="18" height="3" rx="1.5" fill="currentColor" />
      <rect x="12" y="25" width="10" height="3" rx="1.5" fill="currentColor" />
    </svg>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 px-4 transition-[padding] duration-300 ease-out sm:px-6 lg:px-7 ${
          scrolled ? "pt-0 lg:pt-0" : "pt-2 lg:pt-7"
        }`}
      >
        <div
          className={`flex items-center justify-between gap-5 px-2.5 transition-all duration-300 ease-out lg:gap-10 lg:px-9 ${
            scrolled
              ? "rounded-b-[30px] bg-white py-2.5 text-navy shadow-[0_4px_4px_rgba(0,0,0,0.1)] lg:py-[15px]"
              : "rounded-[40px] py-2 text-white lg:py-1.5"
          }`}
        >
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Открыть меню"
            className="shrink-0 transition-opacity hover:opacity-80 lg:hidden"
          >
            <BurgerIcon />
          </button>

          <Link href="/" aria-label="ГК «Дозор»" className="relative shrink-0">
            <Image
              src="/header/logo-white.svg"
              alt="ГК «Дозор»"
              width={184}
              height={57}
              priority
              className={`h-auto w-[125px] transition-opacity duration-300 ease-out lg:w-[184px] ${
                scrolled ? "opacity-0" : "opacity-100"
              }`}
            />
            <Image
              src="/header/logo-dark.svg"
              alt=""
              width={184}
              height={57}
              priority
              aria-hidden
              className={`absolute inset-0 h-auto w-[125px] transition-opacity duration-300 ease-out lg:w-[184px] ${
                scrolled ? "opacity-100" : "opacity-0"
              }`}
            />
          </Link>

          <nav className="hidden lg:flex lg:items-center lg:gap-[34px]">
            {navigation.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={navigation.phoneHref}
            aria-label={`Позвонить: ${navigation.phone}`}
            className="shrink-0 lg:hidden"
          >
            <Image
              src="/header/phone-button.svg"
              alt=""
              width={41}
              height={41}
            />
          </a>

          <div className="hidden shrink-0 lg:block">
            <PhoneBlock
              noteClassName={scrolled ? "text-accent" : "text-white/70"}
            />
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
