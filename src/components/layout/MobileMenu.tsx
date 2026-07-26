"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/content/navigation";
import { PhoneBlock } from "@/components/ui/PhoneBlock";

function CloseIcon() {
  return (
    <svg viewBox="0 0 41 41" fill="none" className="size-10" aria-hidden>
      <circle cx="20.5" cy="20.5" r="20" stroke="currentColor" />
      <rect
        x="13.5754"
        y="25.8042"
        width="18"
        height="3"
        rx="1.5"
        transform="rotate(-45 13.5754 25.8042)"
        fill="currentColor"
      />
      <rect
        x="15.6968"
        y="13.0762"
        width="18"
        height="3"
        rx="1.5"
        transform="rotate(45 15.6968 13.0762)"
        fill="currentColor"
      />
    </svg>
  );
}

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        aria-label="Закрыть меню"
        onClick={onClose}
        className="absolute inset-0 h-full w-full bg-navy/60"
      />

      <div className="absolute inset-x-4 top-2 flex flex-col gap-8 rounded-[20px] bg-surface px-6 py-3 text-navy">
        <div className="flex items-center justify-between gap-5">
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть меню"
            className="shrink-0 transition-opacity hover:opacity-80"
          >
            <CloseIcon />
          </button>
          <Image
            src="/header/logo-dark.svg"
            alt="ГК «Дозор»"
            width={125}
            height={39}
            className="h-auto w-[125px]"
          />
        </div>

        <nav className="flex flex-col gap-6">
          {navigation.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="text-base text-black transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-6 pb-4">
          <PhoneBlock noteClassName="text-accent" />

          <Link
            href={navigation.cta.href}
            onClick={onClose}
            className="flex items-center justify-center gap-4 rounded-[30px] bg-accent px-8 py-4 text-base text-white transition hover:bg-accent/90"
          >
            {navigation.cta.label}
            <Image src="/hero/arrow.svg" alt="" width={12} height={7} />
          </Link>
        </div>
      </div>
    </div>
  );
}
