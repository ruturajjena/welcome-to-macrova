"use client";

import { motion } from "framer-motion";
import theme from "@/config/theme";
import { PhoneShowcase } from "@/components/phone/PhoneShowcase";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { Blooms } from "@/components/ui/Blooms";
import { Icon } from "@/components/ui/Icon";
import { EASE, revealUp, stagger } from "@/lib/motion";

/** Hero — headline + phone (Daily Blueprint / home) with floating cards. */
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36">
      <Blooms variant="hero" />

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <motion.div variants={stagger(0.1)} initial="hidden" animate="show" className="text-center lg:text-left">
          <motion.span variants={revealUp} className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {theme.hero.eyebrow}
          </motion.span>

          <motion.h1
            variants={revealUp}
            className="mt-5 text-balance text-[2.6rem] font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.1rem]"
          >
            {theme.hero.headline.map((seg, i) => {
              const accent = "accent" in seg && seg.accent;
              return (
                <span key={i} className={accent ? "text-gradient" : undefined}>
                  {seg.text}
                </span>
              );
            })}
          </motion.h1>

          <motion.p
            variants={revealUp}
            className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg lg:mx-0"
          >
            {theme.hero.subhead}
          </motion.p>

          <motion.div
            variants={revealUp}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start sm:justify-center"
          >
            <a href={theme.hero.primary.href} className="btn btn-accent h-12 w-full px-6 text-[15px] sm:w-auto">
              <Icon name="Sparkles" className="h-4 w-4" />
              {theme.hero.primary.label}
            </a>
            <a href={theme.hero.secondary.href} className="btn btn-ghost h-12 w-full px-6 text-[15px] sm:w-auto">
              {theme.hero.secondary.label}
              <Icon name="Play" className="h-3.5 w-3.5" />
            </a>
          </motion.div>

          <motion.div variants={revealUp} className="mt-7 lg:flex lg:justify-start">
            <StoreBadges className="justify-center lg:justify-start" />
          </motion.div>

          <motion.p variants={revealUp} className="mt-5 text-[13px] font-medium text-faint">
            {theme.hero.trust}
          </motion.p>
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          className="relative flex justify-center lg:justify-end"
        >
          <PhoneShowcase screen="home" cards={theme.hero.cards} activeCard={null} />
        </motion.div>
      </div>
    </section>
  );
}
