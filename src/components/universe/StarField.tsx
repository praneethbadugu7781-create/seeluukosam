"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Star = {
  x: number;
  y: number;
  z: number;
  r: number;
  tw: number;
  ts: number;
  layer: number;
};

export function StarField({
  warp = false,
  quiet = 1,
  pointer = { x: 0, y: 0 },
}: {
  warp?: boolean;
  quiet?: number;
  pointer?: { x: number; y: number };
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();
  const warpRef = useRef(warp);
  const quietRef = useRef(quiet);
  const pointerRef = useRef(pointer);

  warpRef.current = warp;
  quietRef.current = quiet;
  pointerRef.current = pointer;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const mobile = window.matchMedia("(max-width: 640px)").matches;
    const count = reduced ? 40 : mobile ? 90 : 160;
    const stars: Star[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = (): Star => ({
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1,
      z: Math.random(),
      r: Math.random() * 1.4 + 0.2,
      tw: Math.random() * Math.PI * 2,
      ts: 0.004 + Math.random() * 0.012,
      layer: Math.random(),
    });

    for (let i = 0; i < count; i++) stars.push(spawn());
    resize();

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      const q = quietRef.current;
      const warping = warpRef.current && !reduced;
      const px = pointerRef.current.x * 12;
      const py = pointerRef.current.y * 12;

      for (const s of stars) {
        if (warping) {
          s.z -= 0.018;
          if (s.z <= 0.02) {
            s.x = Math.random() * 2 - 1;
            s.y = Math.random() * 2 - 1;
            s.z = 1;
          }
        } else if (!reduced) {
          s.tw += s.ts;
          s.z += (s.layer - 0.5) * 0.00015;
          if (s.z > 1) s.z = 0;
          if (s.z < 0) s.z = 1;
        }

        const depth = 0.35 + s.z * 0.65;
        const parallax = 0.35 + s.layer * 0.8;
        const sx = w / 2 + s.x * w * 0.55 * depth + px * parallax * 0.4;
        const sy = h / 2 + s.y * h * 0.55 * depth + py * parallax * 0.4;
        const twinkle = reduced ? 1 : 0.55 + Math.sin(s.tw) * 0.45;
        const alpha = Math.max(0, 0.15 + s.layer * 0.7 * twinkle) * q;
        const radius = s.r * (0.5 + s.layer) * (warping ? 1 / Math.max(s.z, 0.08) * 0.12 : 1);

        if (warping) {
          const tx = w / 2 + s.x * w * 0.55 * (0.35 + (s.z + 0.04) * 0.65);
          const ty = h / 2 + s.y * h * 0.55 * (0.35 + (s.z + 0.04) * 0.65);
          ctx.strokeStyle = `rgba(246,241,232,${alpha * 0.55})`;
          ctx.lineWidth = Math.min(radius, 1.2);
          ctx.beginPath();
          ctx.moveTo(sx, sy);
          ctx.lineTo(tx, ty);
          ctx.stroke();
        }

        ctx.fillStyle = `rgba(246,241,232,${alpha})`;
        ctx.beginPath();
        ctx.arc(sx, sy, Math.max(0.3, radius), 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    const onVis = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else {
        running = true;
        raf = requestAnimationFrame(draw);
      }
    };

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVis);
    raf = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [reduced]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden
    />
  );
}
