"use client";

import React from "react";
import { motion } from "framer-motion";
import { loveLetterConfig } from "@/config/content";

export function ChapterEveryDay() {
  const { chapter03 } = loveLetterConfig;

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen w-full flex flex-col items-center justify-center py-24 px-6 sm:px-12 text-center max-w-3xl mx-auto overflow-hidden">
      {/* Subtle Blurred Warm Light */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-80 h-80 rounded-full bg-studio-accent/10 blur-[110px] pointer-events-none -z-10"
      />

      {/* Chapter Badge */}
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-sans text-[11px] font-semibold tracking-ultra text-studio-secondary/60 uppercase block mb-6"
      >
        CHAPTER {chapter03.number}
      </motion.span>

      {/* Large Minimalist Statement */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="font-sans text-3xl sm:text-5xl md:text-6xl text-studio-primary font-medium tracking-tight leading-tight mb-8"
      >
        {chapter03.statement}
      </motion.h2>

      {/* Bridge */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="font-sans text-lg sm:text-xl text-studio-secondary font-light mb-4"
      >
        {chapter03.bridge}
      </motion.p>

      {/* Punchline */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="pt-2"
      >
        <p className="font-sans text-2xl sm:text-4xl text-studio-accent font-medium tracking-tight">
          {chapter03.punchline}
        </p>
      </motion.div>
    </section>
  );
}
