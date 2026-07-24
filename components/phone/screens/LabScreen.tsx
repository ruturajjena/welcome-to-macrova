"use client";

import theme from "@/config/theme";
import { StatusBar } from "../PhoneFrame";
import { Icon } from "@/components/ui/Icon";

/** Screen 5 — "AI Health Lab": weekly SVG chart + recommendation cards. */
export function LabScreen() {
  const s = theme.screens.lab;
  const { series, days } = s.chart;

  // Map the 0..100 series to an SVG polyline in a 244×96 plot.
  const W = 244;
  const H = 96;
  const max = Math.max(...series);
  const min = Math.min(...series);
  const range = Math.max(1, max - min);
  const pts = series.map((v, i) => {
    const x = (i / (series.length - 1)) * W;
    const y = H - 12 - ((v - min) / range) * (H - 24);
    return [x, y] as const;
  });
  const line = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
  const area = `${line} L${W},${H} L0,${H} Z`;

  return (
    <div className="flex h-full w-full flex-col bg-bg text-ink">
      <StatusBar />

      <div className="px-5 pb-1 pt-4">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent/15 text-accent">
            <Icon name="FlaskConical" className="h-4 w-4" />
          </span>
          <h3 className="text-[16px] font-extrabold">{s.title}</h3>
        </div>
        <p className="mt-1 text-[11px] text-muted">{s.subtitle}</p>
      </div>

      <div className="flex-1 overflow-hidden px-4 pt-2">
        {/* Chart card */}
        <div className="card p-3.5">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-[11px] font-semibold text-muted">{s.chart.label}</span>
            <span className="flex items-center gap-1 rounded-full bg-accent/12 px-2 py-0.5 text-[10px] font-bold text-accent">
              <Icon name="TrendingUp" className="h-3 w-3" /> {s.chart.delta}
            </span>
          </div>
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="none" height={96}>
            <defs>
              <linearGradient id="labfill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--c-accent)" stopOpacity="0.30" />
                <stop offset="100%" stopColor="var(--c-accent)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="labline" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--c-accent)" />
                <stop offset="100%" stopColor="var(--c-accent-2)" />
              </linearGradient>
            </defs>
            <path d={area} fill="url(#labfill)" />
            <path d={line} fill="none" stroke="url(#labline)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {pts.map((p, i) => (
              <circle key={i} cx={p[0]} cy={p[1]} r={i === pts.length - 1 ? 3.5 : 2} fill="var(--c-accent)" />
            ))}
          </svg>
          <div className="mt-1 flex justify-between px-0.5 text-[9px] text-faint">
            {days.map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </div>
        </div>

        {/* Insight cards */}
        <div className="mt-3 space-y-2">
          {s.insights.map((ins) => (
            <div key={ins.title} className="card flex gap-2.5 p-3">
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-accent/12 text-accent">
                <Icon name={ins.icon} className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[12px] font-bold leading-tight">{ins.title}</p>
                <p className="mt-0.5 text-[10.5px] leading-snug text-muted">{ins.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
