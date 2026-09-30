"use client";

import { motion } from "framer-motion";

export function Constellation({
  points,
  connected = false,
  size = 88,
}: {
  points: { x: number; y: number }[];
  connected?: boolean;
  size?: number;
}) {
  const d = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className="overflow-visible">
      {connected && (
        <motion.path
          d={d}
          fill="none"
          stroke="rgba(168,164,216,0.55)"
          strokeWidth="0.6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
      {points.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={i === 0 ? 1.8 : 1.3}
          fill="#F6F1E8"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.35, 1, 0.45] }}
          transition={{ duration: 2.4 + i * 0.2, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </svg>
  );
}
