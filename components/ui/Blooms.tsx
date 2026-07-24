/**
 * Soft accent gradient blooms behind a section. Purely decorative and cheap
 * (CSS radial gradients, no images / WebGL). `variant` shifts their placement.
 */
export function Blooms({
  variant = "hero",
  className = "",
}: {
  variant?: "hero" | "center" | "download";
  className?: string;
}) {
  const layouts = {
    hero: [
      "top-[-10%] left-[-8%] h-[42rem] w-[42rem]",
      "top-[10%] right-[-12%] h-[36rem] w-[36rem]",
    ],
    center: [
      "top-[0%] left-[50%] -translate-x-1/2 h-[40rem] w-[60rem]",
    ],
    download: [
      "bottom-[-20%] left-[50%] -translate-x-1/2 h-[46rem] w-[70rem]",
    ],
  } as const;

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {layouts[variant].map((pos, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-3xl ${pos}`}
          style={{ background: "var(--bloom)" }}
        />
      ))}
    </div>
  );
}
