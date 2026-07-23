"use server";

import { leadSchema } from "./schema";
import { sendLead } from "./transports";
import type { LeadFormState } from "./types";

export async function submitLead(
  _prev: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
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
  } catch {
    return {
      status: "error",
      message: "Не удалось отправить заявку. Попробуйте позже.",
    };
  }
}
