"use client";

import { motion } from "framer-motion";
import theme from "@/config/theme";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { revealUp } from "@/lib/motion";

/** Three-step "How it works" with micro-animated icons. */
export function HowItWorks() {
  return (
    <section id="how" className="container-page py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">
          <Icon name="Play" className="h-3.5 w-3.5" /> How it works
        </span>
        <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          {theme.how.heading}
        </h2>
        <p className="mt-3 text-muted">{theme.how.subhead}</p>
      </Reveal>

      <RevealGroup className="relative mt-14 grid gap-6 md:grid-cols-3">
        {/* connecting line on desktop */}
        <div aria-hidden className="absolute left-0 right-0 top-[42px] hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
        {theme.how.steps.map((step, i) => (
          <Reveal key={step.title} variants={revealUp} className="relative">
            <div className="card h-full p-6 text-center">
              <motion.div
                whileHover={{ y: -4, rotate: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-accent text-accent-ink shadow-[0_10px_24px_-8px_var(--c-accent)]"
              >
                <Icon name={step.icon} className="h-6 w-6" />
              </motion.div>
              <span className="mt-4 inline-block text-[12px] font-bold uppercase tracking-wider text-accent">
                Step {i + 1}
              </span>
              <h3 className="mt-1 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </RevealGroup>
    </section>
  );
}
