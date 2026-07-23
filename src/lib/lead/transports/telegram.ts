import { env } from "@/lib/env";
import type { Lead, LeadTransport } from "../types";

export const telegramTransport: LeadTransport = {
  async send(lead: Lead) {
    const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = env;
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      throw new Error("Telegram transport is not configured");
    }

    const text = [
      "🛡 Новая заявка с сайта",
      `Имя: ${lead.name}`,
      `Телефон: ${lead.phone}`,
      lead.message ? `Сообщение: ${lead.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const res = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text }),
      },
    );

    if (!res.ok) {
      throw new Error(`Telegram API error: ${res.status}`);
    }
  },
};
