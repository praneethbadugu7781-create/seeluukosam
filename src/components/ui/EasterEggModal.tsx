"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, X } from "lucide-react";
import { siteConfig } from "@/config/content";
import { useSoundEffect } from "@/hooks/useSoundEffect";

interface EasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EasterEggModal({ isOpen, onClose }: EasterEggModalProps) {
  const { playChime } = useSoundEffect();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-wine-950/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="relative w-full max-w-sm rounded-3xl bg-ivory-50/95 p-7 text-center shadow-luxury-lg border border-wine-200/60 z-10 overflow-hidden"
          >
            {/* Glow decoration */}
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-blush-300/30 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 rounded-full bg-gold-400/20 blur-2xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={() => {
                playChime(440);
                onClose();
              }}
              className="absolute top-4 right-4 p-1.5 rounded-full text-wine-900/40 hover:text-wine-900 hover:bg-wine-100/50 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Icon */}
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-blush-100 to-peach-100 text-wine-600 shadow-inner border border-wine-200/40">
              <Sparkles className="w-6 h-6 animate-pulse text-gold-500" />
            </div>

            <p className="text-[10px] font-semibold uppercase tracking-widest text-gold-600 mb-2 font-sans">
              {siteConfig.easterEgg.heading}
            </p>

            <h3 className="font-brand text-xl font-normal text-wine-950 mb-3 leading-relaxed">
              {siteConfig.easterEgg.body}
            </h3>

            <p className="text-sm font-serif italic text-wine-900/75 mb-6">
              {siteConfig.easterEgg.subtext}
            </p>

            <button
              onClick={() => {
                playChime(600);
                onClose();
              }}
              className="w-full py-3.5 rounded-full bg-wine-900 hover:bg-wine-950 text-ivory-50 text-xs font-semibold tracking-widest uppercase shadow-luxury transition-all duration-200 hover:shadow-glow-wine border border-wine-800"
            >
              Got it, you cutie 😌❤️
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function EasterEggTrigger({ onTrigger }: { onTrigger: () => void }) {
  const { playChime } = useSoundEffect();

  return (
    <motion.button
      onClick={() => {
        playChime(880);
        onTrigger();
      }}
      whileHover={{ scale: 1.25, rotate: 10 }}
      whileTap={{ scale: 0.85 }}
      className="fixed bottom-4 right-4 z-40 p-2.5 text-wine-400/50 hover:text-wine-600 transition-colors cursor-pointer group"
      aria-label="Secret heart"
      title="Tap me ✨"
    >
      <Heart className="w-4 h-4 fill-transparent group-hover:fill-rose-300 transition-colors" />
    </motion.button>
  );
}
