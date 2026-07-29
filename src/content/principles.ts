import { typograph } from "@/lib/typography";
import type { Principle } from "./types";

export const principles: Principle[] = typograph([
  {
    title: "Персональный контроль",
    description: "За каждым объектом закреплён ответственный менеджер и супервайзер.",
  },
  {
    title: "Системный подход",
    description: "Выстроенные процессы и регламенты работы на всех этапах охраны.",
  },
  {
    title: "Оперативное взаимодействие",
    description: "Быстрая связь с клиентом и реагирование на любые ситуации.",
  },
]);
