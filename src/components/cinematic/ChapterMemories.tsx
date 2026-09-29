"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { loveLetterConfig } from "@/config/content";

export function ChapterMemories() {
  const { memories } = loveLetterConfig;
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center py-20 px-6 sm:px-12 max-w-3xl mx-auto">
      {/* Chapter Title */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
        className="text-left mb-14"
      >
        <span className="font-sans text-[11px] font-semibold tracking-ultra text-studio-secondary/60 uppercase block mb-3">
          CHAPTER {memories.number}
        </span>
        <h2 className="font-sans text-3xl sm:text-5xl text-studio-primary font-medium tracking-tight">
          {memories.title}
        </h2>
      </motion.div>

      {/* Editorial Photography List */}
      <div className="space-y-16 sm:space-y-20 w-full">
        {memories.items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="flex flex-col items-start"
          >
            {/* Modern Image Container */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-studio-card border border-studio-border shadow-studio group">
              {!imageErrors[item.id] ? (
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  onError={() => handleImageError(item.id)}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-studio-blush/30">
                  <Heart className="w-8 h-8 fill-studio-accent text-studio-accent animate-pulse" />
                </div>
              )}
            </div>

            {/* Clean Modern Caption */}
            <div className="mt-4 text-left">
              <p className="font-sans text-base sm:text-lg text-studio-primary font-normal leading-relaxed">
                “{item.caption}”
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
