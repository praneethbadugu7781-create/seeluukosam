"use client";

import React from "react";
import { motion } from "framer-motion";
import { loveLetterConfig } from "@/config/content";

export function ChapterQuietly() {
  const { chapter01 } = loveLetterConfig;

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center py-24 px-6 sm:px-10 max-w-xl mx-auto text-left">
      {/* Chapter Number & Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
        className="mb-8"
      >
        <span className="font-serif text-xs font-semibold tracking-widest text-[#C9A030] uppercase block mb-1">
          Chapter {chapter01.number}
        </span>
        <h2 className="font-brand text-3xl sm:text-4xl md:text-5xl text-[#22040A] tracking-wide leading-tight mb-2">
          {chapter01.heading}
        </h2>
        <p className="font-serif text-xl sm:text-2xl text-[#7E192D] italic font-light">
          {chapter01.subheading}
        </p>
      </motion.div>

      {/* Individual Spaced Lines with Generous Negative Space */}
      <div className="space-y-6 my-10 pl-4 border-l-2 border-[#7E192D]/20">
        {chapter01.spacedLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: index * 0.18 }}
            className="font-serif text-lg sm:text-xl text-[#3B0A13]/85 leading-relaxed font-normal"
          >
            {line}
          </motion.div>
        ))}
      </div>

      {/* The Climax Realization */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1 }}
        className="mt-6 pt-6 border-t border-[#7E192D]/10"
      >
        <p className="font-sans text-xs uppercase tracking-widest text-[#7E192D]/70 font-semibold mb-3">
          {chapter01.bridge}
        </p>
        <p className="font-serif text-xl sm:text-2xl text-[#3B0A13]/80 mb-2">
          {chapter01.realization1}
        </p>
        <p className="font-brand text-2xl sm:text-4xl text-[#5C1220] leading-snug">
          {chapter01.realization2}
        </p>
      </motion.div>
    </section>
  );
}
