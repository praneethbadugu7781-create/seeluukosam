"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { siteConfig } from "@/config/content";
import { useSoundEffect } from "@/hooks/useSoundEffect";

interface Screen2Props {
  onNext: () => void;
}

export function Screen2Message({ onNext }: Screen2Props) {
  const { playChime } = useSoundEffect();
  const [revealedIndex, setRevealedIndex] = useState<number>(0);
  const [isClimaxRevealed, setIsClimaxRevealed] = useState(false);

  useEffect(() => {
    const linesCount = siteConfig.screen2.lines.length;
    if (revealedIndex < linesCount) {
      const timer = setTimeout(() => {
        setRevealedIndex((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (!isClimaxRevealed) {
      const timer = setTimeout(() => {
        setIsClimaxRevealed(true);
      }, 1100);
      return () => clearTimeout(timer);
    }
  }, [revealedIndex, isClimaxRevealed]);

  const handleContinue = () => {
    playChime(659.25);
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center justify-center min-h-[75vh] sm:min-h-[80vh] text-center px-5 max-w-lg mx-auto"
    >
      {/* Editorial Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-brand text-3xl sm:text-4xl text-wine-950 font-normal tracking-wide mb-8 leading-snug"
      >
        {siteConfig.screen2.title}
      </motion.h2>

      {/* Line by line container */}
      <div className="space-y-4 mb-10 w-full">
        {siteConfig.screen2.lines.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            animate={{
              opacity: idx < revealedIndex ? 1 : 0,
              y: idx < revealedIndex ? 0 : 12,
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`font-serif text-xl sm:text-2xl leading-relaxed ${
              idx === 0
                ? "text-wine-900/60 font-light italic"
                : "text-wine-900/85 font-normal"
            }`}
          >
            {line}
          </motion.div>
        ))}
      </div>

      {/* Climax Line Reveal */}
      <AnimatePresence>
        {isClimaxRevealed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-8 w-full"
          >
            <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-wine-50/90 to-blush-50/60 border border-wine-200/60 shadow-luxury-sm">
              <p className="font-brand text-2xl sm:text-3xl text-wine-900 font-normal tracking-wide">
                {siteConfig.screen2.climax}
              </p>
            </div>

            {/* Continue Button */}
            <motion.button
              onClick={handleContinue}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="group flex items-center justify-center gap-2 py-3.5 px-8 rounded-full bg-wine-900 hover:bg-wine-950 text-ivory-50 font-sans text-xs font-semibold tracking-widest uppercase shadow-luxury hover:shadow-glow-wine transition-all duration-300 border border-wine-800/60"
            >
              <span>{siteConfig.screen2.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5 text-ivory-200 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
