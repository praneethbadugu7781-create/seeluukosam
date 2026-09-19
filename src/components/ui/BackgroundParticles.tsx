"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface FloatingHeart {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  symbol: string;
  opacity: number;
}

export function BackgroundParticles() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const symbols = ["❤️", "💖", "🌸", "✨", "💕", "🤍"];
    const count = typeof window !== "undefined" && window.innerWidth < 768 ? 16 : 26;

    const generated: FloatingHeart[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 14 + 10,
      duration: Math.random() * 8 + 10,
      delay: Math.random() * 6,
      symbol: symbols[i % symbols.length],
      opacity: Math.random() * 0.4 + 0.15,
    }));

    setHearts(generated);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden z-0 select-none"
    >
      {/* Dynamic breathing glowing radial luxury orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.55, 0.35],
          x: [0, 25, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[15%] -left-[10%] w-[70vw] h-[70vw] max-w-[550px] max-h-[550px] rounded-full bg-gradient-to-br from-blush-300/40 via-peach-200/30 to-transparent blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -30, 0],
          y: [0, 25, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[35%] -right-[15%] w-[75vw] h-[75vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-bl from-wine-200/40 via-blush-200/25 to-transparent blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-[20%] left-[25%] w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-t from-peach-300/35 via-gold-200/25 to-transparent blur-3xl"
      />

      {/* Floating Gentle Heart Motes */}
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          className="absolute select-none pointer-events-none"
          style={{
            left: `${h.left}%`,
            top: `${h.top}%`,
            fontSize: `${h.size}px`,
          }}
          animate={{
            y: ["0px", "-70px", "0px"],
            x: ["0px", "25px", "-20px", "0px"],
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
