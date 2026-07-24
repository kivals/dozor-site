import type { ObjectTypesContent } from "./types";

export const objectTypes: ObjectTypesContent = {
  eyebrow: "Услуги",
  heading: "Группа компаний «Дозор»",
  subtitle: "обеспечивает охрану объектов различного назначения",
  items: [
    {
      slug: "proizvodstvennye",
      title: "Производственные объекты",
      description: "Охрана заводов, цехов и производственных площадок",
      image: "/object-types/proizvodstvennye.jpg",
    },
    {
      slug: "skladskie",
      title: "Складские комплексы",
      description: "Охрана складов, терминалов и распределительных центров",
      image: "/object-types/skladskie.jpg",
    },
    {
      slug: "stroitelnye",
      title: "Строительные объекты",
      description: "Безопасность строительных площадок и временных объектов",
      image: "/object-types/stroitelnye.jpg",
    },
  ],
};
