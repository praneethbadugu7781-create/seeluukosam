"use client";

import React from "react";
import { motion } from "framer-motion";
import { loveLetterConfig } from "@/config/content";

export function ChapterThoughts() {
  const { chapter04 } = loveLetterConfig;

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-28 px-6 sm:px-10 text-center bg-gradient-to-b from-[#1F060A] via-[#2D080E] to-[#1F060A] text-[#FAF7F2] rounded-3xl my-12 shadow-2xl overflow-hidden">
      {/* Background Soft Red Wine Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#7E192D]/20 blur-3xl pointer-events-none" />

      {/* Chapter Tag */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <span className="font-serif text-xs font-semibold tracking-widest text-[#EED888] uppercase block mb-1">
          Chapter {chapter04.number}
        </span>
        <span className="font-sans text-xs uppercase tracking-widest text-[#FBD5DB]/60">
          An intimate confession
        </span>
      </motion.div>

      {/* Emotional Flow */}
      <div className="max-w-lg mx-auto space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-xl sm:text-2xl text-[#FAF7F2]/80 font-light"
        >
          {chapter04.line1}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-serif text-xl sm:text-2xl text-[#FAF7F2]/80 font-light"
        >
          {chapter04.line2}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="font-serif text-lg sm:text-xl text-[#F7B5C1] italic pt-2"
        >
          {chapter04.line3}
        </motion.p>

        {/* Large Climax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="pt-6"
        >
          <p className="font-brand text-2xl sm:text-4xl md:text-5xl text-[#FAF7F2] tracking-wide leading-tight">
            {chapter04.climax}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
