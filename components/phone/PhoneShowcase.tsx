"use client";

import { AnimatePresence, motion, type MotionValue } from "framer-motion";
import type { ScreenKey, FloatingCard as CardData } from "@/config/theme";
import { PhoneFrame } from "./PhoneFrame";
import { SCREENS } from "./screens";
import { FloatingCard } from "./FloatingCard";
import { EASE } from "@/lib/motion";
import { useSafeReducedMotion } from "@/lib/hooks";

/**
 * The signature element. Renders the CSS phone with one app screen at a time
 * and crossfades/slides between screens when `screen` changes — the same motion
 * as navigating inside the app. Glassy cards float around it and animate in/out.
 *
 * It is presentational: whoever renders it decides which `screen` is active and
 * which card is visible (the Walkthrough drives these from scroll progress; the
 * Hero and Download sections pass a fixed screen). This keeps the scroll
 * mechanics out of the device so it can be reused anywhere.
 *
 * Reduced motion: no crossfade, no idle float — the current screen renders
 * instantly and cards appear without springs. SSR-safe via useSafeReducedMotion.
 */
export function PhoneShowcase({
  screen,
  cards = [],
  activeCard = null,
  scale = 1,
  idle = true,
  tilt,
  className = "",
}: {
  screen: ScreenKey;
  /** Cards to render around the phone. */
  cards?: CardData[];
  /**
   * Which cards are currently visible. `null` = all cards visible (hero/static).
   * A number = only that index is visible (walkthrough highlights one per step).
   */
  activeCard?: number | null;
  scale?: number;
  idle?: boolean;
  /** Optional scroll-linked tilt (rotateX degrees) for pin/unpin parallax. */
  tilt?: MotionValue<number>;
  className?: string;
}) {
  const reduced = useSafeReducedMotion();
  const ActiveScreen = SCREENS[screen];

  return (
    <div
      className={`relative ${className}`}
      style={{ width: 300 * scale, height: 650 * scale }}
    >
      {/* Floating cards (behind/around the device) */}
      {cards.map((card, i) => (
        <FloatingCard
          key={`${card.title}-${i}`}
          card={card}
          visible={!reduced && (activeCard === null || activeCard === i)}
        />
      ))}

      {/* Idle-floating, subtly tilted device */}
      <motion.div
        className="relative h-full w-full [transform-style:preserve-3d]"
        style={tilt && !reduced ? { rotateX: tilt } : undefined}
        animate={!reduced && idle ? { y: [0, -12, 0] } : undefined}
        transition={{ duration: 7, repeat: Infinity, ease: EASE }}
      >
        <PhoneFrame scale={scale} label={`Macrova app — ${screen} screen`}>
          {reduced ? (
            <div className="absolute inset-0">
              <ActiveScreen />
            </div>
          ) : (
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={screen}
                className="absolute inset-0"
                initial={{ opacity: 0, y: 26, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <ActiveScreen />
              </motion.div>
            </AnimatePresence>
          )}
        </PhoneFrame>
      </motion.div>
    </div>
  );
}
