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
    <section className="relative min-h-screen w-full flex flex-col justify-center py-20 px-5 sm:px-8 max-w-2xl mx-auto">
      {/* Editorial Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
        className="text-center mb-14"
      >
        <span className="font-sans text-[11px] font-semibold tracking-widest text-[#C9A030] uppercase block mb-2">
          Chapter {memories.number}
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#22040A] tracking-normal font-normal">
          {memories.title}
        </h2>
      </motion.div>

      {/* Large Editorial Photos */}
      <div className="space-y-16 sm:space-y-20 w-full">
        {memories.items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center text-center"
          >
            {/* Photo Frame */}
            <div className="relative w-full max-w-md sm:max-w-lg aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden bg-[#FAF7F2] p-2 border border-[#7E192D]/15 shadow-xl group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#FAF7F2]">
                {!imageErrors[item.id] ? (
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={() => handleImageError(item.id)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#FDE8EB]/50">
                    <Heart className="w-10 h-10 fill-[#E15872] text-[#E15872] mb-3 animate-pulse" />
                  </div>
                )}
              </div>
            </div>

            {/* Clean Quote Caption */}
            <div className="mt-4 max-w-sm">
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
