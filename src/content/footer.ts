import { typograph } from "@/lib/typography";
import { contacts } from "./contacts";

export interface FooterSocial {
  name: string;
  href: string;
  icon: string;
}

export interface FooterNavItem {
  label: string;
  href: string;
}

export const footer = typograph({
  eyebrow: "Контакты",
  title: "Связь с нами",
  phoneNote: contacts.phoneNote,
  phone: contacts.phone,
  phoneHref: contacts.phoneHref,
  address: contacts.address,
  email: contacts.email,
  socials: [
    { name: "MAX", href: "#", icon: "/socials/max.png" },
    { name: "Telegram", href: "#", icon: "/socials/telegram.png" },
  ] satisfies FooterSocial[],
  nav: [
    { label: "О компании", href: "/o-kompanii" },
    { label: "Услуги", href: "/uslugi" },
    { label: "Контроль", href: "/#control" },
    { label: "Опыт работы", href: "/#clients" },
    { label: "Вакансии", href: "/vakansii" },
    { label: "Блог", href: "/blog" },
    { label: "Новости", href: "/novosti" },
    { label: "Контакты", href: "/#contacts" },
  ] satisfies FooterNavItem[],
  copyright: "ГП «Дозор» 2000–2026 ©",
  map: {
    // Yandex map-widget by address (no API key required)
    query: "Электросталь, улица Карла Маркса, 1",
  },
});
