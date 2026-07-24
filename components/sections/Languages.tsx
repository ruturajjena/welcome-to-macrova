"use client";

import theme from "@/config/theme";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { revealUp } from "@/lib/motion";

/** "Speaks your language" — grid of the 7 supported languages. */
export function Languages() {
  return (
    <section className="container-page py-16">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          {theme.languages.heading}
        </h2>
        <p className="mt-3 text-muted">{theme.languages.subhead}</p>
      </Reveal>

      <RevealGroup className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {theme.languages.list.map((lang) => (
          <Reveal key={lang.code} variants={revealUp}>
            <div className="card flex items-center gap-3 p-3.5 transition-colors hover:border-accent/40">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/12 text-[13px] font-extrabold text-accent">
                {lang.code}
              </span>
              <div className="min-w-0">
                <p className="truncate text-[14px] font-semibold">{lang.name}</p>
                <p className="truncate text-[12px] text-muted">{lang.native}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </RevealGroup>

      <Reveal className="mt-6 flex items-center justify-center gap-2 text-[13px] font-medium text-faint">
        <Icon name="Sparkles" className="h-3.5 w-3.5 text-accent" />
        {theme.languages.note}
      </Reveal>
    </section>
  );
}
