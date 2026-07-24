"use client";

import theme from "@/config/theme";
import { StatusBar } from "../PhoneFrame";
import { Icon } from "@/components/ui/Icon";

/** Screen 1 — Onboarding "Set your goal": goal chips, progress dots, CTA. */
export function GoalScreen() {
  const s = theme.screens.goal;
  return (
    <div className="flex h-full w-full flex-col bg-bg text-ink">
      <StatusBar />

      {/* Progress dots */}
      <div className="flex items-center justify-center gap-1.5 px-5 pt-5">
        {Array.from({ length: s.progress.total }).map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all ${
              i < s.progress.current ? "w-6 bg-accent" : "w-1.5 bg-surface-2"
            }`}
          />
        ))}
      </div>

      <div className="flex flex-1 flex-col px-6 pt-10">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">
          {s.title}
        </p>
        <h3 className="mt-2 text-[26px] font-extrabold leading-tight">
          {s.question}
        </h3>
        <p className="mt-2 text-[13px] text-muted">{s.helper}</p>

        <div className="mt-7 space-y-3">
          {s.chips.map((c) => (
            <div
              key={c.label}
              className={`flex items-center gap-3 rounded-2xl border p-3.5 transition-all ${
                c.selected
                  ? "border-transparent bg-accent/12 ring-2 ring-accent"
                  : "border-border bg-surface"
              }`}
            >
              <div
                className={`grid h-10 w-10 place-items-center rounded-xl ${
                  c.selected ? "bg-accent text-accent-ink" : "bg-surface-2 text-muted"
                }`}
              >
                <Icon name={c.icon} className="h-5 w-5" />
              </div>
              <span className="flex-1 text-[15px] font-semibold">{c.label}</span>
              {c.selected && <Icon name="CheckCircle2" className="h-5 w-5 text-accent" />}
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 pb-7">
        <button className="btn btn-accent h-12 w-full text-[15px]">{s.cta}</button>
      </div>
    </div>
  );
}
