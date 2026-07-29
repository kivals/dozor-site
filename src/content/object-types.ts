import { typograph } from "@/lib/typography";
import type { ObjectTypesContent } from "./types";

export const objectTypes: ObjectTypesContent = typograph({
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
    {
      slug: "kommercheskaya-nedvizhimost",
      title: "Коммерческая недвижимость",
      description: "Охрана бизнес-центров и торговых объектов",
      image: "/object-types/kommercheskaya.jpg",
    },
    {
      slug: "kottedzhnye-poselki",
      title: "Коттеджные поселки и территории",
      description: "Охрана поселков, жилых комплексов и территорий",
      image: "/object-types/kottedzhnye.jpg",
    },
    {
      slug: "logisticheskie",
      title: "Логистические объекты",
      description:
        "Контроль доступа, техническая безопасность, охрана грузовых потоков",
      image: "/object-types/logisticheskie.jpg",
    },
  ],
});
