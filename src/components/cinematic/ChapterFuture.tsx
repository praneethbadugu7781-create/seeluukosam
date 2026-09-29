"use client";

import React from "react";
import { motion } from "framer-motion";
import { loveLetterConfig } from "@/config/content";

export function ChapterFuture() {
  const { futureSection } = loveLetterConfig;

  return (
    <section className="relative min-h-[95vh] sm:min-h-screen w-full flex flex-col justify-center py-28 px-6 sm:px-12 md:px-20 max-w-4xl mx-auto text-left">
      {/* Line 1 */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="font-sans text-xl sm:text-2xl text-studio-secondary font-light italic mb-8 max-w-2xl"
      >
        {futureSection.line1}
      </motion.p>

      {/* Reveal Bridge */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="font-sans text-lg sm:text-xl text-studio-accent font-medium uppercase tracking-widest mb-10"
      >
        {futureSection.chooseBridge}
      </motion.p>

      {/* Centerpiece Statement — Generous Breathing Room */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="my-12 py-10 px-8 sm:px-12 rounded-3xl bg-gradient-to-r from-studio-blush/50 via-studio-bg to-studio-blush/30 border border-studio-accent/20 shadow-studio max-w-3xl"
      >
        <h2 className="font-sans text-3xl sm:text-5xl md:text-6xl text-studio-primary font-semibold tracking-tighter leading-tight">
          I'd choose a{" "}
          <span className="font-serif italic font-normal text-studio-accent border-b border-studio-accent/40 pb-1">
            future
          </span>{" "}
          with you.
        </h2>
      </motion.div>

      {/* Not because / Beside me */}
      <div className="space-y-4 my-8 pl-6 border-l border-studio-primary/10 max-w-2xl">
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="font-sans text-xl sm:text-2xl text-studio-primary/80 font-light"
        >
          {futureSection.notBecause}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="font-sans text-xl sm:text-2xl text-studio-primary font-medium tracking-tight"
        >
          {futureSection.besideMe}
        </motion.p>
      </div>

      {/* Final Emphasis */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1, delay: 1.4 }}
        className="mt-8 pt-6 max-w-xl"
      >
        <p className="font-sans text-2xl sm:text-3xl text-studio-primary font-medium tracking-tight leading-snug whitespace-pre-line">
          {futureSection.finalEmphasis}
        </p>
      </motion.div>
    </section>
  );
}
