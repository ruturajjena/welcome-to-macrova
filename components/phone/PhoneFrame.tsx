"use client";

/**
 * A realistic phone built purely in CSS/SVG — titanium bezel, dynamic island,
 * side buttons, and a glossy screen reflection. No image assets.
 *
 * `scale` shrinks the whole device (used by the small preview-reel frames).
 * The screen area is a fixed 300×650 design space; screens are authored to it.
 */
export function PhoneFrame({
  children,
  scale = 1,
  className = "",
  glare = true,
  label,
}: {
  children: React.ReactNode;
  scale?: number;
  className?: string;
  glare?: boolean;
  label?: string;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: 300 * scale, height: 650 * scale }}
      role="img"
      aria-label={label ?? "Macrova app screen"}
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{ transform: `scale(${scale})`, width: 300, height: 650 }}
      >
        {/* Outer titanium frame */}
        <div className="relative h-[650px] w-[300px] rounded-[46px] bg-gradient-to-b from-[#2b2f36] to-[#0e1116] p-[3px] shadow-phone">
          {/* Inner bezel */}
          <div className="relative h-full w-full rounded-[43px] bg-black p-[9px]">
            {/* Screen */}
            <div className="relative h-full w-full overflow-hidden rounded-[35px] bg-bg">
              {children}

              {/* Dynamic island */}
              <div className="pointer-events-none absolute left-1/2 top-[10px] z-30 h-[26px] w-[86px] -translate-x-1/2 rounded-full bg-black" />

              {/* Glossy diagonal reflection */}
              {glare && (
                <div
                  className="pointer-events-none absolute inset-0 z-20 rounded-[35px]"
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 26%, rgba(255,255,255,0) 74%, rgba(255,255,255,0.06) 100%)",
                  }}
                />
              )}
            </div>
          </div>

          {/* Side buttons */}
          <div className="absolute -left-[3px] top-[120px] h-9 w-[3px] rounded-l bg-[#3a3f47]" />
          <div className="absolute -left-[3px] top-[170px] h-14 w-[3px] rounded-l bg-[#3a3f47]" />
          <div className="absolute -left-[3px] top-[240px] h-14 w-[3px] rounded-l bg-[#3a3f47]" />
          <div className="absolute -right-[3px] top-[200px] h-20 w-[3px] rounded-r bg-[#3a3f47]" />
        </div>
      </div>
    </div>
  );
}

/** Shared status bar for screens (time + signal/wifi/battery glyphs). */
export function StatusBar({ dark = false }: { dark?: boolean }) {
  const color = dark ? "text-white" : "text-ink";
  return (
    <div className={`flex items-center justify-between px-6 pt-3.5 text-[11px] font-semibold ${color}`}>
      <span>9:41</span>
      <div className="flex items-center gap-1.5 opacity-90">
        {/* signal */}
        <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor" aria-hidden>
          <rect x="0" y="7" width="3" height="4" rx="1" />
          <rect x="4.5" y="5" width="3" height="6" rx="1" />
          <rect x="9" y="2.5" width="3" height="8.5" rx="1" />
          <rect x="13" y="0" width="3" height="11" rx="1" />
        </svg>
        {/* wifi */}
        <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor" aria-hidden>
          <path d="M7.5 2.2c2.3 0 4.4.9 6 2.4l1.4-1.5A11 11 0 0 0 7.5.2 11 11 0 0 0 .1 3.1L1.5 4.6a8.4 8.4 0 0 1 6-2.4zm0 3.4c1.3 0 2.5.5 3.4 1.4l1.4-1.5a8 8 0 0 0-9.7 0l1.4 1.5c.9-.9 2.1-1.4 3.5-1.4zm0 3.4c.6 0 1.2.3 1.6.7L7.5 11 5.9 9.1c.4-.4 1-.7 1.6-.7z" />
        </svg>
        {/* battery */}
        <svg width="26" height="12" viewBox="0 0 26 12" fill="none" aria-hidden>
          <rect x="0.5" y="0.5" width="22" height="11" rx="3" stroke="currentColor" opacity="0.5" />
          <rect x="2" y="2" width="17" height="8" rx="1.5" fill="currentColor" />
          <rect x="24" y="4" width="2" height="4" rx="1" fill="currentColor" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}
