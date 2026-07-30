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
          title: "Лицензия на осуществление частной охранной деятельности",
          href: "/documents/licenziya-chod.pdf",
        },
        {
          title: "Приложение к лицензии на охранную деятельность",
          href: "/documents/licenziya-prilozhenie.pdf",
        },
        {
          title: "Лицензия на охрану объектов повышенной опасности",
          href: "/documents/licenziya-opasnye-obekty.pdf",
        },
        {
          title: "Лицензия на монтаж технических средств охраны",
          href: "/documents/licenziya-tso.pdf",
        },
        {
          title: "Разрешение на использование служебного оружия",
          href: "/documents/razreshenie-oruzhie.pdf",
        },
        {
          title: "Удостоверения частных охранников 4–6 разряда",
          href: "/documents/udostovereniya-ohrannikov.pdf",
        },
      ],
    },
    {
      id: "documents",
      label: "Документы",
      items: [
        {
          title: "Свидетельство о государственной регистрации",
          href: "/documents/svidetelstvo-registracii.pdf",
        },
        {
          title: "Свидетельство о постановке на налоговый учет",
          href: "/documents/svidetelstvo-nalogovyy-uchet.pdf",
        },
        {
          title: "Устав частного охранного предприятия",
          href: "/documents/ustav.pdf",
        },
        {
          title: "Выписка из ЕГРЮЛ",
          href: "/documents/vypiska-egrul.pdf",
        },
        {
          title: "Договор страхования ответственности",
          href: "/documents/dogovor-strahovaniya.pdf",
        },
        {
          title: "Типовой договор на оказание охранных услуг",
          href: "/documents/tipovoy-dogovor.pdf",
        },
      ],
    },
  ],
});
