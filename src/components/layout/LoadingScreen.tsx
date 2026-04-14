"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  duration?: number;
  brandName?: string;
  subLabel?: string;
}

const EASE_ENTER = [0.16, 1, 0.3, 1] as [number, number, number, number];
const EASE_EXIT  = [0.76, 0, 0.24, 1] as [number, number, number, number];

// Curtain: text slides up from behind an overflow-hidden wrapper
function curtain(delay: number) {
  return {
    initial:    { y: "105%" },
    animate:    { y: "0%"   },
    transition: { duration: 0.85, ease: EASE_ENTER, delay },
  };
}

// Simple fade for non-text elements
function fadeIn(delay: number) {
  return {
    initial:    { opacity: 0 },
    animate:    { opacity: 1 },
    transition: { duration: 0.7, ease: EASE_ENTER, delay },
  };
}

export function LoadingScreen({
  duration = 3000,
  brandName = "Épicurien",
  subLabel  = "W District · Bangkok",
}: LoadingScreenProps) {
  const [visible, setVisible] = useState(false);
  // Ref so useEffect can read the decision made by useLayoutEffect
  const skipRef = useRef(false);

  // Runs synchronously after React's DOM commit but BEFORE the browser paints.
  // React resets <body className> on re-render, wiping the imperative page-loaded
  // class — this restores it immediately so #main-content never flashes invisible.
  useLayoutEffect(() => {
    const hasVisited   = sessionStorage.getItem("epicurien_visited")     === "true";
    const isLangSwitch = sessionStorage.getItem("epicurien_lang_switch") === "true";

    if (isLangSwitch) sessionStorage.removeItem("epicurien_lang_switch");

    if (hasVisited || isLangSwitch) {
      document.body.classList.add("page-loaded");
      skipRef.current = true;
    }
  }, []);

  useEffect(() => {
    if (skipRef.current) return; // lang switch or revisit — nothing to do

    // Genuine first load / hard refresh — show the loading screen
    sessionStorage.setItem("epicurien_visited", "true");
    setVisible(true);

    let timer: ReturnType<typeof setTimeout>;

    function startExit() {
      timer = setTimeout(() => {
        document.body.classList.add("page-loaded");
        setVisible(false);
      }, duration);
    }

    if (document.readyState === "complete") {
      startExit();
    } else {
      window.addEventListener("load", startExit, { once: true });
    }

    return () => clearTimeout(timer);
  }, [duration]);

  const firstChar = brandName.charAt(0);
  const restChars = brandName.slice(1);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="loader"
          role="status"
          aria-label={`Loading ${brandName}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: EASE_EXIT } }}
          className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center gap-10"
        >
          {/* Paper grain — print-tactile texture on white */}
          <div
            aria-hidden="true"
            className="absolute inset-0 loader-grain opacity-[0.035] pointer-events-none"
          />

          {/* Radial vignette — draws eye to centre */}
          <div
            aria-hidden="true"
            className="absolute inset-0 loader-vignette pointer-events-none"
          />

          {/* ── Brand lockup ─────────────────────────────── */}
          <div className="relative z-[1] flex flex-col items-center gap-[0.65rem]">

            {/* Eyebrow — curtain reveal */}
            <div className="overflow-hidden">
              <motion.p
                {...curtain(0)}
                className="font-cormorant font-light text-[0.7rem] uppercase tracking-[0.35em] text-[var(--secondary-brand)] opacity-[0.45] m-0"
              >
                French Bakery
              </motion.p>
            </div>

            {/* Brand name — curtain reveal; É is italic */}
            <div className="overflow-hidden">
              <motion.h1
                {...curtain(0.08)}
                className="font-cormorant font-light [font-size:clamp(1.8rem,8vw,4.2rem)] text-[var(--secondary-brand)] tracking-[0.12em] leading-none m-0"
              >
                <em className="italic">{firstChar}</em>
                {restChars}
              </motion.h1>
            </div>

            {/* Sub-label — curtain reveal */}
            <div className="overflow-hidden">
              <motion.p
                {...curtain(0.18)}
                className="font-satoshi text-[0.65rem] uppercase tracking-[0.3em] text-[rgba(12,9,8,0.38)] m-0"
              >
                {subLabel}
              </motion.p>
            </div>
          </div>

          {/* ── Croissant icon — spin ────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_ENTER, delay: 0.05 }}
            className="relative z-[1]"
          >
            <div className="croissant-spin">
              <Image
                src="https://pbrnjxgzfmhbcgcqawro.supabase.co/storage/v1/object/public/products/Croissant-icon-laodingscreen.svg"
                alt=""
                width={52}
                height={52}
                className="block"
                loading="eager"
                unoptimized
              />
            </div>
          </motion.div>

          {/* ── Decorative rule — fade in ─────────────────── */}
          <motion.div
            {...fadeIn(0.35)}
            className="relative z-[1] flex items-center gap-3"
          >
            <div className="w-10 h-px bg-[rgba(12,9,8,0.15)]" />
            <div className="w-[5px] h-[5px] bg-[var(--secondary-brand)] rotate-45" />
            <div className="w-10 h-px bg-[rgba(12,9,8,0.15)]" />
          </motion.div>

          {/* ── Progress bar — fade in then fill ─────────── */}
          <motion.div
            {...fadeIn(0.45)}
            aria-hidden="true"
            className="relative z-[1]"
          >
            <div className="w-[clamp(120px,30vw,220px)] h-px bg-[rgba(12,9,8,0.12)]">
              <div className="h-full bg-[var(--secondary-brand)] loader-progress-fill" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
