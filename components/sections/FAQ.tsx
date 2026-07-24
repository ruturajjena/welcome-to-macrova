"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import theme from "@/config/theme";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { EASE } from "@/lib/motion";

/** Accordion FAQ with smooth height animation. */
export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="container-page py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">FAQ</span>
        <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
          {theme.faq.heading}
        </h2>
      </Reveal>

      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {theme.faq.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={item.q}>
              <div className="card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-[15px] font-semibold sm:text-base">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-surface-2 text-muted"
                  >
                    <Icon name="ChevronDown" className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                    >
                      <p className="px-5 pb-5 text-[14.5px] leading-relaxed text-muted">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
