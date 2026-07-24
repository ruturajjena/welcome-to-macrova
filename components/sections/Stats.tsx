"use client";

import theme from "@/config/theme";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { revealUp } from "@/lib/motion";

/** Animated count-up stat strip. */
export function Stats() {
  return (
    <section className="container-page py-10">
      <RevealGroup className="card grid grid-cols-2 gap-6 p-8 sm:gap-4 md:grid-cols-4">
        {theme.stats.map((s) => (
          <Reveal key={s.label} variants={revealUp} className="text-center">
            <p className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              <span className="text-gradient">
                <CountUp value={s.value} prefix={s.prefix ?? ""} suffix={s.suffix ?? ""} />
              </span>
            </p>
            <p className="mt-1.5 text-[13px] font-medium text-muted">{s.label}</p>
          </Reveal>
        ))}
      </RevealGroup>
    </section>
  );
}
