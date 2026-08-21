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
    { label: "Услуги", href: "/#services" },
    { label: "Контроль", href: "/#control" },
    { label: "Опыт работы", href: "/#clients" },
    { label: "Вакансии", href: "/vakansii" },
    { label: "Блог", href: "/blog" },
    { label: "Новости", href: "/novosti" },
    { label: "Контакты", href: "/#contacts" },
  ] satisfies FooterNavItem[],
  copyright: "ГК «Дозор» 2000–2026 ©",
  feedback: {
    eyebrow: "обратная связь",
    title: "Остались вопросы об охране предприятий?",
    subtitle:
      "заполните форму, и мы свяжемся с вами. Подберем оптимальное решение для охраны производственных объектов и рассчитаем смету. Качественная охрана объектов начинается с аудита",
    submitLabel: "Заказать расчет для промышленных объектов",
  },
  map: {
    // Yandex map-widget by address (no API key required)
    query: "Электросталь, улица Карла Маркса, 1",
  },
});
