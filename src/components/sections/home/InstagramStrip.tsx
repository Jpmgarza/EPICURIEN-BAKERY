"use client";

import { InstagramIcon } from "@/components/shared/SocialIcons";
import { useLang } from "@/lib/lang";

// Static gradient variants for each placeholder — avoids inline styles
const GLOWS = [
  "bg-[radial-gradient(ellipse_at_30%_50%,rgba(218,145,0,0.12),transparent_60%)]",
  "bg-[radial-gradient(ellipse_at_45%_70%,rgba(218,145,0,0.10),transparent_60%)]",
  "bg-[radial-gradient(ellipse_at_60%_30%,rgba(218,145,0,0.14),transparent_60%)]",
  "bg-[radial-gradient(ellipse_at_25%_65%,rgba(218,145,0,0.09),transparent_60%)]",
  "bg-[radial-gradient(ellipse_at_55%_40%,rgba(218,145,0,0.13),transparent_60%)]",
];

export function InstagramStrip() {
  const { t } = useLang();
  return (
    <section className="bg-[var(--dominant-brand)] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <InstagramIcon size={15} className="text-[var(--secondary-brand)] opacity-40" />
          <span className="font-satoshi text-[var(--secondary-brand)] opacity-70 text-[10px] tracking-[0.35em] uppercase">
            {t.contact.instagramHandle}
          </span>
        </div>

        {/* Image grid — 2 cols mobile / 5 cols desktop */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5">
          {GLOWS.map((glow, i) => (
            <div key={i} className="aspect-square relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1c1309] via-[#0C0908] to-[#1a1007]" />
              <div className={`absolute inset-0 ${glow}`} />
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center mt-10">
          <a
            href="https://instagram.com/epicurien.bkk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-satoshi text-[var(--secondary-brand)] opacity-60 hover:opacity-90 text-[10px] tracking-[0.3em] uppercase border border-[var(--secondary-brand)]/30 hover:border-[var(--secondary-brand)]/60 px-8 py-3.5 transition-all"
          >
            {t.home.followInstagram}
          </a>
        </div>
      </div>
    </section>
  );
}
