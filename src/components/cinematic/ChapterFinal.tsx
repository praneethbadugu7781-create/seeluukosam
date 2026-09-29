"use client";

import React from "react";
import { motion } from "framer-motion";
import { loveLetterConfig } from "@/config/content";

export function ChapterFinal() {
  const { finalChapter } = loveLetterConfig;

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-28 px-6 sm:px-12 max-w-2xl mx-auto text-center">
      {/* Prompt */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
        className="font-sans text-lg sm:text-xl text-studio-secondary font-light italic mb-8"
      >
        {finalChapter.prompt}
      </motion.p>

      {/* Large "Yes." */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1, delay: 0.3 }}
        className="font-sans text-5xl sm:text-7xl text-studio-primary font-bold tracking-tight mb-6"
      >
        {finalChapter.wordYes}
      </motion.h2>

      {/* "You matter to me." */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1, delay: 0.6 }}
        className="font-sans text-3xl sm:text-5xl text-studio-accent font-medium tracking-tight mb-6"
      >
        {finalChapter.statement}
      </motion.h3>

      {/* "More than I probably know how to say." ❤️ */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1, delay: 0.9 }}
        className="font-sans text-xl sm:text-2xl text-studio-primary/80 font-light italic"
      >
        {finalChapter.climax}
      </motion.p>
    </section>
  );
}
