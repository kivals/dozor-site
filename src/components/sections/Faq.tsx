"use client";

import { useState } from "react";
import { faq } from "@/content/faq";

function Toggle({ open }: { open: boolean }) {
  return (
    <span
      className={`flex size-[45px] shrink-0 items-center justify-center rounded-full transition-colors ${
        open ? "bg-[#d7e4f8] text-navy" : "bg-accent text-white"
      }`}
    >
      <svg
        width="12"
        height="14"
        viewBox="0 0 12 14"
        fill="none"
        aria-hidden="true"
        className={`transition-transform ${open ? "rotate-180" : ""}`}
      >
        <path
          d="M6 1v12m0 0 4.5-4.5M6 13 1.5 8.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  return (
    <section className="rounded-[20px] bg-surface px-4 py-10 sm:px-6 lg:px-[59px] lg:py-[42px]">
      <div className="flex flex-col gap-2.5">
        <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
          {faq.eyebrow}
        </p>
        <h2 className="text-3xl leading-tight font-medium text-black">
          {faq.title}
        </h2>
      </div>

      <ul className="mt-8 flex flex-col gap-3.5 lg:mt-10">
        {faq.items.map((item, index) => {
          const open = index === openIndex;

          return (
            <li
              key={item.question}
              className="rounded-[20px] border border-surface bg-white px-5 py-6 sm:px-[30px] sm:py-[30px]"
            >
              <h3>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                  className="flex w-full cursor-pointer items-center justify-between gap-3"
                >
                  <span className="text-left text-lg leading-[22px] font-semibold text-black">
                    {item.question}
                  </span>
                  <Toggle open={open} />
                </button>
              </h3>

              {open && (
                <p className="mt-3 text-sm leading-5 text-black">
                  {item.answer}
                </p>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
