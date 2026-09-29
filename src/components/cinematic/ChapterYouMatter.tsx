"use client";

import React from "react";
import { motion } from "framer-motion";
import { loveLetterConfig } from "@/config/content";

export function ChapterYouMatter() {
  const { chapter05 } = loveLetterConfig;

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center py-28 px-6 sm:px-10 max-w-lg mx-auto text-center">
      {/* Chapter Number */}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="font-sans text-[11px] font-semibold tracking-widest text-[#C9A030] uppercase block mb-10"
      >
        Chapter {chapter05.number}
      </motion.span>

      {/* Main Philosophy */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1 }}
        className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#22040A] tracking-tight font-normal leading-relaxed mb-12"
      >
        {chapter05.line1}
      </motion.h2>

      {/* The Build-up */}
      <div className="space-y-4 my-8">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-xl sm:text-2xl text-[#3B0A13]/70 font-normal"
        >
          {chapter05.line2}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-xl sm:text-2xl text-[#3B0A13]/70 font-normal"
        >
          {chapter05.line3}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif text-xl sm:text-2xl text-[#3B0A13]/70 font-normal"
        >
          {chapter05.line4}
        </motion.p>
      </div>

      {/* The Climax */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="mt-10 pt-8"
      >
        <p className="font-serif text-3xl sm:text-5xl text-[#5C1220] font-normal tracking-tight">
          {chapter05.climax}
        </p>
      </motion.div>
    </section>
  );
}
