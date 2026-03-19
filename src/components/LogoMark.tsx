type LogoVariant = "horizontal" | "symbol";

type LogoMarkProps = {
  className?: string;
  variant?: LogoVariant;
  showWordmark?: boolean;
};

export function LogoMark({ className, variant = "horizontal", showWordmark = true }: LogoMarkProps) {
  const sizeClass = variant === "symbol" ? "h-10 w-10" : "h-10 w-10";

  return (
    <div className={["inline-flex items-center gap-3 text-[#2E352E]", className].filter(Boolean).join(" ")}>
      <svg
        aria-hidden="true"
        viewBox="0 0 80 80"
        className={sizeClass}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="40" r="31.5" stroke="currentColor" strokeOpacity="0.25" />
        <path d="M23 49C31 43 35 33 39.5 24C44 33 49 42.5 57 49" stroke="currentColor" strokeWidth="1.6" />
        <path d="M29 56C34.5 50.8 37.7 44.3 40 37.5C42.3 44.3 45.5 50.8 51 56" stroke="currentColor" strokeWidth="1.4" />
      </svg>

      {showWordmark && variant === "horizontal" && (
        <div className="leading-none">
          <p className="font-serif text-xl tracking-[0.22em]">MOSSÄ</p>
          <p className="mt-1 text-[9px] uppercase tracking-[0.26em] text-[#5E6F5C]">Presence Botanique</p>
        </div>
      )}
    </div>
  );
}
