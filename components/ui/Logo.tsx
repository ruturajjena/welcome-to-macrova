import theme from "@/config/theme";

/** The "macro va" lockup — a rounded-square glyph + wordmark. */
export function Logo({ className = "" }: { className?: string }) {
  const { lead, tail } = theme.brand.logo;
  return (
    <a
      href="#top"
      aria-label={`${theme.brand.name} home`}
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <span
        aria-hidden
        className="grid h-9 w-9 place-items-center rounded-[11px] bg-accent text-accent-ink shadow-[0_4px_14px_-4px_var(--c-accent)]"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 18V7l5 6 3-4 3 4 5-6v11" />
        </svg>
      </span>
      <span className="text-lg font-extrabold tracking-tight text-ink">
        {lead}
        <span className="text-gradient">{tail}</span>
      </span>
    </a>
  );
}
