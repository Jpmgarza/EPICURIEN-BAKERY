"use client";

import { useRef } from "react";
import { useScroll } from "motion/react";
import { BakeryCard, type CardData } from "./BakeryCard";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

interface CardStackProps {
  cards: CardData[];
}

function CardStackInner({ cards }: CardStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const total = cards.length;

  return (
    // Outer container sets the scroll distance — each card gets one viewport of scroll travel
    <div
      ref={containerRef}
      style={{ height: `${total * 100}vh` }}
      className="relative"
    >
      {/* Sticky deck — stays in viewport as user scrolls through the container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-[var(--secondary-brand)]">
        {cards.map((card, i) => (
          <BakeryCard
            key={card.src}
            card={card}
            index={i}
            total={total}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </div>
  );
}

export function CardStack({ cards }: CardStackProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (!isMobile) return null;

  return <CardStackInner cards={cards} />;
}
