"use client";

import { Award, Wheat, MapPin, Star } from "lucide-react";
import { useLang } from "@/lib/lang";

const REVIEWS_URL =
  "https://www.google.com/maps/place/%C3%89PICURIEN+FRENCH+BAKERY+(W+District)/@13.7142476,100.5933191,17z/data=!4m8!3m7!1s0x30e29d0036bd0e7b:0xd098b067113fa3f7!8m2!3d13.7142476!4d100.5933191!9m1!1b1!16s%2Fg%2F11vxmd9b6k!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D";

const DOT = (
  <span className="hidden md:block text-[var(--secondary-brand)] opacity-20 select-none">·</span>
);

export function TrustBar() {
  const { t } = useLang();

  return (
    <div className="bg-[var(--dominant-brand)] border-y border-[var(--secondary-brand)]/10 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:flex md:flex-row md:flex-wrap items-start md:items-center justify-center gap-x-6 gap-y-3 md:gap-x-8">
          <div className="flex items-start gap-2.5 justify-start md:justify-center md:items-center">
            <Award size={13} className="text-[var(--secondary-brand)] opacity-60 shrink-0 mt-px md:mt-0" />
            <span className="font-satoshi text-[var(--secondary-brand)] opacity-70 text-[10px] tracking-[0.2em] uppercase">
              {t.trustBar.award}
            </span>
          </div>
          {DOT}
          <div className="flex items-start gap-2.5 justify-start md:justify-center md:items-center">
            <Wheat size={13} className="text-[var(--secondary-brand)] opacity-60 shrink-0 mt-px md:mt-0" />
            <span className="font-satoshi text-[var(--secondary-brand)] opacity-70 text-[10px] tracking-[0.2em] uppercase">
              {t.trustBar.ingredient}
            </span>
          </div>
          {DOT}
          <div className="flex items-start gap-2.5 justify-start md:justify-center md:items-center">
            <MapPin size={13} className="text-[var(--secondary-brand)] opacity-60 shrink-0 mt-px md:mt-0" />
            <span className="font-satoshi text-[var(--secondary-brand)] opacity-70 text-[10px] tracking-[0.2em] uppercase">
              {t.trustBar.location}
            </span>
          </div>
          {DOT}
          <a
            href={REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2.5 justify-start md:justify-center md:items-center hover:opacity-100 transition-opacity"
          >
            <Star size={13} className="text-[var(--secondary-brand)] opacity-60 shrink-0 mt-px md:mt-0" />
            <span className="font-satoshi text-[var(--secondary-brand)] opacity-70 text-[10px] tracking-[0.2em] uppercase">
              {t.trustBar.google}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
