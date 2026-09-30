"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { universe } from "@/config/universe";
import { LineSequence } from "@/components/universe/CinematicText";
import { SceneShell } from "./SceneShell";

export function OrbitScene({ onBack }: { onBack: () => void }) {
  const [closer, setCloser] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setCloser(true), 7200);
    return () => clearTimeout(t);
  }, []);

  return (
    <SceneShell onBack={onBack}>
      <p className="mb-8 text-[10px] tracking-[0.32em] text-lavender/70">04  ·  OUR LITTLE UNIVERSE</p>
      <div className="relative mb-10 h-[220px] w-[220px]">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ivory/20"
          style={{ boxShadow: "0 0 20px rgba(246,241,232,0.2)" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          style={{ width: 0, height: 0 }}
        >
          <motion.div
            className="absolute h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full"
            animate={{ x: closer ? 52 : 78, y: 0 }}
            transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: "radial-gradient(circle at 32% 28%, #d5d1ee, #4c5374 70%)",
              boxShadow: "0 0 28px rgba(168,164,216,0.45)",
            }}
          />
        </motion.div>
        <motion.div
          className="absolute left-1/2 top-1/2"
          animate={{ rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{ width: 0, height: 0 }}
        >
          <motion.div
            className="absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
            animate={{ x: closer ? -46 : -70, y: 8 }}
            transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: "radial-gradient(circle at 32% 28%, #E8B4BC, #5a3340 72%)",
              boxShadow: "0 0 22px rgba(217,141,155,0.4)",
            }}
          />
        </motion.div>
      </div>
      <LineSequence lines={universe.orbitMessages} hold={2300} serifIndexes={[4]} />
    </SceneShell>
  );
}
