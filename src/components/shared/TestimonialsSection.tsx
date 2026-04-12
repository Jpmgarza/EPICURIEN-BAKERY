"use client";

import { motion } from "motion/react";
import { useLang } from "@/lib/lang";

const EASE_UP = [0.16, 1, 0.3, 1] as [number, number, number, number];

const reviews = [
  {
    id: "mathieu",
    author: "Mathieu C.",
    context: "Galette des Rois",
    text: "As a French person who grew up eating galettes since childhood, I 100% recommend it. The taste is exactly the same as what you'd find in France — buttery, well balanced, properly baked. Nothing felt adapted or localized. It's the real deal.",
    stars: 5,
  },
  {
    id: "taron",
    author: "Taron E.",
    context: "Baguette & Croissant",
    text: "One of the best French bakeries in Bangkok. Baguette, Croissant, and Viennoiseries made with premium French ingredients. The owner won 1st place for best croissant in Paris — you can imagine how high the standard is.",
    stars: 5,
  },
  {
    id: "nan",
    author: "Nan Bwar Kham Zu",
    context: "Ficelle & Pain Suisse",
    text: "Fresh, soft and iconic croissants. Ficelle, Brioche and Pain Suisse are my favorites. If you love croissants and bread, you should absolutely try these.",
    stars: 5,
  },
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
          <p className={`font-satoshi text-[0.6rem] uppercase tracking-[0.4em] ${isDark ? "text-[rgba(255,250,240,0.4)]" : "text-[rgba(12,9,8,0.4)]"}`}>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, i) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: EASE_UP, delay: i * 0.12 }}
              className={`relative flex flex-col gap-6 p-8 lg:p-10 border transition-transform duration-300 hover:-translate-y-1 ${isDark ? "border-[rgba(255,250,240,0.08)]" : "border-[rgba(12,9,8,0.08)]"}`}
            >
              {/* Decorative closing quote — top-right, typographic watermark */}
              <span
                aria-hidden="true"
                className={`absolute top-4 right-6 font-cormorant font-light text-[6rem] leading-none select-none pointer-events-none ${isDark ? "text-[rgba(255,250,240,0.06)]" : "text-[rgba(12,9,8,0.05)]"}`}
              >
                &rdquo;
              </span>

              {/* Stars — diamond motif */}
              <div className="flex gap-[6px]">
                {Array.from({ length: review.stars }).map((_, si) => (
                  <div
                    key={si}
                    className={`w-[5px] h-[5px] rotate-45 flex-shrink-0 ${isDark ? "bg-[rgba(255,250,240,0.55)]" : "bg-[var(--secondary-brand)] opacity-50"}`}
                  />
                ))}
              </div>

              {/* Quote body */}
              <p
                className={`font-cormorant font-light italic text-[1.1rem] leading-[1.8] flex-1 ${isDark ? "text-[rgba(255,250,240,0.88)]" : "text-[var(--secondary-brand)]"}`}
              >
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Attribution */}
              <div
                className={`pt-5 border-t flex flex-col gap-[4px] ${isDark ? "border-[rgba(255,250,240,0.08)]" : "border-[rgba(12,9,8,0.08)]"}`}
              >
                <span
                  className={`font-satoshi text-[0.68rem] uppercase tracking-[0.18em] ${isDark ? "text-[rgba(255,250,240,0.9)]" : "text-[var(--secondary-brand)]"}`}
                >
                  {review.author}
                </span>
                <span
                  className={`font-satoshi text-[0.58rem] uppercase tracking-[0.12em] ${isDark ? "text-[rgba(255,250,240,0.3)]" : "text-[rgba(12,9,8,0.35)]"}`}
                >
                  {review.context} · {t.testimonials.source}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
