"use client";

import { motion } from "framer-motion";

export function Nebula({ drift = true }: { drift?: boolean }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -left-[20%] top-[10%] h-[55vmin] w-[55vmin] rounded-full opacity-40 blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(168,164,216,0.22) 0%, rgba(17,24,42,0) 70%)",
        }}
        animate={drift ? { x: [0, 24, 0], y: [0, 16, 0] } : undefined}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-10%] top-[30%] h-[48vmin] w-[48vmin] rounded-full opacity-35 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(217,141,155,0.14) 0%, rgba(7,10,18,0) 72%)",
        }}
        animate={drift ? { x: [0, -18, 0], y: [0, 22, 0] } : undefined}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-8%] left-[30%] h-[60vmin] w-[60vmin] rounded-full opacity-30 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(216,198,160,0.1) 0%, rgba(7,10,18,0) 70%)",
        }}
        animate={drift ? { x: [0, 12, 0], y: [0, -14, 0] } : undefined}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
