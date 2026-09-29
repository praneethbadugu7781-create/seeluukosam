"use client";

import React from "react";
import { motion } from "framer-motion";
import { loveLetterConfig } from "@/config/content";

export function ChapterThoughts() {
  const { chapter04 } = loveLetterConfig;

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-28 px-6 sm:px-12 text-center bg-[#180C0E] text-[#FAF8F5] rounded-3xl my-12 shadow-2xl overflow-hidden border border-[#241215]">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#A94B58]/10 blur-[120px] pointer-events-none" />

      {/* Chapter Tag */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="mb-10"
      >
        <span className="font-sans text-[11px] font-semibold tracking-ultra text-[#F3E3E3]/60 uppercase block">
          CHAPTER {chapter04.number}
        </span>
      </motion.div>

      {/* Emotional Flow */}
      <div className="max-w-2xl mx-auto space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-sans text-xl sm:text-2xl text-[#FAF8F5]/80 font-light"
        >
          {chapter04.line1}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-sans text-xl sm:text-2xl text-[#FAF8F5]/80 font-light"
        >
          {chapter04.line2}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="font-sans text-lg sm:text-xl text-[#F3E3E3]/70 font-light italic pt-2"
        >
          {chapter04.line3}
        </motion.p>

        {/* Large Climax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="pt-6"
        >
          <p className="font-sans text-2xl sm:text-4xl md:text-5xl text-[#FAF8F5] font-medium tracking-tight leading-tight">
            you'd find your name there more often than you'd expect. ❤️
          </p>
        </motion.div>
      </div>
    </section>
  );
}
