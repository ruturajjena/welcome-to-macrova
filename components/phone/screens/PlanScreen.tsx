"use client";

import { useState } from "react";
import theme from "@/config/theme";
import { StatusBar } from "../PhoneFrame";
import { Icon } from "@/components/ui/Icon";

/** Screen 4 — "AI Plan": weekly meals + workout split, Regenerate chip. */
export function PlanScreen() {
  const s = theme.screens.plan;
  const [tab, setTab] = useState(0);

  return (
    <div className="flex h-full w-full flex-col bg-bg text-ink">
      <StatusBar />

      <div className="flex items-center justify-between px-5 pb-1 pt-4">
        <h3 className="text-[17px] font-extrabold">{s.title}</h3>
        <button className="flex items-center gap-1 rounded-full bg-accent/12 px-2.5 py-1 text-[11px] font-semibold text-accent">
          <Icon name="Sparkles" className="h-3.5 w-3.5" /> {s.regenerate}
        </button>
      </div>

      {/* Segmented tabs */}
      <div className="mx-4 mt-2 flex rounded-xl bg-surface-2 p-1 text-[12px] font-semibold">
        {s.tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setTab(i)}
            className={`flex-1 rounded-lg py-1.5 transition-colors ${
              tab === i ? "bg-surface text-ink shadow-soft" : "text-muted"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-hidden px-4 pt-3">
        {tab === 0 ? (
          <div className="space-y-2.5">
            {s.week.map((day) => (
              <div key={day.day} className="card p-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[12px] font-bold">{day.day}</span>
                  <span className="text-[10px] text-muted">
                    {day.meals.reduce((a, m) => a + m.kcal, 0)} kcal
                  </span>
                </div>
                <div className="space-y-1.5">
                  {day.meals.map((m) => (
                    <div key={m.name} className="flex items-center justify-between text-[11px]">
                      <span className="text-muted">{m.name}</span>
                      <span className="font-semibold">{m.kcal}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <div className="mb-2.5 flex items-center gap-2 rounded-xl bg-accent/10 px-3 py-2">
              <Icon name="Dumbbell" className="h-4 w-4 text-accent" />
              <span className="text-[12px] font-bold text-accent">
                {s.workout.splitName}
              </span>
            </div>
            <div className="mb-3 grid grid-cols-3 gap-2">
              {s.workout.days.map((d) => (
                <div key={d.name} className="card p-2 text-center">
                  <p className="text-[12px] font-bold">{d.name}</p>
                  <p className="mt-0.5 text-[8px] leading-tight text-muted">{d.focus}</p>
                </div>
              ))}
            </div>
            <p className="mb-1.5 px-1 text-[11px] font-bold">Today · Push</p>
            <div className="space-y-1.5">
              {s.workout.sample.map((ex) => (
                <div key={ex.name} className="card flex items-center justify-between p-2.5">
                  <span className="text-[12px] font-semibold">{ex.name}</span>
                  <span className="text-[10px] text-muted">{ex.detail}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
