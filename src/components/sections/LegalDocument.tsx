import type { LegalDocument as LegalDocumentContent } from "@/content/types";

const dateFormatter = new Intl.DateTimeFormat("ru-RU", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export function LegalDocument({ document }: { document: LegalDocumentContent }) {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 pt-[calc(var(--header-h)+2rem)] pb-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl leading-tight font-medium text-black">
        {document.title}
      </h1>
      <p className="mt-2.5 text-sm text-[#8299bc]">
        Редакция от {dateFormatter.format(new Date(document.updatedAt))}
      </p>

      {document.intro?.map((paragraph) => (
        <p key={paragraph} className="mt-5 text-base leading-relaxed text-black">
          {paragraph}
        </p>
      ))}

      <div className="mt-10 flex flex-col gap-8">
        {document.sections.map((section, index) => (
          <article key={section.title + index} className="flex flex-col gap-2.5">
            <h2 className="text-xl font-medium text-black">
              {index + 1}. {section.title}
            </h2>

            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-black">
                {paragraph}
              </p>
            ))}

            {section.items && (
              <ul className="flex list-disc flex-col gap-1.5 pl-5 text-base leading-relaxed text-black">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {section.note && (
              <p className="text-base leading-relaxed text-black">{section.note}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
