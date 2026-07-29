import { typograph } from "@/lib/typography";
import type { ClientsContent } from "./types";

// Logo intrinsic width at 80px height (from Figma). Used for aspect ratio.
export const clients: ClientsContent = typograph({
  eyebrow: "Клиенты",
  title: "Опыт работы с объектами различного уровня",
  subtitle:
    "За годы работы компания обеспечивала охрану производственных, складских и коммерческих объектов, включая многолетнее сотрудничество с крупными российскими и международными компаниями.",
  items: [
    { name: "Санта Бремор", logo: "santa-bremor", width: 80 },
    { name: "Русское море", logo: "russkoe-more", width: 73 },
    { name: "Дальпромрыба", logo: "dalpromryba", width: 143 },
    { name: "Yves Rocher", logo: "yves-rocher", width: 80 },
    { name: "MUNZ Group", logo: "munz-group", width: 80 },
    { name: "ID Logistics", logo: "id-logistics", width: 80 },
    { name: "Объединённые кондитеры", logo: "obedinennye-konditery", width: 206 },
    { name: "Славянка", logo: "slavyanka", width: 80 },
    { name: "Oriflame", logo: "oriflame", width: 80 },
    { name: "Азбука вкуса", logo: "azbuka-vkusa", width: 86 },
    { name: "Партнёр", logo: "partner-a", width: 80 },
    { name: "Ашан", logo: "auchan", width: 107 },
    { name: "Haier", logo: "haier", width: 160 },
  ],
});
