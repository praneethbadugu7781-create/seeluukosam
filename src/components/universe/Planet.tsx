"use client";

import { motion } from "framer-motion";

export function Planet({
  size = 120,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <motion.div
        className="absolute inset-[-35%] rounded-full opacity-70 blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(168,164,216,0.45) 0%, rgba(217,141,155,0.12) 42%, transparent 70%)",
        }}
        animate={{ opacity: [0.45, 0.75, 0.45], scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-full"
        style={{
          background:
            "radial-gradient(circle at 32% 28%, #c9c4e8 0%, #6d6a9a 28%, #2a3148 62%, #12182a 100%)",
          boxShadow:
            "inset -18px -12px 40px rgba(7,10,18,0.55), 0 0 40px rgba(168,164,216,0.25)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="absolute left-[18%] top-[40%] h-[18%] w-[40%] rounded-full opacity-30 blur-[6px]"
          style={{ background: "rgba(7,10,18,0.5)" }}
        />
        <div
          className="absolute right-[10%] top-[22%] h-[10%] w-[22%] rounded-full opacity-25 blur-[4px]"
          style={{ background: "rgba(246,241,232,0.35)" }}
        />
      </motion.div>
      <div
        className="pointer-events-none absolute inset-[-8%] rounded-full border border-ivory/10"
        style={{ boxShadow: "0 0 1px rgba(246,241,232,0.2)" }}
      />
    </div>
  );
}
