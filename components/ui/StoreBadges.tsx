"use client";

import { motion } from "framer-motion";
import theme from "@/config/theme";

/**
 * Inline App Store + Google Play badges (SVG, no image assets). They lift on
 * hover. Links come from theme.brand.stores — swap them there.
 */

function AppleBadge() {
  return (
    <svg viewBox="0 0 120 40" role="img" aria-label="Download on the App Store" className="h-[46px] w-auto">
      <rect width="120" height="40" rx="8" fill="black" />
      <rect x="0.5" y="0.5" width="119" height="39" rx="7.5" fill="none" stroke="#A6A6A6" strokeOpacity="0.3" />
      <path
        fill="#fff"
        d="M24.77 20.3c-.02-2.35 1.92-3.48 2.01-3.54-1.1-1.6-2.8-1.82-3.4-1.85-1.45-.15-2.83.85-3.56.85-.73 0-1.86-.83-3.06-.81-1.57.02-3.02.91-3.83 2.32-1.63 2.83-.42 7.02 1.16 9.32.78 1.13 1.71 2.39 2.93 2.34 1.18-.05 1.62-.76 3.05-.76 1.42 0 1.83.76 3.07.73 1.27-.02 2.07-1.15 2.85-2.28.9-1.31 1.27-2.58 1.29-2.64-.03-.01-2.47-.95-2.5-3.75zM22.42 12.9c.65-.79 1.09-1.88.97-2.98-.94.04-2.08.63-2.75 1.4-.6.69-1.12 1.8-.98 2.86 1.05.08 2.11-.53 2.76-1.28z"
      />
      <text x="34" y="16" fill="#fff" fontFamily="system-ui,sans-serif" fontSize="7">
        Download on the
      </text>
      <text x="34" y="30" fill="#fff" fontFamily="system-ui,sans-serif" fontSize="15" fontWeight="600">
        App Store
      </text>
    </svg>
  );
}

function GooglePlayBadge() {
  return (
    <svg viewBox="0 0 135 40" role="img" aria-label="Get it on Google Play" className="h-[46px] w-auto">
      <rect width="135" height="40" rx="8" fill="black" />
      <rect x="0.5" y="0.5" width="134" height="39" rx="7.5" fill="none" stroke="#A6A6A6" strokeOpacity="0.3" />
      <path fill="#00D2FF" d="M14.4 11.2c-.24.25-.38.64-.38 1.15v15.3c0 .5.14.9.38 1.15l.05.05 8.57-8.57v-.2l-8.57-8.58-.05.05z" />
      <path fill="#FFCE00" d="M25.86 23.4l-2.86-2.86v-.2l2.86-2.86.07.04 3.39 1.92c.97.55.97 1.45 0 2l-3.39 1.93-.07.03z" />
      <path fill="#FF3A44" d="M25.93 23.36L23 20.44l-8.62 8.62c.32.34.85.38 1.45.05l10.1-5.75" />
      <path fill="#00E676" d="M25.93 17.52l-10.1-5.74c-.6-.34-1.13-.3-1.45.04L23 20.44l2.93-2.92z" />
      <text x="42" y="16" fill="#fff" fontFamily="system-ui,sans-serif" fontSize="7">
        GET IT ON
      </text>
      <text x="42" y="30" fill="#fff" fontFamily="system-ui,sans-serif" fontSize="15" fontWeight="600">
        Google Play
      </text>
    </svg>
  );
}

export function StoreBadges({
  className = "",
  align = "start",
}: {
  className?: string;
  align?: "start" | "center";
}) {
  return (
    <div
      className={`flex flex-wrap gap-3 ${align === "center" ? "justify-center" : ""} ${className}`}
    >
      <motion.a
        href={theme.brand.stores.apple}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Macrova on the Apple App Store"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.97 }}
        className="rounded-[9px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <AppleBadge />
      </motion.a>
      <motion.a
        href={theme.brand.stores.google}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Macrova on Google Play"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.97 }}
        className="rounded-[9px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <GooglePlayBadge />
      </motion.a>
    </div>
  );
}
