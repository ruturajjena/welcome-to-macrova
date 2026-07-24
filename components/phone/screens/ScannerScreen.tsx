"use client";

import theme from "@/config/theme";
import { StatusBar } from "../PhoneFrame";
import { Icon } from "@/components/ui/Icon";

/** Screen 3 — "AI Scanner": camera viewport, detected result card, Log meal. */
export function ScannerScreen() {
  const s = theme.screens.scanner;
  const d = s.detected;
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#0c0f12] text-white">
      {/* Camera "feed": a warm plate on a table, rendered with gradients */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 40%, #2a2118 0%, #14110d 55%, #0a0a0c 100%)",
        }}
      />
      {/* the plate */}
      <div
        className="absolute left-1/2 top-[46%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 42% 38%, #6f5a3a, #3f3320 60%, #241d12)",
          boxShadow: "0 30px 60px -12px rgba(0,0,0,0.7), inset 0 0 30px rgba(0,0,0,0.4)",
        }}
      >
        <div className="absolute inset-4 rounded-full bg-[#efe7d6]/90" />
        <div className="absolute left-6 top-7 h-14 w-16 rounded-[40%] bg-[#b4632f]" />
        <div className="absolute right-6 top-10 h-10 w-10 rounded-full bg-[#6a8f3c]" />
        <div className="absolute bottom-6 left-1/2 h-9 w-16 -translate-x-1/2 rounded-[40%] bg-[#d9b64a]" />
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <StatusBar dark />

        <div className="flex items-center justify-between px-5 pt-3">
          <span className="rounded-full bg-white/12 px-3 py-1 text-[11px] font-semibold backdrop-blur">
            {s.title}
          </span>
          <Icon name="Camera" className="h-5 w-5 opacity-80" />
        </div>

        {/* Framing reticle */}
        <div className="relative mx-auto mt-4 h-52 w-52">
          {["left-0 top-0", "right-0 top-0", "left-0 bottom-0", "right-0 bottom-0"].map(
            (pos, i) => (
              <span
                key={i}
                className={`absolute ${pos} h-7 w-7 border-accent`}
                style={{
                  borderTopWidth: pos.includes("top") ? 3 : 0,
                  borderBottomWidth: pos.includes("bottom") ? 3 : 0,
                  borderLeftWidth: pos.includes("left") ? 3 : 0,
                  borderRightWidth: pos.includes("right") ? 3 : 0,
                  borderRadius: 8,
                }}
              />
            )
          )}
          {/* scanning sweep line */}
          <span className="absolute inset-x-2 top-1/2 h-[2px] animate-pulse bg-accent/70 shadow-[0_0_12px_2px_var(--c-accent)]" />
        </div>

        <p className="mt-3 text-center">
          <span className="rounded-full bg-black/45 px-2.5 py-1 text-[11px] text-white/80 backdrop-blur-sm">
            {s.hint}
          </span>
        </p>

        {/* Detected result card */}
        <div className="mt-auto p-3.5">
          <div className="glass rounded-2xl p-3.5 text-ink">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent/15 text-accent">
                  <Icon name="Sparkles" className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[13px] font-bold leading-tight">{d.name}</p>
                  <p className="text-[10px] text-accent">{d.confidence}</p>
                </div>
              </div>
              <p className="text-[15px] font-extrabold">{d.kcal}<span className="text-[10px] font-medium text-muted"> kcal</span></p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {d.macros.map((m) => (
                <div key={m.label} className="rounded-xl bg-surface-2 px-2 py-1.5 text-center">
                  <p className="text-[13px] font-bold">
                    {m.value}
                    <span className="text-[9px] font-medium text-muted">{m.unit}</span>
                  </p>
                  <p className="text-[9px] text-muted">{m.label}</p>
                </div>
              ))}
            </div>
            <button className="btn btn-accent mt-3 h-10 w-full text-[13px]">
              <Icon name="CheckCircle2" className="h-4 w-4" /> {s.cta}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
