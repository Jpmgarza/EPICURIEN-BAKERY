"use client";

import Image from "next/image";
import { useLang } from "@/lib/lang";

export function FounderStory() {
  const { t } = useLang();

  return (
    <section data-nav-color="light" className="bg-[var(--dominant-brand)] py-28 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* Founder image */}
        <div className="aspect-[3/4] relative overflow-hidden">
          <Image
            src="https://pbrnjxgzfmhbcgcqawro.supabase.co/storage/v1/object/public/products/About-Image-enzo.png"
            alt="Enzo Le Bohec — founder of Épicurien"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-8 pt-4">
          <div className="w-8 h-px bg-[var(--secondary-brand)] opacity-30" />
          <div className="flex flex-col gap-5">
            {t.about.story.split("\n\n").map((paragraph, i) => (
              <p key={i} className="font-satoshi text-[var(--muted-text)] text-[15px] leading-[1.85] opacity-80">
                {paragraph}
              </p>
            ))}
          </div>
          <blockquote className="font-cormorant font-normal italic text-[var(--secondary-brand)] text-3xl md:text-4xl leading-tight border-l-2 border-[var(--secondary-brand)] pl-6">
            &ldquo;{t.about.pullQuote}&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
