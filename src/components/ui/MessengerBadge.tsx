import Image from "next/image";

export function MessengerBadge() {
  return (
    <div className="flex shrink-0 flex-col gap-2 rounded-tl-2xl rounded-bl-2xl bg-white p-2">
      <Image
        src="/socials/max.png"
        alt="Написать в MAX"
        width={32}
        height={32}
        className="size-8"
      />
      <Image
        src="/socials/telegram.png"
        alt="Написать в Telegram"
        width={32}
        height={32}
        className="size-8"
      />
    </div>
  );
}
