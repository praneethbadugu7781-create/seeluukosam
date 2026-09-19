"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import { siteConfig } from "@/config/content";
import { useSoundEffect } from "@/hooks/useSoundEffect";

interface Screen1Props {
  onNext: () => void;
}

export function Screen1Mystery({ onNext }: Screen1Props) {
  const { playChime } = useSoundEffect();
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    playChime(587.33);
    setIsOpening(true);
    setTimeout(() => {
      onNext();
    }, 600);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center justify-center min-h-[75vh] sm:min-h-[80vh] text-center px-4 max-w-md mx-auto"
    >
      {/* Luxury Photo Avatar Ornament */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative mb-8 group"
      >
        {/* Glowing Aura Ring */}
        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-wine-400/40 via-gold-400/40 to-blush-300/40 blur-md animate-pulse-slow pointer-events-none" />

        {/* Circular Photo Container */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-gold-500 via-blush-300 to-wine-600 shadow-luxury-lg">
          <div className="w-full h-full rounded-full overflow-hidden bg-ivory-100 border-2 border-white/90">
            <img
              src="/photos/memory1.jpg"
              alt="Seeluu"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Floating Heart Badge */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute -bottom-1 -right-1 p-2 rounded-full bg-gradient-to-tr from-wine-800 to-rose-600 text-white shadow-md border-2 border-white"
        >
          <Heart className="w-3.5 h-3.5 fill-rose-200 text-rose-200" />
        </motion.div>
      </motion.div>

      {/* Main Greeting with Brand Typography */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.8 }}
        className="font-brand text-4xl sm:text-5xl md:text-6xl text-wine-950 tracking-wide mb-4 leading-tight"
      >
        {siteConfig.screen1.greeting}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.8 }}
        className="font-sans text-base sm:text-lg text-wine-900/75 max-w-xs mb-3 font-light leading-relaxed"
      >
        {siteConfig.screen1.subtitle}
      </motion.p>

      {/* Disclaimer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.8 }}
        className="font-serif text-sm text-wine-800/60 italic mb-10 max-w-[290px]"
      >
        {siteConfig.screen1.disclaimer}
      </motion.p>

      {/* Elegant Action Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.95, duration: 0.6 }}
        className="w-full max-w-[220px]"
      >
        <motion.button
          onClick={handleOpen}
          disabled={isOpening}
          whileHover={{ scale: 1.03, boxShadow: "0 15px 35px -5px rgba(126, 25, 45, 0.35)" }}
          whileTap={{ scale: 0.96 }}
          className="relative w-full py-4 px-8 rounded-full bg-gradient-to-r from-wine-900 via-wine-800 to-wine-900 text-ivory-50 font-sans text-xs font-semibold tracking-widest uppercase shadow-luxury hover:shadow-glow-wine transition-all duration-300 overflow-hidden group border border-wine-700/50"
        >
          {/* Subtle button sheen */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

          <span className="relative z-10 flex items-center justify-center gap-2">
            <span>{siteConfig.screen1.ctaText}</span>
            <Heart className="w-3.5 h-3.5 fill-rose-300 text-rose-300" />
          </span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
