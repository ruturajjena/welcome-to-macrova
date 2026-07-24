"use client";

import theme from "@/config/theme";
import { PhoneFrame } from "@/components/phone/PhoneFrame";
import { Screen } from "@/components/phone/screens";
import { Reveal } from "@/components/ui/Reveal";
import { useSafeReducedMotion } from "@/lib/hooks";

/**
 * Auto-scrolling marquee of the real app screens inside mini phone frames.
 * Hover pauses it. Reduced motion → a static, horizontally-scrollable row.
 */
export function PreviewReel() {
  const reduced = useSafeReducedMotion();
  const reel = theme.preview.reel;
  // Duplicate the list so the CSS marquee can loop seamlessly (-50% translate).
  const items = [...reel, ...reel];

  return (
    <section id="preview" className="overflow-hidden py-20">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
            {theme.preview.heading}
          </h2>
          <p className="mt-3 text-muted">{theme.preview.caption}</p>
        </Reveal>
      </div>

      <div className="group relative mt-12">
        {/* edge fades */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />

        <div
          className={
            reduced
              ? "no-scrollbar flex gap-8 overflow-x-auto px-8 pb-4"
              : "flex w-max gap-8 px-8 animate-marquee group-hover:[animation-play-state:paused]"
          }
        >
          {(reduced ? reel : items).map((item, i) => (
            <figure key={`${item.screen}-${i}`} className="shrink-0">
              <PhoneFrame scale={0.62} label={`Macrova ${item.label} screen`}>
                <Screen name={item.screen} />
              </PhoneFrame>
              <figcaption className="mt-3 text-center text-[13px] font-semibold text-muted">
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
