import { contacts } from "./contacts";

export interface NavItem {
  label: string;
  href: string;
}

export const navigation = {
  items: [
    { label: "О компании", href: "/#about" },
    { label: "Услуги", href: "/#object-types" },
    { label: "Контроль", href: "/#control" },
    { label: "Опыт работы", href: "/#clients" },
    { label: "Вакансии", href: "/#vacancies" },
    { label: "Контакты", href: "/#contacts" },
  ] satisfies NavItem[],
  phoneNote: contacts.phoneNote,
  phone: contacts.phone,
  phoneHref: contacts.phoneHref,
  cta: { label: "Заказать звонок", href: "/#contacts" },
};
