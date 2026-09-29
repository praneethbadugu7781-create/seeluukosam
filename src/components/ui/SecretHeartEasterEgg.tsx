"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X } from "lucide-react";
import { loveLetterConfig } from "@/config/content";
import { useSoundEffect } from "@/hooks/useSoundEffect";

export function SecretHeartEasterEgg() {
  const [isOpen, setIsOpen] = useState(false);
  const { playChime } = useSoundEffect();

  const handleOpen = () => {
    playChime(880);
    setIsOpen(true);
  };

  const handleClose = () => {
    playChime(520);
    setIsOpen(false);
  };

  return (
    <>
      <motion.button
        onClick={handleOpen}
        whileHover={{ scale: 1.25, rotate: 10 }}
        whileTap={{ scale: 0.85 }}
        className="fixed bottom-5 right-5 z-50 p-2.5 text-[#D35B72]/40 hover:text-[#9F233C] transition-colors cursor-pointer group"
        aria-label="A tiny secret"
        title="✨"
      >
        <Heart className="w-4 h-4 fill-transparent group-hover:fill-[#FBD5DB] transition-colors" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-[#22040A]/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full max-w-sm rounded-3xl bg-[#FAF7F2] p-7 text-center shadow-xl border border-[#7E192D]/15 z-10 overflow-hidden"
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-1.5 rounded-full text-[#3B0A13]/40 hover:text-[#3B0A13] hover:bg-[#7E192D]/5 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#FDE8EB] to-[#FCEEE4] text-[#9F233C] shadow-inner">
                <Heart className="w-5 h-5 fill-[#E15872] text-[#E15872]" />
              </div>

              <h4 className="font-serif text-lg text-[#22040A] mb-2 leading-relaxed">
                {loveLetterConfig.easterEgg.line1}
              </h4>

              <p className="font-brand text-base text-[#5C1220] mb-6 italic">
                {loveLetterConfig.easterEgg.line2}
              </p>

              <button
                onClick={handleClose}
                className="w-full py-3 rounded-full bg-[#3B0A13] hover:bg-[#22040A] text-[#FAF7F2] text-xs font-sans font-medium tracking-widest uppercase transition-all shadow-md"
              >
                Close with love ❤️
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
