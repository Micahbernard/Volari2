module.exports = [
"[project]/src/components/KineticForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KineticForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beaconStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/beaconStore.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
// ─────────────────────────────────────────────────────────────
// KineticForm — Liquid Mercury Contact Interface
// $100K POLISH: GSAP choreography, spring physics, extreme
// typographic contrast, mercury sheen, heavy spatial breathing.
// ─────────────────────────────────────────────────────────────
// Spring config: heavy, deliberate, fluid — stiffness 60, damping 20
const HEAVY_SPRING = {
    type: "spring",
    stiffness: 60,
    damping: 20,
    mass: 1
};
// Keystroke spring: slightly tighter for responsive light burst
const LIGHT_SPRING = {
    stiffness: 80,
    damping: 16,
    mass: 0.9
};
const LIGHT_PER_CHAR = 0.08;
const LIGHT_MIN = 0.02;
const LIGHT_MAX = 1.0;
const DECAY_RATE = 0.14; // Slower decay for lingering presence
// GSAP entrance config — cinematic, heavy, inevitable
const CINEMATIC_EASE = "expo.out";
const CINEMATIC_DURATION = 1.5;
const STAGGER_BASE = 0.15;
function KineticForm() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fieldsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const borderRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const lightValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(LIGHT_MIN, LIGHT_SPRING);
    const [displayLight, setDisplayLight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(LIGHT_MIN);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [focusedField, setFocusedField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const lastTypeTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(Date.now());
    const decayActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    // ── Push spring value to global store ──
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(lightValue, "change", (v)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beaconStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["beaconLightValue"].set(v);
        setDisplayLight(v);
    });
    // ── Decay loop: darkness creeps back when idle ──
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        decayActive.current = true;
        let raf = 0;
        const tick = ()=>{
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
        return ()=>{
            decayActive.current = false;
            cancelAnimationFrame(raf);
        };
    }, [
        lightValue
    ]);
    // ── Spark on keystroke ──
    const spark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        lastTypeTime.current = Date.now();
        const current = lightValue.get();
        const next = Math.min(LIGHT_MAX, current + LIGHT_PER_CHAR);
        lightValue.set(next);
    }, [
        lightValue
    ]);
    // ═══════════════════════════════════════════════════════════════
    // GSAP ENTRANCE CHOREOGRAPHY
    // Sequence: container fade → border draw → text bloom upward
    // ═══════════════════════════════════════════════════════════════
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const section = sectionRef.current;
        const heading = headingRef.current;
        const fields = fieldsRef.current;
        if (!section || !heading || !fields) return;
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context(()=>{
            const master = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 75%",
                    toggleActions: "play none none none"
                },
                defaults: {
                    ease: CINEMATIC_EASE,
                    duration: CINEMATIC_DURATION
                }
            });
            // Phase 0: Container ghosts in
            master.fromTo(section, {
                opacity: 0
            }, {
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            });
            // Phase 1: Horizontal border rules draw themselves
            const borders = borderRefs.current.filter(Boolean);
            if (borders.length) {
                master.fromTo(borders, {
                    scaleX: 0,
                    opacity: 0
                }, {
                    scaleX: 1,
                    opacity: 1,
                    duration: 1.8,
                    ease: "expo.out",
                    stagger: STAGGER_BASE,
                    transformOrigin: "center center"
                }, 0.1);
            }
            // Phase 2: Heading elements bleed upward into reality
            const titleEls = heading.querySelectorAll("[data-animate]");
            if (titleEls.length) {
                master.fromTo(titleEls, {
                    y: 40,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: CINEMATIC_DURATION,
                    ease: CINEMATIC_EASE,
                    stagger: STAGGER_BASE
                }, 0.3);
            }
            // Phase 3: Form fields emerge from the dark
            const fieldEls = fields.querySelectorAll("[data-field]");
            if (fieldEls.length) {
                master.fromTo(fieldEls, {
                    y: 40,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: CINEMATIC_DURATION,
                    ease: CINEMATIC_EASE,
                    stagger: STAGGER_BASE
                }, 0.6);
            }
        }, section);
        return ()=>ctx.revert();
    }, []);
    // ── Liquid Mercury input class with sheen ──
    const inputBase = "w-full rounded-sm border border-white/15 " + "backdrop-blur-xl backdrop-brightness-125 backdrop-contrast-150 " + "text-[var(--v-chalk)] placeholder:text-white/30 " + "focus:outline-none focus:border-white/50 " + "font-[family-name:var(--font-geist-sans)] text-sm leading-relaxed " + "overflow-hidden relative " + "px-6 py-5";
    const labelClass = "block mb-3 font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.4em] text-white/40";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sectionRef,
        className: "relative z-10 pointer-events-auto flex min-h-screen items-center justify-center px-6 py-48",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-12 left-1/2 -translate-x-1/2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "h-1.5 w-1.5 rounded-full",
                            style: {
                                backgroundColor: "var(--v-chalk)"
                            },
                            animate: {
                                opacity: 0.1 + displayLight * 0.9,
                                scale: 0.7 + displayLight * 0.6,
                                boxShadow: `0 0 ${6 + displayLight * 28}px rgba(232,232,232,${0.15 + displayLight * 0.6})`
                            },
                            transition: HEAVY_SPRING
                        }, void 0, false, {
                            fileName: "[project]/src/components/KineticForm.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-[family-name:var(--font-geist-mono)] text-[9px] uppercase tracking-[0.5em]",
                            style: {
                                color: "rgba(255,255,255,0.25)"
                            },
                            children: displayLight > 0.12 ? "Resonating" : "Dormant"
                        }, void 0, false, {
                            fileName: "[project]/src/components/KineticForm.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/KineticForm.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/KineticForm.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: headingRef,
                        className: "mb-24 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-animate": true,
                                className: "mb-8 opacity-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.5em]",
                                    style: {
                                        color: "var(--v-silver)"
                                    },
                                    children: "005 — The Final Seal"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/KineticForm.tsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/KineticForm.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-animate": true,
                                className: "overflow-hidden opacity-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-[family-name:var(--font-playfair)] leading-[0.95] text-white",
                                    style: {
                                        fontSize: "clamp(3rem, 7vw, 5.5rem)",
                                        letterSpacing: "-0.03em"
                                    },
                                    children: [
                                        "Begin the",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/KineticForm.tsx",
                                            lineNumber: 235,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "italic",
                                            style: {
                                                fontWeight: 400
                                            },
                                            children: "conversation"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/KineticForm.tsx",
                                            lineNumber: 236,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/KineticForm.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/KineticForm.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: (el)=>{
                                    borderRefs.current[0] = el;
                                },
                                className: "mx-auto mt-10 h-px w-20 opacity-0",
                                style: {
                                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/KineticForm.tsx",
                                lineNumber: 243,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-animate": true,
                                className: "mt-10 opacity-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mx-auto max-w-md font-[family-name:var(--font-geist-mono)] uppercase leading-[2]",
                                    style: {
                                        fontSize: "10px",
                                        letterSpacing: "0.2em",
                                        color: "rgba(255,255,255,0.35)"
                                    },
                                    children: [
                                        "Every word you write pushes the darkness back.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/components/KineticForm.tsx",
                                            lineNumber: 263,
                                            columnNumber: 15
                                        }, this),
                                        "Stop typing, and it creeps forward again."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/KineticForm.tsx",
                                    lineNumber: 254,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/KineticForm.tsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/KineticForm.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: fieldsRef,
                        className: "flex flex-col gap-14",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-field": true,
                                className: "opacity-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "kb-name",
                                        className: labelClass,
                                        children: "Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/KineticForm.tsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        whileHover: {
                                            scale: 1.008,
                                            borderColor: "rgba(255,255,255,0.35)"
                                        },
                                        whileFocus: {
                                            scale: 1.008,
                                            borderColor: "rgba(255,255,255,0.55)"
                                        },
                                        transition: HEAVY_SPRING,
                                        className: "relative rounded-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pointer-events-none absolute inset-0 rounded-sm opacity-[0.06]",
                                                style: {
                                                    background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.4) 55%, transparent 70%)",
                                                    backgroundSize: "300% 100%",
                                                    animation: "mercury-sheen 6s ease-in-out infinite"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/KineticForm.tsx",
                                                lineNumber: 286,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "kb-name",
                                                type: "text",
                                                value: name,
                                                onChange: (e)=>{
                                                    setName(e.target.value);
                                                    spark();
                                                },
                                                onKeyDown: spark,
                                                onFocus: ()=>setFocusedField("name"),
                                                onBlur: ()=>setFocusedField(null),
                                                placeholder: "Your name",
                                                className: inputBase,
                                                style: {
                                                    background: focusedField === "name" ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
                                                    borderColor: focusedField === "name" ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.12)",
                                                    boxShadow: focusedField === "name" ? "inset 0 1px 20px rgba(255,255,255,0.12), 0 0 30px rgba(255,255,255,0.04)" : "inset 0 1px 15px rgba(255,255,255,0.06)",
                                                    transition: "background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease"
                                                },
                                                autoComplete: "name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/KineticForm.tsx",
                                                lineNumber: 295,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/KineticForm.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/KineticForm.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-field": true,
                                className: "opacity-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "kb-email",
                                        className: labelClass,
                                        children: "Email"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/KineticForm.tsx",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        whileHover: {
                                            scale: 1.008,
                                            borderColor: "rgba(255,255,255,0.35)"
                                        },
                                        transition: HEAVY_SPRING,
                                        className: "relative rounded-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pointer-events-none absolute inset-0 rounded-sm opacity-[0.06]",
                                                style: {
                                                    background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.4) 55%, transparent 70%)",
                                                    backgroundSize: "300% 100%",
                                                    animation: "mercury-sheen 6s ease-in-out infinite",
                                                    animationDelay: "2s"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/KineticForm.tsx",
                                                lineNumber: 335,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "kb-email",
                                                type: "email",
                                                value: email,
                                                onChange: (e)=>{
                                                    setEmail(e.target.value);
                                                    spark();
                                                },
                                                onKeyDown: spark,
                                                onFocus: ()=>setFocusedField("email"),
                                                onBlur: ()=>setFocusedField(null),
                                                placeholder: "your@email.com",
                                                className: inputBase,
                                                style: {
                                                    background: focusedField === "email" ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
                                                    borderColor: focusedField === "email" ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.12)",
                                                    boxShadow: focusedField === "email" ? "inset 0 1px 20px rgba(255,255,255,0.12), 0 0 30px rgba(255,255,255,0.04)" : "inset 0 1px 15px rgba(255,255,255,0.06)",
                                                    transition: "background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease"
                                                },
                                                autoComplete: "email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/KineticForm.tsx",
                                                lineNumber: 345,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/KineticForm.tsx",
                                        lineNumber: 330,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/KineticForm.tsx",
                                lineNumber: 326,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-field": true,
                                className: "opacity-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "kb-message",
                                        className: labelClass,
                                        children: "Message"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/KineticForm.tsx",
                                        lineNumber: 377,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        whileHover: {
                                            scale: 1.008,
                                            borderColor: "rgba(255,255,255,0.35)"
                                        },
                                        transition: HEAVY_SPRING,
                                        className: "relative rounded-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pointer-events-none absolute inset-0 rounded-sm opacity-[0.06]",
                                                style: {
                                                    background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.4) 55%, transparent 70%)",
                                                    backgroundSize: "300% 100%",
                                                    animation: "mercury-sheen 6s ease-in-out infinite",
                                                    animationDelay: "4s"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/KineticForm.tsx",
                                                lineNumber: 385,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                id: "kb-message",
                                                value: message,
                                                onChange: (e)=>{
                                                    setMessage(e.target.value);
                                                    spark();
                                                },
                                                onKeyDown: spark,
                                                onFocus: ()=>setFocusedField("message"),
                                                onBlur: ()=>setFocusedField(null),
                                                placeholder: "Speak into the dark...",
                                                rows: 6,
                                                className: `${inputBase} resize-none`,
                                                style: {
                                                    background: focusedField === "message" ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
                                                    borderColor: focusedField === "message" ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.12)",
                                                    boxShadow: focusedField === "message" ? "inset 0 1px 20px rgba(255,255,255,0.12), 0 0 30px rgba(255,255,255,0.04)" : "inset 0 1px 15px rgba(255,255,255,0.06)",
                                                    transition: "background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/KineticForm.tsx",
                                                lineNumber: 395,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/KineticForm.tsx",
                                        lineNumber: 380,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/KineticForm.tsx",
                                lineNumber: 376,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-field": true,
                                className: "opacity-0 pt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                    type: "button",
                                    whileHover: {
                                        scale: 1.02,
                                        borderColor: "rgba(255,255,255,0.5)"
                                    },
                                    whileTap: {
                                        scale: 0.98
                                    },
                                    transition: HEAVY_SPRING,
                                    className: "group relative w-full overflow-hidden rounded-sm " + "border border-white/15 px-10 py-5 " + "font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-[0.35em] " + "focus:outline-none",
                                    style: {
                                        background: "rgba(255,255,255,0.06)",
                                        color: "rgba(255,255,255,0.7)",
                                        boxShadow: "inset 0 1px 15px rgba(255,255,255,0.06)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out",
                                            style: {
                                                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/KineticForm.tsx",
                                            lineNumber: 444,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pointer-events-none absolute inset-0 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700",
                                            style: {
                                                background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)",
                                                backgroundSize: "300% 100%",
                                                animation: "mercury-sheen 5s ease-in-out infinite"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/KineticForm.tsx",
                                            lineNumber: 452,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative",
                                            children: "Send Signal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/KineticForm.tsx",
                                            lineNumber: 461,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/KineticForm.tsx",
                                    lineNumber: 426,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/KineticForm.tsx",
                                lineNumber: 425,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/KineticForm.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-field": true,
                        className: "mt-20 text-center opacity-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-[family-name:var(--font-geist-mono)] uppercase",
                            style: {
                                fontSize: "9px",
                                letterSpacing: "0.35em",
                                color: "rgba(255,255,255,0.15)"
                            },
                            children: "The Void remembers those who speak"
                        }, void 0, false, {
                            fileName: "[project]/src/components/KineticForm.tsx",
                            lineNumber: 468,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/KineticForm.tsx",
                        lineNumber: 467,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/KineticForm.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes mercury-sheen {
          0% { background-position: 150% 0; }
          100% { background-position: -150% 0; }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/KineticForm.tsx",
                lineNumber: 482,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/KineticForm.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/KineticBeacon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KineticBeacon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KineticForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/KineticForm.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function KineticBeacon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "relative min-h-screen overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KineticForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/KineticBeacon.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/KineticBeacon.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/VoidOrbs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VoidOrbs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beaconStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/beaconStore.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const X_POSITIONS = [
    5,
    92,
    18,
    78,
    35,
    88,
    12,
    65,
    48,
    82,
    25,
    58,
    8,
    72,
    42,
    95,
    15,
    68,
    55,
    85,
    30,
    62,
    10,
    75
];
function generateOrbs(count) {
    let seed = 137;
    const rnd = ()=>{
        seed = seed * 1103515245 + 12345 & 0x7fffffff;
        return seed / 0x7fffffff;
    };
    const orbs = [];
    for(let i = 0; i < count; i++){
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
            brightness: 0.2 + rnd() * 0.2
        });
    }
    return orbs;
}
const PRESEED_ORBS = generateOrbs(24);
function VoidOrbs() {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const container = containerRef.current;
        if (!container) return;
        let lastSpawn = performance.now();
        let raf = 0;
        const spawn = ()=>{
            const light = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beaconStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["beaconLightValue"].get();
            const size = 10 + Math.random() * 16;
            let x = Math.random() * 100;
            if (Math.random() > 0.55) {
                x = Math.random() > 0.5 ? Math.random() * 22 : 78 + Math.random() * 22;
            }
            const el = document.createElement("div");
            el.style.cssText = `position:absolute;left:${x}vw;bottom:-${size + 2}px;` + `width:${size}px;height:${size}px;border-radius:50%;` + `pointer-events:none;` + `--vsw-amp:${5 + Math.random() * 15}px;`;
            el.className = "void-orb-dynamic";
            const b = 0.12 + light * 0.08;
            const r = Math.floor(b * 255);
            const g = Math.floor(b * 255);
            const bl = Math.floor(b * 260);
            el.style.background = `radial-gradient(circle at 35% 35%, ` + `rgb(${r + 25},${g + 25},${bl + 30}) 0%, ` + `rgb(${r},${g},${bl}) 50%, ` + `rgb(${Math.max(0, r - 10)},${Math.max(0, g - 10)},${Math.max(0, bl - 10)}) 100%)`;
            el.style.border = "1px solid rgba(255,255,255,0.1)";
            el.style.boxShadow = `0 0 ${size * 2}px ${size * 0.5}px rgba(140,150,170,0.1), ` + `inset 0 0 ${size * 0.3}px rgba(255,255,255,0.03)`;
            const dur = 20000 + Math.random() * 12000;
            el.animate([
                {
                    transform: "translateY(0) translateX(0)",
                    opacity: 0
                },
                {
                    transform: "translateY(0) translateX(0)",
                    opacity: 1,
                    offset: 0.04
                },
                {
                    transform: "translateY(-30vh) translateX(var(--vsw-amp))",
                    opacity: 1,
                    offset: 0.45
                },
                {
                    transform: "translateY(-60vh) translateX(calc(var(--vsw-amp) * -0.6))",
                    opacity: 1,
                    offset: 0.88
                },
                {
                    transform: "translateY(-120vh) translateX(0)",
                    opacity: 0
                }
            ], {
                duration: dur,
                easing: "linear",
                fill: "forwards"
            });
            container.appendChild(el);
            setTimeout(()=>el.remove(), dur + 500);
        };
        const tick = ()=>{
            const now = performance.now();
            const light = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$beaconStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["beaconLightValue"].get();
            const interval = light < 0.1 ? 2500 : light < 0.4 ? 1200 : light < 0.7 ? 500 : 200;
            if (now - lastSpawn > interval) {
                lastSpawn = now;
                spawn();
            }
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return ()=>cancelAnimationFrame(raf);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "pointer-events-none fixed inset-0 z-30 overflow-hidden",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute",
                style: {
                    width: 40,
                    height: 40,
                    marginLeft: "70vw",
                    top: "15vh",
                    borderRadius: "50%",
                    background: "#777777",
                    border: "2px solid #ffffff",
                    boxShadow: "0 0 50px 20px rgba(255,255,255,0.3)",
                    opacity: 1
                }
            }, void 0, false, {
                fileName: "[project]/src/components/VoidOrbs.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            PRESEED_ORBS.map((orb)=>{
                const r = Math.floor(orb.brightness * 255);
                const g = Math.floor(orb.brightness * 255);
                const b = Math.floor(orb.brightness * 260);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute",
                    style: {
                        width: orb.size,
                        height: orb.size,
                        left: `${orb.x}vw`,
                        top: `${orb.y}vh`,
                        borderRadius: "50%",
                        background: `radial-gradient(circle at 35% 35%, rgb(${r + 30},${g + 30},${b + 35}) 0%, rgb(${r},${g},${b}) 50%, rgb(${Math.max(0, r - 12)},${Math.max(0, g - 12)},${Math.max(0, b - 12)}) 100%)`,
                        border: "1px solid rgba(255,255,255,0.15)",
                        boxShadow: `0 0 ${orb.size * 2}px ${orb.size * 0.5}px rgba(160,170,195,0.14), inset 0 0 ${orb.size * 0.35}px rgba(255,255,255,0.04)`,
                        opacity: 1,
                        // Combined drift+sway via single transform animation
                        animation: `vo-combined ${orb.durMs}ms linear ${orb.delayMs}ms forwards`,
                        // Per-orb CSS vars for drift distance and sway amplitude
                        ["--vsw"]: `${orb.swayAmp}px`,
                        ["--vo-y"]: `${orb.driftY}vh`
                    }
                }, orb.id, false, {
                    fileName: "[project]/src/components/VoidOrbs.tsx",
                    lineNumber: 159,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
      `
            }, void 0, false, {
                fileName: "[project]/src/components/VoidOrbs.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/VoidOrbs.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KineticBeacon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/KineticBeacon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VoidOrbs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/VoidOrbs.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
// ─────────────────────────────────────────────────────────────
// VOLARI — Hero character config
// Each letter can carry individual timing/style overrides.
// ─────────────────────────────────────────────────────────────
const HERO_WORD = "VOLARI";
// Custom easing: slow heavy start, explosive release, gentle settle.
const CHAR_EASE = "expo.out";
const CHAR_DURATION = 1.6;
const CHAR_STAGGER = 0.07;
function Home() {
    // ── Refs — all animation targets. Zero useState. ──
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const charRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const taglineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const taglineWordsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const rulesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({
        top: null,
        bottom: null
    });
    const cornerRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const metaLeftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const metaRightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const taglineWords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>"Digital Experiences Studio — Bespoke Creative Technology".split(" "), []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context(()=>{
            const master = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                defaults: {
                    ease: CHAR_EASE
                }
            });
            // ── Beat 0–1: Curtain lift ──
            if (overlayRef.current) {
                master.to(overlayRef.current, {
                    yPercent: -100,
                    duration: 1.2,
                    ease: "power4.inOut"
                }, 0.2);
            }
            // ── Beat 2: Horizontal rules ──
            if (rulesRef.current.top) {
                master.fromTo(rulesRef.current.top, {
                    scaleX: 0
                }, {
                    scaleX: 1,
                    duration: 1.4,
                    ease: "expo.out",
                    transformOrigin: "center center"
                }, 0.5);
            }
            if (rulesRef.current.bottom) {
                master.fromTo(rulesRef.current.bottom, {
                    scaleX: 0
                }, {
                    scaleX: 1,
                    duration: 1.4,
                    ease: "expo.out",
                    transformOrigin: "center center"
                }, 0.55);
            }
            // ── Beat 3: Character reveal ──
            const chars = charRefs.current.filter(Boolean);
            if (chars.length) {
                master.fromTo(chars, {
                    yPercent: 120,
                    rotateX: -40,
                    opacity: 0
                }, {
                    yPercent: 0,
                    rotateX: 0,
                    opacity: 1,
                    duration: CHAR_DURATION,
                    stagger: {
                        each: CHAR_STAGGER,
                        from: "start"
                    },
                    ease: CHAR_EASE
                }, 0.7);
            }
            // ── Beat 4: Tagline words ──
            const words = taglineWordsRef.current.filter(Boolean);
            if (words.length) {
                master.fromTo(words, {
                    yPercent: 100,
                    opacity: 0
                }, {
                    yPercent: 0,
                    opacity: 1,
                    duration: 0.9,
                    stagger: 0.04,
                    ease: "power3.out"
                }, 1.5);
            }
            // ── Beat 5: Corner marks + side metadata ──
            const corners = cornerRefs.current.filter(Boolean);
            if (corners.length) {
                master.fromTo(corners, {
                    opacity: 0,
                    scale: 0
                }, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.06,
                    ease: "back.out(2)"
                }, 1.6);
            }
            const metaEls = [
                metaLeftRef.current,
                metaRightRef.current
            ].filter(Boolean);
            if (metaEls.length) {
                master.fromTo(metaEls, {
                    opacity: 0,
                    y: 10
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power2.out"
                }, 1.7);
            }
            // ── Hero scroll parallax ──
            if (heroRef.current) {
                const heroContent = heroRef.current.querySelector("[data-hero-content]");
                if (heroContent) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(heroContent, {
                        yPercent: -8,
                        opacity: 0.45,
                        scrollTrigger: {
                            trigger: heroRef.current,
                            start: "top top",
                            end: "bottom top",
                            scrub: 0.8
                        }
                    });
                }
            }
        });
        return ()=>ctx.revert();
    }, []);
    // ── Hero cursor gravity ──
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (("TURBOPACK compile-time value", "undefined") !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) //TURBOPACK unreachable
        ;
        const chars = charRefs.current.filter(Boolean);
        if (!chars.length) return;
        let active = false;
        const startTimeout = window.setTimeout(()=>{
            active = true;
        }, 3000);
        const state = chars.map(()=>({
                tx: 0,
                ty: 0,
                tz: 0,
                rx: 0,
                ry: 0,
                glow: 0,
                ttx: 0,
                tty: 0,
                ttz: 0,
                trx: 0,
                tryy: 0,
                tglow: 0
            }));
        let mouseX = -99999, mouseY = -99999, lastActivity = -Infinity, idleAmp = 0;
        const onMove = (e)=>{
            mouseX = e.clientX;
            mouseY = e.clientY;
            lastActivity = performance.now();
        };
        const onLeave = ()=>{
            mouseX = -99999;
            mouseY = -99999;
        };
        window.addEventListener("pointermove", onMove, {
            passive: true
        });
        window.addEventListener("pointerleave", onLeave);
        window.addEventListener("blur", onLeave);
        const MAX_DIST = 320, LERP = 0.09, AMBIENT_PERIOD = 5.5;
        let raf = 0;
        const tick = ()=>{
            const now = performance.now() / 1000;
            const phase = now / AMBIENT_PERIOD % 1;
            const sinE = 0.5 - 0.5 * Math.cos(phase * Math.PI * 2);
            const sinD = sinE - 0.5;
            const cursorPresent = mouseX !== -99999 && performance.now() - lastActivity < 2000;
            const targetIdleAmp = active && !cursorPresent ? 1 : 0;
            idleAmp += (targetIdleAmp - idleAmp) * 0.04;
            for(let i = 0; i < chars.length; i++){
                const el = chars[i];
                const r = el.getBoundingClientRect();
                const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
                const dx = mouseX - cx, dy = mouseY - cy;
                const dist = Math.hypot(dx, dy);
                const t = 1 - Math.min(1, dist / MAX_DIST);
                const soft = t * t * (3 - 2 * t);
                if (active) {
                    const s = state[i];
                    s.trx = -dy / MAX_DIST * 14 * soft;
                    s.tryy = dx / MAX_DIST * 14 * soft;
                    s.ttz = 28 * soft;
                    s.ttx = dx / MAX_DIST * 5 * soft;
                    s.tty = dy / MAX_DIST * 5 * soft;
                    s.tglow = soft;
                }
                const grainX = phase * 72, grainY = phase * 56;
                const bokAx = 45 + sinD * 34, bokAy = 45 + sinD * 14;
                const bokBx = 55 - sinD * 34, bokBy = 55 - sinD * 14;
                const specAmbX = 140 - phase * 185;
                const steelX = sinE * 100;
                const cDx = Math.max(-1, Math.min(1, dx / 220));
                const cDy = Math.max(-1, Math.min(1, dy / 140));
                const cursorSpecX = 50 + cDx * 50, cursorSpecY = 50 + cDy * 50;
                const specX = specAmbX * (1 - soft) + cursorSpecX * soft;
                const specY = 50 * (1 - soft) + cursorSpecY * soft;
                el.style.backgroundPosition = `${grainX.toFixed(1)}px ${grainY.toFixed(1)}px,` + ` ${bokAx.toFixed(1)}% ${bokAy.toFixed(1)}%,` + ` ${bokBx.toFixed(1)}% ${bokBy.toFixed(1)}%,` + ` ${specX.toFixed(1)}% ${specY.toFixed(1)}%,` + ` ${steelX.toFixed(1)}% 50%`;
            }
            for(let i = 0; i < chars.length; i++){
                const el = chars[i], s = state[i];
                s.tx += (s.ttx - s.tx) * LERP;
                s.ty += (s.tty - s.ty) * LERP;
                s.tz += (s.ttz - s.tz) * LERP;
                s.rx += (s.trx - s.rx) * LERP;
                s.ry += (s.tryy - s.ry) * LERP;
                s.glow += (s.tglow - s.glow) * LERP;
                const skip = !active && idleAmp < 0.005 && Math.abs(s.tx) < 0.02 && Math.abs(s.ty) < 0.02 && Math.abs(s.tz) < 0.02 && Math.abs(s.rx) < 0.02 && Math.abs(s.ry) < 0.02 && s.glow < 0.005;
                if (!skip) {
                    const ph = i * 0.42;
                    const idleRx = Math.sin(now * 0.55 + ph) * 0.3 * idleAmp;
                    const idleRy = Math.sin(now * 0.37 + ph + 1.3) * 0.4 * idleAmp;
                    const idleScale = 1 + Math.sin(now * 0.42 + ph) * 0.008 * idleAmp;
                    const idleTy = Math.sin(now * 0.31 + ph + 0.7) * 0.6 * idleAmp;
                    el.style.transform = `translate3d(${s.tx.toFixed(2)}px, ${(s.ty + idleTy).toFixed(2)}px, ${s.tz.toFixed(2)}px) rotateX(${(s.rx + idleRx).toFixed(2)}deg) rotateY(${(s.ry + idleRy).toFixed(2)}deg) scale(${idleScale.toFixed(4)})`;
                    const g = s.glow;
                    const rySoft = Math.min(1, Math.abs(s.ry) / 14);
                    const signY = s.ry >= 0 ? 1 : -1;
                    const parts = [];
                    if (rySoft > 0.03) {
                        const off = 1 * rySoft, ca = (0.2 * rySoft).toFixed(3);
                        parts.push(`drop-shadow(${(signY * off).toFixed(2)}px 0 0 rgba(255,132,110,${ca}))`);
                        parts.push(`drop-shadow(${(-signY * off).toFixed(2)}px 0 0 rgba(110,180,240,${ca}))`);
                    }
                    if (g >= 0.008) {
                        const a1 = (0.55 * g).toFixed(3), a2 = (0.35 * g).toFixed(3);
                        const r1 = (1.2 * g).toFixed(2), r2 = (3 * g).toFixed(2);
                        const br = (1 + 0.12 * g).toFixed(3);
                        parts.push(`drop-shadow(0 0 ${r1}px rgba(225,232,240,${a1}))`);
                        parts.push(`drop-shadow(0 0 ${r2}px rgba(207,216,226,${a2}))`);
                        parts.push(`brightness(${br})`);
                    }
                    el.style.filter = parts.length ? parts.join(" ") : "";
                }
            }
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return ()=>{
            window.clearTimeout(startTimeout);
            cancelAnimationFrame(raf);
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("pointerleave", onLeave);
            window.removeEventListener("blur", onLeave);
        };
    }, []);
    // ── Ref setters ──
    const setCharRef = (i)=>(el)=>{
            charRefs.current[i] = el;
        };
    const setTaglineWordRef = (i)=>(el)=>{
            taglineWordsRef.current[i] = el;
        };
    const setCornerRef = (i)=>(el)=>{
            cornerRefs.current[i] = el;
        };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: overlayRef,
                className: "fixed inset-0 z-40 bg-v-black",
                style: {
                    willChange: "transform"
                },
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 353,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$VoidOrbs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 363,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "about",
                ref: heroRef,
                className: "relative flex min-h-screen scroll-mt-20 flex-col items-center justify-center overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-hero-content": true,
                    className: "relative w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pointer-events-none absolute inset-6 md:inset-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: setCornerRef(0),
                                    className: "absolute top-0 left-0 h-6 w-6 border-t border-l border-v-smoke/40 opacity-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 376,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: setCornerRef(1),
                                    className: "absolute top-0 right-0 h-6 w-6 border-t border-r border-v-smoke/40 opacity-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 377,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: setCornerRef(2),
                                    className: "absolute bottom-0 left-0 h-6 w-6 border-b border-l border-v-smoke/40 opacity-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 378,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: setCornerRef(3),
                                    className: "absolute bottom-0 right-0 h-6 w-6 border-b border-r border-v-smoke/40 opacity-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 379,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 375,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center px-6 md:px-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: (el)=>{
                                    rulesRef.current.top = el;
                                },
                                className: "h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-v-smoke/40 to-transparent",
                                style: {
                                    transform: "scaleX(0)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 384,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 383,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center py-16 md:py-24",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "hero-volari-heading flex select-none items-center justify-center text-[clamp(4rem,17vw,15rem)] leading-none gap-x-[0.05em] sm:gap-x-[0.055em] md:gap-x-[0.06em]",
                                    style: {
                                        perspective: "1000px"
                                    },
                                    children: HERO_WORD.split("").map((char, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative inline-block overflow-hidden",
                                            style: {
                                                lineHeight: 1
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                ref: setCharRef(i),
                                                className: "hero-volari-letter inline-block font-[family-name:var(--font-playfair)] font-normal tracking-[0.012em] opacity-0",
                                                style: {
                                                    willChange: "transform, opacity",
                                                    transformStyle: "preserve-3d",
                                                    animationDelay: `${i * 0.09}s`
                                                },
                                                children: char
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 392,
                                                columnNumber: 19
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 391,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 389,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    ref: taglineRef,
                                    className: "mt-6 flex flex-wrap items-center justify-center gap-x-[0.45em] gap-y-1 overflow-hidden px-4 md:mt-8",
                                    children: taglineWords.map((word, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                ref: setTaglineWordRef(i),
                                                className: "inline-block font-[family-name:var(--font-geist-mono)] text-[10px] uppercase tracking-[0.35em] text-v-silver opacity-0 md:text-xs",
                                                style: {
                                                    willChange: "transform, opacity"
                                                },
                                                children: word
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 403,
                                                columnNumber: 19
                                            }, this)
                                        }, i, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 402,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 400,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 388,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "studio",
                            className: "mx-auto mt-10 flex w-full max-w-6xl scroll-mt-20 flex-col items-center justify-between gap-3 px-6 sm:flex-row sm:items-center md:mt-12 md:px-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: metaLeftRef,
                                    className: "opacity-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-[family-name:var(--font-geist-mono)] text-[9px] uppercase tracking-[0.5em] text-v-smoke",
                                        children: "Est. 2024"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 414,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 413,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: metaRightRef,
                                    className: "opacity-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-[family-name:var(--font-geist-mono)] text-[9px] uppercase tracking-[0.5em] text-v-smoke",
                                        children: "Creative Studio"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 417,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 416,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 412,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center px-6 md:px-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: (el)=>{
                                    rulesRef.current.bottom = el;
                                },
                                className: "h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-v-smoke/40 to-transparent",
                                style: {
                                    transform: "scaleX(0)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 423,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 422,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 373,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 368,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$KineticBeacon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 431,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=src_0ar69jd._.js.map