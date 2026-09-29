"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { loveLetterConfig } from "@/config/content";

// Stagger children animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.5,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function AnimatedWords({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.08, delayChildren: delay },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariants}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function OpeningHero() {
  const { opening } = loveLetterConfig;

  return (
    <section className="relative min-h-[100vh] sm:min-h-screen w-full flex flex-col justify-between py-10 sm:py-16 px-5 sm:px-12 md:px-20 max-w-5xl mx-auto overflow-hidden">
      {/* === Dramatic Ambient Glow Layers === */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[5%] w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-br from-[#F8D7DB]/50 via-[#FCEEE4]/40 to-transparent blur-[80px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[10%] right-[0%] w-[50vw] h-[50vw] max-w-[400px] max-h-[400px] rounded-full bg-gradient-to-tl from-[#A94B58]/15 via-[#F3E3E3]/25 to-transparent blur-[80px] pointer-events-none -z-10"
      />

      {/* === Top Eyebrow with Decorative Line === */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="pt-2 sm:pt-4 flex items-center gap-3"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 32 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-[1px] bg-studio-accent/40"
        />
        <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.35em] uppercase text-studio-accent/70">
          {opening.eyebrow}
        </span>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 32 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="h-[1px] bg-studio-accent/40"
        />
      </motion.div>

      {/* === Main Hero Content === */}
      <div className="my-auto py-8 sm:py-12 w-full max-w-3xl text-left space-y-5 sm:space-y-7">
        {/* Decorative Small Heart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-studio-accent/50 text-sm"
        >
          ♡
        </motion.div>

        {/* Line 1 — Word-by-word blur reveal */}
        <motion.p className="font-sans text-lg sm:text-2xl md:text-[1.7rem] text-studio-primary/85 font-medium leading-relaxed tracking-tight">
          <AnimatedWords text={opening.line1} delay={0.8} />
        </motion.p>

        {/* Line 2 — Lighter, slightly delayed */}
        <motion.p className="font-sans text-base sm:text-xl md:text-[1.35rem] text-studio-secondary/80 font-light leading-relaxed">
          <AnimatedWords text={opening.line2} delay={1.8} />
        </motion.p>

        {/* Decorative Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 2.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="origin-left w-16 sm:w-20 h-[2px] bg-gradient-to-r from-studio-accent/60 to-transparent"
        />

        {/* === Main Heading — The Star of the Show === */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 3.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative font-sans text-[2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.5rem] text-studio-primary font-bold tracking-[-0.03em] leading-[1.1] sm:leading-[1.08]"
        >
          I started{" "}
          <span className="relative inline-block">
            {/* Glowing backdrop behind "loving you" */}
            <motion.span
              initial={{ opacity: 0, scaleX: 0.5 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 3.8 }}
              className="absolute -inset-x-2 -inset-y-1 bg-gradient-to-r from-[#A94B58]/10 via-[#F3E3E3]/40 to-[#A94B58]/10 rounded-lg -z-10 origin-left"
            />
            <span className="font-serif italic font-normal text-studio-accent">
              loving you
            </span>
          </span>
          <br className="hidden sm:block" />{" "}
          a little more every day.
        </motion.h1>

        {/* Line 4 — Emotional context */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4.6 }}
          className="font-sans text-base sm:text-lg md:text-xl text-studio-secondary/70 font-light italic leading-relaxed"
        >
          {opening.line4}
        </motion.p>

        {/* Line 5 Climax — Dramatic Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 5.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="pt-2 sm:pt-4"
        >
          <p className="font-sans text-xl sm:text-3xl md:text-4xl text-studio-primary font-light tracking-tight">
            a little more became{" "}
            <span className="relative inline-block">
              {/* Underline glow animation */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 6.6, ease: "easeOut" }}
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-studio-accent via-studio-accent/80 to-transparent origin-left"
              />
              <span className="font-serif italic font-normal text-studio-primary">
                everything.
              </span>
            </span>
          </p>
        </motion.div>

        {/* Trailing Decorative Hearts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 7.0 }}
          className="flex items-center gap-2 pt-2"
        >
          <span className="text-studio-accent/30 text-xs">♥</span>
          <span className="text-studio-accent/20 text-[10px]">♥</span>
          <span className="text-studio-accent/10 text-[8px]">♥</span>
        </motion.div>
      </div>

      {/* === Bottom Scroll Prompt === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.7, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, delay: 7.5 }}
        className="flex flex-col items-start gap-1.5 pb-2 cursor-pointer select-none"
      >
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 16 }}
            transition={{ duration: 0.8, delay: 7.5 }}
            className="h-[1px] bg-studio-accent/30"
          />
          <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-studio-secondary/50 font-medium">
            {opening.scrollPrompt}
          </span>
        </div>
        <ChevronDown className="w-3.5 h-3.5 text-studio-secondary/40 animate-bounce ml-[18px]" />
      </motion.div>
    </section>
  );
}
