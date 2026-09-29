"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { loveLetterConfig } from "@/config/content";

export function ChapterMemories() {
  const { memories } = loveLetterConfig;
  const [imageError, setImageError] = useState(false);

  const mainItem = memories.items[0];

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center py-16 sm:py-24 px-4 sm:px-8 max-w-3xl mx-auto">
      {/* Chapter Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="text-left mb-10 sm:mb-12"
      >
        <span className="font-sans text-[11px] font-semibold tracking-ultra text-studio-secondary/60 uppercase block mb-2">
          CHAPTER {memories.number}
        </span>
        <h2 className="font-sans text-2xl sm:text-4xl md:text-5xl text-studio-primary font-medium tracking-tight leading-snug">
          {memories.title}
        </h2>
      </motion.div>

      {/* Single Editorial Photograph — Perfect Face Framing */}
      {mainItem && (
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9 }}
          className="flex flex-col items-start w-full"
        >
          {/* Responsive Frame preserving full photo aspect ratio & faces */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-studio-card border border-studio-border shadow-studio group flex items-center justify-center p-1.5 sm:p-2">
            <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl max-h-[72vh] sm:max-h-[75vh] flex items-center justify-center bg-[#180C0E]/5">
              {!imageError ? (
                <img
                  src={mainItem.image}
                  alt={mainItem.alt}
                  className="w-full h-auto max-h-[70vh] sm:max-h-[72vh] object-contain rounded-xl sm:rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-64 flex flex-col items-center justify-center p-8 bg-studio-blush/30">
                  <Heart className="w-8 h-8 fill-studio-accent text-studio-accent animate-pulse" />
                </div>
              )}
            </div>
          </div>

          {/* Caption */}
          <div className="mt-4 sm:mt-5 text-left w-full">
            <p className="font-sans text-base sm:text-lg text-studio-primary font-normal leading-relaxed">
              “{mainItem.caption}”
            </p>
          </div>
        </motion.div>
      )}
    </section>
  );
}
