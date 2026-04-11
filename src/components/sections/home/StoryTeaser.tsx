"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";

export function StoryTeaser() {
  const { t } = useLang();
  return (
    <section className="bg-[var(--dominant-brand)] py-28 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Pull quote */}
        <div>
          <blockquote className="font-cormorant font-normal italic text-[var(--secondary-brand)] text-4xl md:text-5xl lg:text-[3.25rem] leading-tight">
            &ldquo;{t.storyTeaser.pullQuote}&rdquo;
          </blockquote>
        </div>

        {/* Text + link */}
        <div className="flex flex-col gap-7">
          <div className="w-8 h-px bg-[var(--secondary-brand)] opacity-30" />
          <p className="font-satoshi text-[var(--muted-text)] text-[15px] leading-[1.8] opacity-80">
            {t.storyTeaser.body}
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-satoshi text-[var(--secondary-brand)] text-[10px] tracking-[0.3em] uppercase border-b border-[var(--secondary-brand)]/30 pb-px self-start hover:border-[var(--secondary-brand)] hover:opacity-60 transition-all"
          >
            {t.storyTeaser.meetBaker}
          </Link>
        </div>
      </div>
    </section>
  );
}
