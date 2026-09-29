"use client";

import React from "react";
import { motion } from "framer-motion";
import { loveLetterConfig } from "@/config/content";

export function ChapterFuture() {
  const { longTermFeeling } = loveLetterConfig;

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen w-full flex flex-col justify-center py-24 px-6 sm:px-10 max-w-xl mx-auto text-left">
      {/* Intro lines */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="font-serif text-lg sm:text-xl text-[#3B0A13]/60 italic mb-6"
      >
        {longTermFeeling.line1}
      </motion.p>

      <div className="space-y-4 mb-10 pl-5 border-l-2 border-[#7E192D]/20">
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-xl sm:text-2xl text-[#3B0A13]/85 font-normal"
        >
          {longTermFeeling.line2}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-serif text-xl sm:text-2xl text-[#3B0A13]/85 font-normal"
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
        className="p-6 rounded-3xl bg-[#FAF7F2] border border-[#7E192D]/20 shadow-md my-4"
      >
        <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#22040A] font-normal leading-snug mb-3">
          {longTermFeeling.climax}
        </p>
        <p className="font-serif text-lg sm:text-xl text-[#7E192D] italic font-normal">
          {longTermFeeling.gratitude}
        </p>
      </motion.div>
    </section>
  );
}
