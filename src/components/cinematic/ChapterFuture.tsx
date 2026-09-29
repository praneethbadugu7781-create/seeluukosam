"use client";

import React from "react";
import { motion } from "framer-motion";
import { loveLetterConfig } from "@/config/content";

export function ChapterFuture() {
  const { longTermFeeling } = loveLetterConfig;

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen w-full flex flex-col justify-center py-24 px-6 sm:px-12 max-w-3xl mx-auto text-left">
      {/* Intro lines */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="font-sans text-lg sm:text-xl text-studio-secondary font-light italic mb-6"
      >
        {longTermFeeling.line1}
      </motion.p>

      <div className="space-y-4 mb-10 pl-5 border-l border-studio-primary/10 max-w-xl">
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-sans text-xl sm:text-2xl text-studio-primary/90 font-normal"
        >
          {longTermFeeling.line2}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-sans text-xl sm:text-2xl text-studio-primary/90 font-normal"
        >
          {longTermFeeling.line3}
        </motion.p>
      </div>

      {/* Climax Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.1, delay: 0.7 }}
        className="p-8 rounded-3xl bg-studio-card border border-studio-border shadow-studio my-4 max-w-2xl"
      >
        <p className="font-sans text-2xl sm:text-4xl text-studio-primary font-medium leading-snug mb-3 tracking-tight">
          {longTermFeeling.climax}
        </p>
        <p className="font-sans text-lg sm:text-xl text-studio-accent font-light italic">
          {longTermFeeling.gratitude}
        </p>
      </motion.div>
    </section>
  );
}
