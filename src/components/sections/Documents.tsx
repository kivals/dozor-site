"use client";

import { useState } from "react";
import Image from "next/image";
import { documents } from "@/content/documents";

export function Documents() {
  const [activeTab, setActiveTab] = useState(documents.tabs[0].id);
  const items = documents.tabs.find((tab) => tab.id === activeTab)?.items ?? [];

  return (
    <section className="px-4 py-6 sm:px-6 lg:px-16 lg:py-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-[65px]">
        <div className="flex flex-col gap-[30px] lg:w-[407px] lg:shrink-0">
          <div className="flex flex-col gap-2.5">
            <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
              {documents.eyebrow}
            </p>
            <h2 className="text-3xl leading-tight font-medium text-black">
              {documents.title}
            </h2>
            <p className="text-base text-black">{documents.subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-[15px] lg:flex-col lg:items-start">
            {documents.tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                aria-pressed={tab.id === activeTab}
                className={`cursor-pointer rounded-[30px] px-6 py-2.5 text-base transition-colors lg:w-40 lg:px-[30px] lg:text-center lg:text-xl ${
                  tab.id === activeTab
                    ? "bg-surface text-accent"
                    : "text-[#8299bc] hover:text-accent"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <ul className="grid flex-1 gap-5 pt-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.href}
              className="relative flex flex-col justify-between gap-6 rounded-[20px] bg-surface px-[23px] pt-[25px] pb-[19px]"
            >
              <div className="absolute -top-3.5 right-[23px] flex size-[51px] items-center justify-center rounded-[15px] bg-accent">
                <Image
                  src="/icons/document.svg"
                  alt=""
                  width={21}
                  height={27}
                />
              </div>

              <h3 className="pr-[60px] text-base leading-tight text-black lg:max-w-[148px] lg:pr-0">
                {item.title}
              </h3>

              <a
                href={item.href}
                download
                className="flex items-center justify-center gap-[18px] rounded-[30px] bg-[#b1c1db] px-[30px] py-[15px] text-base text-white transition-colors hover:bg-accent"
              >
                {documents.downloadLabel}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <path
                    d="M1 6h10m0 0L7 2m4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
