"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, Heart } from "lucide-react";
import { siteConfig } from "@/config/content";
import { useSoundEffect } from "@/hooks/useSoundEffect";

interface Screen4Props {
  onNext: () => void;
}

export function Screen4Memories({ onNext }: Screen4Props) {
  const { playChime } = useSoundEffect();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  const memories = siteConfig.memories;
  const currentMem = memories[currentIndex];

  const handleNextCard = () => {
    playChime(600);
    if (currentIndex < memories.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      onNext();
    }
  };

  const handlePrevCard = () => {
    playChime(500);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center justify-center min-h-[80vh] w-full max-w-md mx-auto px-4 text-center py-4"
    >
      {/* Luxury Tag */}
      <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-wine-100/70 border border-wine-200/50 text-wine-900 text-[11px] font-semibold tracking-widest uppercase mb-3">
        <Sparkles className="w-3.5 h-3.5 text-gold-600" />
        <span>A Tiny Piece of Us</span>
      </div>

      <h2 className="font-brand text-3xl sm:text-4xl font-normal text-wine-950 tracking-wide mb-5">
        Moments I Cherish
      </h2>

      {/* Polaroid Style Luxury Memory Card */}
      <div className="relative w-full max-w-[320px] sm:max-w-[340px] flex items-center justify-center mb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMem.id}
            initial={{ opacity: 0, scale: 0.92, rotate: -2, y: 12 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, rotate: 2, y: -12 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="relative w-full bg-ivory-50 rounded-3xl p-4 sm:p-5 shadow-card-luxury border border-wine-200/70 flex flex-col items-center text-center"
          >
            {/* Subtle Gold Pin */}
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-tr from-gold-600 via-gold-400 to-gold-200 shadow-md border border-white/80" />

            {/* Photo Frame */}
            <div className="relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden bg-gradient-to-tr from-peach-100 via-blush-100 to-rose-50 flex items-center justify-center border border-wine-200/50 mb-4 shadow-inner">
              {currentMem.image && !imageErrors[currentMem.id] ? (
                <img
                  src={currentMem.image}
                  alt={currentMem.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  onError={() => handleImageError(currentMem.id)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center mb-3 shadow-sm">
                    <Heart className="w-6 h-6 fill-rose-300 text-rose-400 animate-pulse" />
                  </div>
                  <span className="font-brand text-sm tracking-wider text-wine-900 uppercase">
                    {currentMem.tag}
                  </span>
                  <span className="text-xs text-wine-800/50 italic mt-1 font-serif">
                    Photo memory for Seeluu
                  </span>
                </div>
              )}
            </div>

            {/* Memory Content */}
            <span className="text-[10px] font-sans font-semibold tracking-widest uppercase text-gold-600 mb-1">
              {currentMem.tag}
            </span>
            <h3 className="font-brand text-xl font-normal text-wine-950 mb-1 leading-snug">
              {currentMem.title}
            </h3>
            <p className="font-serif text-sm sm:text-base text-wine-900/80 leading-relaxed max-w-[280px] italic">
              {currentMem.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between w-full max-w-xs gap-3">
        <button
          onClick={handlePrevCard}
          disabled={currentIndex === 0}
          className={`p-3 rounded-full border border-wine-200/50 transition-all ${
            currentIndex === 0
              ? "opacity-30 cursor-not-allowed bg-ivory-100 text-wine-300"
              : "bg-ivory-50 hover:bg-wine-50 text-wine-800 shadow-luxury-sm"
          }`}
          aria-label="Previous memory"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {memories.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                playChime(500 + i * 50);
                setCurrentIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-6 bg-wine-800" : "w-1.5 bg-wine-200"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNextCard}
          className="flex items-center gap-1.5 py-2.5 px-4 rounded-full bg-wine-900 hover:bg-wine-950 text-ivory-50 text-xs font-semibold tracking-widest uppercase shadow-luxury transition-all border border-wine-800"
        >
          <span>{currentIndex === memories.length - 1 ? "Date Ideas →" : "Next"}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}
