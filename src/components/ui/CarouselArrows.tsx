function Arrow({ className }: { className?: string }) {
  return (
    <svg
      width="20"
      height="10"
      viewBox="0 0 20 10"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M1 5h17M14 1l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface CarouselArrowsProps {
  canPrev: boolean;
  canNext: boolean;
  onPrev: () => void;
  onNext: () => void;
  label: string;
  className?: string;
}

export function CarouselArrows({
  canPrev,
  canNext,
  onPrev,
  onNext,
  label,
  className,
}: CarouselArrowsProps) {
  return (
    <div className={`flex gap-3 ${className ?? ""}`}>
      <button
        type="button"
        onClick={onPrev}
        disabled={!canPrev}
        aria-label={`Предыдущие: ${label}`}
        className="flex size-11 items-center justify-center rounded-full bg-accent/15 text-accent disabled:opacity-40"
      >
        <Arrow className="rotate-180" />
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={!canNext}
        aria-label={`Следующие: ${label}`}
        className="flex size-11 items-center justify-center rounded-full bg-accent text-white disabled:opacity-40"
      >
        <Arrow />
      </button>
    </div>
  );
}
