"use client";

import { MapPin, Clock, Phone, Train, Car } from "lucide-react";
import { useLang } from "@/lib/lang";

const MAPS_URL = "https://maps.app.goo.gl/mRJsESrH4KEqCGJ9A";

export function InfoGrid() {
  const { t } = useLang();

  const infoItems = [
    { icon: MapPin, text: t.visit.address },
    { icon: Clock, text: t.visit.hours },
    { icon: Phone, text: t.visit.phone },
    { icon: Train, text: t.visit.bts },
    { icon: Car, text: t.visit.parking },
  ];

  return (
    <section className="bg-[var(--dominant-brand)] py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: info cards */}
        <div className="flex flex-col gap-3">
          {infoItems.map(({ icon: Icon, text }, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 border border-[var(--secondary-brand)]/8 bg-white/40"
            >
              <Icon
                size={16}
                className="text-[var(--secondary-brand)] opacity-40 shrink-0 mt-0.5"
              />
              <p className="font-satoshi text-[var(--muted-text)] text-sm leading-relaxed opacity-80">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Right: directions CTA */}
        <div className="flex flex-col gap-4">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-[var(--accent-brand)] text-[var(--secondary-brand)] font-satoshi font-medium text-xs tracking-[0.2em] uppercase py-5 hover:opacity-90 transition-opacity"
          >
            <MapPin size={15} />
            {t.visit.directionsBtn}
          </a>
          <p className="font-satoshi text-[var(--muted-text)] text-xs opacity-60 text-center tracking-wide">
            {t.visit.subline}
          </p>
        </div>
      </div>
    </section>
  );
}
