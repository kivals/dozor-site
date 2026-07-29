import { typograph } from "@/lib/typography";
import type { HeroContent } from "./types";

export const hero: HeroContent = typograph({
  title: "Охрана объектов с персональным контролем",
  subtitle: "системный подход к безопасности",
  cta: { label: "Обсудить проект", href: "#contact" },
  features: [
    {
      title: "контроль качества охраны",
      description: "регулярное инспектирование объектов",
    },
    {
      title: "гибкие решения безопасности",
      description: "подход с учетом специфики бизнеса",
    },
  ],
});
