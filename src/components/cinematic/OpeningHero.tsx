"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { loveLetterConfig } from "@/config/content";

export function OpeningHero() {
  const { opening } = loveLetterConfig;

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen w-full flex flex-col items-center justify-between py-16 px-5 sm:px-8 text-center max-w-2xl mx-auto">
      {/* Top Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="pt-4"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF7F2] border border-[#7E192D]/10 text-[#5C1220] text-xs font-sans tracking-widest uppercase">
          <Sparkles className="w-3 h-3 text-[#C9A030]" />
          <span>{opening.eyebrow}</span>
        </div>
      </motion.div>

      {/* Main Staggered Emotional Flow */}
      <div className="my-auto py-10 w-full flex flex-col items-center">
        {/* Line 1 */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="font-serif text-xl sm:text-2xl text-[#3B0A13]/70 font-normal mb-3"
        >
          {opening.line1}
        </motion.p>

        {/* Line 2 */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.8 }}
          className="font-serif text-lg sm:text-xl text-[#3B0A13]/75 font-normal italic mb-8"
        >
          {opening.line2}
        </motion.p>

        {/* Line 3 — Main Statement */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 3.0 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#22040A] font-normal tracking-tight leading-[1.2] mb-8 max-w-xl"
        >
          {opening.line3Main}
        </motion.h1>

        {/* Line 4 */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 4.5 }}
          className="font-serif text-xl sm:text-2xl text-[#5C1220]/70 font-light italic mb-4"
        >
          {opening.line4}
        </motion.p>

        {/* Line 5 — Climax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 5.8 }}
          className="p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-[#FDE8EB]/70 to-[#FAF7F2] border border-[#7E192D]/15 shadow-sm max-w-md w-full"
        >
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#3B0A13] font-normal tracking-tight leading-tight">
            {opening.line5Climax}
          </p>
        </motion.div>
      </div>

      {/* Bottom Scroll Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 7.0 }}
        className="flex flex-col items-center gap-1.5 pb-2 cursor-pointer"
      >
        <span className="font-sans text-[11px] tracking-widest uppercase text-[#3B0A13]/50">
          {opening.scrollPrompt}
        </span>
        <ChevronDown className="w-3.5 h-3.5 text-[#3B0A13]/40 animate-bounce" />
      </motion.div>
    </section>
  );
}
