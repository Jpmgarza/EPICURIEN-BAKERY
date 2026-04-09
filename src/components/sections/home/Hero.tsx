"use client";

import { motion } from "motion/react";
import { Award, ChevronDown } from "lucide-react";
import { useLang } from "@/lib/lang";
import { DualCTA } from "@/components/shared/DualCTA";

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--secondary-brand)]">
      {/* Noise texture overlay */}
      <div className="bg-noise absolute inset-0 opacity-[0.18] pointer-events-none" />
      {/* Warm radial glow from bottom */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(218,145,0,0.08),transparent_60%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto gap-7 pt-16">
        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2.5"
        >
          <Award size={12} className="text-[var(--accent-brand)] shrink-0" />
          <span className="font-satoshi text-[var(--accent-brand)] text-[10px] tracking-[0.3em] uppercase">
            {t.hero.trustBadge}
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="font-cormorant font-normal italic text-[var(--dominant-brand)] text-5xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight"
        >
          {t.hero.headline}
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="font-satoshi text-[var(--dominant-brand)] opacity-50 text-[11px] tracking-[0.3em] uppercase"
        >
          {t.hero.subline}
        </motion.p>

        {/* Thin gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-12 h-px bg-[var(--accent-brand)] opacity-60"
        />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <DualCTA />
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--accent-brand)] opacity-60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
}
