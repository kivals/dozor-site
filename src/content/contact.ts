import { typograph } from "@/lib/typography";
import type { ContactContent } from "./types";

export const contact: ContactContent = typograph({
  eyebrow: "Обратная связь",
  title: "Подберём решение для охраны вашего объекта",
  subtitle: "Заполните форму — и мы свяжемся с вами в ближайший час",
  modal: {
    successTitle: "Спасибо!",
    successText: "Ваша заявка отправлена. Ожидайте звонка",
  },
});
