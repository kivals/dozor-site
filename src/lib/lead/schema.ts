import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Укажите имя"),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[\d\s()-]{10,}$/, "Некорректный телефон"),
  message: z.string().trim().max(1000).optional(),
  consent: z.literal("on", {
    message: "Требуется согласие на обработку персональных данных",
  }),
});

export type LeadInput = z.infer<typeof leadSchema>;
