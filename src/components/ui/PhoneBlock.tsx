import Image from "next/image";
import { contacts } from "@/content/contacts";

export function PhoneBlock({
  noteClassName = "text-surface",
  align = "left",
}: {
  noteClassName?: string;
  align?: "left" | "right";
}) {
  return (
    <div className="flex items-center gap-4">
      <Image src="/footer/phone.svg" alt="" width={21} height={21} />
      <div className={align === "right" ? "text-right" : ""}>
        <p className={`text-xs transition-colors ${noteClassName}`}>
          {contacts.phoneNote}
        </p>
        <a
          href={contacts.phoneHref}
          className="text-xl font-medium transition-colors hover:text-accent"
        >
          {contacts.phone}
        </a>
      </div>
    </div>
  );
}
