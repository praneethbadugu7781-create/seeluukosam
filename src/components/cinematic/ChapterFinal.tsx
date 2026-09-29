"use client";

import React from "react";
import { motion } from "framer-motion";
import { loveLetterConfig } from "@/config/content";

export function ChapterFinal() {
  const { finalChapter } = loveLetterConfig;

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-28 px-6 sm:px-10 max-w-xl mx-auto text-center">
      {/* Prompt */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
        className="font-serif text-lg sm:text-xl text-[#3B0A13]/60 italic mb-8 font-normal"
      >
        {finalChapter.prompt}
      </motion.p>

      {/* Large "Yes." */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1, delay: 0.3 }}
        className="font-serif text-5xl sm:text-7xl text-[#22040A] tracking-tight font-normal mb-6"
      >
        {finalChapter.wordYes}
      </motion.h2>

      {/* "You matter to me." */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1, delay: 0.6 }}
        className="font-serif text-3xl sm:text-5xl text-[#5C1220] font-normal tracking-tight mb-6"
      >
        {finalChapter.statement}
      </motion.h3>

      {/* "More than I probably know how to say." ❤️ */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1, delay: 0.9 }}
        className="font-serif text-xl sm:text-2xl text-[#3B0A13]/85 italic font-normal"
      >
        {finalChapter.climax}
      </motion.p>
    </section>
  );
}
