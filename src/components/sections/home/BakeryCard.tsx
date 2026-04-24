"use client";

import Image from "next/image";
import { motion, useTransform, type MotionValue } from "motion/react";

export interface CardData {
  src: string;
  alt: string;
}

interface BakeryCardProps {
  card: CardData;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

export function BakeryCard({ card, index, total, scrollYProgress }: BakeryCardProps) {
  const segments = total - 1;

  // stage: negative = waiting in stack, 0 = currently front, 0→1 = shuffling to back, >1 = sent to back
  const stage = useTransform(
    scrollYProgress,
    [0, 1],
    [-index, segments - index]
  );

  const y = useTransform(
    stage,
    [-3, -1, 0, 0.3, 0.55, 1, 2],
    [0, 0, 0, -100, -100, 220, 220]
  );

  const scale = useTransform(
    stage,
    [-3, -2, -1, 0, 0.4, 1, 2],
    [0.82, 0.88, 0.94, 1, 0.96, 0.88, 0.82]
  );

  const rotateZ = useTransform(
    stage,
    [-2, -1, 0, 0.25, 0.6, 1, 2],
    [-2, 1.5, 0, 6, 8, 3, -2]
  );

  const opacity = useTransform(
    stage,
    [-3, -2, -1, 0, 1],
    [0.45, 0.65, 0.82, 1, 0.65]
  );

  // Blur increases for cards deeper in the stack
  const filterBlur = useTransform(
    stage,
    [-3, -2, -1, 0, 0.3, 0.6, 1, 2],
    [4, 3, 1.5, 0, 0, 1.5, 3, 4]
  );
  const filter = useTransform(filterBlur, (v) => `blur(${v}px)`);

  // z-index: front card stays on top during first half of animation, then drops behind
  const zIndex = useTransform(stage, (s: number) => {
    if (s < 0) return total - index;     // waiting in stack
    if (s < 0.5) return total + 2;       // front card, on top during lift
    return 0;                             // shuffled to back
  });

  return (
    <motion.div
      style={{ y, scale, rotateZ, opacity, filter, zIndex }}
      className="absolute w-[72vw] max-w-[300px]"
    >
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
        <Image
          src={card.src}
          alt={card.alt}
          fill
          className="object-cover"
          sizes="72vw"
          draggable={false}
        />
      </div>
    </motion.div>
  );
}
