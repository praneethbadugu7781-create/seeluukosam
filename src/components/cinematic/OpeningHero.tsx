"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { loveLetterConfig } from "@/config/content";

export function OpeningHero() {
  const { opening } = loveLetterConfig;

  return (
    <section className="relative min-h-[100vh] sm:min-h-screen w-full flex flex-col justify-between py-10 sm:py-16 px-5 sm:px-12 md:px-20 max-w-5xl mx-auto overflow-hidden">
      {/* Subtle warm glow — CSS only, no motion */}
      <div className="absolute top-[15%] left-[5%] w-[55vw] h-[55vw] max-w-[420px] max-h-[420px] rounded-full bg-gradient-to-br from-[#F8D7DB]/35 via-[#FCEEE4]/25 to-transparent pointer-events-none -z-10 animate-aura-1" style={{ filter: "blur(60px)" }} />

      {/* Top Eyebrow with Decorative Lines */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="pt-2 sm:pt-4 flex items-center gap-3"
      >
        <div className="w-8 h-[1px] bg-studio-accent/40" />
        <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.35em] uppercase text-studio-accent/70">
          {opening.eyebrow}
        </span>
        <div className="w-8 h-[1px] bg-studio-accent/40" />
      </motion.div>

      {/* Main Hero Content */}
      <div className="my-auto py-8 sm:py-12 w-full max-w-3xl text-left space-y-5 sm:space-y-7">
        {/* Small Decorative Heart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-studio-accent/50 text-sm"
        >
          ♡
        </motion.div>

        {/* Line 1 */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-sans text-lg sm:text-2xl md:text-[1.7rem] text-studio-primary/85 font-medium leading-relaxed tracking-tight"
        >
          {opening.line1}
        </motion.p>

        {/* Line 2 */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="font-sans text-base sm:text-xl md:text-[1.35rem] text-studio-secondary/80 font-light leading-relaxed"
        >
          {opening.line2}
        </motion.p>

        {/* Decorative Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="origin-left w-16 sm:w-20 h-[2px] bg-gradient-to-r from-studio-accent/60 to-transparent"
        />

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.4 }}
          className="relative font-sans text-[2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.5rem] text-studio-primary font-bold tracking-[-0.03em] leading-[1.1] sm:leading-[1.08]"
        >
          I started{" "}
          <span className="relative inline-block">
            <span className="absolute -inset-x-2 -inset-y-1 bg-gradient-to-r from-[#A94B58]/8 via-[#F3E3E3]/30 to-[#A94B58]/8 rounded-lg -z-10" />
            <span className="font-serif italic font-normal text-studio-accent">
              loving you
            </span>
          </span>
          <br className="hidden sm:block" />{" "}
          a little more every day.
        </motion.h1>

        {/* Line 4 */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.4 }}
          className="font-sans text-base sm:text-lg md:text-xl text-studio-secondary/70 font-light italic leading-relaxed"
        >
          {opening.line4}
        </motion.p>

        {/* Line 5 Climax */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4.2 }}
          className="pt-2 sm:pt-4"
        >
          <p className="font-sans text-xl sm:text-3xl md:text-4xl text-studio-primary font-light tracking-tight">
            a little more became{" "}
            <span className="relative inline-block">
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-studio-accent via-studio-accent/80 to-transparent" />
              <span className="font-serif italic font-normal text-studio-primary">
                everything.
              </span>
            </span>
          </p>
        </motion.div>

        {/* Trailing Hearts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 5.0 }}
          className="flex items-center gap-2 pt-2"
        >
          <span className="text-studio-accent/30 text-xs">♥</span>
          <span className="text-studio-accent/20 text-[10px]">♥</span>
          <span className="text-studio-accent/10 text-[8px]">♥</span>
        </motion.div>
      </div>

      {/* Bottom Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 5.5 }}
        className="flex flex-col items-start gap-1.5 pb-2 cursor-pointer select-none"
      >
        <div className="flex items-center gap-2">
          <div className="w-4 h-[1px] bg-studio-accent/30" />
          <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-studio-secondary/50 font-medium">
            {opening.scrollPrompt}
          </span>
        </div>
        <ChevronDown className="w-3.5 h-3.5 text-studio-secondary/40 animate-bounce ml-[18px]" />
      </motion.div>
    </section>
  );
}
