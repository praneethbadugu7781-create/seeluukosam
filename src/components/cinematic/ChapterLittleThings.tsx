"use client";

import React from "react";
import { motion } from "framer-motion";
import { loveLetterConfig } from "@/config/content";

export function ChapterLittleThings() {
  const { chapter02 } = loveLetterConfig;

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center py-24 px-6 sm:px-10 max-w-xl mx-auto">
      {/* Chapter Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
        className="text-center mb-12"
      >
        <span className="font-sans text-[11px] font-semibold tracking-widest text-[#C9A030] uppercase block mb-2">
          Chapter {chapter02.number}
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#22040A] tracking-tight font-normal leading-snug">
          {chapter02.heading}
        </h2>
      </motion.div>

      {/* Floating Editorial Thought Cards */}
      <div className="space-y-4 sm:space-y-5 w-full">
        {chapter02.cards.map((text, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: idx * 0.12 }}
            whileHover={{ y: -2 }}
            className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 ${
              idx === chapter02.cards.length - 1
                ? "bg-gradient-to-br from-[#FAF7F2] via-[#FDE8EB]/70 to-[#FAF7F2] border-[#7E192D]/30 shadow-md"
                : "bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] border-[#7E192D]/15 shadow-sm"
            }`}
          >
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#C9A030] font-semibold block mb-1.5">
              0{idx + 1}
            </span>
            <p
              className={`font-serif leading-relaxed ${
                idx === chapter02.cards.length - 1
                  ? "text-lg sm:text-xl font-medium text-[#5C1220]"
                  : "text-base sm:text-lg text-[#3B0A13]/90 font-normal"
              }`}
            >
              {text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
