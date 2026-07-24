"use client";

import theme from "@/config/theme";
import { StatusBar } from "../PhoneFrame";
import { Icon } from "@/components/ui/Icon";

const toneColor: Record<string, string> = {
  accent: "var(--c-accent)",
  amber: "#F5A524",
  violet: "#8B7CF6",
};

/** Screen 2 — "Daily Blueprint": calorie ring, macro bars, meals, tab bar. */
export function HomeScreen() {
  const s = theme.screens.home;
  const pct = Math.min(1, s.ring.eaten / s.ring.goal);
  const R = 52;
  const C = 2 * Math.PI * R;

  return (
    <div className="flex h-full w-full flex-col bg-bg text-ink">
      <StatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-5 pb-2 pt-4">
        <div>
          <p className="text-[11px] text-muted">{s.greeting}</p>
          <p className="text-[17px] font-bold leading-tight">{s.name}</p>
        </div>
        <div className="grid h-9 w-9 place-items-center rounded-full bg-accent/15 text-[13px] font-bold text-accent">
          {s.name[0]}
        </div>
      </div>

      <div className="flex-1 overflow-hidden px-4">
        {/* Calorie ring card */}
        <div className="card flex items-center gap-4 p-4">
          <div className="relative grid place-items-center">
            <svg width="132" height="132" viewBox="0 0 132 132" className="-rotate-90">
              <circle cx="66" cy="66" r={R} fill="none" stroke="var(--c-surface-2)" strokeWidth="11" />
              <circle
                cx="66"
                cy="66"
                r={R}
                fill="none"
                stroke="url(#ringg)"
                strokeWidth="11"
                strokeLinecap="round"
                strokeDasharray={C}
                strokeDashoffset={C * (1 - pct)}
              />
              <defs>
                <linearGradient id="ringg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--c-accent)" />
                  <stop offset="100%" stopColor="var(--c-accent-2)" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute text-center">
              <p className="text-[22px] font-extrabold leading-none">
                {s.ring.left.toLocaleString()}
              </p>
              <p className="text-[10px] text-muted">{s.ring.unit}</p>
            </div>
          </div>
          <div className="flex-1 space-y-2">
            {s.macros.map((m) => {
              const p = Math.min(1, m.value / m.goal);
              return (
                <div key={m.label}>
                  <div className="mb-1 flex items-center justify-between text-[11px]">
                    <span className="font-semibold">{m.label}</span>
                    <span className="text-muted">
                      {m.value}/{m.goal}
                      {m.unit}
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${p * 100}%`, background: toneColor[m.tone] }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Meals */}
        <p className="mb-2 mt-4 px-1 text-[13px] font-bold">{s.mealsTitle}</p>
        <div className="space-y-2">
          {s.meals.map((meal) => (
            <div key={meal.name} className="card flex items-center gap-3 p-2.5">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-surface-2 text-lg">
                {meal.initials}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[12px] font-semibold">{meal.name}</p>
                <p className="text-[10px] text-muted">{meal.time}</p>
              </div>
              <p className="text-[12px] font-bold">{meal.kcal}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tab bar */}
      <div className="glass mx-3 mb-3 mt-3 flex items-center justify-around rounded-2xl px-2 py-2">
        {s.tabs.map((t) => (
          <div
            key={t.label}
            className={`flex flex-col items-center gap-0.5 text-[9px] ${
              t.active ? "text-accent" : "text-faint"
            }`}
          >
            <Icon name={t.icon} className="h-[18px] w-[18px]" strokeWidth={t.active ? 2.4 : 2} />
            {t.label}
          </div>
        ))}
      </div>
    </div>
  );
}
