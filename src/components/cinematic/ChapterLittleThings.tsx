"use client";

import React from "react";
import { motion } from "framer-motion";
import { loveLetterConfig } from "@/config/content";

export function ChapterLittleThings() {
  const { chapter02 } = loveLetterConfig;

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center py-24 px-6 sm:px-12 md:px-20 max-w-4xl mx-auto">
      {/* Chapter Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
        className="text-left mb-12 max-w-2xl"
      >
        <span className="font-sans text-[11px] font-semibold tracking-ultra text-studio-secondary/60 uppercase block mb-3">
          CHAPTER {chapter02.number}
        </span>
        <h2 className="font-sans text-2xl sm:text-4xl text-studio-primary font-medium tracking-tight leading-snug">
          {chapter02.heading}
        </h2>
      </motion.div>

      {/* Floating Translucent Cards */}
      <div className="space-y-4 sm:space-y-5 w-full max-w-2xl">
        {chapter02.cards.map((text, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 18, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ y: -2 }}
            className={`p-6 rounded-2xl border transition-all duration-300 ${
              idx === chapter02.cards.length - 1
                ? "bg-gradient-to-r from-studio-blush/60 via-studio-bg to-studio-blush/40 border-studio-accent/30 shadow-studio"
                : "bg-studio-card hover:bg-studio-cardHover border-studio-border shadow-studio-sm"
            }`}
          >
            <span className="font-sans text-[10px] uppercase tracking-widest text-studio-accent font-semibold block mb-2">
              0{idx + 1}
            </span>
            <p
              className={`font-sans leading-relaxed ${
                idx === chapter02.cards.length - 1
                  ? "text-lg sm:text-xl font-medium text-studio-primary"
                  : "text-base sm:text-lg text-studio-primary/90 font-normal"
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
