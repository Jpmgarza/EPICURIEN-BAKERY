"use client";

import { useLang } from "@/lib/lang";

export function FounderStory() {
  const { t } = useLang();

  return (
    <section className="bg-[var(--dominant-brand)] py-28 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* Image placeholder */}
        <div className="aspect-[3/4] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1c1309] via-[#0C0908] to-[#1a1007]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(218,145,0,0.15),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(255,250,240,0.05),transparent_50%)]" />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-8 pt-4">
          <div className="w-8 h-px bg-[var(--accent-brand)] opacity-60" />
          <p className="font-satoshi text-[var(--muted-text)] text-[15px] leading-[1.85] opacity-80">
            {t.about.story}
          </p>
          <blockquote className="font-cormorant font-normal italic text-[var(--secondary-brand)] text-3xl md:text-4xl leading-tight border-l-2 border-[var(--accent-brand)] pl-6">
            &ldquo;{t.about.pullQuote}&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
