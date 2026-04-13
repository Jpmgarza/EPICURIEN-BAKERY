"use client";

import Image from "next/image";
import { InstagramIcon } from "@/components/shared/SocialIcons";
import { useLang } from "@/lib/lang";

const IMAGES = [
  { src: "https://pbrnjxgzfmhbcgcqawro.supabase.co/storage/v1/object/public/products/social%20media/instagram/instagram-2.png", alt: "Épicurien on Instagram" },
  { src: "https://pbrnjxgzfmhbcgcqawro.supabase.co/storage/v1/object/public/products/social%20media/instagram/instagram-1.png", alt: "Épicurien on Instagram" },
  { src: "https://pbrnjxgzfmhbcgcqawro.supabase.co/storage/v1/object/public/products/social%20media/instagram/Instagram-3.png",  alt: "Épicurien on Instagram" },
  { src: "https://pbrnjxgzfmhbcgcqawro.supabase.co/storage/v1/object/public/products/social%20media/instagram/Instagram-4.png",  alt: "Épicurien on Instagram" },
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {IMAGES.map(({ src, alt }) => (
            <a
              key={src}
              href="https://instagram.com/epicurien.bkk"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square relative overflow-hidden group"
              title={alt}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[var(--secondary-brand)]/0 group-hover:bg-[var(--secondary-brand)]/20 transition-colors duration-300" />
            </a>
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
