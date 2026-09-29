"use client";

import React from "react";
import { motion } from "framer-motion";
import { loveLetterConfig } from "@/config/content";

export function ChapterQuietly() {
  const { chapter01 } = loveLetterConfig;

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center py-24 px-6 sm:px-12 md:px-20 max-w-4xl mx-auto text-left">
      {/* Chapter Number Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <span className="font-sans text-[11px] font-semibold tracking-ultra text-studio-secondary/60 uppercase block mb-3">
          CHAPTER {chapter01.number}
        </span>
        <h2 className="font-sans text-3xl sm:text-5xl text-studio-primary font-medium tracking-tight leading-tight mb-2">
          {chapter01.heading}
        </h2>
        <p className="font-sans text-xl sm:text-2xl text-studio-accent font-light">
          {chapter01.subheading}
        </p>
      </motion.div>

      {/* Individual Spaced Lines */}
      <div className="space-y-6 my-10 pl-6 border-l border-studio-primary/10 max-w-xl">
        {chapter01.spacedLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className="font-sans text-lg sm:text-xl text-studio-primary/80 font-normal leading-relaxed"
          >
            {line}
          </motion.div>
        ))}
      </div>

      {/* Realization Climax */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1 }}
        className="mt-6 pt-8 border-t border-studio-primary/10 max-w-2xl"
      >
        <p className="font-sans text-xs uppercase tracking-widest text-studio-secondary/60 font-semibold mb-3">
          {chapter01.bridge}
        </p>
        <p className="font-sans text-xl sm:text-2xl text-studio-secondary font-light mb-2">
          {chapter01.realization1}
        </p>
        <p className="font-sans text-2xl sm:text-4xl text-studio-primary font-medium tracking-tight leading-snug">
          {chapter01.realization2}
        </p>
      </motion.div>
    </section>
  );
}
