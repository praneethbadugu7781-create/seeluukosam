"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoveParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  symbol: string;
  color: string;
}

export function InteractiveLoveTrail() {
  const [particles, setParticles] = useState<LoveParticle[]>([]);

  const spawnParticlesAt = useCallback((x: number, y: number, count = 5) => {
    const symbols = ["❤️", "💖", "✨", "💕", "🌸", "💫", "🤍"];
    const colors = [
      "#E15872",
      "#BC3450",
      "#D4AF37",
      "#FBD5DB",
      "#EF889B",
      "#9F233C",
    ];

    const newParticles: LoveParticle[] = Array.from({ length: count }, () => {
      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 45 + 20;
      return {
        id: Math.random() + Date.now(),
        x: x + Math.cos(angle) * velocity,
        y: y + Math.sin(angle) * velocity,
        size: Math.random() * 10 + 14,
        rotation: (Math.random() - 0.5) * 60,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });

    setParticles((prev) => [...prev.slice(-35), ...newParticles]);
  }, []);

  useEffect(() => {
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      spawnParticlesAt(clientX, clientY, 6);
    };

    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [spawnParticlesAt]);

  const removeParticle = (id: number) => {
    setParticles((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{
              opacity: 1,
              scale: 0.3,
              x: p.x,
              y: p.y,
              rotate: 0,
            }}
            animate={{
              opacity: 0,
              scale: [0.3, 1.3, 0.9],
              y: p.y - 90 - Math.random() * 40,
              x: p.x + (Math.random() - 0.5) * 50,
              rotate: p.rotation,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            onAnimationComplete={() => removeParticle(p.id)}
            className="absolute -translate-x-1/2 -translate-y-1/2 drop-shadow-md font-sans"
            style={{
              fontSize: `${p.size}px`,
              color: p.color,
            }}
          >
            {p.symbol}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
