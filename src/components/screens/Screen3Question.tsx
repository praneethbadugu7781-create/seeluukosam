"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/content";
import { useSoundEffect } from "@/hooks/useSoundEffect";
import { useScreenDodge } from "@/hooks/useScreenDodge";
import { fireCelebrationConfetti } from "@/components/ui/ConfettiBurst";

interface Screen3Props {
  onNext: () => void;
}

export function Screen3Question({ onNext }: Screen3Props) {
  const { playChime, playDodge, playCelebration } = useSoundEffect();
  const [hasSaidYes, setHasSaidYes] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const yesBtnRef = useRef<HTMLButtonElement>(null);
  const maybeBtnRef = useRef<HTMLButtonElement>(null);

  const { dodgePos, dodgeCount, calculateDodge } = useScreenDodge(
    containerRef,
    yesBtnRef,
    maybeBtnRef
  );

  const maybeTexts = siteConfig.screen3.maybeSequence;
  const currentMaybeText = maybeTexts[dodgeCount % maybeTexts.length];

  const yesTexts = siteConfig.screen3.yesEvolution;
  const currentYesText =
    dodgeCount < yesTexts.length
      ? yesTexts[dodgeCount]
      : yesTexts[yesTexts.length - 1];

  const yesScaleMultiplier = 1 + Math.min(dodgeCount * 0.05, 0.22);

  const handleMaybeDodge = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    playDodge();
    calculateDodge();
  };

  const handleYes = () => {
    playCelebration();
    fireCelebrationConfetti();
    setHasSaidYes(true);
  };

  const handleProceedToPlanning = () => {
    playChime(783.99);
    onNext();
  };

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-[80vh] w-full max-w-xl mx-auto px-4 text-center overflow-hidden py-6"
    >
      <AnimatePresence mode="wait">
        {!hasSaidYes ? (
          /* ================= BEFORE YES: THE PROPOSAL ================= */
          <motion.div
            key="proposal-stage"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(6px)" }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col items-center"
          >
            {/* Soft intro prompt */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-xs font-sans uppercase tracking-widest text-gold-600 font-semibold mb-3"
            >
              {siteConfig.screen3.prepTitle}
            </motion.p>

            {/* The Big Romantic Question */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-brand text-3xl sm:text-4xl md:text-5xl font-normal text-wine-950 tracking-wide leading-tight mb-4"
            >
              {siteConfig.screen3.question}
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="font-serif text-base sm:text-lg text-wine-900/75 mb-10 max-w-sm italic"
            >
              {siteConfig.screen3.subtext}
            </motion.p>

            {/* Interactive Action Area */}
            <div className="relative w-full min-h-[140px] flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-2">
              {/* PRIMARY YES BUTTON */}
              <motion.button
                ref={yesBtnRef}
                onClick={handleYes}
                animate={{ scale: yesScaleMultiplier }}
                whileHover={{ scale: yesScaleMultiplier * 1.05 }}
                whileTap={{ scale: yesScaleMultiplier * 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="relative z-20 py-4 px-8 sm:px-10 rounded-full bg-gradient-to-r from-wine-900 via-wine-800 to-wine-900 text-ivory-50 font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase shadow-luxury-lg hover:shadow-glow-wine transition-shadow duration-300 group border border-wine-700/60"
              >
                <span className="flex items-center gap-2">
                  <span>{currentYesText}</span>
                  <Heart className="w-4 h-4 fill-rose-300 text-rose-300 group-hover:scale-125 transition-transform" />
                </span>
              </motion.button>

              {/* SECONDARY RUNAWAY MAYBE BUTTON */}
              <motion.button
                ref={maybeBtnRef}
                animate={{
                  x: dodgePos.x,
                  y: dodgePos.y,
                }}
                transition={{
                  type: "spring",
                  stiffness: 450,
                  damping: 22,
                  mass: 0.8,
                }}
                onMouseEnter={handleMaybeDodge}
                onTouchStart={handleMaybeDodge}
                onClick={handleMaybeDodge}
                className="relative z-10 py-3 px-6 rounded-full bg-ivory-50/95 hover:bg-ivory-100 text-wine-900/80 font-sans text-xs font-medium tracking-wider uppercase border border-wine-200/60 shadow-luxury-sm select-none transition-colors duration-200"
                style={{ touchAction: "none" }}
              >
                <span>{currentMaybeText}</span>
              </motion.button>
            </div>

            {/* Subtle playful hint */}
            {dodgeCount >= 2 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 text-xs text-wine-800/50 font-serif italic"
              >
                (Hint: There is genuinely only one right answer here 😉)
              </motion.p>
            )}
          </motion.div>
        ) : (
          /* ================= AFTER YES: CELEBRATION STAGE ================= */
          <motion.div
            key="success-stage"
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full flex flex-col items-center"
          >
            {/* Sparkle Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.6 }}
              className="mb-5 p-4 rounded-full bg-gradient-to-tr from-blush-200 via-rose-100 to-peach-100 text-wine-700 shadow-luxury border border-rose-200"
            >
              <Heart className="w-8 h-8 fill-wine-600 text-wine-600 animate-pulse" />
            </motion.div>

            {/* Unlocked Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-700 text-[11px] font-semibold tracking-widest uppercase mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>{siteConfig.screen3.unlockedBadge}</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="font-brand text-3xl sm:text-5xl font-normal text-wine-950 tracking-wide mb-3"
            >
              {siteConfig.screen3.unlockedHeading}
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="font-serif text-lg sm:text-xl text-wine-900/80 mb-8 max-w-sm italic"
            >
              {siteConfig.screen3.unlockedSubtext}
            </motion.p>

            {/* Proceed CTA */}
            <motion.button
              onClick={handleProceedToPlanning}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center gap-3 py-4 px-8 rounded-full bg-wine-900 hover:bg-wine-950 text-ivory-50 font-sans text-xs font-semibold tracking-widest uppercase shadow-luxury-lg hover:shadow-glow-wine transition-all duration-300 border border-wine-800"
            >
              <span>{siteConfig.screen3.unlockedCta}</span>
              <ArrowRight className="w-3.5 h-3.5 text-ivory-200" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
