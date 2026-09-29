"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { loveLetterConfig } from "@/config/content";

export function FinalLoveLetter() {
  const { finalMessage } = loveLetterConfig;

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen w-full flex flex-col items-center justify-center py-28 px-6 sm:px-10 max-w-xl mx-auto text-center">
      {/* Top subtle emblem */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-10 p-3.5 rounded-full bg-gradient-to-tr from-[#FDE8EB] via-[#FAF7F2] to-[#FCEEE4] border border-[#7E192D]/15 shadow-sm"
      >
        <Sparkles className="w-5 h-5 text-[#C9A030]" />
      </motion.div>

      {/* Narrative Build-up */}
      <div className="space-y-6 mb-12">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-xl sm:text-2xl text-[#3B0A13]/80 leading-relaxed font-normal"
        >
          {finalMessage.line1}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-lg sm:text-xl text-[#7E192D] italic"
        >
          {finalMessage.line2}
        </motion.p>

        {/* The Grand Eternal Promise */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="font-brand text-3xl sm:text-5xl md:text-6xl text-[#22040A] tracking-wide leading-tight pt-4"
        >
          {finalMessage.line3}
        </motion.h2>
      </div>

      {/* Signature in Romantic Script */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="pt-6 border-t border-[#7E192D]/15 w-full max-w-xs"
      >
        <p className="font-script text-4xl sm:text-5xl text-[#7E192D] tracking-wide mb-3">
          {finalMessage.signature}
        </p>
        <p className="font-sans text-xs tracking-widest uppercase text-[#3B0A13]/50">
          {finalMessage.footnote}
        </p>
      </motion.div>
    </section>
  );
}
