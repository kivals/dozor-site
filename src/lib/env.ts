import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  LEAD_TRANSPORT: z.enum(["telegram", "email", "crm"]).default("telegram"),
  TELEGRAM_BOT_TOKEN: z.string().optional(),
  TELEGRAM_CHAT_ID: z.string().optional(),
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.coerce.number().int().positive().default(465),
  SMTP_USER: z.string().optional(),
  SMTP_PASSWORD: z.string().optional(),
  /** Where lead emails are delivered. */
  LEAD_EMAIL_TO: z.string().email().optional(),
  NEXT_PUBLIC_YANDEX_MAPS_API_KEY: z.string().optional(),
  /** "true" closes the whole site from search engines (preview deploys). */
  NEXT_PUBLIC_NOINDEX: z.enum(["true", "false"]).default("false"),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  LEAD_TRANSPORT: process.env.LEAD_TRANSPORT,
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
  TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASSWORD: process.env.SMTP_PASSWORD,
  LEAD_EMAIL_TO: process.env.LEAD_EMAIL_TO,
  NEXT_PUBLIC_YANDEX_MAPS_API_KEY: process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY,
  NEXT_PUBLIC_NOINDEX: process.env.NEXT_PUBLIC_NOINDEX,
});

export const noindex = env.NEXT_PUBLIC_NOINDEX === "true";
