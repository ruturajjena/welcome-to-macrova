"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import theme from "@/config/theme";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Icon } from "@/components/ui/Icon";

/** Sticky nav — blurs and gains a hairline border once you scroll. */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b" : "border-b border-transparent"
      }`}
      style={scrolled ? undefined : { background: "transparent", backdropFilter: "none" }}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-7 md:flex">
          {theme.nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a href={theme.nav.cta.href} className="btn btn-accent h-10 px-4 text-sm">
            <Icon name="Sparkles" className="h-4 w-4" />
            <span className="hidden sm:inline">{theme.nav.cta.label}</span>
            <span className="sm:hidden">Free</span>
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
