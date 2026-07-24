"use client";

import { motion } from "framer-motion";
import theme from "@/config/theme";
import { PhoneShowcase } from "@/components/phone/PhoneShowcase";
import { StoreBadges } from "@/components/ui/StoreBadges";
import { QRCode } from "@/components/ui/QRCode";
import { Blooms } from "@/components/ui/Blooms";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { EASE } from "@/lib/motion";

/** Final CTA — success-screen phone reappears + store badges + QR block. */
export function DownloadCTA() {
  return (
    <section id="download" className="relative overflow-hidden py-24">
      <Blooms variant="download" />

      <div className="container-page grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {theme.download.eyebrow}
            </span>
          </Reveal>
          <Reveal>
            <h2 className="mt-4 text-balance text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl">
              {theme.download.heading}
            </h2>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-5 max-w-lg text-lg text-muted lg:mx-0">
              {theme.download.subhead}
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row lg:items-start">
              <StoreBadges className="justify-center lg:justify-start" />
              <div className="flex items-center gap-3">
                <QRCode />
                <span className="max-w-[90px] text-left text-[13px] font-semibold text-muted">
                  {theme.download.qrLabel}
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <p className="mt-6 flex items-center justify-center gap-2 text-[13px] font-medium text-faint lg:justify-start">
              <Icon name="CheckCircle2" className="h-4 w-4 text-accent" />
              {theme.download.trust}
            </p>
          </Reveal>
        </div>

        {/* Success phone */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex justify-center"
        >
          <PhoneShowcase screen="success" cards={[]} />
        </motion.div>
      </div>
    </section>
  );
}
