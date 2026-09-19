"use client";

import { useState, useCallback, RefObject } from "react";

interface DodgePosition {
  x: number;
  y: number;
}

export function useScreenDodge(
  containerRef: RefObject<HTMLElement>,
  yesButtonRef: RefObject<HTMLElement>,
  maybeButtonRef: RefObject<HTMLElement>
) {
  const [dodgePos, setDodgePos] = useState<DodgePosition>({ x: 0, y: 0 });
  const [dodgeCount, setDodgeCount] = useState(0);

  const calculateDodge = useCallback(() => {
    if (!containerRef.current || !maybeButtonRef.current) {
      // Fallback relative jitter if refs aren't mounted
      const randomX = (Math.random() - 0.5) * 160;
      const randomY = (Math.random() - 0.5) * 120;
      setDodgePos({ x: randomX, y: randomY });
      setDodgeCount((prev) => prev + 1);
      return;
    }

    const container = containerRef.current.getBoundingClientRect();
    const maybeBtn = maybeButtonRef.current.getBoundingClientRect();
    const yesBtn = yesButtonRef.current?.getBoundingClientRect();

    // Define safe padding inside container
    const padding = 16;
    const minX = - (maybeBtn.left - container.left - padding);
    const maxX = (container.right - maybeBtn.right - padding);
    const minY = - (maybeBtn.top - container.top - padding);
    const maxY = (container.bottom - maybeBtn.bottom - padding);

    // Generate candidate positions
    let bestX = 0;
    let bestY = 0;
    let maxSafetyScore = -1;

    for (let i = 0; i < 15; i++) {
      // Pick random delta in range
      const testX = minX + Math.random() * (maxX - minX);
      const testY = minY + Math.random() * (maxY - minY);

      const candidateCenterX = maybeBtn.left + maybeBtn.width / 2 + testX;
      const candidateCenterY = maybeBtn.top + maybeBtn.height / 2 + testY;

      // Distance from YES button center
      let distToYes = 9999;
      if (yesBtn) {
        const yesCenterX = yesBtn.left + yesBtn.width / 2;
        const yesCenterY = yesBtn.top + yesBtn.height / 2;
        distToYes = Math.hypot(candidateCenterX - yesCenterX, candidateCenterY - yesCenterY);
      }

      // Distance from current position (ensure it visibly jumps)
      const currentCenterX = maybeBtn.left + maybeBtn.width / 2;
      const currentCenterY = maybeBtn.top + maybeBtn.height / 2;
      const distFromCurrent = Math.hypot(candidateCenterX - currentCenterX, candidateCenterY - currentCenterY);

      // Score candidates: prioritize staying far enough from YES button and moving noticeably
      if (distToYes > 80 && distFromCurrent > 50) {
        const score = distToYes * 0.6 + distFromCurrent * 0.4;
        if (score > maxSafetyScore) {
          maxSafetyScore = score;
          bestX = testX;
          bestY = testY;
        }
      }
    }

    // If no optimal candidate found, fallback to opposite quadrant
    if (maxSafetyScore === -1) {
      bestX = dodgePos.x > 0 ? -80 : 80;
      bestY = dodgePos.y > 0 ? -60 : 60;
    }

    // Clamp values securely
    bestX = Math.max(minX, Math.min(maxX, bestX));
    bestY = Math.max(minY, Math.min(maxY, bestY));

    setDodgePos({ x: bestX, y: bestY });
    setDodgeCount((prev) => prev + 1);
  }, [containerRef, maybeButtonRef, yesButtonRef, dodgePos]);

  const resetDodge = useCallback(() => {
    setDodgePos({ x: 0, y: 0 });
    setDodgeCount(0);
  }, []);

  return {
    dodgePos,
    dodgeCount,
    calculateDodge,
    resetDodge,
  };
}
