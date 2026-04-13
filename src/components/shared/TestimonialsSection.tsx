"use client";

import { motion } from "motion/react";
import { useLang } from "@/lib/lang";

const EASE_UP = [0.16, 1, 0.3, 1] as [number, number, number, number];
const REVIEWS_URL = "https://maps.app.goo.gl/mRJsESrH4KEqCGJ9A";

const reviews = [
  { id: "mathieu", author: "Mathieu C.",      context: "Galette des Rois"    },
  { id: "taron",   author: "Taron E.",         context: "Baguette & Croissant" },
  { id: "nan",     author: "Nan Bwar Kham Zu", context: "Ficelle & Pain Suisse" },
];

interface TestimonialsSectionProps {
  variant?: "light" | "dark";
}

export function TestimonialsSection({ variant = "dark" }: TestimonialsSectionProps) {
  const { t } = useLang();
  const isDark = variant === "dark";

  return (
    <section
      data-nav-color={isDark ? "dark" : "light"}
      className={`${isDark ? "bg-[var(--secondary-brand)]" : "bg-[var(--dominant-brand)]"} py-28 px-6`}
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Section header ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: EASE_UP }}
          className="flex flex-col items-center gap-4 mb-20"
        >
          <p className={`font-satoshi text-[0.6rem] uppercase tracking-[0.4em] ${isDark ? "text-[rgba(255,250,240,0.65)]" : "text-[rgba(12,9,8,0.75)]"}`}>
            {t.testimonials.eyebrow}
          </p>
          <div className="flex items-center gap-3">
            <div className={`w-8 h-px ${isDark ? "bg-[rgba(255,250,240,0.15)]" : "bg-[rgba(12,9,8,0.15)]"}`} />
            <div className={`w-[5px] h-[5px] rotate-45 ${isDark ? "bg-[var(--dominant-brand)]" : "bg-[var(--secondary-brand)]"}`} />
            <div className={`w-8 h-px ${isDark ? "bg-[rgba(255,250,240,0.15)]" : "bg-[rgba(12,9,8,0.15)]"}`} />
          </div>
          <h2
            className={`font-cormorant font-normal italic text-4xl md:text-5xl text-center leading-tight ${isDark ? "text-[var(--dominant-brand)]" : "text-[var(--secondary-brand)]"}`}
          >
            {t.testimonials.heading}
          </h2>
        </motion.div>

        {/* ── Reviews grid ──────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(255,250,240,0.08)]">
          {reviews.map((review, i) => {
            const text = t.testimonials.reviewTexts[i];
            return (
            <motion.a
              key={review.id}
              href={REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: EASE_UP, delay: i * 0.12 }}
              className="flex flex-col gap-8 p-5 sm:p-8 md:p-10 bg-[var(--secondary-brand)] transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Pastry type — centered above body */}
              <span className="font-satoshi text-[0.58rem] uppercase tracking-[0.22em] text-[rgba(255,250,240,0.45)] text-center">
                {review.context}
              </span>

              {/* Quote body */}
              <p className="font-satoshi text-[0.875rem] leading-[1.85] flex-1 text-[var(--dominant-brand)] opacity-80">
                &ldquo;{text}&rdquo;
              </p>

              {/* Author */}
              <span className="font-satoshi text-[0.65rem] uppercase tracking-[0.22em] text-[var(--dominant-brand)]">
                {review.author}
              </span>
            </motion.a>
          );
          })}
        </div>

      </div>
    </section>
  );
}
