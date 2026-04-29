"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useSpring } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { beaconLightValue } from "@/lib/beaconStore";

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────
// KineticForm — Liquid Mercury Contact Interface
// $100K POLISH: GSAP choreography, spring physics, extreme
// typographic contrast, mercury sheen, heavy spatial breathing.
// ─────────────────────────────────────────────────────────────

// Spring config: heavy, deliberate, fluid — stiffness 60, damping 20
const HEAVY_SPRING = { type: "spring" as const, stiffness: 60, damping: 20, mass: 1 };

// Keystroke spring: slightly tighter for responsive light burst
const LIGHT_SPRING = { stiffness: 80, damping: 16, mass: 0.9 };

const LIGHT_PER_CHAR = 0.08;
const LIGHT_MIN = 0.02;
const LIGHT_MAX = 1.0;
const DECAY_RATE = 0.14; // Slower decay for lingering presence

// GSAP entrance config — cinematic, heavy, inevitable
const CINEMATIC_EASE = "expo.out";
const CINEMATIC_DURATION = 1.5;
const STAGGER_BASE = 0.15;

export default function KineticForm() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const fieldsRef = useRef<HTMLDivElement>(null);
  const borderRefs = useRef<(HTMLDivElement | null)[]>([]);

  const lightValue = useSpring(LIGHT_MIN, LIGHT_SPRING);
  const [displayLight, setDisplayLight] = useState(LIGHT_MIN);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const lastTypeTime = useRef(Date.now());
  const decayActive = useRef(true);

  // ── Push spring value to global store ──
  useMotionValueEvent(lightValue, "change", (v: number) => {
    beaconLightValue.set(v);
    setDisplayLight(v);
  });

  // ── Decay loop: darkness creeps back when idle ──
  useEffect(() => {
    decayActive.current = true;
    let raf = 0;
    const tick = () => {
      if (!decayActive.current) return;
      const elapsed = (Date.now() - lastTypeTime.current) / 1000;
      if (elapsed > 0.12) {
        const current = lightValue.get();
        const next = Math.max(LIGHT_MIN, current - DECAY_RATE * 0.016);
        lightValue.set(next);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      decayActive.current = false;
      cancelAnimationFrame(raf);
    };
  }, [lightValue]);

  // ── Spark on keystroke ──
  const spark = useCallback(() => {
    lastTypeTime.current = Date.now();
    const current = lightValue.get();
    const next = Math.min(LIGHT_MAX, current + LIGHT_PER_CHAR);
    lightValue.set(next);
  }, [lightValue]);

  // ═══════════════════════════════════════════════════════════════
  // GSAP ENTRANCE CHOREOGRAPHY
  // Sequence: container fade → border draw → text bloom upward
  // ═══════════════════════════════════════════════════════════════
  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const fields = fieldsRef.current;
    if (!section || !heading || !fields) return;

    const ctx = gsap.context(() => {
      const master = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none none",
        },
        defaults: { ease: CINEMATIC_EASE, duration: CINEMATIC_DURATION },
      });

      // Phase 0: Container ghosts in
      master.fromTo(
        section,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power2.out" }
      );

      // Phase 1: Horizontal border rules draw themselves
      const borders = borderRefs.current.filter(Boolean);
      if (borders.length) {
        master.fromTo(
          borders,
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 1.8,
            ease: "expo.out",
            stagger: STAGGER_BASE,
            transformOrigin: "center center",
          },
          0.1
        );
      }

      // Phase 2: Heading elements bleed upward into reality
      const titleEls = heading.querySelectorAll("[data-animate]");
      if (titleEls.length) {
        master.fromTo(
          titleEls,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: CINEMATIC_DURATION,
            ease: CINEMATIC_EASE,
            stagger: STAGGER_BASE,
          },
          0.3
        );
      }

      // Phase 3: Form fields emerge from the dark
      const fieldEls = fields.querySelectorAll("[data-field]");
      if (fieldEls.length) {
        master.fromTo(
          fieldEls,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: CINEMATIC_DURATION,
            ease: CINEMATIC_EASE,
            stagger: STAGGER_BASE,
          },
          0.6
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  // ── Liquid Mercury input class with sheen ──
  const inputBase =
    "w-full rounded-sm border border-white/15 " +
    "backdrop-blur-xl backdrop-brightness-125 backdrop-contrast-150 " +
    "text-[var(--v-chalk)] placeholder:text-white/30 " +
    "focus:outline-none focus:border-white/50 " +
    "font-[family-name:var(--font-geist-sans)] text-sm leading-relaxed " +
    "overflow-hidden relative " +
    "px-6 py-5";

  const labelClass =
    "block mb-3 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.4em] text-white/40";

  return (
    <div
      ref={sectionRef}
      className="relative z-10 pointer-events-auto flex min-h-screen items-center justify-center px-6 py-48"
    >
      {/* ── Ambient status orb ── */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-3">
          <motion.div
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: "var(--v-chalk)" }}
            animate={{
              opacity: 0.1 + displayLight * 0.9,
              scale: 0.7 + displayLight * 0.6,
              boxShadow: `0 0 ${6 + displayLight * 28}px rgba(232,232,232,${0.15 + displayLight * 0.6})`,
            }}
            transition={HEAVY_SPRING}
          />
          <span
            className="font-[family-name:var(--font-geist-mono)] text-[9px] uppercase tracking-[0.5em]"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            {displayLight > 0.12 ? "Resonating" : "Dormant"}
          </span>
        </div>
      </div>

      {/* ── Form container ── */}
      <div className="w-full max-w-xl">
        {/* ═══════════════════════════════════════════════════════════
            HEADING — Extreme typographic contrast
            Massive tight-tracked headline vs. tiny wide-tracked sub
            ═══════════════════════════════════════════════════════════ */}
        <div ref={headingRef} className="mb-24 text-center">
          {/* Eyebrow */}
          <div data-animate className="mb-8 opacity-0">
            <span
              className="inline-block font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.5em]"
              style={{ color: "var(--v-silver)" }}
            >
              005 — The Final Seal
            </span>
          </div>

          {/* Main headline — massive, tight tracking */}
          <div data-animate className="overflow-hidden opacity-0">
            <h2
              className="font-[family-name:var(--font-playfair)] leading-[0.95] text-white"
              style={{
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Begin the
              <br />
              <span className="italic" style={{ fontWeight: 400 }}>
                conversation
              </span>
            </h2>
          </div>

          {/* Decorative rule */}
          <div
            ref={(el) => { borderRefs.current[0] = el; }}
            className="mx-auto mt-10 h-px w-20 opacity-0"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
            }}
          />

          {/* Subtext — tiny, wide, uppercase. Extreme contrast. */}
          <div data-animate className="mt-10 opacity-0">
            <p
              className="mx-auto max-w-md font-[family-name:var(--font-geist-mono)] uppercase leading-[2]"
              style={{
                fontSize: "10px",
                letterSpacing: "0.2em",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              Every word you write pushes the darkness back.
              <br />
              Stop typing, and it creeps forward again.
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            FORM FIELDS — Liquid Mercury with sheen
            Staggered entrance, spring hover, continuous shimmer
            ═══════════════════════════════════════════════════════════ */}
        <div ref={fieldsRef} className="flex flex-col gap-14">
          {/* Name */}
          <div data-field className="opacity-0">
            <label htmlFor="kb-name" className={labelClass}>
              Name
            </label>
            <motion.div
              whileHover={{ scale: 1.008, borderColor: "rgba(255,255,255,0.35)" }}
              whileFocus={{ scale: 1.008, borderColor: "rgba(255,255,255,0.55)" }}
              transition={HEAVY_SPRING}
              className="relative rounded-sm"
            >
              {/* Mercury sheen — continuous animated gradient overlay */}
              <div
                className="pointer-events-none absolute inset-0 rounded-sm opacity-[0.06]"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.4) 55%, transparent 70%)",
                  backgroundSize: "300% 100%",
                  animation: "mercury-sheen 6s ease-in-out infinite",
                }}
              />
              <input
                id="kb-name"
                type="text"
                value={name}
                onChange={(e) => { setName(e.target.value); spark(); }}
                onKeyDown={spark}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                placeholder="Your name"
                className={inputBase}
                style={{
                  background:
                    focusedField === "name"
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(255,255,255,0.03)",
                  borderColor:
                    focusedField === "name"
                      ? "rgba(255,255,255,0.45)"
                      : "rgba(255,255,255,0.12)",
                  boxShadow:
                    focusedField === "name"
                      ? "inset 0 1px 20px rgba(255,255,255,0.12), 0 0 30px rgba(255,255,255,0.04)"
                      : "inset 0 1px 15px rgba(255,255,255,0.06)",
                  transition: "background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease",
                }}
                autoComplete="name"
              />
            </motion.div>
          </div>

          {/* Email */}
          <div data-field className="opacity-0">
            <label htmlFor="kb-email" className={labelClass}>
              Email
            </label>
            <motion.div
              whileHover={{ scale: 1.008, borderColor: "rgba(255,255,255,0.35)" }}
              transition={HEAVY_SPRING}
              className="relative rounded-sm"
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-sm opacity-[0.06]"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.4) 55%, transparent 70%)",
                  backgroundSize: "300% 100%",
                  animation: "mercury-sheen 6s ease-in-out infinite",
                  animationDelay: "2s",
                }}
              />
              <input
                id="kb-email"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); spark(); }}
                onKeyDown={spark}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                placeholder="your@email.com"
                className={inputBase}
                style={{
                  background:
                    focusedField === "email"
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(255,255,255,0.03)",
                  borderColor:
                    focusedField === "email"
                      ? "rgba(255,255,255,0.45)"
                      : "rgba(255,255,255,0.12)",
                  boxShadow:
                    focusedField === "email"
                      ? "inset 0 1px 20px rgba(255,255,255,0.12), 0 0 30px rgba(255,255,255,0.04)"
                      : "inset 0 1px 15px rgba(255,255,255,0.06)",
                  transition: "background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease",
                }}
                autoComplete="email"
              />
            </motion.div>
          </div>

          {/* Message */}
          <div data-field className="opacity-0">
            <label htmlFor="kb-message" className={labelClass}>
              Message
            </label>
            <motion.div
              whileHover={{ scale: 1.008, borderColor: "rgba(255,255,255,0.35)" }}
              transition={HEAVY_SPRING}
              className="relative rounded-sm"
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-sm opacity-[0.06]"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.4) 55%, transparent 70%)",
                  backgroundSize: "300% 100%",
                  animation: "mercury-sheen 6s ease-in-out infinite",
                  animationDelay: "4s",
                }}
              />
              <textarea
                id="kb-message"
                value={message}
                onChange={(e) => { setMessage(e.target.value); spark(); }}
                onKeyDown={spark}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                placeholder="Speak into the dark..."
                rows={6}
                className={`${inputBase} resize-none`}
                style={{
                  background:
                    focusedField === "message"
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(255,255,255,0.03)",
                  borderColor:
                    focusedField === "message"
                      ? "rgba(255,255,255,0.45)"
                      : "rgba(255,255,255,0.12)",
                  boxShadow:
                    focusedField === "message"
                      ? "inset 0 1px 20px rgba(255,255,255,0.12), 0 0 30px rgba(255,255,255,0.04)"
                      : "inset 0 1px 15px rgba(255,255,255,0.06)",
                  transition: "background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease",
                }}
              />
            </motion.div>
          </div>

          {/* Submit */}
          <div data-field className="opacity-0 pt-4">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.5)" }}
              whileTap={{ scale: 0.98 }}
              transition={HEAVY_SPRING}
              className={
                "group relative w-full overflow-hidden rounded-sm " +
                "border border-white/15 px-10 py-5 " +
                "font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.35em] " +
                "focus:outline-none"
              }
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.7)",
                boxShadow: "inset 0 1px 15px rgba(255,255,255,0.06)",
              }}
            >
              {/* Sheen sweep on hover */}
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
                }}
              />
              {/* Mercury sheen idle */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)",
                  backgroundSize: "300% 100%",
                  animation: "mercury-sheen 5s ease-in-out infinite",
                }}
              />
              <span className="relative">Send Signal</span>
            </motion.button>
          </div>
        </div>

        {/* ── Footer hint ── */}
        <div data-field className="mt-20 text-center opacity-0">
          <span
            className="font-[family-name:var(--font-geist-mono)] uppercase"
            style={{
              fontSize: "9px",
              letterSpacing: "0.35em",
              color: "rgba(255,255,255,0.15)",
            }}
          >
            The Void remembers those who speak
          </span>
        </div>
      </div>

      {/* ── CSS keyframe for mercury sheen (injected inline for portability) ── */}
      <style>{`
        @keyframes mercury-sheen {
          0% { background-position: 150% 0; }
          100% { background-position: -150% 0; }
        }
      `}</style>
    </div>
  );
}
