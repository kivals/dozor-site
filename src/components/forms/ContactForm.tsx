"use client";

import { useActionState, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { submitLead } from "@/lib/lead/submit-lead";
import type { LeadFormState } from "@/lib/lead/types";
import { PHONE_PLACEHOLDER, nextPhoneValue } from "@/lib/phone";

const initialState: LeadFormState = { status: "idle" };

const fieldClass =
  "w-full rounded-full border border-surface/50 bg-transparent px-[30px] py-[15px] text-base text-white placeholder:text-white/50 outline-none transition-colors focus:border-accent";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitLead, initialState);
  const [phone, setPhone] = useState("");
  const errors = state.status === "error" ? state.errors : undefined;

  return (
    <form action={formAction} className="flex flex-col gap-5" noValidate>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <input name="name" placeholder="Ваше имя" className={fieldClass} />
          {errors?.name && (
            <p className="mt-1.5 pl-4 text-sm text-red-300">{errors.name[0]}</p>
          )}
        </div>
        <div className="flex-1">
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder={PHONE_PLACEHOLDER}
            value={phone}
            onChange={(event) =>
              setPhone((prev) => nextPhoneValue(prev, event.target.value))
            }
            className={fieldClass}
          />
          {errors?.phone && (
            <p className="mt-1.5 pl-4 text-sm text-red-300">{errors.phone[0]}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex shrink-0 items-center justify-center gap-4 rounded-full bg-accent px-[30px] py-[15px] text-base text-white transition hover:bg-accent/90 disabled:opacity-60"
        >
          {pending ? "Отправляем…" : "Отправить заявку"}
          {!pending && (
            <Image src="/hero/arrow.svg" alt="" width={12} height={7} />
          )}
        </button>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="flex cursor-pointer items-center gap-2.5">
          <input type="checkbox" name="consent" className="peer sr-only" />
          <span className="relative flex size-[23px] shrink-0 rounded-full border border-accent peer-checked:[&>span]:opacity-100">
            <span className="absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent opacity-0 transition-opacity" />
          </span>
          <span className="text-sm leading-snug text-white">
            Я даю согласие на обработку моих персональных данных и подтверждаю,
            что ознакомлен(а) с{" "}
            <Link
              href="/politika-konfidencialnosti"
              className="underline underline-offset-2 hover:text-accent"
            >
              Политикой обработки персональных данных
            </Link>
          </span>
        </label>
        {errors?.consent && (
          <p className="pl-8 text-sm text-red-300">{errors.consent[0]}</p>
        )}
      </div>

      {state.status === "success" && (
        <p className="text-sm text-accent">
          Заявка отправлена! Мы свяжемся с вами в ближайший час.
        </p>
      )}
      {state.status === "error" && state.message && (
        <p className="text-sm text-red-300">{state.message}</p>
      )}
    </form>
  );
}
