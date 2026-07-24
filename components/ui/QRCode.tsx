/**
 * A decorative QR-style block rendered purely from CSS (no image, no scanner
 * target). Deterministic pattern so it looks like a real code without encoding
 * anything. Swap for a real generated QR before launch if desired.
 */
export function QRCode({ size = 108 }: { size?: number }) {
  const n = 11;
  const cells: boolean[] = [];
  for (let i = 0; i < n * n; i++) {
    // pseudo-random but stable pattern
    cells.push((Math.sin(i * 12.9898) * 43758.5453) % 1 > 0.45);
  }
  const finder = (r: number, c: number) =>
    (r < 3 && c < 3) || (r < 3 && c > n - 4) || (r > n - 4 && c < 3);

  return (
    <div
      className="rounded-2xl bg-white p-2.5 shadow-card"
      style={{ width: size + 20, height: size + 20 }}
      aria-hidden
    >
      <div
        className="grid h-full w-full"
        style={{ gridTemplateColumns: `repeat(${n}, 1fr)`, gap: 2 }}
      >
        {cells.map((on, i) => {
          const r = Math.floor(i / n);
          const c = i % n;
          const corner = finder(r, c);
          return (
            <span
              key={i}
              className="rounded-[2px]"
              style={{ background: corner || on ? "#0C1418" : "transparent" }}
            />
          );
        })}
      </div>
    </div>
  );
}
