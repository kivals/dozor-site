import type { Service, ServicesIntro } from "./types";

export const servicesIntro: ServicesIntro = {
  eyebrow: "Услуги",
  title: "Комплексные решения под ваши задачи",
  subtitle: "Различные направления охраны объектов",
  cta: { label: "Подробнее", href: "/uslugi" },
};

export const services: Service[] = [
  {
    slug: "fizicheskaya-ohrana",
    title: "Физическая охрана объектов",
    description: "Подготовленные сотрудники охраны",
    icon: "shield-check",
  },
  {
    slug: "propusknoy-rezhim",
    title: "Обеспечение пропускного режима",
    description: "Контроль доступа на объект",
    icon: "access",
  },
  {
    slug: "vnutriobektovyy-rezhim",
    title: "Контроль внутриобъектового режима",
    description: "Соблюдение установленных регламентов",
    icon: "lock-shield",
  },
  {
    slug: "patrulirovanie",
    title: "Патрулирование территории объектов",
    description: "Регулярный контроль территории",
    icon: "search",
  },
  {
    slug: "massovye-meropriyatiya",
    title: "Обеспечение безопасности массовых мероприятий",
    description: "Поддержание порядка и безопасности",
    icon: "people",
  },
  {
    slug: "videonablyudenie",
    title: "Видеонаблюдение и технические средства охраны",
    description: "Технический контроль объекта",
    icon: "camera",
  },
  {
    slug: "pozharnaya-zaschita",
    title: "Системы противопожарной защиты",
    description: "Контроль противопожарной безопасности",
    icon: "fire",
  },
];
