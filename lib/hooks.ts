"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * True only after the component has mounted on the client. Use this to gate any
 * render branch that differs between server and client (e.g. reduced-motion),
 * so the first client render matches the server HTML and hydration is clean.
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

/**
 * SSR-safe reduced-motion flag. Returns `false` during SSR and the very first
 * client render (matching framer-motion's server behaviour), then the real
 * user preference once mounted — never causing a hydration mismatch.
 */
export function useSafeReducedMotion(): boolean {
  const mounted = useMounted();
  const prefersReduced = useReducedMotion();
  return mounted ? !!prefersReduced : false;
}
