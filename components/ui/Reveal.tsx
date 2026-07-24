"use client";

import { motion, type Variants } from "framer-motion";
import { revealUp, stagger } from "@/lib/motion";

/**
 * Scroll-reveal wrapper. Children animate blur+slide-up once on enter.
 * Reduced-motion users get the content immediately (framer-motion honours the
 * OS setting and skips the transform automatically).
 */
export function Reveal({
  children,
  className,
  variants = revealUp,
  as = "div",
  amount = 0.3,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  as?: keyof typeof motion;
  amount?: number;
  once?: boolean;
}) {
  const Cmp = (motion as never)[as] as typeof motion.div;
  return (
    <Cmp
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </Cmp>
  );
}

/** Staggers the reveal of its direct <Reveal> / motion children. */
export function RevealGroup({
  children,
  className,
  stagger: s = 0.09,
  delay = 0,
  amount = 0.25,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={stagger(s, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}
