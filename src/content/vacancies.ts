import { contacts } from "./contacts";

export interface VacancyBenefit {
  title: string;
  icon: string;
  /** Intrinsic icon width at 36px height (from Figma). */
  width: number;
}

export const vacancies = {
  eyebrow: "Вакансии",
  title: "Приглашаем сотрудников охраны",
  subtitle:
    "Рассматриваем кандидатов с опытом и без опыта работы. Помогаем с адаптацией и подбором объектов.",
  cta: { label: "Позвонить по вакансии", href: contacts.phoneHref },
  benefits: [
    { title: "Своевременная выплата заработной платы", icon: "wallet", width: 36 },
    { title: "Официальное трудоустройство", icon: "badge", width: 48 },
    { title: "Различные графики работы", icon: "calendar", width: 34 },
    { title: "Подбор объекта с учетом пожеланий сотрудника", icon: "pin", width: 27 },
    { title: "Помощь в адаптации на новом объекте", icon: "people", width: 43 },
    { title: "Стабильная работа в надежной компании", icon: "shield", width: 31 },
  ] satisfies VacancyBenefit[],
};
