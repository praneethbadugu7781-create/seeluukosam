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
    <section className="relative min-h-screen w-full flex flex-col justify-center py-24 px-5 sm:px-8 max-w-2xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
        className="text-center mb-14"
      >
        <span className="font-serif text-xs font-semibold tracking-widest text-[#C9A030] uppercase block mb-1">
          Chapter {memories.number}
        </span>
        <h2 className="font-brand text-3xl sm:text-4xl md:text-5xl text-[#22040A] tracking-wide mb-2">
          {memories.title}
        </h2>
        <p className="font-serif text-base sm:text-lg text-[#3B0A13]/60 italic font-light">
          {memories.subtitle}
        </p>
      </motion.div>

      {/* Large Editorial Photography List */}
      <div className="space-y-16 sm:space-y-20 w-full">
        {memories.items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, delay: 0.1 }}
            className="flex flex-col items-center text-center"
          >
            {/* Editorial Photo Frame */}
            <div className="relative w-full max-w-md sm:max-w-lg aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-tr from-[#FCEEE4] via-[#FDE8EB] to-[#FAF7F2] p-2 border border-[#7E192D]/15 shadow-xl group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#7E192D]/10">
                {!imageErrors[item.id] ? (
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
                    onError={() => handleImageError(item.id)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-tr from-[#FAF7F2] to-[#FDE8EB]">
                    <Heart className="w-10 h-10 fill-[#E15872] text-[#E15872] mb-3 animate-pulse" />
                    <span className="font-brand text-base text-[#5C1220]">
                      {item.tag || `Moment 0${index + 1}`}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Editorial Caption */}
            <div className="mt-5 max-w-sm">
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#C9A030] font-semibold block mb-1">
                {item.tag || `0${index + 1}`}
              </span>
              <p className="font-serif text-lg sm:text-xl text-[#3B0A13] italic font-normal leading-relaxed">
                “{item.caption}”
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
