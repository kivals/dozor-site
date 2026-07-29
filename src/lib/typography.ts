const NBSP = "\u00A0";
/** Prepositions and conjunctions must not hang at the end of a line. */
const SHORT_WORDS = new Set([
  "на",
  "за",
  "по",
  "до",
  "из",
  "от",
  "об",
  "во",
  "со",
  "ко",
  "не",
  "ни",
  "но",
  "да",
  "же",
  "ли",
  "бы",
  "то",
  "мы",
  "вы",
  "для",
  "при",
  "над",
  "под",
  "про",
  "без",
  "что",
  "как",
  "или",
]);

function isShortWord(word: string) {
  const clean = word.replace(/^[(«"]+/, "").toLowerCase();
  return /^[а-яё]$/.test(clean) || SHORT_WORDS.has(clean);
}

function typographText(text: string) {
  const words = text.split(" ");
  return words
    .reduce((acc, word, index) =>
      index === 0
        ? word
        : `${acc}${isShortWord(words[index - 1]) ? NBSP : " "}${word}`,
    )
    .replace(/ +—/g, `${NBSP}—`);
}

/** Strips typography for machine-readable strings (metadata, JSON-LD). */
export function plainText(text: string) {
  return text.replaceAll(NBSP, " ");
}

/** Applies typography rules to every string inside a content module. */
export function typograph<T>(value: T): T {
  if (typeof value === "string") {
    return typographText(value) as T;
  }
  if (Array.isArray(value)) {
    return value.map(typograph) as T;
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, typograph(item)]),
    ) as T;
  }
  return value;
}
