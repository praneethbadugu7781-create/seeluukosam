"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AmbientMote {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
}

export function SubtleParticles() {
  const [motes, setMotes] = useState<AmbientMote[]>([]);

  useEffect(() => {
    const colors = [
      "rgba(201, 160, 48, 0.25)", // Muted Champagne Gold
      "rgba(247, 181, 193, 0.25)", // Soft Blush
      "rgba(244, 237, 225, 0.35)", // Warm Ivory
      "rgba(225, 88, 114, 0.18)", // Gentle Rose
    ];

    const count = typeof window !== "undefined" && window.innerWidth < 768 ? 14 : 22;
    const generated: AmbientMote[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      duration: Math.random() * 10 + 14,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.4 + 0.15,
      color: colors[i % colors.length],
    }));

    setMotes(generated);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden z-0 select-none"
    >
      {/* Soft atmospheric ambient glow orbs */}
      <div className="absolute top-0 left-1/4 w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-br from-blush-200/25 via-peach-100/20 to-transparent blur-3xl" />
      <div className="absolute top-1/2 right-0 w-[55vw] h-[55vw] max-w-[480px] max-h-[480px] rounded-full bg-gradient-to-bl from-wine-100/25 via-blush-100/15 to-transparent blur-3xl" />

      {/* Floating motes */}
      {motes.map((m) => (
        <motion.div
          key={m.id}
          className="absolute rounded-full"
          style={{
            left: `${m.x}%`,
            top: `${m.y}%`,
            width: `${m.size}px`,
            height: `${m.size}px`,
            backgroundColor: m.color,
            boxShadow: `0 0 ${m.size * 2}px ${m.color}`,
          }}
          animate={{
            y: ["0px", "-50px", "0px"],
            x: ["0px", "15px", "-15px", "0px"],
            opacity: [m.opacity * 0.4, m.opacity, m.opacity * 0.3],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: m.duration,
            repeat: Infinity,
            delay: m.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
