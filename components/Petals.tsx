"use client";

import { useEffect, useState, type CSSProperties } from "react";

type Petal = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  emoji: string;
};

const EMOJIS = ["🌸", "🌸", "🌼", "🌸"];

export default function Petals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const count = 18;
    const generated: Petal[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 14 + Math.random() * 14,
      duration: 8 + Math.random() * 8,
      delay: Math.random() * 10,
      drift: Math.random() * 120 - 60,
      emoji: EMOJIS[i % EMOJIS.length],
    }));
    setPetals(generated);
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 z-40 overflow-hidden">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal animate-fall"
          style={{
            left: `${p.left}vw`,
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            "--drift": `${p.drift}px`,
          } as CSSProperties}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
