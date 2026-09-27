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
            "Выписка из реестра лицензий на частную охранную деятельность ООО ЧОО «Дозор» № Л056-00106-50/00020286",
          href: "/documents/vypiska-licenziya-chod-dozor.pdf",
        },
        {
          title:
            "Выписка из реестра лицензий на частную охранную деятельность ООО ЧОО «Агентство охраны и экономической безопасности „Дозор“» № Л056-00106-50/00024050",
          href: "/documents/vypiska-licenziya-chod-aoeb-dozor.pdf",
        },
      ],
    },
  ],
});
