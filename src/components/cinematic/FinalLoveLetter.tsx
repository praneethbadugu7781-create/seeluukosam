"use client";

import React from "react";
import { motion } from "framer-motion";
import { loveLetterConfig } from "@/config/content";

export function FinalLoveLetter() {
  const { finalScreen } = loveLetterConfig;

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-28 px-6 sm:px-12 max-w-2xl mx-auto text-center">
      {/* Doubt intro */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="font-sans text-xl sm:text-2xl text-studio-secondary font-light italic mb-3"
      >
        {finalScreen.doubt}
      </motion.p>

      {/* "it's how much I love you." */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.3 }}
        className="font-sans text-2xl sm:text-4xl text-studio-primary font-medium tracking-tight mb-12"
      >
        {finalScreen.howMuch}
      </motion.p>

      {/* Words reflection */}
      <div className="space-y-2 mb-16">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-sans text-lg sm:text-xl text-studio-secondary font-light"
        >
          {finalScreen.words1}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9 }}
          className="font-sans text-lg sm:text-xl text-studio-secondary font-light italic"
        >
          {finalScreen.words2}
        </motion.p>
      </div>

      {/* Main "I love you." */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 1.3 }}
        className="font-sans text-4xl sm:text-6xl md:text-7xl text-studio-primary font-semibold tracking-tighter mb-12"
      >
        {finalScreen.iLoveYou}
      </motion.h2>

      {/* Cinematic Pauses */}
      <div className="space-y-4 mb-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.7 }}
          className="font-sans text-2xl sm:text-4xl text-studio-primary font-light"
        >
          {finalScreen.pauseToday}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2.2 }}
          className="font-sans text-2xl sm:text-4xl text-studio-primary font-light"
        >
          {finalScreen.pauseTomorrow}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 2.7 }}
          className="font-sans text-3xl sm:text-5xl text-studio-accent font-medium tracking-tight pt-2"
        >
          {finalScreen.pauseEveryTomorrow}
        </motion.p>
      </div>

      {/* Signature */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 3.2 }}
        className="pt-8 border-t border-studio-primary/10 w-full max-w-xs"
      >
        <p className="font-serif italic text-3xl sm:text-4xl text-studio-accent font-normal tracking-wide">
          {finalScreen.signature}
        </p>
      </motion.div>
    </section>
  );
}
