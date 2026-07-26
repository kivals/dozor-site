"use client";

import { useActionState, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { contact } from "@/content/contact";
import { leadSchema } from "@/lib/lead/schema";
import {
  PHONE_PLACEHOLDER,
  isPhoneComplete,
  nextPhoneValue,
} from "@/lib/phone";
import { submitLead } from "@/lib/lead/submit-lead";
import type { LeadFormState } from "@/lib/lead/types";

const initialState: LeadFormState = { status: "idle" };

const fieldBase =
  "w-full rounded-[30px] border bg-white px-[30px] py-[15px] text-base text-navy outline-none transition-colors";

function Logo() {
  return (
    <Image
      src="/header/logo-dark.svg"
      alt="ГК «Дозор»"
      width={184}
      height={57}
      className="h-auto w-[184px]"
    />
  );
}

export function LeadModalForm({ onSuccess }: { onSuccess?: () => void }) {
  const [state, formAction, pending] = useActionState(submitLead, initialState);
  const [values, setValues] = useState({ name: "", phone: "", consent: false });
  const [touched, setTouched] = useState({ name: false, phone: false });

  const nameValid = leadSchema.shape.name.safeParse(values.name).success;
  const phoneValid =
    isPhoneComplete(values.phone) &&
    leadSchema.shape.phone.safeParse(values.phone).success;
  const formValid = nameValid && phoneValid && values.consent;

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-[50px] rounded-[40px] bg-surface p-[30px] text-center">
        <Logo />
        <p className="text-3xl leading-tight font-medium text-navy">
          {contact.modal.successTitle}
          <br />
          {contact.modal.successText}
        </p>
        {onSuccess && (
          <button
            type="button"
            onClick={onSuccess}
            className="text-sm text-accent underline underline-offset-2"
          >
            Закрыть
          </button>
        )}
      </div>
    );
  }

  const fieldClass = (invalid: boolean) =>
    `${fieldBase} ${
      invalid
        ? "border-[#d50000] text-[#d50000] placeholder:text-[#d50000]/60"
        : "border-transparent placeholder:text-navy/50"
    }`;

  return (
    <form
      action={formAction}
      noValidate
      className="flex flex-col items-center gap-8 rounded-[40px] bg-surface p-[30px]"
    >
      <Logo />

      <div className="flex w-full flex-col gap-[15px]">
        <input
          name="name"
          placeholder="Ваше имя"
          value={values.name}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
          onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
          className={fieldClass(touched.name && !nameValid)}
        />
        <input
          name="phone"
          type="tel"
          inputMode="tel"
          placeholder={PHONE_PLACEHOLDER}
          value={values.phone}
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              phone: nextPhoneValue(prev.phone, event.target.value),
            }))
          }
          onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
          className={fieldClass(touched.phone && !phoneValid)}
        />
        <button
          type="submit"
          disabled={!formValid || pending}
          className="flex items-center justify-center gap-[18px] rounded-[30px] px-[30px] py-[15px] text-base text-white transition-colors enabled:bg-accent enabled:hover:bg-accent/90 disabled:bg-[#5d6673]"
        >
          {pending ? "Отправляем…" : "Отправить заявку"}
          {!pending && (
            <Image src="/hero/arrow.svg" alt="" width={12} height={7} />
          )}
        </button>
      </div>

      <label className="flex w-[231px] cursor-pointer items-center gap-2.5 text-center">
        <input
          type="checkbox"
          name="consent"
          checked={values.consent}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, consent: event.target.checked }))
          }
          className="peer sr-only"
        />
        <span className="relative flex size-[23px] shrink-0 rounded-full border border-navy/40 peer-checked:border-accent peer-checked:[&>span]:opacity-100">
          <span className="absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent opacity-0 transition-opacity" />
        </span>
        <span className="text-left text-xs leading-[1.5] text-navy">
          даю согласие на обработку моих{" "}
          <Link
            href="/politika-konfidencialnosti"
            className="text-accent underline underline-offset-2"
          >
            персональных данных
          </Link>
        </span>
      </label>

      {state.status === "error" && state.message && (
        <p className="text-sm text-[#d50000]">{state.message}</p>
      )}
    </form>
  );
}
