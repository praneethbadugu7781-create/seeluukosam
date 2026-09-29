"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

  useEffect(() => {
    const symbols = ["❤️", "💖", "✨", "💕", "🌸", "🤍", "💫"];
    const count = typeof window !== "undefined" && window.innerWidth < 768 ? 18 : 28;

    const generated: FloatingHeartMote[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 14 + 12,
      duration: Math.random() * 8 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.35 + 0.15,
      symbol: symbols[i % symbols.length],
    }));

    setHearts(generated);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden z-0 select-none"
    >
      {/* Rich Romantic Glowing Ambient Auras */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.65, 0.4],
          x: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] left-[10%] w-[65vw] h-[65vw] max-w-[550px] max-h-[550px] rounded-full bg-gradient-to-br from-[#FBD5DB]/45 via-[#FCEEE4]/35 to-transparent blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.35, 0.6, 0.35],
          x: [0, -25, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[40%] -right-[10%] w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-bl from-[#F8E0E4]/40 via-[#FBD5DB]/30 to-transparent blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.55, 0.3],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-[10%] left-[20%] w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-t from-[#FCEEE4]/40 via-[#FAF4DC]/30 to-transparent blur-3xl"
      />

      {/* Floating Animated Heart Symbols */}
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute select-none pointer-events-none drop-shadow-sm"
          style={{
            left: `${h.x}%`,
            top: `${h.y}%`,
            fontSize: `${h.size}px`,
          }}
          animate={{
            y: ["0px", "-65px", "0px"],
            x: ["0px", "20px", "-15px", "0px"],
            opacity: [h.opacity * 0.3, h.opacity, h.opacity * 0.2],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: h.duration,
            repeat: Infinity,
            delay: h.delay,
            ease: "easeInOut",
          }}
        >
          {h.symbol}
        </motion.div>
      ))}
    </div>
  );
}
