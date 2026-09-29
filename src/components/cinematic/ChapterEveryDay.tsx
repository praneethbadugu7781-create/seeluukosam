"use client";

import React from "react";
import { motion } from "framer-motion";
import { loveLetterConfig } from "@/config/content";

export function ChapterEveryDay() {
  const { chapter03 } = loveLetterConfig;

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen w-full flex flex-col items-center justify-center py-24 px-6 sm:px-10 text-center max-w-xl mx-auto overflow-hidden">
      {/* Subtle Warm Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-[#FBD5DB] via-[#FCEEE4] to-[#F5E9B8] blur-3xl pointer-events-none -z-10"
      />

      {/* Chapter Number */}
      <motion.span
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-sans text-[11px] font-semibold tracking-widest text-[#C9A030] uppercase block mb-6"
      >
        Chapter {chapter03.number}
      </motion.span>

      {/* Large Minimalist Statement */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1 }}
        className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#22040A] tracking-tight font-normal leading-tight mb-8"
      >
        {chapter03.statement}
      </motion.h2>

      {/* Bridge */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="font-serif text-lg sm:text-xl text-[#3B0A13]/70 italic mb-4"
      >
        {chapter03.bridge}
      </motion.p>

      {/* Punchline */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7 }}
        className="p-5 rounded-2xl bg-[#FAF7F2]/90 border border-[#7E192D]/15 shadow-sm"
      >
        <p className="font-serif text-2xl sm:text-3xl text-[#5C1220] font-normal tracking-tight">
          {chapter03.punchline}
        </p>
      </motion.div>
    </section>
  );
}
