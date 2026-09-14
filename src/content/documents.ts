import { typograph } from "@/lib/typography";
import type { DocumentsContent } from "./types";

export const documents: DocumentsContent = typograph({
  eyebrow: "ГК Дозор",
  title: "Документы и лицензии на охрану промышленных объектов",
  subtitle:
    "Оказание услуг физической охраны подтверждено действующими государственными лицензиями. Мы предоставляем легальные охранные услуги. Вся охрана объектов осуществляется в полном соответствии с законодательством",
  downloadLabel: "Загрузить файл",
  tabs: [
    {
      id: "licenses",
      label: "Лицензии",
      items: [
        {
          title:
            "Лицензия на частную охранную деятельность ООО ЧОО «Дозор» № 4071",
          href: "/documents/licenziya-chod-4071.pdf",
        },
        {
          title:
            "Лицензия на частную охранную деятельность ООО ЧОО «Агентство охраны и экономической безопасности „Дозор“» № 3461",
          href: "/documents/licenziya-chod-3461.pdf",
        },
      ],
    },
  ],
});
