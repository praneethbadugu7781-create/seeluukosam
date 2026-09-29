"use client";

import React, { useEffect, useState } from "react";

interface FloatingHeartMote {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  symbol: string;
}

export function SubtleParticles() {
  const [hearts, setHearts] = useState<FloatingHeartMote[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    // Mobile: only 6 hearts. Desktop: 14
    const count = mobile ? 6 : 14;
    const symbols = ["❤️", "💖", "✨", "💕", "🤍"];

    const generated: FloatingHeartMote[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: mobile ? Math.random() * 10 + 10 : Math.random() * 14 + 12,
      duration: Math.random() * 6 + 12,
      delay: Math.random() * 4,
      opacity: mobile ? Math.random() * 0.2 + 0.1 : Math.random() * 0.3 + 0.12,
      symbol: symbols[i % symbols.length],
    }));

    setHearts(generated);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden z-0 select-none"
    >
      {/* Ambient Auras — Pure CSS animations (GPU accelerated, no JS) */}
      <div
        className="absolute -top-[10%] left-[10%] w-[50vw] h-[50vw] max-w-[450px] max-h-[450px] rounded-full bg-gradient-to-br from-[#FBD5DB]/30 via-[#FCEEE4]/20 to-transparent will-change-transform animate-aura-1"
        style={{ filter: isMobile ? "blur(40px)" : "blur(60px)" }}
      />
      {!isMobile && (
        <div
          className="absolute top-[40%] -right-[10%] w-[55vw] h-[55vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-bl from-[#F8E0E4]/25 via-[#FBD5DB]/20 to-transparent will-change-transform animate-aura-2"
          style={{ filter: "blur(60px)" }}
        />
      )}
      <div
        className="absolute -bottom-[10%] left-[20%] w-[45vw] h-[45vw] max-w-[400px] max-h-[400px] rounded-full bg-gradient-to-t from-[#FCEEE4]/25 via-[#FAF4DC]/15 to-transparent will-change-transform animate-aura-3"
        style={{ filter: isMobile ? "blur(40px)" : "blur(60px)" }}
      />

      {/* Floating Hearts — Pure CSS keyframe animations (no Framer Motion) */}
      {hearts.map((h) => (
        <div
          key={h.id}
          className="absolute select-none pointer-events-none will-change-transform animate-float-heart"
          style={{
            left: `${h.x}%`,
            top: `${h.y}%`,
            fontSize: `${h.size}px`,
            opacity: h.opacity,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
          }}
        >
          {h.symbol}
        </div>
      ))}
    </div>
  );
}
