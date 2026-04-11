"use client";

import Image from "next/image";
import { InstagramIcon } from "@/components/shared/SocialIcons";
import { useLang } from "@/lib/lang";

const BASE = "https://pbrnjxgzfmhbcgcqawro.supabase.co/storage/v1/object/public/products/";

const IMAGES = [
  { src: "Menu images/pasteries/Croisant.png",              alt: "Croissant" },
  { src: "Menu images/pasteries/Pain Au Chocolat.png",      alt: "Pain au Chocolat" },
  { src: "Menu images/pasteries/Croissant Aux Amandes.png", alt: "Croissant aux Amandes" },
  { src: "Menu images/cakes/Madeleine Au Citron.png",       alt: "Madeleine au Citron" },
  { src: "Menu images/pasteries/Pain Suisse.png",           alt: "Pain Suisse" },
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
                src={`${BASE}${encodeURIComponent(src).replace(/%2F/g, "/")}`}
                alt={alt}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
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
