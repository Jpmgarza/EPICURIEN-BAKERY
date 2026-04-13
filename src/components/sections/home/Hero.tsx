"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/lib/lang";
import { DualCTA } from "@/components/shared/DualCTA";

const HERO_IMAGE =
  "https://pbrnjxgzfmhbcgcqawro.supabase.co/storage/v1/object/public/products/hero-image-goldmarble-croissant.png";

export function Hero() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--secondary-brand)]">
      {/* Hero image */}
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Base text-protection overlay — ensures WCAG AA contrast for white text on photo */}
      <div className="absolute inset-0 bg-[rgba(12,9,8,0.55)] pointer-events-none" />
      {/* Nav-area scrim — extra depth behind the transparent navbar */}
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[rgba(12,9,8,0.32)] to-transparent pointer-events-none" />
      {/* Fade to cream at the bottom so page flows into next section */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[var(--dominant-brand)] to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-16 flex flex-col items-center justify-center">
        {/* Centered headline + subline + CTA */}
        <div className="flex flex-col items-center text-center gap-7 max-w-4xl">
          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="font-cormorant font-semibold uppercase text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight"
          >
            {t.hero.headline}
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            className="font-satoshi text-white/75 text-[11px] tracking-[0.3em] uppercase"
          >
            {t.hero.subline}
          </motion.p>

          {/* Thin divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-12 h-px bg-[var(--accent-brand)] opacity-80 origin-left"
          />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <DualCTA variant="dark" />
          </motion.div>
        </div>

        {/* Award medallion seal — hidden */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.5, ease: "easeOut" }}
          className="hidden flex-col items-center justify-center shrink-0"
        >
          <div className="relative w-56 h-56">

            {/* Outermost dashed ring — static */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 224 224" aria-hidden="true">
              <circle cx="112" cy="112" r="108" fill="none" stroke="var(--accent-brand)" strokeWidth="0.75" strokeDasharray="2.5 5" opacity="0.7" />
            </svg>

            {/* Rotating ring with brand text */}
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 224 224"
              style={{ originX: "50%", originY: "50%" }}
              aria-hidden="true"
            >
              <defs>
                <path
                  id="sealRingPath"
                  d="M 112 112 m -92 0 a 92 92 0 1 1 184 0 a 92 92 0 1 1 -184 0"
                />
              </defs>
              <text fontSize="6.5" fill="var(--accent-brand)" opacity="0.9" letterSpacing="3.8" fontFamily="Satoshi, sans-serif">
                <textPath href="#sealRingPath">
                  {t.hero.badgeRing}
                </textPath>
              </text>
            </motion.svg>

            {/* Inner concentric rings with cardinal-point diamonds */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 224 224" aria-hidden="true">
              <circle cx="112" cy="112" r="76" fill="none" stroke="var(--accent-brand)" strokeWidth="1" opacity="0.85" />
              <circle cx="112" cy="112" r="71" fill="none" stroke="var(--accent-brand)" strokeWidth="0.5" opacity="0.45" />
              <polygon points="112,33  114,36  112,39  110,36"  fill="var(--accent-brand)" opacity="0.9" />
              <polygon points="112,185 114,188 112,191 110,188" fill="var(--accent-brand)" opacity="0.9" />
              <polygon points="33,112  36,114  39,112  36,110"  fill="var(--accent-brand)" opacity="0.9" />
              <polygon points="185,112 188,114 191,112 188,110" fill="var(--accent-brand)" opacity="0.9" />
            </svg>

            {/* Centre typography */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-[3px]">
              <span className="font-cormorant italic text-[var(--accent-brand)] leading-none tracking-tight text-[54px] font-light">
                {t.hero.badgeNumber}
              </span>
              <div className="w-7 h-px bg-[var(--accent-brand)] opacity-70 my-[4px]" />
              <p className="font-satoshi uppercase text-center leading-[1.9] text-[var(--secondary-brand)] text-[8px] tracking-[0.22em] opacity-70 whitespace-pre-line">
                {t.hero.badgeAward}
              </p>
              <span className="font-cormorant text-[var(--accent-brand)] text-[18px] font-light tracking-[0.18em] opacity-75 mt-[3px]">
                {t.hero.badgeYear}
              </span>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 text-[var(--secondary-brand)] opacity-60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
}
