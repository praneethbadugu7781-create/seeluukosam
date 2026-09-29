"use client";

import React from "react";
import { motion } from "framer-motion";
import { loveLetterConfig } from "@/config/content";

export function FinalLoveLetter() {
  const { finalMessage } = loveLetterConfig;

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen w-full flex flex-col items-center justify-center py-28 px-6 sm:px-12 max-w-2xl mx-auto text-center">
      {/* Narrative Build-up */}
      <div className="space-y-6 mb-16 max-w-xl">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-sans text-xl sm:text-2xl text-studio-primary/80 font-light leading-relaxed"
        >
          {finalMessage.line1}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-sans text-lg sm:text-xl text-studio-accent font-light italic"
        >
          {finalMessage.line2}
        </motion.p>

        {/* The Eternal Promise */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="font-sans text-3xl sm:text-5xl md:text-6xl text-studio-primary font-medium tracking-tight leading-tight pt-4"
        >
          {finalMessage.line3}
        </motion.h2>
      </div>

      {/* Signature in Selective Bodoni Moda */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="pt-8 border-t border-studio-primary/10 w-full max-w-xs"
      >
        <p className="font-serif italic text-3xl sm:text-4xl text-studio-accent font-normal tracking-wide mb-3">
          {finalMessage.signature}
        </p>
        <p className="font-sans text-[11px] tracking-ultra uppercase text-studio-secondary/60 font-medium">
          {finalMessage.footnote}
        </p>
      </motion.div>
    </section>
  );
}
