"use client";

import { motion } from "framer-motion";
import type { FloatingCard as CardData } from "@/config/theme";
import { Icon } from "@/components/ui/Icon";
import { EASE } from "@/lib/motion";

/** A small glassy chip that floats near the phone and springs in/out. */
export function FloatingCard({
  card,
  visible,
  parallax = 0,
}: {
  card: CardData;
  visible: boolean;
  /** px offset applied for scroll parallax (depth-scaled by caller) */
  parallax?: number;
}) {
  return (
    <motion.div
      // Hidden on the narrowest screens (spec: floating cards reduced on mobile)
      className="pointer-events-none absolute z-30 hidden w-max max-w-[190px] sm:block"
      style={{ left: `${card.x}%`, top: `${card.y}%`, y: parallax }}
      initial={false}
      animate={
        visible
          ? { opacity: 1, scale: 1, x: "-50%", filter: "blur(0px)" }
          : { opacity: 0, scale: 0.85, x: "-50%", filter: "blur(6px)" }
      }
      transition={{ type: "spring", stiffness: 200, damping: 22 }}
    >
      <motion.div
        className="glass flex items-center gap-2.5 rounded-2xl px-3 py-2 shadow-glass"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4 + card.x / 40, repeat: Infinity, ease: EASE }}
      >
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-accent text-accent-ink">
          <Icon name={card.icon} className="h-4 w-4" />
        </span>
        <div className="leading-tight">
          <p className="text-[12px] font-bold text-ink">{card.title}</p>
          <p className="text-[10.5px] text-muted">{card.subtitle}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
