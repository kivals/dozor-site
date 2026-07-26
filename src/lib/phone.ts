export const PHONE_PLACEHOLDER = "+7 (___) ___-__-__";

/** Digits of a russian number without the country code, max 10. */
function nationalDigits(value: string) {
  const digits = value.replace(/\D/g, "");
  const withoutCountry = digits.replace(/^[78]/, "");
  return withoutCountry.slice(0, 10);
}

export function formatPhone(value: string) {
  const digits = nationalDigits(value);
  if (!digits) {
    return "";
  }

  const parts = [
    "+7 (",
    digits.slice(0, 3),
    digits.length > 3 ? ") " : "",
    digits.slice(3, 6),
    digits.length > 6 ? "-" : "",
    digits.slice(6, 8),
    digits.length > 8 ? "-" : "",
    digits.slice(8, 10),
  ];

  return parts.join("");
}

/**
 * Formats user input, keeping backspace usable: deleting a separator
 * would otherwise be undone by the formatter.
 */
export function nextPhoneValue(prev: string, raw: string) {
  const formatted = formatPhone(raw);
  if (raw.length < prev.length && formatted === prev) {
    return formatPhone(raw.replace(/\d(?!.*\d)/, ""));
  }
  return formatted;
}

export function isPhoneComplete(value: string) {
  return nationalDigits(value).length === 10;
}
