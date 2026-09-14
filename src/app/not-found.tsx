import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { objectTypes } from "@/content/object-types";
import { navigation } from "@/content/navigation";

export const metadata: Metadata = {
  title: "Страница не найдена",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <main className="flex flex-1 flex-col gap-5 lg:gap-12">
        <section className="relative isolate overflow-hidden rounded-b-[28px] bg-navy pt-[calc(var(--header-h)+2rem)] pb-12 lg:rounded-b-[40px] lg:pt-[169px] lg:pb-[100px]">
          <div className="container-page px-4 sm:px-6 lg:px-16">
            <div className="flex flex-col gap-6 lg:max-w-2xl">
              <p className="text-[64px] leading-none font-semibold text-accent lg:text-[120px]">
                404
              </p>
              <div className="flex flex-col gap-3 text-white">
                <h1 className="text-3xl leading-tight font-semibold text-balance sm:text-4xl lg:text-5xl lg:leading-[1.1]">
                  Такой страницы нет
                </h1>
                <p className="text-base text-white/80 sm:text-lg lg:text-xl">
                  Возможно, она была перемещена или адрес указан с ошибкой.
                  Вернитесь на главную или выберите нужную услугу.
                </p>
              </div>
              <Link
                href="/"
                className="inline-flex w-fit items-center gap-4 rounded-full bg-accent px-7 py-4 text-sm font-medium text-white transition hover:bg-accent/90 sm:text-base"
              >
                На главную
                <Image src="/hero/arrow.svg" alt="" width={12} height={7} />
              </Link>
            </div>
          </div>
        </section>

        <div className="container-page flex flex-col gap-8 px-4 pb-12 sm:px-6 lg:px-16 lg:pb-20">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-accent uppercase">Услуги</p>
            <p className="text-xl font-semibold text-navy lg:text-2xl">
              Охрана объектов различного назначения
            </p>
          </div>
          <ul className="flex flex-wrap gap-3">
            {objectTypes.items.map((item) =>
              item.href ? (
                <li key={item.slug}>
                  <Link
                    href={item.href}
                    className="inline-flex rounded-full bg-surface px-5 py-3 text-sm text-navy transition hover:bg-accent hover:text-white lg:text-base"
                  >
                    {item.title}
                  </Link>
                </li>
              ) : null,
            )}
          </ul>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navigation.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-navy/70 underline-offset-4 transition hover:text-accent hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
