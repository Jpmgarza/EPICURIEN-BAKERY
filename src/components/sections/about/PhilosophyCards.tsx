"use client";

import { Flame, Leaf, Trophy } from "lucide-react";
import { useLang } from "@/lib/lang";

export function PhilosophyCards() {
  const { t } = useLang();

  const cards = [
    {
      icon: Flame,
      title: t.about.philosophy1Title,
      desc: t.about.philosophy1Desc,
    },
    {
      icon: Leaf,
      title: t.about.philosophy2Title,
      desc: t.about.philosophy2Desc,
    },
    {
      icon: Trophy,
      title: t.about.philosophy3Title,
      desc: t.about.philosophy3Desc,
    },
  ];

  return (
    <section data-nav-color="light" className="bg-[var(--dominant-brand)] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-[var(--accent-brand)] border border-[var(--secondary-brand)] p-5 sm:p-8"
          >
            <card.icon
              size={20}
              className="text-[var(--secondary-brand)] opacity-50 mb-6"
            />
            <h2 className="font-satoshi font-medium text-[var(--secondary-brand)] text-sm mb-3 tracking-wide">
              {card.title}
            </h2>
            <p className="font-satoshi text-[var(--secondary-brand)] opacity-60 text-sm leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
