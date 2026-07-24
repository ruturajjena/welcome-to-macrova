"use client";

import theme from "@/config/theme";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { revealUp } from "@/lib/motion";

/** Social proof — five-star review cards. */
export function Reviews() {
  return (
    <section id="reviews" className="container-page py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">
          <Icon name="Star" className="h-3.5 w-3.5 text-accent" /> Reviews
        </span>
        <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          {theme.reviews.heading}
        </h2>
        <p className="mt-3 text-muted">{theme.reviews.subhead}</p>
      </Reveal>

      <RevealGroup className="mt-12 grid gap-5 md:grid-cols-3">
        {theme.reviews.items.map((r) => (
          <Reveal key={r.name + r.quote.slice(0, 12)} variants={revealUp}>
            <figure className="card flex h-full flex-col p-6">
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Icon key={i} name="Star" className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/90">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-accent/15 text-sm font-bold text-accent">
                  {r.name}
                </span>
                <div>
                  <p className="text-[14px] font-semibold">{r.role}</p>
                  <p className="text-[12px] text-faint">{r.tag}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </RevealGroup>
    </section>
  );
}
