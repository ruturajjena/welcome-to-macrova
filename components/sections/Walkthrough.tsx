"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import theme from "@/config/theme";
import { PhoneShowcase } from "@/components/phone/PhoneShowcase";
import { Screen } from "@/components/phone/screens";
import { PhoneFrame } from "@/components/phone/PhoneFrame";
import { Icon } from "@/components/ui/Icon";
import { EASE } from "@/lib/motion";
import { useSafeReducedMotion } from "@/lib/hooks";

const FEATURES = theme.walkthrough;

/**
 * The scroll-pinned centrepiece. A tall section pins the phone while the app
 * screen switches (Plan → Scanner → Home → Health Lab) synced to scroll
 * progress, with one floating card and the feature copy highlighted per step.
 *
 * Reduced motion → a clean static list beside a single still screen (no pin,
 * no transitions). Gated on a mounted flag so SSR and first client render match.
 */
export function Walkthrough() {
  const reduced = useSafeReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Map continuous scroll progress → discrete active feature index.
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const i = Math.min(FEATURES.length - 1, Math.floor(p * FEATURES.length));
    setIndex((prev) => (prev === i ? prev : i));
  });

  // Subtle pin/unpin tilt.
  const tilt = useTransform(scrollYProgress, [0, 0.5, 1], [6, 0, -6]);

  const active = FEATURES[index];
  const cards = FEATURES.map((f) => f.card);

  /* ---------------------------------------------------- reduced-motion path */
  if (reduced) {
    return (
      <section id="features" className="container-page py-20">
        <Header />
        <div className="mt-12 grid items-start gap-12 lg:grid-cols-[1fr_300px]">
          <ul className="space-y-8">
            {FEATURES.map((f) => (
              <li key={f.id} className="border-l-2 border-border pl-5">
                <FeatureCopy feature={f} />
              </li>
            ))}
          </ul>
          <div className="mx-auto hidden lg:block">
            <PhoneFrame label="Macrova AI Plan screen">
              <Screen name="plan" />
            </PhoneFrame>
          </div>
        </div>
      </section>
    );
  }

  /* ------------------------------------------------------------ pinned path */
  return (
    <section id="features" ref={ref} style={{ height: `${FEATURES.length * 100 + 20}vh` }}>
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden py-16">
        <div className="container-page grid w-full items-center gap-8 lg:grid-cols-2">
          {/* Left: heading + step copy + progress */}
          <div className="order-2 lg:order-1">
            <Header align="left" />

            <div className="relative mt-8 min-h-[190px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -14, filter: "blur(8px)" }}
                  transition={{ duration: 0.45, ease: EASE }}
                >
                  <FeatureCopy feature={active} big />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Step indicator */}
            <div className="mt-8 flex gap-2">
              {FEATURES.map((f, i) => (
                <div key={f.id} className="h-1 flex-1 overflow-hidden rounded-full bg-border">
                  <motion.div
                    className="h-full rounded-full bg-accent"
                    initial={false}
                    animate={{ width: i === index ? "100%" : i < index ? "100%" : "0%" }}
                    transition={{ duration: 0.4, ease: EASE }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: pinned phone */}
          <div className="order-1 flex justify-center lg:order-2">
            <PhoneShowcase
              screen={active.screen}
              cards={cards}
              activeCard={index}
              tilt={tilt}
              idle={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Header({ align = "center" }: { align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <span className="eyebrow">
        <Icon name="Wand2" className="h-3.5 w-3.5" /> Features
      </span>
      <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        Five AI tools. <span className="text-gradient">One tap.</span>
      </h2>
    </div>
  );
}

function FeatureCopy({
  feature,
  big = false,
}: {
  feature: (typeof FEATURES)[number];
  big?: boolean;
}) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2.5">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/12 text-accent">
          <Icon name={feature.icon} className="h-5 w-5" />
        </span>
        {feature.tag && (
          <span className="rounded-full bg-accent/12 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-accent">
            {feature.tag}
          </span>
        )}
      </div>
      <h3 className={`font-extrabold tracking-tight ${big ? "text-2xl sm:text-[1.7rem]" : "text-xl"}`}>
        {feature.title}
      </h3>
      <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-muted">{feature.body}</p>
    </div>
  );
}
