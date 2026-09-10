import nodemailer from "nodemailer";
import { env } from "@/lib/env";
import type { Lead, LeadTransport } from "../types";

export const emailTransport: LeadTransport = {
  async send(lead: Lead) {
    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASSWORD,
      SMTP_FROM,
      LEAD_EMAIL_TO,
    } = env;
    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD || !LEAD_EMAIL_TO) {
      throw new Error("Email transport is not configured");
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });

    const text = [
      "Новая заявка с сайта",
      `Имя: ${lead.name}`,
      `Телефон: ${lead.phone}`,
      lead.message ? `Сообщение: ${lead.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    await transporter.sendMail({
      from: SMTP_FROM ?? SMTP_USER,
      to: LEAD_EMAIL_TO,
      subject: `Новая заявка с сайта — ${lead.name}`,
      text,
    });
  },
};
