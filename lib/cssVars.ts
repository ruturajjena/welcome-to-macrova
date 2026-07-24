import theme from "@/config/theme";

/**
 * Serialises the palettes in config/theme.ts into a CSS string that defines the
 * custom properties Tailwind reads. For every colour we emit BOTH:
 *   --c-<name>      the full hex   (for gradients / inline styles)
 *   --c-<name>-rgb  "r g b" channels (so Tailwind's `<alpha-value>` and the
 *                   `bg-accent/12` opacity modifiers work)
 * Light values go on :root, dark on html[data-theme="dark"]. This is the ONE
 * place colours cross from TS into CSS — components never hard-code hex.
 */
function hexToRgb(hex: string): string {
  const h = hex.replace("#", "");
  const full =
    h.length === 3
      ? h.split("").map((c) => c + c).join("")
      : h;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return `${r} ${g} ${b}`;
}

function toVars(palette: Record<string, string>): string {
  return Object.entries(palette)
    .map(([k, v]) => `--c-${k}:${v};--c-${k}-rgb:${hexToRgb(v)};`)
    .join("");
}

export function themeCss(): string {
  const light = toVars(theme.colors.light as unknown as Record<string, string>);
  const dark = toVars(theme.colors.dark as unknown as Record<string, string>);
  return [
    `:root{${light}--bloom:${theme.colors.blooms.light};}`,
    `html[data-theme="dark"]{${dark}--bloom:${theme.colors.blooms.dark};}`,
  ].join("");
}
