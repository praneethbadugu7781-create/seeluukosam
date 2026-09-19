"use client";

import confetti from "canvas-confetti";

export function fireCelebrationConfetti() {
  if (typeof window === "undefined") return;

  const count = 240;
  const defaults = {
    origin: { y: 0.65 },
    zIndex: 9999,
  };

  const fire = (particleRatio: number, opts: confetti.Options) => {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  };

  const colors = ["#D4AF37", "#9F233C", "#F8DAC7", "#EF889B", "#FDFBF7", "#E15872", "#C9A030"];

  // Stage 1: Intense center pop
  fire(0.25, {
    spread: 35,
    startVelocity: 60,
    colors,
  });

  // Stage 2: Wide champagne mist
  fire(0.2, {
    spread: 70,
    colors,
  });

  // Stage 3: Slow floating golden motes
  fire(0.35, {
    spread: 110,
    decay: 0.91,
    scalar: 0.9,
    colors,
  });

  // Stage 4: High velocity loft
  fire(0.1, {
    spread: 130,
    startVelocity: 35,
    decay: 0.92,
    colors,
  });

  fire(0.1, {
    spread: 140,
    startVelocity: 50,
    colors,
  });

  // Stage 5: Dual side heart cannons
  setTimeout(() => {
    confetti({
      particleCount: 50,
      angle: 60,
      spread: 65,
      origin: { x: 0.05, y: 0.6 },
      colors,
      shapes: ["circle"],
      zIndex: 9999,
    });
    confetti({
      particleCount: 50,
      angle: 120,
      spread: 65,
      origin: { x: 0.95, y: 0.6 },
      colors,
      shapes: ["circle"],
      zIndex: 9999,
    });
  }, 300);

  // Stage 6: Final gentle top shower
  setTimeout(() => {
    confetti({
      particleCount: 60,
      spread: 100,
      origin: { x: 0.5, y: 0.2 },
      colors,
      shapes: ["circle"],
      gravity: 0.7,
      ticks: 200,
      zIndex: 9999,
    });
  }, 700);
}
