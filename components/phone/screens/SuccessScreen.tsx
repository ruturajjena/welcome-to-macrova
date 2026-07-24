"use client";

import { motion } from "framer-motion";
import theme from "@/config/theme";
import { StatusBar } from "../PhoneFrame";
import { Icon } from "@/components/ui/Icon";
import { EASE } from "@/lib/motion";

/** Screen 6 — "Plan ready 🎉": celebratory check burst + summary + CTA. */
export function SuccessScreen({ animate = true }: { animate?: boolean }) {
  const s = theme.screens.success;
  const rays = Array.from({ length: 10 });

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-bg text-ink">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(90% 50% at 50% 22%, color-mix(in srgb, var(--c-accent) 18%, transparent), transparent 70%)",
        }}
      />
      <div className="relative z-10 flex h-full flex-col">
        <StatusBar />

        <div className="flex flex-1 flex-col items-center px-6 pt-14 text-center">
          {/* Check burst */}
          <div className="relative grid h-24 w-24 place-items-center">
            {rays.map((_, i) => {
              const angle = (i / rays.length) * 360;
              return (
                <motion.span
                  key={i}
                  className="absolute h-1.5 w-1.5 rounded-full bg-accent"
                  initial={animate ? { scale: 0, x: 0, y: 0, opacity: 0 } : false}
                  animate={
                    animate
                      ? {
                          scale: [0, 1, 0.6],
                          x: Math.cos((angle * Math.PI) / 180) * 46,
                          y: Math.sin((angle * Math.PI) / 180) * 46,
                          opacity: [0, 1, 0],
                        }
                      : {}
                  }
                  transition={{ duration: 1.1, delay: 0.15, ease: EASE, repeat: Infinity, repeatDelay: 1.4 }}
                />
              );
            })}
            <motion.div
              initial={animate ? { scale: 0 } : false}
              animate={animate ? { scale: 1 } : {}}
              transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.1 }}
              className="grid h-20 w-20 place-items-center rounded-full bg-accent text-accent-ink shadow-[0_10px_30px_-6px_var(--c-accent)]"
            >
              <Icon name="CheckCircle2" className="h-10 w-10" strokeWidth={2.4} />
            </motion.div>
          </div>

          <span className="mt-6 rounded-full bg-accent/12 px-3 py-1 text-[12px] font-bold text-accent">
            {s.badge}
          </span>
          <h3 className="mt-3 text-[24px] font-extrabold leading-tight">{s.title}</h3>
          <p className="mt-1.5 text-[12.5px] text-muted">{s.subtitle}</p>

          {/* Summary card */}
          <div className="card mt-5 w-full divide-y divide-border">
            {s.summary.map((row) => (
              <div key={row.label} className="flex items-center gap-3 p-3">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-surface-2 text-accent">
                  <Icon name={row.icon} className="h-4 w-4" />
                </span>
                <span className="flex-1 text-left text-[12px] text-muted">{row.label}</span>
                <span className="text-[13px] font-bold">{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 pb-8 pt-4">
          <button className="btn btn-accent h-12 w-full text-[15px]">{s.cta}</button>
        </div>
      </div>
    </div>
  );
}
