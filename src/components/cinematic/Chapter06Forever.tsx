"use client";

import React from "react";
import { motion } from "framer-motion";
import { loveLetterConfig } from "@/config/content";

export function Chapter06Forever() {
  const { chapter06Forever } = loveLetterConfig;

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center py-24 px-6 sm:px-12 md:px-20 max-w-3xl mx-auto text-left">
      {/* Chapter Badge */}
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="font-sans text-[11px] font-semibold tracking-ultra text-studio-secondary/60 uppercase block mb-8"
      >
        CHAPTER {chapter06Forever.number}
      </motion.span>

      {/* Intro & Promise */}
      <div className="space-y-4 mb-12 max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="font-sans text-2xl sm:text-3xl font-normal text-studio-primary tracking-tight leading-relaxed"
        >
          {chapter06Forever.intro}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-sans text-xl sm:text-2xl text-studio-accent font-light italic"
        >
          {chapter06Forever.promise}
        </motion.p>
      </div>

      {/* Individual Line Reveals */}
      <div className="space-y-4 my-10 pl-6 border-l border-studio-primary/10 max-w-xl">
        {chapter06Forever.list.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: index * 0.12 }}
            className={`font-sans text-lg sm:text-xl ${
              index === chapter06Forever.list.length - 1
                ? "text-studio-primary font-semibold"
                : "text-studio-primary/80 font-normal"
            }`}
          >
            {item}
          </motion.div>
        ))}
      </div>

      {/* Prominent "With you." */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, delay: 0.8 }}
        className="my-8"
      >
        <span className="font-sans text-3xl sm:text-5xl text-studio-primary font-medium tracking-tight">
          {chapter06Forever.withYou}
        </span>
      </motion.div>

      {/* Main Climax: "I want you in my forever. ❤️" */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.2, delay: 1.1 }}
        className="my-10 pt-6 border-t border-studio-primary/10 max-w-2xl"
      >
        <h3 className="font-sans text-3xl sm:text-5xl md:text-6xl text-studio-primary font-semibold tracking-tighter leading-tight">
          I want you in my{" "}
          <span className="font-serif italic text-studio-accent font-normal border-b border-studio-accent/40 pb-0.5">
            forever.
          </span>{" "}
          ❤️
        </h3>
      </motion.div>

      {/* Underneath Reflection */}
      <div className="space-y-3 pt-4 max-w-xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="font-sans text-lg sm:text-xl text-studio-secondary font-light"
        >
          {chapter06Forever.notJust1}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="font-sans text-lg sm:text-xl text-studio-secondary font-light"
        >
          {chapter06Forever.notJust2}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="font-sans text-xl sm:text-2xl text-studio-primary font-medium tracking-tight pt-2"
        >
          {chapter06Forever.notJust3}
        </motion.p>
      </div>
    </section>
  );
}
