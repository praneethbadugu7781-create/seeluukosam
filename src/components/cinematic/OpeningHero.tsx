"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { loveLetterConfig } from "@/config/content";

export function OpeningHero() {
  const { opening } = loveLetterConfig;

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-between py-16 px-6 sm:px-12 md:px-20 max-w-5xl mx-auto">
      {/* Subtle Warm Light Glow (Behind Statement) */}
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-studio-accent/10 blur-[100px] pointer-events-none -z-10" />

      {/* Top Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="pt-2 text-left"
      >
        <span className="font-sans text-[11px] sm:text-[12px] font-medium tracking-ultra uppercase text-studio-secondary/70">
          {opening.eyebrow}
        </span>
      </motion.div>

      {/* Asymmetric Modern Studio Hero Layout */}
      <div className="my-auto py-12 w-full max-w-3xl text-left space-y-6 sm:space-y-8">
        {/* Line 1 */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-sans text-xl sm:text-2xl text-studio-primary/80 font-medium leading-relaxed"
        >
          {opening.line1}
        </motion.p>

        {/* Line 2 */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="font-sans text-base sm:text-xl text-studio-secondary font-light leading-relaxed"
        >
          {opening.line2}
        </motion.p>

        {/* Main Heading — Loving You in Bodoni Moda */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.4 }}
          className="font-sans text-4xl sm:text-6xl md:text-[72px] text-studio-primary font-semibold tracking-tighter leading-[1.12]"
        >
          I started{" "}
          <span className="font-serif italic font-normal text-studio-accent px-1">
            loving you
          </span>{" "}
          a little more every day.
        </motion.h1>

        {/* Line 4 */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.6 }}
          className="font-sans text-lg sm:text-xl text-studio-secondary font-light italic"
        >
          {opening.line4}
        </motion.p>

        {/* Line 5 Climax — Pure Editorial Typography (No Box!) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 4.8 }}
          className="pt-2"
        >
          <p className="font-sans text-2xl sm:text-4xl text-studio-primary font-light tracking-tight">
            a little more became{" "}
            <span className="font-serif italic font-normal text-studio-primary border-b border-studio-accent/40 pb-0.5">
              everything.
            </span>
          </p>
        </motion.div>
      </div>

      {/* Bottom Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 6.0 }}
        className="flex flex-col items-start gap-1 pb-2 cursor-pointer select-none"
      >
        <span className="font-sans text-[11px] tracking-ultra uppercase text-studio-secondary/60">
          {opening.scrollPrompt}
        </span>
        <ChevronDown className="w-3.5 h-3.5 text-studio-secondary/50 animate-bounce" />
      </motion.div>
    </section>
  );
}
