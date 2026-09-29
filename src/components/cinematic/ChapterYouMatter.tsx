"use client";

import React from "react";
import { motion } from "framer-motion";
import { loveLetterConfig } from "@/config/content";

export function ChapterYouMatter() {
  const { chapter05 } = loveLetterConfig;

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center py-28 px-6 sm:px-12 max-w-3xl mx-auto text-left">
      {/* Chapter Number */}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="font-sans text-[11px] font-semibold tracking-ultra text-studio-secondary/60 uppercase block mb-10"
      >
        CHAPTER {chapter05.number}
      </motion.span>

      {/* Main Philosophy */}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1 }}
        className="font-sans text-2xl sm:text-4xl text-studio-primary font-normal tracking-tight leading-relaxed mb-12 max-w-2xl"
      >
        {chapter05.line1}
      </motion.h2>

      {/* The Build-up */}
      <div className="space-y-4 my-6 pl-5 border-l border-studio-primary/10 max-w-xl">
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-sans text-xl sm:text-2xl text-studio-secondary font-light"
        >
          {chapter05.line2}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans text-xl sm:text-2xl text-studio-secondary font-light"
        >
          {chapter05.line3}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-sans text-xl sm:text-2xl text-studio-secondary font-light"
        >
          {chapter05.line4}
        </motion.p>
      </div>

      {/* The Climax */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.1, delay: 0.8 }}
        className="mt-10 pt-8"
      >
        <p className="font-sans text-3xl sm:text-5xl text-studio-accent font-medium tracking-tight">
          {chapter05.climax}
        </p>
      </motion.div>
    </section>
  );
}
