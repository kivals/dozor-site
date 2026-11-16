"use server";

import { headers } from "next/headers";
import { isRateLimited } from "./rate-limit";
import { leadSchema } from "./schema";
import { sendLead } from "./transports";
import type { LeadFormState } from "./types";

export async function submitLead(
  _prev: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const ip =
    (await headers()).get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: "Слишком много заявок. Попробуйте через минуту.",
    };
  }

  const parsed = leadSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return {
      status: "error",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    await sendLead(parsed.data);
    return { status: "success" };
  } catch (error) {
    console.error("Lead delivery failed", error);
    return {
      status: "error",
      message: "Не удалось отправить заявку. Попробуйте позже.",
    };
  }
}
