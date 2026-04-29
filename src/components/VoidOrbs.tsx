"use client";

import { useEffect, useRef } from "react";
import { beaconLightValue } from "@/lib/beaconStore";

// ─────────────────────────────────────────────────────────────
// VoidOrbs — Floating void spheres drifting upward
//
// Uses a SINGLE combined transform animation (drift + sway) so
// the initial left positioning is never overridden.
// ─────────────────────────────────────────────────────────────

interface PreOrb {
  id: number;
  size: number;
  x: number;      // vw
  y: number;      // vh
  driftY: number; // vh (negative)
  durMs: number;
  delayMs: number;
  swayAmp: number;
  swayDuration: number;
  brightness: number;
}

const X_POSITIONS = [
  5, 92, 18, 78, 35, 88, 12, 65, 48, 82, 25, 58,
  8, 72, 42, 95, 15, 68, 55, 85, 30, 62, 10, 75,
];

function generateOrbs(count: number): PreOrb[] {
  let seed = 137;
  const rnd = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };

  const orbs: PreOrb[] = [];
  for (let i = 0; i < count; i++) {
    const size = 8 + rnd() * 20;
    const y = rnd() * 105;
    orbs.push({
      id: i,
      size,
      x: X_POSITIONS[i % X_POSITIONS.length],
      y,
      driftY: -(120 + y),
      durMs: Math.round((16 + rnd() * 18) * 1000),
      delayMs: Math.round(rnd() * 5000),
      swayAmp: Math.round(5 + rnd() * 16),
      swayDuration: Math.round((5 + rnd() * 8) * 1000),
      brightness: 0.2 + rnd() * 0.2,
    });
  }
  return orbs;
}

const PRESEED_ORBS = generateOrbs(24);

export default function VoidOrbs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let lastSpawn = performance.now();
    let raf = 0;

    const spawn = () => {
      const light = beaconLightValue.get();
      const size = 10 + Math.random() * 16;
      let x = Math.random() * 100;
      if (Math.random() > 0.55) {
        x = Math.random() > 0.5 ? Math.random() * 22 : 78 + Math.random() * 22;
      }

      const el = document.createElement("div");
      el.style.cssText =
        `position:absolute;left:${x}vw;bottom:-${size + 2}px;` +
        `width:${size}px;height:${size}px;border-radius:50%;` +
        `pointer-events:none;` +
        `--vsw-amp:${5 + Math.random() * 15}px;`;

      el.className = "void-orb-dynamic";

      const b = 0.12 + light * 0.08;
      const r = Math.floor(b * 255);
      const g = Math.floor(b * 255);
      const bl = Math.floor(b * 260);

      el.style.background =
        `radial-gradient(circle at 35% 35%, ` +
        `rgb(${r+25},${g+25},${bl+30}) 0%, ` +
        `rgb(${r},${g},${bl}) 50%, ` +
        `rgb(${Math.max(0,r-10)},${Math.max(0,g-10)},${Math.max(0,bl-10)}) 100%)`;
      el.style.border = "1px solid rgba(255,255,255,0.1)";
      el.style.boxShadow =
        `0 0 ${size * 2}px ${size * 0.5}px rgba(140,150,170,0.1), ` +
        `inset 0 0 ${size * 0.3}px rgba(255,255,255,0.03)`;

      const dur = 20000 + Math.random() * 12000;
      el.animate(
        [
          { transform: "translateY(0) translateX(0)", opacity: 0 },
          { transform: "translateY(0) translateX(0)", opacity: 1, offset: 0.04 },
          { transform: "translateY(-30vh) translateX(var(--vsw-amp))", opacity: 1, offset: 0.45 },
          { transform: "translateY(-60vh) translateX(calc(var(--vsw-amp) * -0.6))", opacity: 1, offset: 0.88 },
          { transform: "translateY(-120vh) translateX(0)", opacity: 0 },
        ],
        { duration: dur, easing: "linear", fill: "forwards" }
      );

      container.appendChild(el);
      setTimeout(() => el.remove(), dur + 500);
    };

    const tick = () => {
      const now = performance.now();
      const light = beaconLightValue.get();
      const interval = light < 0.1 ? 2500 : light < 0.4 ? 1200 : light < 0.7 ? 500 : 200;
      if (now - lastSpawn > interval) {
        lastSpawn = now;
        spawn();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
      aria-hidden="true"
    >
      {/* TEST: bright orb at 70vw using margin-left */}
      <div
        className="absolute"
        style={{
          width: 40,
          height: 40,
          marginLeft: "70vw",
          top: "15vh",
          borderRadius: "50%",
          background: "#777777",
          border: "2px solid #ffffff",
          boxShadow: "0 0 50px 20px rgba(255,255,255,0.3)",
          opacity: 1,
        }}
      />

      {PRESEED_ORBS.map((orb) => {
        const r = Math.floor(orb.brightness * 255);
        const g = Math.floor(orb.brightness * 255);
        const b = Math.floor(orb.brightness * 260);
        return (
          <div
            key={orb.id}
            className="absolute"
            style={{
              width: orb.size,
              height: orb.size,
              left: `${orb.x}vw`,
              top: `${orb.y}vh`,
              borderRadius: "50%",
              background: `radial-gradient(circle at 35% 35%, rgb(${r+30},${g+30},${b+35}) 0%, rgb(${r},${g},${b}) 50%, rgb(${Math.max(0,r-12)},${Math.max(0,g-12)},${Math.max(0,b-12)}) 100%)`,
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: `0 0 ${orb.size * 2}px ${orb.size * 0.5}px rgba(160,170,195,0.14), inset 0 0 ${orb.size * 0.35}px rgba(255,255,255,0.04)`,
              opacity: 1,
              // Combined drift+sway via single transform animation
              animation: `vo-combined ${orb.durMs}ms linear ${orb.delayMs}ms forwards`,
              // Per-orb CSS vars for drift distance and sway amplitude
              ["--vsw" as string]: `${orb.swayAmp}px`,
              ["--vo-y" as string]: `${orb.driftY}vh`,
            }}
          />
        );
      })}

      <style>{`
        @keyframes vo-combined {
          0%   { transform: translateY(0) translateX(0); opacity: 0; }
          5%   { transform: translateY(0) translateX(0); opacity: 1; }
          25%  { transform: translateY(calc(var(--vo-y, -30vh))) translateX(var(--vsw, 10px)); }
          50%  { transform: translateY(calc(var(--vo-y, -60vh) * 0.8)) translateX(calc(var(--vsw, 10px) * -0.5)); }
          85%  { transform: translateY(calc(var(--vo-y, -100vh))) translateX(calc(var(--vsw, 10px) * 0.3)); opacity: 1; }
          100% { transform: translateY(calc(var(--vo-y, -120vh))) translateX(0); opacity: 0; }
        }
        .void-orb-dynamic {
          animation: vo-combined var(--vd-dur, 20s) linear forwards;
        }
      `}</style>
    </div>
  );
}
