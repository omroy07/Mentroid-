(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/projects/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OurProjectsStack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-client] (ecmascript) <export default as ArrowUpRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const projects = [
    {
        category: "Agentic AI · Customer Ops",
        title: "Aether",
        description: "An autonomous support agent that resolves tickets end to end.",
        tags: [
            "Tool Use",
            "Zendesk"
        ],
        accent: "#FF8A4C"
    },
    {
        category: "RAG · Enterprise Search",
        title: "Pulse",
        description: "Instant, cited answers pulled from every internal doc.",
        tags: [
            "Vector Search",
            "SSO"
        ],
        accent: "#4CD3FF"
    },
    {
        category: "Automation · Operations",
        title: "Forge",
        description: "CRM, finance and logistics wired into one self-running flow.",
        tags: [
            "Workflow Engine",
            "ERP"
        ],
        accent: "#B98CFF"
    },
    {
        category: "Copilot · Revenue",
        title: "Nova",
        description: "Drafts outreach, scores leads, preps reps before every call.",
        tags: [
            "Lead Scoring",
            "Voice"
        ],
        accent: "#FF5C8A"
    },
    {
        category: "Agentic AI · Infrastructure",
        title: "Relay",
        description: "Specialized agents hand off work without losing context.",
        tags: [
            "Agent Mesh",
            "Observability"
        ],
        accent: "#4CFFB0"
    }
];
const CARD_COUNT = projects.length;
/* ============================================================
   DETERMINISTIC PSEUDO-RANDOM (avoids hydration mismatch)
============================================================ */ function seeded(n) {
    let t = n += 0x6d2b79f5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
}
/* Off-screen entry vector for each card: unique direction, rotation, scale, blur */ const ENTRY = [
    {
        x: -900,
        y: -60,
        rotate: -38,
        scale: 0.55,
        blur: 10
    },
    {
        x: 40,
        y: -820,
        rotate: 22,
        scale: 1.5,
        blur: 8
    },
    {
        x: 940,
        y: 40,
        rotate: 44,
        scale: 0.5,
        blur: 12
    },
    {
        x: -60,
        y: 860,
        rotate: -30,
        scale: 1.4,
        blur: 9
    },
    {
        x: 760,
        y: -680,
        rotate: 16,
        scale: 0.7,
        blur: 11
    }
];
/* Resting fan offsets once the whole deck has landed (idle state) */ const FAN = [
    {
        x: -30,
        y: 16,
        rotate: -10
    },
    {
        x: -15,
        y: 6,
        rotate: -5
    },
    {
        x: 0,
        y: 0,
        rotate: 0
    },
    {
        x: 16,
        y: -6,
        rotate: 5.5
    },
    {
        x: 32,
        y: -14,
        rotate: 10.5
    }
];
/* Wider spread offsets shown on hover of the whole deck */ const SPREAD = [
    {
        x: -190,
        y: 28,
        rotate: -16
    },
    {
        x: -96,
        y: -4,
        rotate: -8
    },
    {
        x: 0,
        y: -18,
        rotate: 0
    },
    {
        x: 98,
        y: -4,
        rotate: 8
    },
    {
        x: 196,
        y: 28,
        rotate: 16
    }
];
const STAGGER = 0.5;
const PARTICLES_PER_CARD = 9;
function OurProjectsStack() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shakeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const groundRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const glowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const eyebrowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const particleGroupRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const isSpread = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const particleSets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OurProjectsStack.useMemo[particleSets]": ()=>Array.from({
                length: CARD_COUNT
            }, {
                "OurProjectsStack.useMemo[particleSets]": (_, c)=>Array.from({
                        length: PARTICLES_PER_CARD
                    }, {
                        "OurProjectsStack.useMemo[particleSets]": (_, i)=>{
                            const seed = c * 97 + i * 13.7;
                            const angle = seeded(seed) * Math.PI * 2;
                            const distance = 40 + seeded(seed * 1.7) * 130;
                            const size = 2 + seeded(seed * 2.3) * 4;
                            return {
                                id: i,
                                angle,
                                distance,
                                size
                            };
                        }
                    }["OurProjectsStack.useMemo[particleSets]"])
            }["OurProjectsStack.useMemo[particleSets]"])
    }["OurProjectsStack.useMemo[particleSets]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "OurProjectsStack.useLayoutEffect": ()=>{
            const section = sectionRef.current;
            if (!section) return;
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "OurProjectsStack.useLayoutEffect.ctx": ()=>{
                    const cards = cardRefs.current.filter(Boolean);
                    if (prefersReducedMotion) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(cards, {
                            autoAlpha: 1,
                            x: 0,
                            y: 0,
                            rotate: 0,
                            scale: 1,
                            filter: "blur(0px)"
                        });
                        cards.forEach({
                            "OurProjectsStack.useLayoutEffect.ctx": (_, i)=>{
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(cardRefs.current[i], {
                                    x: FAN[i].x,
                                    y: FAN[i].y,
                                    rotate: FAN[i].rotate
                                });
                            }
                        }["OurProjectsStack.useLayoutEffect.ctx"]);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set([
                            eyebrowRef.current,
                            headingRef.current
                        ], {
                            autoAlpha: 1,
                            y: 0
                        });
                        return;
                    }
                    /* ----------------------------------------------------
         INITIAL STATES
      ---------------------------------------------------- */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(eyebrowRef.current, {
                        autoAlpha: 0,
                        y: 14
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(headingRef.current, {
                        autoAlpha: 0,
                        y: 34
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(groundRef.current, {
                        autoAlpha: 0,
                        scaleX: 0.4
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(glowRef.current, {
                        autoAlpha: 0,
                        scale: 0.6
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(stageRef.current, {
                        scale: 1.08
                    });
                    cards.forEach({
                        "OurProjectsStack.useLayoutEffect.ctx": (card, i)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(card, {
                                autoAlpha: 0,
                                x: ENTRY[i].x,
                                y: ENTRY[i].y,
                                rotate: ENTRY[i].rotate,
                                scale: ENTRY[i].scale,
                                filter: `blur(${ENTRY[i].blur}px)`,
                                zIndex: 10 + i
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(particleGroupRefs.current[i], {
                                autoAlpha: 0
                            });
                        }
                    }["OurProjectsStack.useLayoutEffect.ctx"]);
                    /* ----------------------------------------------------
         MASTER TIMELINE — fires once as the deck enters view
      ---------------------------------------------------- */ const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        paused: true,
                        defaults: {
                            overwrite: "auto"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                        trigger: section,
                        start: "top 68%",
                        onEnter: {
                            "OurProjectsStack.useLayoutEffect.ctx": ()=>tl.restart()
                        }["OurProjectsStack.useLayoutEffect.ctx"],
                        onEnterBack: {
                            "OurProjectsStack.useLayoutEffect.ctx": ()=>tl.restart()
                        }["OurProjectsStack.useLayoutEffect.ctx"]
                    });
                    // header
                    tl.to(eyebrowRef.current, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power3.out"
                    }, 0).to(headingRef.current, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.7,
                        ease: "power3.out"
                    }, 0.08).to(glowRef.current, {
                        autoAlpha: 0.8,
                        scale: 1,
                        duration: 1,
                        ease: "power2.out"
                    }, 0.1).to(groundRef.current, {
                        autoAlpha: 0.5,
                        scaleX: 0.6,
                        duration: 0.6,
                        ease: "power2.out"
                    }, 0.15)// slow camera drift in across the whole sequence
                    .to(stageRef.current, {
                        scale: 1,
                        duration: CARD_COUNT * STAGGER + 1.6,
                        ease: "power2.out"
                    }, 0.1);
                    cards.forEach({
                        "OurProjectsStack.useLayoutEffect.ctx": (card, i)=>{
                            const start = 0.35 + i * STAGGER;
                            const accent = projects[i].accent;
                            // flight in — fast, motion-blurred approach toward the stack center
                            tl.to(card, {
                                autoAlpha: 1,
                                x: 0,
                                y: 0,
                                rotate: ENTRY[i].rotate * 0.15,
                                scale: 1.08,
                                filter: "blur(0px)",
                                duration: 0.5,
                                ease: "power3.in"
                            }, start)// spring impact — overshoot then settle
                            .to(card, {
                                scale: 1,
                                rotate: 0,
                                duration: 0.5,
                                ease: "elastic.out(1, 0.5)"
                            }, start + 0.5)// camera shake on impact, diminishing per card
                            .to(shakeRef.current, {
                                keyframes: {
                                    x: [
                                        0,
                                        -6 + i,
                                        5 - i * 0.6,
                                        -3,
                                        0
                                    ],
                                    y: [
                                        0,
                                        3,
                                        -3,
                                        1,
                                        0
                                    ]
                                },
                                duration: 0.4,
                                ease: "power2.out"
                            }, start + 0.48)// ground contact shadow pulses wider with every landing
                            .to(groundRef.current, {
                                scaleX: 0.62 + i * 0.09,
                                autoAlpha: 0.55,
                                duration: 0.35,
                                ease: "power2.out"
                            }, start + 0.48)// impact glow flash colored per project
                            .fromTo(card, {
                                boxShadow: `0 0 0px 0px ${accent}00`
                            }, {
                                boxShadow: `0 0 70px 6px ${accent}55`,
                                duration: 0.18,
                                ease: "power2.out",
                                onComplete: {
                                    "OurProjectsStack.useLayoutEffect.ctx": ()=>{
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(card, {
                                            boxShadow: `0 18px 60px -12px rgba(0,0,0,0.6)`,
                                            duration: 0.5
                                        });
                                    }
                                }["OurProjectsStack.useLayoutEffect.ctx"]
                            }, start + 0.5)// particle burst at the point of impact
                            .fromTo(particleGroupRefs.current[i], {
                                autoAlpha: 1
                            }, {
                                autoAlpha: 0,
                                duration: 0.6,
                                ease: "power1.out"
                            }, start + 0.48);
                            particleSets[i].forEach({
                                "OurProjectsStack.useLayoutEffect.ctx": (p, pi)=>{
                                    const el = particleGroupRefs.current[i]?.children[pi];
                                    if (!el) return;
                                    const dx = Math.cos(p.angle) * p.distance;
                                    const dy = Math.sin(p.angle) * p.distance;
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(el, {
                                        x: 0,
                                        y: 0,
                                        scale: 0.3,
                                        autoAlpha: 0
                                    });
                                    tl.to(el, {
                                        x: dx,
                                        y: dy,
                                        scale: 1,
                                        autoAlpha: 1,
                                        duration: 0.35,
                                        ease: "power2.out"
                                    }, start + 0.48).to(el, {
                                        autoAlpha: 0,
                                        scale: 0.4,
                                        duration: 0.35,
                                        ease: "power1.in"
                                    }, start + 0.75);
                                }
                            }["OurProjectsStack.useLayoutEffect.ctx"]);
                        }
                    }["OurProjectsStack.useLayoutEffect.ctx"]);
                    // deck settles from a tight stack into its resting fan
                    const fanStart = 0.35 + (CARD_COUNT - 1) * STAGGER + 0.95;
                    cards.forEach({
                        "OurProjectsStack.useLayoutEffect.ctx": (card, i)=>{
                            tl.to(card, {
                                x: FAN[i].x,
                                y: FAN[i].y,
                                rotate: FAN[i].rotate,
                                duration: 0.8,
                                ease: "power3.out"
                            }, fanStart + i * 0.05);
                        }
                    }["OurProjectsStack.useLayoutEffect.ctx"]);
                    tl.to(groundRef.current, {
                        scaleX: 1,
                        autoAlpha: 0.6,
                        duration: 0.8,
                        ease: "power3.out"
                    }, fanStart);
                }
            }["OurProjectsStack.useLayoutEffect.ctx"], section);
            return ({
                "OurProjectsStack.useLayoutEffect": ()=>ctx.revert()
            })["OurProjectsStack.useLayoutEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["OurProjectsStack.useLayoutEffect"], []);
    /* ----------------------------------------------------
     INTERACTIVE DECK — hover to spread, hover a card to lift it
  ---------------------------------------------------- */ const spreadDeck = ()=>{
        if (isSpread.current) return;
        isSpread.current = true;
        cardRefs.current.forEach((card, i)=>{
            if (!card) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(card, {
                x: SPREAD[i].x,
                y: SPREAD[i].y,
                rotate: SPREAD[i].rotate,
                duration: 0.6,
                ease: "power3.out",
                overwrite: "auto"
            });
        });
    };
    const collapseDeck = ()=>{
        if (!isSpread.current) return;
        isSpread.current = false;
        cardRefs.current.forEach((card, i)=>{
            if (!card) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(card, {
                x: FAN[i].x,
                y: FAN[i].y,
                rotate: FAN[i].rotate,
                scale: 1,
                duration: 0.5,
                ease: "power3.inOut",
                overwrite: "auto"
            });
        });
    };
    const liftCard = (i)=>{
        const card = cardRefs.current[i];
        if (!card) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(card, {
            y: (isSpread.current ? SPREAD[i].y : FAN[i].y) - 22,
            scale: 1.04,
            zIndex: 40,
            duration: 0.35,
            ease: "power3.out",
            overwrite: "auto"
        });
    };
    const dropCard = (i)=>{
        const card = cardRefs.current[i];
        if (!card) return;
        const base = isSpread.current ? SPREAD[i] : FAN[i];
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(card, {
            y: base.y,
            scale: 1,
            zIndex: 10 + i,
            duration: 0.35,
            ease: "power3.out",
            overwrite: "auto"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "projects",
        className: "relative w-full max-w-full overflow-hidden bg-black py-28 md:py-36",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-14",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-20 max-w-[640px] md:mb-28",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            ref: eyebrowRef,
                            className: "mb-5 block text-[10px] font-medium uppercase tracking-[0.25em] text-white/50",
                            children: "Our Projects"
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/page.tsx",
                            lineNumber: 377,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            ref: headingRef,
                            className: "text-[clamp(2.6rem,6vw,3.8rem)] font-medium leading-[0.95] tracking-[-0.06em] text-white",
                            children: [
                                "One deck.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block text-white/60",
                                    children: "Five proofs of intelligence."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/projects/page.tsx",
                                    lineNumber: 388,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/projects/page.tsx",
                            lineNumber: 383,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projects/page.tsx",
                    lineNumber: 376,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: stageRef,
                    className: "relative mx-auto flex h-[460px] w-full max-w-[380px] items-center justify-center sm:h-[500px] sm:max-w-[400px]",
                    style: {
                        perspective: "1600px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: glowRef,
                            className: "pointer-events-none absolute h-[520px] w-[520px] rounded-full",
                            style: {
                                background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(120,110,255,0.06) 45%, rgba(0,0,0,0) 72%)",
                                filter: "blur(20px)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/page.tsx",
                            lineNumber: 401,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: shakeRef,
                            className: "relative h-full w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0",
                                style: {
                                    transformStyle: "preserve-3d"
                                },
                                onMouseEnter: spreadDeck,
                                onMouseLeave: collapseDeck,
                                children: projects.map((project, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: (el)=>{
                                            cardRefs.current[i] = el;
                                        },
                                        onMouseEnter: ()=>liftCard(i),
                                        onMouseLeave: ()=>dropCard(i),
                                        className: "absolute inset-0 flex cursor-pointer flex-col justify-between border border-white/10 bg-[#0a0a0c] p-7 will-change-transform",
                                        style: {
                                            transformStyle: "preserve-3d",
                                            boxShadow: "0 18px 60px -12px rgba(0,0,0,0.6)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                ref: (el)=>{
                                                    particleGroupRefs.current[i] = el;
                                                },
                                                className: "pointer-events-none absolute left-1/2 top-1/2 h-0 w-0",
                                                children: particleSets[i].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute rounded-full",
                                                        style: {
                                                            width: `${p.size}px`,
                                                            height: `${p.size}px`,
                                                            background: project.accent,
                                                            boxShadow: `0 0 6px 1px ${project.accent}99`
                                                        }
                                                    }, p.id, false, {
                                                        fileName: "[project]/src/app/projects/page.tsx",
                                                        lineNumber: 441,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/page.tsx",
                                                lineNumber: 434,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pointer-events-none absolute inset-0 opacity-60",
                                                style: {
                                                    background: `radial-gradient(420px circle at 20% 0%, ${project.accent}14, transparent 60%)`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/projects/page.tsx",
                                                lineNumber: 455,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mb-8 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "h-1.5 w-1.5 rounded-full",
                                                                style: {
                                                                    background: project.accent
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/projects/page.tsx",
                                                                lineNumber: 464,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-medium uppercase tracking-[0.2em] text-white/45",
                                                                children: project.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/projects/page.tsx",
                                                                lineNumber: 468,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/projects/page.tsx",
                                                        lineNumber: 463,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-3xl font-medium tracking-[-0.03em] text-white",
                                                        children: project.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/projects/page.tsx",
                                                        lineNumber: 472,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-4 max-w-[260px] text-sm leading-6 text-white/60",
                                                        children: project.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/projects/page.tsx",
                                                        lineNumber: 475,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/projects/page.tsx",
                                                lineNumber: 462,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex items-end justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2",
                                                        children: project.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "rounded-full border border-white/10 px-3 py-1 text-[10px] text-white/50",
                                                                children: t
                                                            }, t, false, {
                                                                fileName: "[project]/src/app/projects/page.tsx",
                                                                lineNumber: 483,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/projects/page.tsx",
                                                        lineNumber: 481,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                        size: 18,
                                                        className: "shrink-0 text-white/40 transition-colors duration-300",
                                                        style: {
                                                            color: undefined
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/projects/page.tsx",
                                                        lineNumber: 491,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/projects/page.tsx",
                                                lineNumber: 480,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, project.title, true, {
                                        fileName: "[project]/src/app/projects/page.tsx",
                                        lineNumber: 420,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/projects/page.tsx",
                                lineNumber: 413,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/page.tsx",
                            lineNumber: 411,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: groundRef,
                            className: "pointer-events-none absolute bottom-2 h-8 w-[70%] rounded-[50%]",
                            style: {
                                background: "radial-gradient(ellipse, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0) 75%)",
                                filter: "blur(6px)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/projects/page.tsx",
                            lineNumber: 503,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/projects/page.tsx",
                    lineNumber: 395,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mx-auto mt-14 max-w-[320px] text-center text-[11px] uppercase tracking-[0.2em] text-white/35",
                    children: "Hover the deck to spread it"
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/page.tsx",
                    lineNumber: 514,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/projects/page.tsx",
            lineNumber: 375,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/projects/page.tsx",
        lineNumber: 370,
        columnNumber: 5
    }, this);
}
_s(OurProjectsStack, "izbOiZKvnPcZHx3cHD/eRGKdT/M=");
_c = OurProjectsStack;
var _c;
__turbopack_context__.k.register(_c, "OurProjectsStack");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/about/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
/* ============================================================
   CONTENT
   Edit copy here — nothing else needs to change.
============================================================ */ const pillars = [
    {
        index: "01",
        label: "Mission",
        copy: "Make AI accessible, practical, and impactful for businesses and individuals.",
        detail: [
            "Translate research-grade AI into tools people actually use daily.",
            "Strip away complexity so teams adopt AI without a learning curve.",
            "Measure success by impact on the business, not model benchmarks."
        ]
    },
    {
        index: "02",
        label: "Vision",
        copy: "Become India's go-to AI innovation hub for startups and enterprises.",
        detail: [
            "Build the default AI partner startups and enterprises reach for first.",
            "Set the bar for what thoughtful, production-grade AI looks like in India.",
            "Grow an ecosystem where AI innovation compounds across industries."
        ]
    },
    {
        index: "03",
        label: "What We Do",
        copy: "Design AI systems, build ML models, and ship automation that actually gets used.",
        detail: [
            "Design custom AI systems around how your team already works.",
            "Build and fine-tune ML models trained on your own data.",
            "Ship automation end-to-end — not a proof of concept that stalls."
        ]
    }
];
/* ============================================================
   PARTICLE NETWORK (three.js)
   Sparse glowing nodes in a shallow volume, connected by faint
   gradient-tinted lines when close together. A restrained cool
   palette (white / ice-blue / violet) keeps it premium and
   quiet rather than colorful — it sits behind the copy instead
   of competing with it. Reacts gently to scroll and pointer.
============================================================ */ function useParticleNetwork(mountRef, sectionRef) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useParticleNetwork.useEffect": ()=>{
            const mount = mountRef.current;
            const section = sectionRef.current;
            if (!mount || !section) return;
            const reduceMotion = ("TURBOPACK compile-time value", "object") !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
            let frameId = 0;
            const state = {
                scrollProgress: 0,
                pointerX: 0,
                pointerY: 0
            };
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](50, mount.clientWidth / mount.clientHeight, 0.1, 100);
            camera.position.z = 22;
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                antialias: true,
                alpha: true
            });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setSize(mount.clientWidth, mount.clientHeight);
            mount.appendChild(renderer.domElement);
            /* ---- Soft glow sprite for nodes (canvas-generated radial gradient) ---- */ function makeGlowTexture() {
                const size = 128;
                const c = document.createElement("canvas");
                c.width = size;
                c.height = size;
                const ctx = c.getContext("2d");
                const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
                g.addColorStop(0, "rgba(255,255,255,1)");
                g.addColorStop(0.35, "rgba(255,255,255,0.55)");
                g.addColorStop(1, "rgba(255,255,255,0)");
                ctx.fillStyle = g;
                ctx.fillRect(0, 0, size, size);
                const tex = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](c);
                tex.needsUpdate = true;
                return tex;
            }
            const glowTexture = makeGlowTexture();
            /* ---- Node field ---- */ const COUNT = 90;
            const positions = new Float32Array(COUNT * 3);
            const colors = new Float32Array(COUNT * 3);
            const sizes = new Float32Array(COUNT);
            const velocities = [];
            // Restrained cool palette: mostly soft white, a few ice-blue / violet accents.
            const palette = [
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xffffff),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xffffff),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xffffff),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0x9fc6ff),
                new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](0xc4a6ff)
            ];
            for(let i = 0; i < COUNT; i++){
                const x = (Math.random() - 0.5) * 34;
                const y = (Math.random() - 0.5) * 20;
                const z = (Math.random() - 0.5) * 14;
                positions.set([
                    x,
                    y,
                    z
                ], i * 3);
                const col = palette[Math.floor(Math.random() * palette.length)];
                colors.set([
                    col.r,
                    col.g,
                    col.b
                ], i * 3);
                sizes[i] = 0.045 + Math.random() * 0.05;
                velocities.push(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]((Math.random() - 0.5) * 0.004, (Math.random() - 0.5) * 0.004, (Math.random() - 0.5) * 0.004));
            }
            const pointsGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            pointsGeo.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](positions, 3));
            pointsGeo.setAttribute("color", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](colors, 3));
            const pointsMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
                size: 0.34,
                map: glowTexture,
                transparent: true,
                opacity: 0.85,
                vertexColors: true,
                sizeAttenuation: true,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                depthWrite: false
            });
            const points = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](pointsGeo, pointsMat);
            scene.add(points);
            /* ---- Connective lines, rebuilt each frame from live positions ---- */ const lineGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            const lineMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                color: 0x9fc6ff,
                transparent: true,
                opacity: 0.09,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                depthWrite: false
            });
            const lines = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineSegments"](lineGeo, lineMat);
            scene.add(lines);
            const MAX_DIST = 5.2;
            const maxSegments = COUNT * 6;
            const linePositions = new Float32Array(maxSegments * 6);
            function rebuildLines() {
                let ptr = 0;
                const pos = pointsGeo.attributes.position.array;
                for(let i = 0; i < COUNT; i++){
                    const ax = pos[i * 3];
                    const ay = pos[i * 3 + 1];
                    const az = pos[i * 3 + 2];
                    for(let j = i + 1; j < COUNT; j++){
                        const bx = pos[j * 3];
                        const by = pos[j * 3 + 1];
                        const bz = pos[j * 3 + 2];
                        const d = Math.hypot(ax - bx, ay - by, az - bz);
                        if (d < MAX_DIST && ptr < maxSegments * 6 - 6) {
                            linePositions[ptr++] = ax;
                            linePositions[ptr++] = ay;
                            linePositions[ptr++] = az;
                            linePositions[ptr++] = bx;
                            linePositions[ptr++] = by;
                            linePositions[ptr++] = bz;
                        }
                    }
                }
                lineGeo.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](linePositions.subarray(0, ptr), 3));
                lineGeo.attributes.position.needsUpdate = true;
            }
            rebuildLines();
            /* ---- Long flowing "data" curves — a handful of sweeping arcs that
       read as signal/data paths threading through the node field. ---- */ const flowLines = [];
            const FLOW_COUNT = 5;
            for(let i = 0; i < FLOW_COUNT; i++){
                const start = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]((Math.random() - 0.5) * 36, (Math.random() - 0.5) * 22, (Math.random() - 0.5) * 10);
                const mid1 = start.clone().add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]((Math.random() - 0.5) * 18, (Math.random() - 0.5) * 14, (Math.random() - 0.5) * 8));
                const mid2 = mid1.clone().add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]((Math.random() - 0.5) * 18, (Math.random() - 0.5) * 14, (Math.random() - 0.5) * 8));
                const end = mid2.clone().add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]((Math.random() - 0.5) * 18, (Math.random() - 0.5) * 14, (Math.random() - 0.5) * 8));
                const curve = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CatmullRomCurve3"]([
                    start,
                    mid1,
                    mid2,
                    end
                ]);
                const curvePoints = curve.getPoints(80);
                const geo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]().setFromPoints(curvePoints);
                const tint = Math.random() > 0.5 ? 0x9fc6ff : 0xc4a6ff;
                const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineBasicMaterial"]({
                    color: tint,
                    transparent: true,
                    opacity: 0,
                    blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                    depthWrite: false
                });
                const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"](geo, mat);
                scene.add(mesh);
                flowLines.push({
                    mesh,
                    mat,
                    speed: 0.15 + Math.random() * 0.2,
                    phase: Math.random() * Math.PI * 2
                });
            }
            /* ---- Scroll-tied camera drift (depth / parallax) ---- */ const scrollTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                onUpdate: {
                    "useParticleNetwork.useEffect.scrollTrigger": (self)=>{
                        state.scrollProgress = self.progress;
                    }
                }["useParticleNetwork.useEffect.scrollTrigger"]
            });
            /* ---- Gentle pointer parallax ---- */ function handlePointerMove(e) {
                const rect = mount.getBoundingClientRect();
                state.pointerX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
                state.pointerY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
            }
            if (!reduceMotion) {
                window.addEventListener("pointermove", handlePointerMove, {
                    passive: true
                });
            }
            let last = performance.now();
            let sinceRebuild = 0;
            let camX = 0;
            let camY = 0;
            function animate(now) {
                const dt = Math.min(now - last, 48);
                const t = now * 0.001;
                last = now;
                sinceRebuild += dt;
                if (!reduceMotion) {
                    const pos = pointsGeo.attributes.position.array;
                    for(let i = 0; i < COUNT; i++){
                        pos[i * 3] += velocities[i].x;
                        pos[i * 3 + 1] += velocities[i].y;
                        pos[i * 3 + 2] += velocities[i].z;
                        if (Math.abs(pos[i * 3]) > 17) velocities[i].x *= -1;
                        if (Math.abs(pos[i * 3 + 1]) > 10) velocities[i].y *= -1;
                        if (Math.abs(pos[i * 3 + 2]) > 7) velocities[i].z *= -1;
                    }
                    pointsGeo.attributes.position.needsUpdate = true;
                    // Rebuild the connective mesh at ~12fps — cheap and still smooth.
                    if (sinceRebuild > 80) {
                        rebuildLines();
                        sinceRebuild = 0;
                    }
                    // Slow, breathing pulse on the node glow so the field never looks static.
                    pointsMat.opacity = 0.7 + Math.sin(t * 0.5) * 0.12;
                    // Flowing data curves fade in/out on independent cycles, like
                    // signal pulses traveling through the network.
                    flowLines.forEach({
                        "useParticleNetwork.useEffect.animate": (f)=>{
                            const cycle = (Math.sin(t * f.speed + f.phase) + 1) / 2; // 0..1
                            f.mat.opacity = Math.max(0, cycle - 0.55) * 0.9;
                        }
                    }["useParticleNetwork.useEffect.animate"]);
                }
                const p = state.scrollProgress;
                const targetRotY = p * 0.35 - 0.1 + state.pointerX * 0.05;
                const targetRotX = p * -0.12 + state.pointerY * -0.04;
                scene.rotation.y += (targetRotY - scene.rotation.y) * 0.05;
                scene.rotation.x += (targetRotX - scene.rotation.x) * 0.05;
                camX += (state.pointerX * 0.6 - camX) * 0.03;
                camY += (-state.pointerY * 0.4 - camY) * 0.03;
                camera.position.x = camX;
                camera.position.y = camY;
                camera.position.z = 22 - p * 3;
                camera.lookAt(0, 0, 0);
                renderer.render(scene, camera);
                frameId = requestAnimationFrame(animate);
            }
            frameId = requestAnimationFrame(animate);
            function handleResize() {
                if (!mount) return;
                camera.aspect = mount.clientWidth / mount.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(mount.clientWidth, mount.clientHeight);
            }
            window.addEventListener("resize", handleResize);
            return ({
                "useParticleNetwork.useEffect": ()=>{
                    cancelAnimationFrame(frameId);
                    window.removeEventListener("resize", handleResize);
                    window.removeEventListener("pointermove", handlePointerMove);
                    scrollTrigger.kill();
                    pointsGeo.dispose();
                    lineGeo.dispose();
                    pointsMat.dispose();
                    lineMat.dispose();
                    glowTexture.dispose();
                    flowLines.forEach({
                        "useParticleNetwork.useEffect": (f)=>{
                            f.mesh.geometry.dispose();
                            f.mat.dispose();
                        }
                    }["useParticleNetwork.useEffect"]);
                    renderer.dispose();
                    if (mount.contains(renderer.domElement)) {
                        mount.removeChild(renderer.domElement);
                    }
                }
            })["useParticleNetwork.useEffect"];
        }
    }["useParticleNetwork.useEffect"], [
        mountRef,
        sectionRef
    ]);
}
_s(useParticleNetwork, "OD7bBpZva5O2jO+Puf00hKivP7c=");
/* ============================================================
   AMBIENT GRADIENT / SMOKE LAYER (CSS + GSAP)
   A few very soft, large, blurred color fields drifting slowly
   behind the particle network. This is what gives the section
   its cinematic depth without ever reading as "colorful" —
   opacity stays low and hues stay cool/graphite throughout.
============================================================ */ function useAmbientDrift(containerRef) {
    _s1();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useAmbientDrift.useLayoutEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const reduceMotion = ("TURBOPACK compile-time value", "object") !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
            const blobs = Array.from(container.querySelectorAll("[data-smoke-blob]"));
            if (blobs.length === 0) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "useAmbientDrift.useLayoutEffect.ctx": ()=>{
                    if (reduceMotion) return;
                    blobs.forEach({
                        "useAmbientDrift.useLayoutEffect.ctx": (blob, i)=>{
                            const dir = i % 2 === 0 ? 1 : -1;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(blob, {
                                x: `+=${dir * (60 + i * 18)}`,
                                y: `+=${-dir * (40 + i * 10)}`,
                                scale: 1.12,
                                duration: 26 + i * 6,
                                ease: "sine.inOut",
                                repeat: -1,
                                yoyo: true
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(blob, {
                                opacity: 0.85,
                                duration: 10 + i * 3,
                                ease: "sine.inOut",
                                repeat: -1,
                                yoyo: true,
                                delay: i * 1.4
                            });
                        }
                    }["useAmbientDrift.useLayoutEffect.ctx"]);
                }
            }["useAmbientDrift.useLayoutEffect.ctx"], container);
            return ({
                "useAmbientDrift.useLayoutEffect": ()=>ctx.revert()
            })["useAmbientDrift.useLayoutEffect"];
        }
    }["useAmbientDrift.useLayoutEffect"], [
        containerRef
    ]);
}
_s1(useAmbientDrift, "n7/vCynhJvM+pLkyL2DMQUF0odM=");
function About() {
    _s2();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasMountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const smokeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const flowSvgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rowRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const modalCardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const modalGlowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    useParticleNetwork(canvasMountRef, sectionRef);
    useAmbientDrift(smokeRef);
    /* ---- Popup card: open/close animation ---- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "About.useEffect": ()=>{
            const overlay = overlayRef.current;
            const card = modalCardRef.current;
            const glow = modalGlowRef.current;
            if (!overlay || !card) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "About.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf([
                        overlay,
                        card,
                        glow
                    ]);
                    if (openIndex !== null) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(overlay, {
                            pointerEvents: "auto"
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(overlay, {
                            autoAlpha: 0
                        }, {
                            autoAlpha: 1,
                            duration: 0.4,
                            ease: "power2.out"
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(card, {
                            autoAlpha: 0,
                            scale: 0.9,
                            y: 28
                        }, {
                            autoAlpha: 1,
                            scale: 1,
                            y: 0,
                            duration: 0.6,
                            ease: "back.out(1.6)",
                            delay: 0.05
                        });
                        if (glow) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(glow, {
                                opacity: 0,
                                scale: 0.85
                            }, {
                                opacity: 1,
                                scale: 1,
                                duration: 1,
                                ease: "power2.out",
                                delay: 0.05
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(glow, {
                                rotate: 360,
                                duration: 28,
                                ease: "none",
                                repeat: -1
                            });
                        }
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(card, {
                            autoAlpha: 0,
                            scale: 0.92,
                            y: 16,
                            duration: 0.3,
                            ease: "power2.in"
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(overlay, {
                            autoAlpha: 0,
                            duration: 0.35,
                            ease: "power2.in",
                            delay: 0.05,
                            onComplete: {
                                "About.useEffect.ctx": ()=>{
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(overlay, {
                                        pointerEvents: "none"
                                    });
                                }
                            }["About.useEffect.ctx"]
                        });
                    }
                }
            }["About.useEffect.ctx"]);
            return ({
                "About.useEffect": ()=>ctx.revert()
            })["About.useEffect"];
        }
    }["About.useEffect"], [
        openIndex
    ]);
    /* ---- Popup card: escape to close + lock background scroll ---- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "About.useEffect": ()=>{
            if (openIndex === null) return;
            function handleKeyDown(e) {
                if (e.key === "Escape") setOpenIndex(null);
            }
            window.addEventListener("keydown", handleKeyDown);
            const prevOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return ({
                "About.useEffect": ()=>{
                    window.removeEventListener("keydown", handleKeyDown);
                    document.body.style.overflow = prevOverflow;
                }
            })["About.useEffect"];
        }
    }["About.useEffect"], [
        openIndex
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "About.useLayoutEffect": ()=>{
            const section = sectionRef.current;
            if (!section) return;
            const reduceMotion = ("TURBOPACK compile-time value", "object") !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "About.useLayoutEffect.ctx": ()=>{
                    const rows = rowRefs.current.filter(Boolean);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(headingRef.current, {
                        autoAlpha: 0,
                        y: 40
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(rows, {
                        autoAlpha: 0,
                        y: 32
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(headingRef.current, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: headingRef.current,
                            start: "top 80%"
                        }
                    });
                    rows.forEach({
                        "About.useLayoutEffect.ctx": (row, i)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(row, {
                                autoAlpha: 1,
                                y: 0,
                                duration: 0.7,
                                ease: "power3.out",
                                delay: i * 0.06,
                                scrollTrigger: {
                                    trigger: row,
                                    start: "top 85%"
                                }
                            });
                        }
                    }["About.useLayoutEffect.ctx"]);
                    // Gentle parallax on the whole canvas mount as the section passes.
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(canvasMountRef.current, {
                        yPercent: 8,
                        ease: "none",
                        scrollTrigger: {
                            trigger: section,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1.2
                        }
                    });
                    // Smoke layer drifts a touch slower than the particle canvas —
                    // the differing speeds are what sell the sense of depth.
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(smokeRef.current, {
                        yPercent: 4,
                        ease: "none",
                        scrollTrigger: {
                            trigger: section,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1.8
                        }
                    });
                    // Flowing data lines: continuous dash-offset animation reads as
                    // signal traveling along the paths. Kept out of ScrollTrigger so
                    // it never stalls — it's meant to feel alive independent of scroll.
                    if (flowSvgRef.current && !reduceMotion) {
                        const paths = flowSvgRef.current.querySelectorAll("path[data-flow]");
                        paths.forEach({
                            "About.useLayoutEffect.ctx": (path, i)=>{
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(path, {
                                    strokeDashoffset: 0
                                }, {
                                    strokeDashoffset: -400,
                                    duration: 14 + i * 3,
                                    ease: "none",
                                    repeat: -1
                                });
                            }
                        }["About.useLayoutEffect.ctx"]);
                    }
                }
            }["About.useLayoutEffect.ctx"], section);
            return ({
                "About.useLayoutEffect": ()=>ctx.revert()
            })["About.useLayoutEffect"];
        }
    }["About.useLayoutEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "about",
        className: "\n        relative\n        w-full\n        max-w-full\n        overflow-hidden\n        bg-black\n        py-10\n       \n      ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: smokeRef,
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 z-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-smoke-blob": true,
                        className: "absolute -left-[10%] top-[-10%] h-[620px] w-[620px] rounded-full opacity-60 blur-[110px]",
                        style: {
                            background: "radial-gradient(circle, rgba(99,102,241,0.22) 0%, rgba(99,102,241,0) 70%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/about/About.tsx",
                        lineNumber: 672,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-smoke-blob": true,
                        className: "absolute right-[-8%] top-[20%] h-[520px] w-[520px] rounded-full opacity-50 blur-[100px]",
                        style: {
                            background: "radial-gradient(circle, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0) 70%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/about/About.tsx",
                        lineNumber: 680,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-smoke-blob": true,
                        className: "absolute left-[20%] bottom-[-15%] h-[560px] w-[560px] rounded-full opacity-50 blur-[120px]",
                        style: {
                            background: "radial-gradient(circle, rgba(168,85,247,0.16) 0%, rgba(168,85,247,0) 70%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/about/About.tsx",
                        lineNumber: 688,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-smoke-blob": true,
                        className: "absolute right-[10%] bottom-[-10%] h-[460px] w-[460px] rounded-full opacity-40 blur-[100px]",
                        style: {
                            background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 70%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/about/About.tsx",
                        lineNumber: 696,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/about/About.tsx",
                lineNumber: 667,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: canvasMountRef,
                "aria-hidden": true,
                className: "\n          pointer-events-none\n          absolute\n          inset-0\n          z-[1]\n          opacity-80\n        "
            }, void 0, false, {
                fileName: "[project]/src/components/about/About.tsx",
                lineNumber: 707,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                ref: flowSvgRef,
                "aria-hidden": true,
                className: "pointer-events-none absolute inset-0 z-[2] h-full w-full opacity-70 mix-blend-screen",
                viewBox: "0 0 1400 900",
                preserveAspectRatio: "none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "flowGradA",
                                x1: "0%",
                                y1: "0%",
                                x2: "100%",
                                y2: "0%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "rgba(159,198,255,0)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/about/About.tsx",
                                        lineNumber: 729,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "50%",
                                        stopColor: "rgba(159,198,255,0.55)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/about/About.tsx",
                                        lineNumber: 730,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "rgba(159,198,255,0)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/about/About.tsx",
                                        lineNumber: 731,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/about/About.tsx",
                                lineNumber: 728,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "flowGradB",
                                x1: "0%",
                                y1: "0%",
                                x2: "100%",
                                y2: "0%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "rgba(196,166,255,0)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/about/About.tsx",
                                        lineNumber: 734,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "50%",
                                        stopColor: "rgba(196,166,255,0.45)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/about/About.tsx",
                                        lineNumber: 735,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "rgba(196,166,255,0)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/about/About.tsx",
                                        lineNumber: 736,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/about/About.tsx",
                                lineNumber: 733,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                id: "flowBlur",
                                x: "-20%",
                                y: "-20%",
                                width: "140%",
                                height: "140%",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                    stdDeviation: "1.4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/about/About.tsx",
                                    lineNumber: 739,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/about/About.tsx",
                                lineNumber: 738,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/about/About.tsx",
                        lineNumber: 727,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        "data-flow": true,
                        d: "M -100 160 C 300 60, 650 260, 1000 120 S 1500 40, 1600 140",
                        fill: "none",
                        stroke: "url(#flowGradA)",
                        strokeWidth: "1.2",
                        strokeDasharray: "10 14",
                        filter: "url(#flowBlur)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/about/About.tsx",
                        lineNumber: 743,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        "data-flow": true,
                        d: "M -100 420 C 260 520, 620 320, 980 480 S 1480 560, 1600 440",
                        fill: "none",
                        stroke: "url(#flowGradB)",
                        strokeWidth: "1",
                        strokeDasharray: "8 16",
                        filter: "url(#flowBlur)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/about/About.tsx",
                        lineNumber: 752,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        "data-flow": true,
                        d: "M -100 700 C 320 620, 700 800, 1040 660 S 1500 580, 1600 700",
                        fill: "none",
                        stroke: "url(#flowGradA)",
                        strokeWidth: "1",
                        strokeDasharray: "6 18",
                        filter: "url(#flowBlur)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/about/About.tsx",
                        lineNumber: 761,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/about/About.tsx",
                lineNumber: 720,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 top-0 z-[3] h-px bg-white/10"
            }, void 0, false, {
                fileName: "[project]/src/components/about/About.tsx",
                lineNumber: 773,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "\n          relative\n          z-10\n          mx-auto\n          w-full\n          max-w-[1400px]\n          px-6\n          md:px-10\n          lg:px-14\n        ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "\n            grid\n            grid-cols-1\n            gap-16\n            lg:grid-cols-[minmax(0,420px)_1fr]\n            lg:gap-24\n          ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:sticky lg:top-28 lg:self-start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: headingRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-medium uppercase tracking-[0.25em] text-white/50",
                                        children: "About Mentroid"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/about/About.tsx",
                                        lineNumber: 799,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "\n                  mt-6\n                  text-[clamp(2.4rem,4.4vw,3.6rem)]\n                  font-medium\n                  leading-[1.05]\n                  tracking-[-0.03em]\n                  text-white\n                ",
                                        children: [
                                            "Built for teams who",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                className: "hidden md:block"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/about/About.tsx",
                                                lineNumber: 814,
                                                columnNumber: 17
                                            }, this),
                                            "won't bend their",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                className: "hidden md:block"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/about/About.tsx",
                                                lineNumber: 816,
                                                columnNumber: 17
                                            }, this),
                                            "workflow to fit a template."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/about/About.tsx",
                                        lineNumber: 803,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "\n                  mt-7\n                  max-w-[420px]\n                  text-sm\n                  leading-7\n                  text-white/60\n                  md:text-base\n                  md:leading-8\n                ",
                                        children: "Mentroid builds custom chatbots and ML models for businesses that don't want to force-fit their workflow into someone else's template."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/about/About.tsx",
                                        lineNumber: 820,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/about/About.tsx",
                                lineNumber: 798,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/about/About.tsx",
                            lineNumber: 797,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col",
                            children: [
                                pillars.map((pillar, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: (el)=>{
                                            rowRefs.current[i] = el;
                                        },
                                        role: "button",
                                        tabIndex: 0,
                                        "aria-haspopup": "dialog",
                                        onClick: ()=>setOpenIndex(i),
                                        onKeyDown: (e)=>{
                                            if (e.key === "Enter" || e.key === " ") {
                                                e.preventDefault();
                                                setOpenIndex(i);
                                            }
                                        },
                                        className: "\n                  group\n                  grid\n                  cursor-pointer\n                  grid-cols-[auto_1fr]\n                  gap-6\n                  border-t\n                  border-white/10\n                  py-9\n                  transition-colors\n                  duration-300\n                  first:border-t\n                  hover:border-white/25\n                  focus:outline-none\n                  focus-visible:border-white/40\n                  md:gap-10\n                  md:py-11\n                ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "\n                    text-xs\n                    font-medium\n                    tracking-[0.1em]\n                    text-white/35\n                  ",
                                                children: pillar.index
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/about/About.tsx",
                                                lineNumber: 875,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "\n                      text-xl\n                      font-medium\n                      tracking-[-0.02em]\n                      text-white\n                      transition-transform\n                      duration-300\n                      group-hover:translate-x-1\n                      md:text-2xl\n                    ",
                                                        children: pillar.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/about/About.tsx",
                                                        lineNumber: 887,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "\n                      mt-3\n                      max-w-[560px]\n                      text-sm\n                      leading-7\n                      text-white/60\n                      md:text-base\n                      md:leading-8\n                    ",
                                                        children: pillar.copy
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/about/About.tsx",
                                                        lineNumber: 902,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/about/About.tsx",
                                                lineNumber: 886,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, pillar.label, true, {
                                        fileName: "[project]/src/components/about/About.tsx",
                                        lineNumber: 841,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-white/10"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/about/About.tsx",
                                    lineNumber: 919,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/about/About.tsx",
                            lineNumber: 839,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/about/About.tsx",
                    lineNumber: 787,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/about/About.tsx",
                lineNumber: 775,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: overlayRef,
                role: "dialog",
                "aria-modal": "true",
                "aria-label": openIndex !== null ? pillars[openIndex].label : undefined,
                onClick: (e)=>{
                    if (e.target === e.currentTarget) setOpenIndex(null);
                },
                style: {
                    opacity: 0,
                    visibility: "hidden",
                    pointerEvents: "none"
                },
                className: "\n          fixed\n          inset-0\n          z-[100]\n          flex\n          items-center\n          justify-center\n          bg-black/75\n          px-6\n          backdrop-blur-md\n        ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: modalCardRef,
                    style: {
                        opacity: 0
                    },
                    className: "\n            relative\n            w-full\n            max-w-lg\n            overflow-hidden\n            rounded-2xl\n            border\n            border-white/10\n            bg-[#0a0a0c]\n            p-9\n            shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]\n            md:p-12\n          ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: modalGlowRef,
                            "aria-hidden": true,
                            className: "pointer-events-none absolute -inset-[2px] -z-10 opacity-0",
                            style: {
                                background: "conic-gradient(from 0deg, rgba(159,198,255,0.35), rgba(196,166,255,0.3), transparent 40%, transparent 60%, rgba(159,198,255,0.35))",
                                filter: "blur(30px)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/about/About.tsx",
                            lineNumber: 964,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setOpenIndex(null),
                            "aria-label": "Close",
                            className: "\n              absolute\n              right-5\n              top-5\n              flex\n              h-9\n              w-9\n              items-center\n              justify-center\n              rounded-full\n              border\n              border-white/10\n              text-white/50\n              transition-colors\n              duration-200\n              hover:border-white/25\n              hover:text-white\n              focus:outline-none\n              focus-visible:border-white/40\n            ",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "14",
                                height: "14",
                                viewBox: "0 0 14 14",
                                fill: "none",
                                "aria-hidden": true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M1 1L13 13M13 1L1 13",
                                    stroke: "currentColor",
                                    strokeWidth: "1.4",
                                    strokeLinecap: "round"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/about/About.tsx",
                                    lineNumber: 1007,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/about/About.tsx",
                                lineNumber: 1000,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/about/About.tsx",
                            lineNumber: 975,
                            columnNumber: 11
                        }, this),
                        openIndex !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "\n                  text-[11px]\n                  font-medium\n                  tracking-[0.1em]\n                  text-white/35\n                ",
                                    children: pillars[openIndex].index
                                }, void 0, false, {
                                    fileName: "[project]/src/components/about/About.tsx",
                                    lineNumber: 1018,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "\n                  mt-4\n                  text-[clamp(1.7rem,3vw,2.4rem)]\n                  font-medium\n                  leading-[1.1]\n                  tracking-[-0.02em]\n                  text-white\n                ",
                                    children: pillars[openIndex].label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/about/About.tsx",
                                    lineNumber: 1029,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "\n                  mt-4\n                  text-sm\n                  leading-7\n                  text-white/60\n                  md:text-base\n                  md:leading-8\n                ",
                                    children: pillars[openIndex].copy
                                }, void 0, false, {
                                    fileName: "[project]/src/components/about/About.tsx",
                                    lineNumber: 1042,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-7 flex flex-col gap-3",
                                    children: pillars[openIndex].detail.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "\n                      flex\n                      items-start\n                      gap-3\n                      text-sm\n                      leading-6\n                      text-white/55\n                      md:text-[15px]\n                    ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/about/About.tsx",
                                                    lineNumber: 1069,
                                                    columnNumber: 21
                                                }, this),
                                                line
                                            ]
                                        }, line, true, {
                                            fileName: "[project]/src/components/about/About.tsx",
                                            lineNumber: 1057,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/about/About.tsx",
                                    lineNumber: 1055,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/about/About.tsx",
                            lineNumber: 1017,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/about/About.tsx",
                    lineNumber: 946,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/about/About.tsx",
                lineNumber: 925,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/about/About.tsx",
        lineNumber: 653,
        columnNumber: 5
    }, this);
}
_s2(About, "DBqGIFddtgvhHLRuJBN5kMixPsI=", false, function() {
    return [
        useParticleNetwork,
        useAmbientDrift
    ];
});
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/faq/FAQ.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const faqs = [
    {
        question: "What services do you provide?",
        answer: "We provide AI chatbot development, machine learning models, web and app development, IoT + ML solutions, GenAI projects, and consulting."
    },
    {
        question: "Do you work with startups?",
        answer: "Yes. Mentroid works with startups and businesses to build scalable AI and digital solutions around their specific requirements."
    },
    {
        question: "How long does a project take?",
        answer: "Project timelines depend on the complexity and scope of the work. Typical projects can take anywhere from one week to one month."
    },
    {
        question: "Do you provide support after delivery?",
        answer: "Yes. Post-delivery support and maintenance are available depending on the project and engagement."
    },
    {
        question: "Can you build a custom AI solution for my business?",
        answer: "Yes. Mentroid develops custom AI systems based on your business requirements, workflows, data, and desired outcomes."
    }
];
function FAQ() {
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq",
        className: "relative overflow-hidden bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]",
                animate: {
                    scale: [
                        1,
                        1.15,
                        1
                    ],
                    opacity: [
                        0.35,
                        0.55,
                        0.35
                    ]
                },
                transition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/faq/FAQ.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-4xl px-5 sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            amount: 0.3
                        },
                        transition: {
                            duration: 0.8,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-4 text-sm font-medium uppercase tracking-[0.18em] text-blue-400",
                                children: "FAQ"
                            }, void 0, false, {
                                fileName: "[project]/src/components/faq/FAQ.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl",
                                children: "Questions, answered."
                            }, void 0, false, {
                                fileName: "[project]/src/components/faq/FAQ.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto mt-5 max-w-2xl text-base leading-7 text-white/50",
                                children: "Everything you need to know before starting a project with Mentroid."
                            }, void 0, false, {
                                fileName: "[project]/src/components/faq/FAQ.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/faq/FAQ.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            amount: 0.15
                        },
                        transition: {
                            duration: 0.9,
                            delay: 0.15,
                            ease: [
                                0.22,
                                1,
                                0.36,
                                1
                            ]
                        },
                        className: "mt-14 border-y border-white/10",
                        children: faqs.map((faq, index)=>{
                            const isOpen = openIndex === index;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                layout: true,
                                className: "border-b border-white/10 last:border-b-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        type: "button",
                                        onClick: ()=>setOpenIndex(isOpen ? null : index),
                                        whileHover: {
                                            x: 4
                                        },
                                        transition: {
                                            duration: 0.25
                                        },
                                        className: "group flex w-full items-center justify-between gap-6 py-7 text-left",
                                        "aria-expanded": isOpen,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-base font-semibold transition-colors duration-300 sm:text-lg ${isOpen ? "text-white" : "text-white/75 group-hover:text-white"}`,
                                                children: faq.question
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/faq/FAQ.tsx",
                                                lineNumber: 112,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                animate: {
                                                    rotate: isOpen ? 180 : 0,
                                                    scale: isOpen ? 1.1 : 1
                                                },
                                                transition: {
                                                    duration: 0.35,
                                                    ease: [
                                                        0.22,
                                                        1,
                                                        0.36,
                                                        1
                                                    ]
                                                },
                                                className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${isOpen ? "border-blue-400/50 bg-blue-400/10 text-blue-400" : "border-white/10 bg-white/[0.03] text-white/40 group-hover:border-white/20 group-hover:text-white"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/faq/FAQ.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/faq/FAQ.tsx",
                                                lineNumber: 122,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/faq/FAQ.tsx",
                                        lineNumber: 102,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        initial: false,
                                        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                height: 0,
                                                opacity: 0
                                            },
                                            animate: {
                                                height: "auto",
                                                opacity: 1
                                            },
                                            exit: {
                                                height: 0,
                                                opacity: 0
                                            },
                                            transition: {
                                                height: {
                                                    duration: 0.4,
                                                    ease: [
                                                        0.22,
                                                        1,
                                                        0.36,
                                                        1
                                                    ]
                                                },
                                                opacity: {
                                                    duration: 0.25
                                                }
                                            },
                                            className: "overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                                initial: {
                                                    y: -10
                                                },
                                                animate: {
                                                    y: 0
                                                },
                                                exit: {
                                                    y: -10
                                                },
                                                transition: {
                                                    duration: 0.3
                                                },
                                                className: "max-w-3xl pb-7 pr-12 text-sm leading-7 text-white/50 sm:text-base",
                                                children: faq.answer
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/faq/FAQ.tsx",
                                                lineNumber: 167,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/faq/FAQ.tsx",
                                            lineNumber: 143,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/faq/FAQ.tsx",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, faq.question, true, {
                                fileName: "[project]/src/components/faq/FAQ.tsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/faq/FAQ.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/faq/FAQ.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/faq/FAQ.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(FAQ, "6UZ+mnQ9sKC06YXeyhrfGXQCT10=");
_c = FAQ;
var _c;
__turbopack_context__.k.register(_c, "FAQ");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/hero/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.mjs [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-client] (ecmascript) <export default as ArrowUpRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const scenes = [
    {
        eyebrow: "INTELLIGENCE / 01",
        title: "Intelligence built",
        accent: "for what’s next.",
        description: "Mentroid builds intelligent systems that turn complex business problems into practical AI solutions.",
        media: "/videos/ai.mp4",
        type: "video"
    },
    {
        eyebrow: "AGENTIC AI / 02",
        title: "AI that understands.",
        accent: "AI that acts.",
        description: "From AI agents and RAG systems to custom copilots, we build AI that can reason, respond and execute.",
        media: "/videos/agentic-ai.mp4",
        type: "video"
    },
    {
        eyebrow: "AUTOMATION / 03",
        title: "From intelligence",
        accent: "to automation.",
        description: "Connect data, people and workflows through intelligent automation designed around your business.",
        media: "/videos/automation.mp4",
        type: "video"
    }
];
function Hero() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pinRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mediaRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const contentRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Hero.useLayoutEffect": ()=>{
            const section = sectionRef.current;
            const pin = pinRef.current;
            if (!section || !pin) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Hero.useLayoutEffect.ctx": ()=>{
                    const media = mediaRefs.current.filter(Boolean);
                    const content = contentRefs.current.filter(Boolean);
                    if (!media.length || !content.length) {
                        return;
                    }
                    /*
       * ========================================================
       * IMPORTANT:
       * Hide all scenes immediately.
       *
       * This prevents the refresh "text stacking" flash.
       * ========================================================
       */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(content, {
                        autoAlpha: 0,
                        y: 80,
                        force3D: true
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(content[0], {
                        autoAlpha: 1,
                        y: 0
                    });
                    /*
       * ========================================================
       * MEDIA INITIAL STATE
       * ========================================================
       */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(media, {
                        autoAlpha: 0,
                        scale: 1.08,
                        xPercent: 0,
                        yPercent: 0,
                        force3D: true
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(media[0], {
                        autoAlpha: 1,
                        scale: 1
                    });
                    /*
       * ========================================================
       * MAIN TIMELINE
       * ========================================================
       */ const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        defaults: {
                            overwrite: "auto"
                        },
                        scrollTrigger: {
                            trigger: section,
                            start: "top top",
                            end: "bottom bottom",
                            scrub: 1,
                            pin: pin,
                            anticipatePin: 1,
                            invalidateOnRefresh: true,
                            /*
           * Prevent horizontal movement
           * from affecting page layout.
           */ pinSpacing: true
                        }
                    });
                    /*
       * ========================================================
       * SCENE 01
       * ========================================================
       */ tl.to(media[0], {
                        scale: 1.1,
                        xPercent: -2,
                        yPercent: -3,
                        duration: 1,
                        ease: "none"
                    });
                    /*
       * ========================================================
       * SCENE 01 → 02
       * ========================================================
       */ tl.to(content[0], {
                        autoAlpha: 0,
                        y: -70,
                        duration: 0.35,
                        ease: "power2.inOut"
                    }, "+=0.15");
                    tl.to(media[0], {
                        autoAlpha: 0,
                        scale: 1.14,
                        duration: 0.5,
                        ease: "power2.inOut"
                    }, "<");
                    tl.to(media[1], {
                        autoAlpha: 1,
                        scale: 1,
                        duration: 0.65,
                        ease: "power2.out"
                    }, "<0.1");
                    tl.to(content[1], {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.55,
                        ease: "power3.out"
                    }, "<0.1");
                    /*
       * ========================================================
       * SCENE 02 MOVEMENT
       * ========================================================
       */ tl.to(media[1], {
                        scale: 1.11,
                        xPercent: 3,
                        yPercent: -4,
                        duration: 1,
                        ease: "none"
                    });
                    /*
       * ========================================================
       * SCENE 02 → 03
       * ========================================================
       */ tl.to(content[1], {
                        autoAlpha: 0,
                        y: -70,
                        duration: 0.35,
                        ease: "power2.inOut"
                    }, "+=0.1");
                    tl.to(media[1], {
                        autoAlpha: 0,
                        scale: 1.14,
                        duration: 0.5,
                        ease: "power2.inOut"
                    }, "<");
                    tl.to(media[2], {
                        autoAlpha: 1,
                        scale: 1,
                        duration: 0.65,
                        ease: "power2.out"
                    }, "<0.1");
                    tl.to(content[2], {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.55,
                        ease: "power3.out"
                    }, "<0.1");
                    /*
       * ========================================================
       * FINAL SCENE
       * ========================================================
       */ tl.to(media[2], {
                        scale: 1.12,
                        xPercent: -3,
                        yPercent: -4,
                        duration: 1,
                        ease: "none"
                    });
                    /*
       * ========================================================
       * GLOBAL PARALLAX
       * ========================================================
       */ const parallaxElements = section.querySelectorAll(".hero-parallax");
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(parallaxElements, {
                        yPercent: -12,
                        ease: "none",
                        force3D: true,
                        scrollTrigger: {
                            trigger: section,
                            start: "top top",
                            end: "bottom bottom",
                            scrub: 1.5
                        }
                    });
                    /*
       * ========================================================
       * REFRESH AFTER EVERYTHING EXISTS
       * ========================================================
       */ requestAnimationFrame({
                        "Hero.useLayoutEffect.ctx": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
                        }
                    }["Hero.useLayoutEffect.ctx"]);
                }
            }["Hero.useLayoutEffect.ctx"], section);
            return ({
                "Hero.useLayoutEffect": ()=>{
                    ctx.revert();
                }
            })["Hero.useLayoutEffect"];
        }
    }["Hero.useLayoutEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "hero",
        className: "\n        relative\n        h-[400vh]\n        w-full\n        max-w-full\n        overflow-x-clip\n        bg-black\n      ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: pinRef,
            className: "\n          relative\n          h-screen\n          w-full\n          max-w-full\n          overflow-hidden\n          bg-black\n        ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "\n            absolute\n            inset-0\n            h-full\n            w-full\n            max-w-full\n            overflow-hidden\n          ",
                    children: scenes.map((scene, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: (element)=>{
                                mediaRefs.current[index] = element;
                            },
                            className: `
  absolute
  inset-0
  h-full
  w-full
  max-w-full
  overflow-hidden
  ${index === 0 ? "visible opacity-100" : "invisible opacity-0"}
`,
                            children: scene.type === "video" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                className: "\n                      hero-parallax\n                      absolute\n                      inset-0\n                      h-full\n                      w-full\n                      max-w-full\n                      object-cover\n                    ",
                                src: scene.media,
                                autoPlay: true,
                                muted: true,
                                loop: true,
                                playsInline: true,
                                preload: "auto"
                            }, void 0, false, {
                                fileName: "[project]/src/components/hero/Hero.tsx",
                                lineNumber: 394,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "\n                      hero-parallax\n                      absolute\n                      inset-0\n                      h-full\n                      w-full\n                      max-w-full\n                      object-cover\n                    ",
                                src: scene.media,
                                alt: ""
                            }, void 0, false, {
                                fileName: "[project]/src/components/hero/Hero.tsx",
                                lineNumber: 412,
                                columnNumber: 19
                            }, this)
                        }, scene.media, false, {
                            fileName: "[project]/src/components/hero/Hero.tsx",
                            lineNumber: 376,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/hero/Hero.tsx",
                    lineNumber: 364,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "\n            pointer-events-none\n            absolute\n            inset-0\n            z-[2]\n            bg-black/25\n          "
                }, void 0, false, {
                    fileName: "[project]/src/components/hero/Hero.tsx",
                    lineNumber: 435,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "\n            pointer-events-none\n            absolute\n            inset-0\n            z-[3]\n            bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.38)_35%,rgba(0,0,0,0.08)_75%,rgba(0,0,0,0.22)_100%)]\n          "
                }, void 0, false, {
                    fileName: "[project]/src/components/hero/Hero.tsx",
                    lineNumber: 445,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "\n            pointer-events-none\n            absolute\n            inset-x-0\n            bottom-0\n            z-[3]\n            h-[30%]\n            bg-gradient-to-t\n            from-black/55\n            to-transparent\n          "
                }, void 0, false, {
                    fileName: "[project]/src/components/hero/Hero.tsx",
                    lineNumber: 455,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "\n            absolute\n            inset-0\n            z-10\n            flex\n            items-center\n            overflow-hidden\n          ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "\n              w-full\n              max-w-full\n              px-6\n              md:px-10\n              lg:px-14\n            ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "\n                relative\n                min-h-[520px]\n                w-full\n                max-w-full\n              ",
                            children: scenes.map((scene, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: (element)=>{
                                        contentRefs.current[index] = element;
                                    },
                                    className: `
  absolute
  left-0
  top-1/2
  w-full
  max-w-[850px]
  -translate-y-1/2
  ${index === 0 ? "visible opacity-100" : "invisible opacity-0"}
`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-7 flex items-center gap-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-medium uppercase tracking-[0.25em] text-white/70",
                                                children: scene.eyebrow
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/hero/Hero.tsx",
                                                lineNumber: 530,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hero/Hero.tsx",
                                            lineNumber: 529,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "\n                          text-[clamp(3.5rem,8vw,4.8rem)]\n                          font-medium\n                          leading-[0.88]\n                          tracking-[-0.075em]\n                          text-white\n                        ",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block",
                                                        children: scene.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/hero/Hero.tsx",
                                                        lineNumber: 549,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "block text-white/60",
                                                        children: scene.accent
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/hero/Hero.tsx",
                                                        lineNumber: 555,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/hero/Hero.tsx",
                                                lineNumber: 540,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hero/Hero.tsx",
                                            lineNumber: 539,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "\n                        mt-8\n                        max-w-[480px]\n                        text-sm\n                        leading-7\n                        text-white/65\n                        md:text-base\n                        md:leading-8\n                      ",
                                            children: scene.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hero/Hero.tsx",
                                            lineNumber: 565,
                                            columnNumber: 21
                                        }, this),
                                        index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-9 flex items-center gap-3",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#services",
                                                className: "\n                            group\n                            inline-flex\n                            items-center\n                            gap-3\n                            rounded-full\n                            bg-white\n                            px-6\n                            py-3.5\n                            text-sm\n                            font-medium\n                            text-black\n                            transition\n                            hover:scale-[1.02]\n                          ",
                                                children: [
                                                    "Explore Mentroid",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                        size: 16,
                                                        className: "\n                              transition-transform\n                              group-hover:translate-x-0.5\n                              group-hover:-translate-y-0.5\n                            "
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/hero/Hero.tsx",
                                                        lineNumber: 606,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/hero/Hero.tsx",
                                                lineNumber: 586,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/hero/Hero.tsx",
                                            lineNumber: 585,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, scene.title, true, {
                                    fileName: "[project]/src/components/hero/Hero.tsx",
                                    lineNumber: 505,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/hero/Hero.tsx",
                            lineNumber: 492,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/hero/Hero.tsx",
                        lineNumber: 483,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/hero/Hero.tsx",
                    lineNumber: 473,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "\n            absolute\n            bottom-7\n            left-6\n            right-6\n            z-20\n            flex\n            items-end\n            justify-between\n            md:left-10\n            md:right-10\n            lg:left-14\n            lg:right-14\n          ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "\n              flex\n              items-center\n              gap-3\n              text-[9px]\n              uppercase\n              tracking-[0.2em]\n              text-white/50\n            ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/src/components/hero/Hero.tsx",
                                lineNumber: 657,
                                columnNumber: 13
                            }, this),
                            "Scroll to explore"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/hero/Hero.tsx",
                        lineNumber: 646,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/hero/Hero.tsx",
                    lineNumber: 630,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/hero/Hero.tsx",
            lineNumber: 349,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/hero/Hero.tsx",
        lineNumber: 333,
        columnNumber: 5
    }, this);
}
_s(Hero, "nBpy5/DBaPb/Zt3MQYucpufhI0s=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/navbar/DesktopNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DesktopNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/navigation.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const menuOrder = [
    "services",
    "solutions",
    "expertise",
    "industries",
    "company"
];
function DesktopNav({ activeMenu, heroActive, onOpenMenu }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "\n        hidden\n        min-w-0\n        flex-1\n        items-center\n        justify-center\n        lg:flex\n      ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "\n          flex\n          min-w-0\n          items-center\n          gap-1\n          xl:gap-2\n        ",
            children: [
                menuOrder.map((key)=>{
                    const item = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigation"][key];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onMouseEnter: ()=>onOpenMenu(key),
                        className: `
                group
                flex
                shrink-0
                items-center
                gap-1.5
                rounded-md
                px-3
                py-2.5
                text-[14px]
                font-medium
                transition-all
                duration-200
                ${activeMenu === key ? heroActive ? "bg-white/10 text-white" : "bg-black/[0.05] text-black" : heroActive ? "text-white/75 hover:bg-white/10 hover:text-white" : "text-[var(--text-secondary)] hover:bg-black/[0.04] hover:text-[var(--foreground)]"}
              `,
                        children: [
                            item.title,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                size: 14,
                                strokeWidth: 1.8,
                                className: `
                  transition-transform
                  duration-200
                  ${activeMenu === key ? "rotate-180" : ""}
                `
                            }, void 0, false, {
                                fileName: "[project]/src/components/navbar/DesktopNav.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this)
                        ]
                    }, key, true, {
                        fileName: "[project]/src/components/navbar/DesktopNav.tsx",
                        lineNumber: 61,
                        columnNumber: 13
                    }, this);
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/work",
                    className: `
            shrink-0
            rounded-md
            px-3
            py-2.5
            text-[14px]
            font-medium
            transition-all
            duration-200
            ${heroActive ? "text-white/75 hover:bg-white/10 hover:text-white" : "text-[var(--text-secondary)] hover:bg-black/[0.04] hover:text-[var(--foreground)]"}
          `,
                    children: "Work"
                }, void 0, false, {
                    fileName: "[project]/src/components/navbar/DesktopNav.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/navbar/DesktopNav.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/navbar/DesktopNav.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = DesktopNav;
var _c;
__turbopack_context__.k.register(_c, "DesktopNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/navbar/MegaMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MegaMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/navbar/Navbar.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function MegaMenu({ menu, menuKey, previewImage, heroActive, onPreviewChange, onNavigate }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
        w-full
        max-w-full
        overflow-x-clip
        transition-all
        duration-300
        ${heroActive ? "bg-[#0b0d0c]/80 backdrop-blur-xl" : "bg-white/[0.94] backdrop-blur-2xl"}
      `,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "\n          mx-auto\n          grid\n          w-full\n          max-w-[1440px]\n          min-w-0\n          grid-cols-1\n          gap-8\n          overflow-hidden\n          px-6\n          py-8\n          lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]\n          lg:gap-10\n          lg:px-10\n          lg:py-10\n        ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "\n            min-w-0\n            grid\n            grid-cols-2\n            gap-x-8\n            lg:gap-x-10\n          ",
                    children: menu.groups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `
                    mb-4
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.14em]
                    ${heroActive ? "text-white/40" : "text-black/45"}
                  `,
                                    children: group.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/navbar/MegaMenu.tsx",
                                    lineNumber: 95,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-0.5",
                                    children: group.items.map((item, index)=>{
                                        const image = item.image || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackPreviewImages"][index % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackPreviewImages"].length] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuPreviewImages"][menuKey];
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: item.href,
                                            onMouseEnter: ()=>onPreviewChange(image),
                                            onFocus: ()=>onPreviewChange(image),
                                            onClick: onNavigate,
                                            className: `
                            group
                            relative
                            flex
                            min-w-0
                            items-center
                            py-1.5
                            text-[15px]
                            leading-6
                            tracking-[-0.015em]
                            transition-colors
                            duration-200
                            ${heroActive ? "text-white/75 hover:text-white" : "text-[#111] hover:text-black"}
                          `,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `
                              absolute
                              -left-3
                              h-[2px]
                              w-0
                              transition-all
                              duration-300
                              group-hover:w-1.5
                              ${heroActive ? "bg-white" : "bg-black"}
                            `
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/navbar/MegaMenu.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "truncate",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/navbar/MegaMenu.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                    size: 13,
                                                    className: `
                              ml-1
                              shrink-0
                              -translate-x-1
                              opacity-0
                              transition-all
                              duration-200
                              group-hover:translate-x-0
                              group-hover:opacity-60
                              ${heroActive ? "text-white" : "text-black"}
                            `
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/navbar/MegaMenu.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, item.title, true, {
                                            fileName: "[project]/src/components/navbar/MegaMenu.tsx",
                                            lineNumber: 131,
                                            columnNumber: 25
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/navbar/MegaMenu.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, group.title, true, {
                            fileName: "[project]/src/components/navbar/MegaMenu.tsx",
                            lineNumber: 89,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/navbar/MegaMenu.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "\n            relative\n            min-w-0\n            min-h-[240px]\n            overflow-hidden\n            rounded-[12px]\n            bg-black/10\n            lg:min-h-[290px]\n          ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "sync",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                src: previewImage,
                                alt: "",
                                initial: {
                                    opacity: 0,
                                    scale: 1.04
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 1.02
                                },
                                transition: {
                                    duration: 0.3,
                                    ease: "easeOut"
                                },
                                className: "\n                absolute\n                inset-0\n                h-full\n                w-full\n                object-cover\n              "
                            }, previewImage, false, {
                                fileName: "[project]/src/components/navbar/MegaMenu.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar/MegaMenu.tsx",
                            lineNumber: 236,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "\n              pointer-events-none\n              absolute\n              inset-0\n              bg-black/15\n            "
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar/MegaMenu.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "\n              absolute\n              bottom-4\n              left-4\n              rounded-full\n              border\n              border-white/15\n              bg-black/25\n              px-3\n              py-1.5\n              text-[9px]\n              uppercase\n              tracking-[0.18em]\n              text-white\n              backdrop-blur-md\n            ",
                            children: "Mentroid Intelligence"
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar/MegaMenu.tsx",
                            lineNumber: 280,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/navbar/MegaMenu.tsx",
                    lineNumber: 225,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/navbar/MegaMenu.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/navbar/MegaMenu.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c = MegaMenu;
var _c;
__turbopack_context__.k.register(_c, "MegaMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/navbar/MobileNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/navigation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const menuOrder = [
    "services",
    "solutions",
    "expertise",
    "industries",
    "company"
];
function MobileNav({ onClose }) {
    _s();
    const [openSection, setOpenSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "\n        h-full\n        overflow-y-auto\n        overflow-x-clip\n        px-5\n        pb-10\n        pt-5\n      ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    menuOrder.map((key)=>{
                        const menu = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigation"][key];
                        const isOpen = openSection === key;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "\n                border-b\n                border-black/[0.08]\n              ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setOpenSection(isOpen ? null : key),
                                    className: "\n                  flex\n                  w-full\n                  items-center\n                  justify-between\n                  py-4\n                  text-left\n                  text-[15px]\n                  font-medium\n                ",
                                    children: [
                                        menu.title,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            size: 18,
                                            className: `
                    transition-transform
                    duration-200
                    ${isOpen ? "rotate-180" : ""}
                  `
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/navbar/MobileNav.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/navbar/MobileNav.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    initial: false,
                                    children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            height: 0,
                                            opacity: 0
                                        },
                                        animate: {
                                            height: "auto",
                                            opacity: 1
                                        },
                                        exit: {
                                            height: 0,
                                            opacity: 0
                                        },
                                        className: "\n                      overflow-hidden\n                    ",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pb-4",
                                            children: menu.groups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "\n                                mb-2\n                                text-[10px]\n                                uppercase\n                                tracking-[0.12em]\n                                text-black/45\n                              ",
                                                            children: group.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/navbar/MobileNav.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 29
                                                        }, this),
                                                        group.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: item.href,
                                                                onClick: onClose,
                                                                className: "\n                                    block\n                                    py-2.5\n                                    text-[14px]\n                                    text-black/75\n                                    transition-colors\n                                    hover:text-black\n                                  ",
                                                                children: item.title
                                                            }, item.title, false, {
                                                                fileName: "[project]/src/components/navbar/MobileNav.tsx",
                                                                lineNumber: 163,
                                                                columnNumber: 33
                                                            }, this))
                                                    ]
                                                }, group.title, true, {
                                                    fileName: "[project]/src/components/navbar/MobileNav.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 27
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/navbar/MobileNav.tsx",
                                            lineNumber: 138,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/navbar/MobileNav.tsx",
                                        lineNumber: 121,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/navbar/MobileNav.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, key, true, {
                            fileName: "[project]/src/components/navbar/MobileNav.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/work",
                        onClick: onClose,
                        className: "\n            block\n            border-b\n            border-black/[0.08]\n            py-4\n            text-[15px]\n            font-medium\n          ",
                        children: "Work"
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/MobileNav.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/portal",
                        onClick: onClose,
                        className: "\n            block\n            border-b\n            border-black/[0.08]\n            py-4\n            text-[15px]\n            font-medium\n          ",
                        children: "Client Portal"
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/MobileNav.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navbar/MobileNav.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/contact",
                onClick: onClose,
                className: "\n          mt-6\n          flex\n          w-full\n          items-center\n          justify-center\n          gap-2\n          rounded-lg\n          bg-[#07111f]\n          px-5\n          py-3.5\n          text-sm\n          font-semibold\n          text-white\n        ",
                children: [
                    "Let's Talk",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/MobileNav.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/navbar/MobileNav.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/navbar/MobileNav.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(MobileNav, "QhxBbZ95mZVyboFXWBL7fXtYJoM=");
_c = MobileNav;
var _c;
__turbopack_context__.k.register(_c, "MobileNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/navbar/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar,
    "fallbackPreviewImages",
    ()=>fallbackPreviewImages,
    "menuOrder",
    ()=>menuOrder,
    "menuPreviewImages",
    ()=>menuPreviewImages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.mjs [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$DesktopNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/navbar/DesktopNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$MegaMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/navbar/MegaMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$MobileNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/navbar/MobileNav.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const menuOrder = [
    "services",
    "solutions",
    "expertise",
    "industries",
    "company"
];
const menuPreviewImages = {
    services: "/assets/navbar/AI-automation.jpg",
    solutions: "/assets/navbar/Ai-development.jpg",
    expertise: "/assets/navbar/AI-automation.jpg",
    industries: "/assets/navbar/Ai-development.jpg",
    company: "/assets/navbar/AI-automation.jpg"
};
const fallbackPreviewImages = [
    "/assets/navbar/services.webp",
    "/assets/navbar/solutions.webp",
    "/assets/navbar/expertise.webp",
    "/assets/navbar/industries.webp"
];
function Navbar() {
    _s();
    const closeTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeMenu, setActiveMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [heroActive, setHeroActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [previewImage, setPreviewImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(menuPreviewImages.services);
    /* =======================================================
     HERO DETECTION
  ======================================================= */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    const hero = document.getElementById("hero");
                    if (!hero) {
                        setHeroActive(false);
                        return;
                    }
                    const rect = hero.getBoundingClientRect();
                    const insideHero = rect.top <= 80 && rect.bottom > 80;
                    setHeroActive(insideHero);
                }
            }["Navbar.useEffect.handleScroll"];
            handleScroll();
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            window.addEventListener("resize", handleScroll);
            return ({
                "Navbar.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                    window.removeEventListener("resize", handleScroll);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    /* =======================================================
     ESCAPE
  ======================================================= */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleKeyDown = {
                "Navbar.useEffect.handleKeyDown": (event)=>{
                    if (event.key === "Escape") {
                        setActiveMenu(null);
                        setMobileOpen(false);
                    }
                }
            }["Navbar.useEffect.handleKeyDown"];
            document.addEventListener("keydown", handleKeyDown);
            return ({
                "Navbar.useEffect": ()=>{
                    document.removeEventListener("keydown", handleKeyDown);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    /* =======================================================
     BODY LOCK
  ======================================================= */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            document.body.style.overflow = mobileOpen ? "hidden" : "";
            return ({
                "Navbar.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], [
        mobileOpen
    ]);
    /* =======================================================
     MENU OPEN
  ======================================================= */ const openMenu = (menu)=>{
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
        }
        setActiveMenu(menu);
        setPreviewImage(menuPreviewImages[menu]);
    };
    /* =======================================================
     DELAYED CLOSE
  ======================================================= */ const scheduleClose = ()=>{
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
        }
        closeTimer.current = setTimeout(()=>{
            setActiveMenu(null);
        }, 140);
    };
    const cancelClose = ()=>{
        if (closeTimer.current) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
    };
    /* =======================================================
     CLOSE EVERYTHING
  ======================================================= */ const closeNavigation = ()=>{
        setActiveMenu(null);
        setMobileOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "\n        fixed\n        inset-x-0\n        top-0\n        z-[100]\n        w-full\n        max-w-full\n        overflow-x-clip\n      ",
        onMouseEnter: cancelClose,
        onMouseLeave: scheduleClose,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
                initial: {
                    y: -20,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    duration: 0.45,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                },
                className: "\n          w-full\n          max-w-full\n          transition-all\n          duration-300\n        ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "\n            mx-auto\n            grid\n            w-full\n            max-w-[1440px]\n            grid-cols-[auto_minmax(0,1fr)_auto]\n            items-center\n            gap-4\n            px-5\n            py-[15px]\n            sm:px-8\n            lg:px-10\n          ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-20 flex shrink-0 items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                onClick: closeNavigation,
                                className: "group flex items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-11 w-[132px] items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/assets/mentroid-logo.png",
                                            width: 52,
                                            height: 52,
                                            alt: "Mentroid",
                                            className: "\n                    h-11\n                    w-11\n                    object-contain\n                    transition-transform\n                    duration-300\n                    group-hover:scale-105\n                  "
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                                            lineNumber: 333,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `
                    ml-1
                    text-[21px]
                    font-semibold
                    tracking-[-0.045em]
                    transition-colors
                    duration-300
                    ${heroActive ? "text-white" : "text-[var(--foreground)]"}
                  `,
                                            children: "Mentroid"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                                            lineNumber: 348,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                                    lineNumber: 332,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/navbar/Navbar.tsx",
                                lineNumber: 327,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                            lineNumber: 326,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$DesktopNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            activeMenu: activeMenu,
                            heroActive: heroActive,
                            onOpenMenu: openMenu
                        }, void 0, false, {
                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                            lineNumber: 373,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-20 flex shrink-0 items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/portal",
                                    className: `
                hidden
                rounded-md
                px-3
                py-2.5
                text-[13px]
                font-medium
                transition-colors
                xl:block
                ${heroActive ? "text-white/75 hover:text-white" : "text-[var(--text-secondary)] hover:text-[var(--foreground)]"}
              `,
                                    children: "Client Portal"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                                    lineNumber: 384,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    className: "\n                group\n                relative\n                inline-flex\n                h-10\n                items-center\n                justify-center\n                gap-2\n                overflow-hidden\n                rounded-[8px]\n                bg-[#07111f]\n                px-4\n                text-sm\n                font-semibold\n                text-white\n                transition-colors\n                duration-300\n                hover:bg-[#168cff]\n              ",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "\n                  absolute\n                  inset-0\n                  translate-y-full\n                  bg-current\n                  opacity-20\n                  transition-transform\n                  duration-300\n                  group-hover:translate-y-0\n                "
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                                            lineNumber: 427,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "\n                  relative\n                  z-[1]\n                  flex\n                  items-center\n                  gap-2\n                ",
                                            children: [
                                                "Let's Talk",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                                                    lineNumber: 451,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                                            lineNumber: 440,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                                    lineNumber: 405,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setMobileOpen((value)=>!value);
                                        setActiveMenu(null);
                                    },
                                    className: `
                flex
                size-10
                items-center
                justify-center
                rounded-lg
                lg:hidden
                ${heroActive ? "bg-white/10 text-white" : "border border-black/10 bg-white text-black"}
              `,
                                    "aria-label": mobileOpen ? "Close menu" : "Open menu",
                                    children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/navbar/Navbar.tsx",
                                        lineNumber: 486,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/navbar/Navbar.tsx",
                                        lineNumber: 488,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                                    lineNumber: 457,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/navbar/Navbar.tsx",
                            lineNumber: 383,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                    lineNumber: 307,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/navbar/Navbar.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: activeMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -8
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -8
                    },
                    transition: {
                        duration: 0.22,
                        ease: [
                            0.22,
                            1,
                            0.36,
                            1
                        ]
                    },
                    onMouseEnter: cancelClose,
                    onMouseLeave: scheduleClose,
                    className: "\n              absolute\n              left-0\n              right-0\n              top-full\n              hidden\n              w-full\n              max-w-full\n              overflow-x-clip\n              lg:block\n            ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$MegaMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        menu: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigation"][activeMenu],
                        menuKey: activeMenu,
                        previewImage: previewImage,
                        heroActive: heroActive,
                        onPreviewChange: setPreviewImage,
                        onNavigate: closeNavigation
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/Navbar.tsx",
                        lineNumber: 537,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                    lineNumber: 501,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/navbar/Navbar.tsx",
                lineNumber: 499,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        height: 0
                    },
                    animate: {
                        opacity: 1,
                        height: "calc(100dvh - 76px)"
                    },
                    exit: {
                        opacity: 0,
                        height: 0
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: "\n              absolute\n              left-0\n              right-0\n              top-[76px]\n              overflow-hidden\n              bg-white\n              lg:hidden\n            ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$navbar$2f$MobileNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onClose: closeNavigation
                    }, void 0, false, {
                        fileName: "[project]/src/components/navbar/Navbar.tsx",
                        lineNumber: 590,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/navbar/Navbar.tsx",
                    lineNumber: 563,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/navbar/Navbar.tsx",
                lineNumber: 561,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/navbar/Navbar.tsx",
        lineNumber: 265,
        columnNumber: 5
    }, this);
}
_s(Navbar, "K+3LxqgCS0oEGDnMec35v4EK/8c=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ourteam/ourteam.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeamSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-client] (ecmascript) <export default as ArrowUpRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const categories = [
    {
        name: "Leadership",
        members: [
            {
                name: "Șerban Georgescu",
                role: "Co-founder & Team Leader",
                note: "Shaping the studio's direction since day one — industrial luxury with a human edge.",
                grad: "linear-gradient(150deg,#3b3229,#8a6a3e)"
            },
            {
                name: "Raluca Ionescu",
                role: "Co-founder & Project Manager",
                note: "Keeps every build on schedule without losing the craft.",
                grad: "linear-gradient(150deg,#2c2420,#b08b4f)"
            },
            {
                name: "Iulia Dumitrescu",
                role: "Interior Architect",
                note: "Spatial thinker — turns raw rooms into finished stories.",
                grad: "linear-gradient(150deg,#332a24,#8f7350)"
            },
            {
                name: "Eugen Marinescu",
                role: "Interior Architect",
                note: "Detail-first, material-obsessed, quietly relentless.",
                grad: "linear-gradient(150deg,#26221e,#7a5b34)"
            }
        ]
    },
    {
        name: "Engineering",
        members: [
            {
                name: "Vlad Petrescu",
                role: "Lead Structural Engineer",
                note: "Turns architectural ambition into load-bearing reality.",
                grad: "linear-gradient(150deg,#20242b,#4d6a86)"
            },
            {
                name: "Ana Constantin",
                role: "Mechanical Systems",
                note: "HVAC, plumbing, and the systems no one sees but everyone feels.",
                grad: "linear-gradient(150deg,#1d2228,#3d5568)"
            },
            {
                name: "Mihai Radu",
                role: "Site Engineer",
                note: "On-site from groundbreak to final walkthrough.",
                grad: "linear-gradient(150deg,#242018,#6b5a3a)"
            },
            {
                name: "Cristina Enache",
                role: "Sustainability Engineer",
                note: "Builds efficiency into every material choice.",
                grad: "linear-gradient(150deg,#1f231d,#4d6b47)"
            }
        ]
    }
];
function TeamSection() {
    _s();
    const [catIdx, setCatIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [memberIdx, setMemberIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [fading, setFading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const cat = categories[catIdx];
    const active = cat.members[memberIdx];
    const next = categories[(catIdx + 1) % categories.length];
    function selectMember(i) {
        if (i === memberIdx) return;
        setFading(true);
        setTimeout(()=>{
            setMemberIdx(i);
            setFading(false);
        }, 160);
    }
    function goNextCategory() {
        setFading(true);
        setTimeout(()=>{
            setCatIdx((c)=>(c + 1) % categories.length);
            setMemberIdx(0);
            setFading(false);
        }, 160);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-20 text-center bg-black",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[clamp(2.4rem,4.4vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.04em] text-white",
                        children: "Our Team Members"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ourteam/ourteam.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mx-auto mt-5 max-w-[480px] text-sm leading-7 text-white/55 md:text-base",
                        children: "Four reasons teams choose Mentroid to build the systems that run their business."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ourteam/ourteam.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ourteam/ourteam.tsx",
                lineNumber: 110,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "team",
                className: "\n        relative\n        w-full\n        max-w-full\n        overflow-hidden\n        bg-black\n      ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "\n          grid\n          w-full\n          max-w-full\n          grid-cols-1\n          md:grid-cols-[1.05fr_1fr]\n        ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "\n            relative\n            flex\n            h-[52vh]\n            items-end\n            overflow-hidden\n            border-b\n            border-white/10\n            md:h-screen\n            md:border-b-0\n            md:border-r\n          ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 grid place-items-center p-6 md:p-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "\n                relative\n                aspect-[3/4]\n                w-[78%]\n                overflow-hidden\n                rounded-[2px]\n                transition-transform\n                duration-[1100ms]\n                ease-[cubic-bezier(0.16,0.84,0.44,1)]\n              ",
                                        style: {
                                            background: active.grad,
                                            transform: fading ? "scale(1.04)" : "scale(1)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_55%,rgba(0,0,0,0.45)_100%)]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ourteam/ourteam.tsx",
                                                lineNumber: 178,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "\n                  pointer-events-none\n                  absolute\n                  bottom-[8%]\n                  right-[6%]\n                  text-[6rem]\n                  font-medium\n                  leading-none\n                  tracking-[-0.075em]\n                  text-white/10\n                  md:text-[11rem]\n                ",
                                                children: active.name.charAt(0)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ourteam/ourteam.tsx",
                                                lineNumber: 179,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ourteam/ourteam.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ourteam/ourteam.tsx",
                                    lineNumber: 161,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-[2] flex w-full items-end justify-between gap-6 p-6 md:p-10 lg:p-14",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
                                            style: {
                                                opacity: fading ? 0 : 1,
                                                transform: fading ? "translateY(6px)" : "translateY(0)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[clamp(1.9rem,3.2vw,2.7rem)] font-medium leading-[0.95] tracking-[-0.075em] text-white",
                                                    children: active.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ourteam/ourteam.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-3 text-[10px] font-medium uppercase tracking-[0.25em] text-white/70",
                                                    children: active.role
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ourteam/ourteam.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ourteam/ourteam.tsx",
                                            lineNumber: 199,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "hidden max-w-[220px] text-right text-sm leading-7 text-white/65 md:block",
                                            children: active.note
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ourteam/ourteam.tsx",
                                            lineNumber: 214,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ourteam/ourteam.tsx",
                                    lineNumber: 198,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ourteam/ourteam.tsx",
                            lineNumber: 147,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col px-6 py-10 md:px-10 md:py-14 lg:px-14",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-9 flex items-baseline justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-[clamp(1.6rem,2.6vw,2.1rem)] font-medium leading-[0.95] tracking-[-0.075em] text-white",
                                            children: cat.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ourteam/ourteam.tsx",
                                            lineNumber: 226,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[9px] uppercase tracking-[0.2em] text-white/50",
                                            children: [
                                                "0",
                                                catIdx + 1,
                                                " / 0",
                                                categories.length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ourteam/ourteam.tsx",
                                            lineNumber: 229,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ourteam/ourteam.tsx",
                                    lineNumber: 225,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-1 flex-col",
                                    children: cat.members.map((m, i)=>{
                                        const isActive = i === memberIdx;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onMouseEnter: ()=>selectMember(i),
                                            onClick: ()=>selectMember(i),
                                            onTouchStart: ()=>selectMember(i),
                                            className: "\n                    relative\n                    grid\n                    cursor-pointer\n                    grid-cols-[48px_1fr_auto]\n                    items-center\n                    gap-4\n                    border-t\n                    border-white/10\n                    py-4\n                    last:border-b\n                    md:grid-cols-[64px_1fr_auto]\n                  ",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "\n                      absolute\n                      left-0\n                      top-0\n                      bottom-0\n                      w-[2px]\n                      origin-top\n                      bg-white\n                      transition-transform\n                      duration-300\n                      ease-[cubic-bezier(0.22,0.61,0.36,1)]\n                    ",
                                                    style: {
                                                        transform: isActive ? "scaleY(1)" : "scaleY(0)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ourteam/ourteam.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "\n                      aspect-square\n                      w-12\n                      rounded-[2px]\n                      transition-transform\n                      duration-[450ms]\n                      ease-[cubic-bezier(0.22,0.61,0.36,1)]\n                      md:w-16\n                    ",
                                                    style: {
                                                        background: m.grad,
                                                        transform: isActive ? "scale(1.06)" : "scale(1)"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ourteam/ourteam.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: `text-base font-medium tracking-[-0.02em] transition-colors ${isActive ? "text-white" : "text-white/80"}`,
                                                            children: m.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ourteam/ourteam.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50",
                                                            children: m.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ourteam/ourteam.tsx",
                                                            lineNumber: 297,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ourteam/ourteam.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)]",
                                                    style: {
                                                        opacity: isActive ? 1 : 0,
                                                        transform: isActive ? "translateX(0)" : "translateX(-6px)"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ourteam/ourteam.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ourteam/ourteam.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, m.name, true, {
                                            fileName: "[project]/src/components/ourteam/ourteam.tsx",
                                            lineNumber: 238,
                                            columnNumber: 17
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ourteam/ourteam.tsx",
                                    lineNumber: 234,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-10 flex items-center justify-between border-t border-white/10 pt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] uppercase tracking-[0.25em] text-white/50",
                                            children: [
                                                "Next — ",
                                                next.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ourteam/ourteam.tsx",
                                            lineNumber: 317,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: goNextCategory,
                                            className: "\n                group\n                inline-flex\n                items-center\n                gap-3\n                rounded-full\n                bg-white\n                px-6\n                py-3.5\n                text-sm\n                font-medium\n                text-black\n                transition\n                hover:scale-[1.02]\n              ",
                                            children: [
                                                next.name,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                                    size: 16,
                                                    className: "transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ourteam/ourteam.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ourteam/ourteam.tsx",
                                            lineNumber: 321,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ourteam/ourteam.tsx",
                                    lineNumber: 316,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ourteam/ourteam.tsx",
                            lineNumber: 224,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ourteam/ourteam.tsx",
                    lineNumber: 134,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ourteam/ourteam.tsx",
                lineNumber: 122,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ourteam/ourteam.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_s(TeamSection, "7YqlDMTP/IE96TOHPqquay/ytyQ=");
_c = TeamSection;
var _c;
__turbopack_context__.k.register(_c, "TeamSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/process/Process.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Process
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.mjs [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const cards = [
    {
        eyebrow: "AGENTS / 01",
        title: "AI agents that",
        accent: "get work done.",
        description: "Autonomous agents that reason over your data, make decisions and execute multi-step tasks without hand-holding.",
        tag: "Reasoning & execution"
    },
    {
        eyebrow: "RAG SYSTEMS / 02",
        title: "Knowledge that",
        accent: "stays current.",
        description: "Retrieval-augmented pipelines that ground every answer in your latest documents, tickets and records.",
        tag: "Grounded retrieval"
    },
    {
        eyebrow: "COPILOTS / 03",
        title: "Copilots built",
        accent: "into your product.",
        description: "Custom copilots embedded directly in your workflows, tuned to your tone, your data and your users.",
        tag: "Embedded intelligence"
    }
];
const ORBIT = [
    {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        z: 30,
        blur: 0
    },
    {
        x: -360,
        y: 26,
        scale: 0.8,
        opacity: 0.38,
        rotate: -6,
        z: 10,
        blur: 2
    },
    {
        x: 360,
        y: 26,
        scale: 0.8,
        opacity: 0.38,
        rotate: 6,
        z: 10,
        blur: 2
    }
];
function Process() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const blobRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const particleRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Process.useLayoutEffect": ()=>{
            const section = sectionRef.current;
            if (!section) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Process.useLayoutEffect.ctx": ()=>{
                    const els = cardRefs.current.filter(Boolean);
                    if (els.length !== 3) return;
                    /* ---------------------------------------------------
         INITIAL ORBIT POSITIONS
      --------------------------------------------------- */ let order = [
                        0,
                        1,
                        2
                    ]; // index into `cards` currently at slot 0,1,2
                    els.forEach({
                        "Process.useLayoutEffect.ctx": (el, i)=>{
                            const slot = ORBIT[i];
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(el, {
                                xPercent: -50,
                                yPercent: -50,
                                x: slot.x,
                                y: slot.y,
                                scale: slot.scale,
                                autoAlpha: slot.opacity,
                                rotateY: slot.rotate,
                                filter: `blur(${slot.blur}px)`,
                                zIndex: slot.z,
                                force3D: true
                            });
                        }
                    }["Process.useLayoutEffect.ctx"]);
                    /* ---------------------------------------------------
         AUTO-ROTATE ORBIT LOOP
      --------------------------------------------------- */ const rotate = {
                        "Process.useLayoutEffect.ctx.rotate": ()=>{
                            order = [
                                order[1],
                                order[2],
                                order[0]
                            ];
                            order.forEach({
                                "Process.useLayoutEffect.ctx.rotate": (cardIndex, slotIndex)=>{
                                    const el = els[cardIndex];
                                    const slot = ORBIT[slotIndex];
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(el, {
                                        x: slot.x,
                                        y: slot.y,
                                        scale: slot.scale,
                                        autoAlpha: slot.opacity,
                                        rotateY: slot.rotate,
                                        filter: `blur(${slot.blur}px)`,
                                        zIndex: slot.z,
                                        duration: 0.45,
                                        ease: "power2.inOut",
                                        overwrite: "auto"
                                    });
                                }
                            }["Process.useLayoutEffect.ctx.rotate"]);
                        }
                    }["Process.useLayoutEffect.ctx.rotate"];
                    // FAST CONTINUOUS ROTATION
                    const loop = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                        repeat: -1,
                        delay: 0.8
                    });
                    loop.call(rotate).to({}, {
                        duration: 0.55
                    });
                    // pause the automated cycle while a visitor is looking closely
                    section.addEventListener("mouseenter", {
                        "Process.useLayoutEffect.ctx": ()=>loop.pause()
                    }["Process.useLayoutEffect.ctx"]);
                    section.addEventListener("mouseleave", {
                        "Process.useLayoutEffect.ctx": ()=>loop.resume()
                    }["Process.useLayoutEffect.ctx"]);
                    /* ---------------------------------------------------
         SMOKY BACKGROUND DRIFT
      --------------------------------------------------- */ const blobs = blobRefs.current.filter(Boolean);
                    blobs.forEach({
                        "Process.useLayoutEffect.ctx": (blob, i)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(blob, {
                                x: i % 2 === 0 ? 60 : -70,
                                y: i % 2 === 0 ? -40 : 50,
                                scale: 1.15,
                                duration: 10 + i * 3,
                                ease: "sine.inOut",
                                repeat: -1,
                                yoyo: true
                            });
                        }
                    }["Process.useLayoutEffect.ctx"]);
                    /* ---------------------------------------------------
         GLOWING PARTICLES
      --------------------------------------------------- */ const particles = particleRefs.current.filter(Boolean);
                    particles.forEach({
                        "Process.useLayoutEffect.ctx": (p, i)=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(p, {
                                y: 40,
                                autoAlpha: 0
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(p, {
                                y: -220,
                                autoAlpha: 1,
                                duration: 6 + i % 5,
                                ease: "none",
                                repeat: -1,
                                delay: i * 0.6
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(p, {
                                autoAlpha: 0,
                                duration: 1.2,
                                repeat: -1,
                                repeatDelay: 5 + i % 5,
                                delay: i * 0.6 + 4.8
                            });
                        }
                    }["Process.useLayoutEffect.ctx"]);
                }
            }["Process.useLayoutEffect.ctx"], section);
            return ({
                "Process.useLayoutEffect": ()=>ctx.revert()
            })["Process.useLayoutEffect"];
        }
    }["Process.useLayoutEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "what-we-build",
        className: "\n        relative\n        w-full\n        max-w-full\n        overflow-hidden\n        bg-black\n        \n      ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: (el)=>{
                            blobRefs.current[0] = el;
                        },
                        className: "absolute left-[10%] top-[15%] h-[420px] w-[420px] rounded-full bg-white/[0.05] blur-[120px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/process/Process.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: (el)=>{
                            blobRefs.current[1] = el;
                        },
                        className: "absolute right-[8%] top-[35%] h-[380px] w-[380px] rounded-full bg-indigo-300/[0.06] blur-[130px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/process/Process.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: (el)=>{
                            blobRefs.current[2] = el;
                        },
                        className: "absolute bottom-[5%] left-[35%] h-[460px] w-[460px] rounded-full bg-white/[0.04] blur-[140px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/process/Process.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    Array.from({
                        length: 18
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: (el)=>{
                                particleRefs.current[i] = el;
                            },
                            className: "absolute h-[3px] w-[3px] rounded-full bg-white/70 shadow-[0_0_8px_2px_rgba(255,255,255,0.4)]",
                            style: {
                                left: `${i * 137 % 100}%`,
                                bottom: "10%"
                            }
                        }, i, false, {
                            fileName: "[project]/src/components/process/Process.tsx",
                            lineNumber: 204,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/process/Process.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "\n          pointer-events-none\n          absolute\n          inset-0\n          bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.75)_100%)]\n        "
            }, void 0, false, {
                fileName: "[project]/src/components/process/Process.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 px-6 md:px-10 lg:px-14",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 md:mb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                size: 13,
                                className: "text-white/50"
                            }, void 0, false, {
                                fileName: "[project]/src/components/process/Process.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-medium uppercase tracking-[0.25em] text-white/70",
                                children: "WHAT WE BUILD"
                            }, void 0, false, {
                                fileName: "[project]/src/components/process/Process.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/process/Process.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "\n            \n            text-[clamp(2.4rem,5.5vw,3.6rem)]\n            font-medium\n            leading-[0.95]\n            tracking-[-0.06em]\n            text-white\n          ",
                        children: [
                            "Systems that think,",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block text-white/60",
                                children: "and ship on their own."
                            }, void 0, false, {
                                fileName: "[project]/src/components/process/Process.tsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/process/Process.tsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/process/Process.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "\n          relative\n          z-10\n          mt-20\n          h-[420px]\n          w-full\n          max-w-full\n          [perspective:1600px]\n          md:h-[480px]\n        ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-1/2 top-1/2",
                    children: cards.map((card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: (el)=>{
                                cardRefs.current[i] = el;
                            },
                            className: "\n                group\n                absolute\n                left-0\n                top-0\n                w-[300px]\n                rounded-2xl\n                border\n                border-white/10\n                bg-white/[0.03]\n                p-7\n                backdrop-blur-xl\n                transition-[border-color,background-color]\n                duration-500\n                hover:border-white/25\n                hover:bg-white/[0.06]\n                md:w-[340px]\n              ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "\n                  pointer-events-none\n                  absolute\n                  inset-0\n                  rounded-2xl\n                  opacity-0\n                  transition-opacity\n                  duration-500\n                  group-hover:opacity-100\n                  bg-[radial-gradient(120px_120px_at_50%_0%,rgba(255,255,255,0.12),transparent)]\n                "
                                }, void 0, false, {
                                    fileName: "[project]/src/components/process/Process.tsx",
                                    lineNumber: 295,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        size: 15,
                                        className: "text-white/70"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/process/Process.tsx",
                                        lineNumber: 310,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/process/Process.tsx",
                                    lineNumber: 309,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] font-medium uppercase tracking-[0.22em] text-white/45",
                                    children: card.eyebrow
                                }, void 0, false, {
                                    fileName: "[project]/src/components/process/Process.tsx",
                                    lineNumber: 313,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mt-3 text-[1.35rem] font-medium leading-[1.05] tracking-[-0.03em] text-white",
                                    children: [
                                        card.title,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-white/55",
                                            children: card.accent
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/process/Process.tsx",
                                            lineNumber: 319,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/process/Process.tsx",
                                    lineNumber: 317,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-[13px] leading-6 text-white/55",
                                    children: card.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/process/Process.tsx",
                                    lineNumber: 322,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 flex items-center justify-between border-t border-white/10 pt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] uppercase tracking-[0.15em] text-white/40",
                                            children: card.tag
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/process/Process.tsx",
                                            lineNumber: 327,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {
                                            size: 14,
                                            className: "text-white/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/80"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/process/Process.tsx",
                                            lineNumber: 331,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/process/Process.tsx",
                                    lineNumber: 326,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, card.title, true, {
                            fileName: "[project]/src/components/process/Process.tsx",
                            lineNumber: 270,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/process/Process.tsx",
                    lineNumber: 268,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/process/Process.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/process/Process.tsx",
        lineNumber: 168,
        columnNumber: 5
    }, this);
}
_s(Process, "Cq+3xaH8x2IHCkXqf1pTuneBZqM=");
_c = Process;
var _c;
__turbopack_context__.k.register(_c, "Process");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/testimonials/Testimonials.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>testimonial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/quote.mjs [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/move-up-right.mjs [app-client] (ecmascript) <export default as MoveUpRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Founder & CEO",
        company: "Nexora",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
        text: "Working with this team completely transformed our digital experience. The attention to detail, creativity, and execution were exceptional."
    },
    {
        id: 2,
        name: "Michael Anderson",
        role: "Creative Director",
        company: "Vertex Studio",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
        text: "They understood our vision from day one and turned it into something far beyond what we imagined. The final product feels premium and incredibly polished."
    },
    {
        id: 3,
        name: "Emily Williams",
        role: "Product Lead",
        company: "Orbit Labs",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        text: "The process was smooth, collaborative and extremely professional. Every interaction felt intentional and the results speak for themselves."
    },
    {
        id: 4,
        name: "Daniel Carter",
        role: "CEO",
        company: "Northstar",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
        text: "A rare combination of strong design thinking and flawless technical execution. Our new experience has completely changed how customers perceive our brand."
    }
];
function testimonial() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const isAnimating = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const current = testimonials[active];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "testimonial.useLayoutEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "testimonial.useLayoutEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".testimonial-heading", {
                        y: 80,
                        opacity: 0,
                        duration: 1.2,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 75%"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".testimonial-counter", {
                        opacity: 0,
                        y: 20,
                        duration: 1,
                        delay: 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 75%"
                        }
                    });
                }
            }["testimonial.useLayoutEffect.ctx"], sectionRef);
            return ({
                "testimonial.useLayoutEffect": ()=>ctx.revert()
            })["testimonial.useLayoutEffect"];
        }
    }["testimonial.useLayoutEffect"], []);
    const changeTestimonial = (direction)=>{
        if (isAnimating.current) return;
        isAnimating.current = true;
        const next = (active + direction + testimonials.length) % testimonials.length;
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
            onComplete: ()=>{
                setActive(next);
                isAnimating.current = false;
            }
        });
        tl.to([
            cardRef.current,
            textRef.current
        ], {
            y: direction === 1 ? -35 : 35,
            opacity: 0,
            duration: 0.35,
            ease: "power2.in",
            stagger: 0.03
        }).to(imageRef.current, {
            scale: 1.12,
            opacity: 0,
            x: direction === 1 ? 30 : -30,
            duration: 0.3,
            ease: "power2.in"
        }, "<").set([
            cardRef.current,
            textRef.current
        ], {
            y: direction === 1 ? 35 : -35
        }).set(imageRef.current, {
            x: direction === 1 ? -30 : 30
        }).to([
            cardRef.current,
            textRef.current
        ], {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power4.out"
        }).to(imageRef.current, {
            x: 0,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power4.out"
        }, "<");
    };
    const handleMouseMove = (e)=>{
        if (!imageRef.current) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(imageRef.current, {
            x: x * 18,
            y: y * 18,
            duration: 0.6,
            ease: "power3.out"
        });
    };
    const handleMouseLeave = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(imageRef.current, {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative overflow-hidden bg-black px-5 py-28 text-white md:px-10 lg:px-20 lg:py-40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-white blur-[120px]"
            }, void 0, false, {
                fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-[1500px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "testimonial-heading mb-20 flex flex-col justify-between gap-10 md:flex-row md:items-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-5 text-xs font-medium uppercase tracking-[0.3em] text-white/45",
                                        children: "What our clients say"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "max-w-4xl text-5xl font-medium leading-[0.9] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-[100px]",
                                        children: [
                                            "Happy",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                                lineNumber: 187,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white/35",
                                                children: "Clients."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-xs text-sm leading-6 text-white/55",
                                children: "Real experiences from people and teams we've collaborated with around the world."
                            }, void 0, false, {
                                fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative min-h-[600px] md:min-h-[650px]",
                        onMouseMove: handleMouseMove,
                        onMouseLeave: handleMouseLeave,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute -bottom-12 left-0 select-none text-[180px] font-medium leading-none tracking-[-0.08em] text-white/[0.035] md:text-[280px]",
                                children: [
                                    "0",
                                    current.id
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: cardRef,
                                className: "relative z-10 ml-auto flex min-h-[520px] w-full max-w-[1050px] flex-col justify-between overflow-hidden rounded-[32px] bg-white p-7 text-black shadow-2xl md:p-12 lg:p-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex h-10 w-10 items-center justify-center rounded-full border border-black/15",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                                        lineNumber: 217,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs uppercase tracking-[0.2em] text-black/40",
                                                        children: "Testimonial"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                                lineNumber: 216,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs tracking-[0.2em] text-black/30",
                                                children: [
                                                    "0",
                                                    current.id,
                                                    " / 0",
                                                    testimonials.length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                                lineNumber: 226,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                        lineNumber: 215,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: textRef,
                                        className: "relative z-20 max-w-4xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-3xl font-normal leading-[1.1] tracking-[-0.035em] text-black sm:text-4xl md:text-5xl lg:text-[58px]",
                                            children: [
                                                "“",
                                                current.text,
                                                "”"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col justify-between gap-8 sm:flex-row sm:items-end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg font-medium",
                                                        children: current.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-sm text-black/45",
                                                        children: [
                                                            current.role,
                                                            " · ",
                                                            current.company
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                                lineNumber: 240,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>changeTestimonial(-1),
                                                        className: "group flex h-12 w-12 items-center justify-center rounded-full border border-black/15 transition-all duration-300 hover:bg-black hover:text-white",
                                                        "aria-label": "Previous testimonial",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                            size: 18,
                                                            className: "transition-transform duration-300 group-hover:-translate-x-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                                            lineNumber: 254,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>changeTestimonial(1),
                                                        className: "group flex h-12 w-12 items-center justify-center rounded-full border border-black/15 transition-all duration-300 hover:bg-black hover:text-white",
                                                        "aria-label": "Next testimonial",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            size: 18,
                                                            className: "transition-transform duration-300 group-hover:translate-x-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                                lineNumber: 248,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                        lineNumber: 239,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: imageRef,
                                className: "absolute bottom-10 left-0 z-30 hidden h-[300px] w-[230px] overflow-hidden rounded-[24px] shadow-2xl md:block lg:h-[370px] lg:w-[290px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: current.image,
                                        alt: current.name,
                                        className: "h-full w-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                        lineNumber: 286,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-5 left-5 flex items-center gap-2 text-xs text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "h-1.5 w-1.5 rounded-full bg-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                                lineNumber: 289,
                                                columnNumber: 15
                                            }, this),
                                            "Client"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                        lineNumber: 288,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "testimonial-counter mt-10 flex items-center justify-between border-t border-white/10 pt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: testimonials.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (index === active) return;
                                            const direction = index > active ? 1 : -1;
                                            changeTestimonial(direction);
                                        },
                                        className: "group flex items-center gap-2",
                                        "aria-label": `Go to testimonial ${index + 1}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `block h-[2px] transition-all duration-500 ${index === active ? "w-10 bg-white" : "w-4 bg-white/20 group-hover:w-7 group-hover:bg-white/50"}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                            lineNumber: 310,
                                            columnNumber: 17
                                        }, this)
                                    }, item.id, false, {
                                        fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                        lineNumber: 299,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                lineNumber: 297,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Scroll"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                        lineNumber: 322,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$up$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveUpRight$3e$__["MoveUpRight"], {
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                        lineNumber: 323,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/testimonials/Testimonials.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/testimonials/Testimonials.tsx",
        lineNumber: 170,
        columnNumber: 5
    }, this);
}
_s(testimonial, "fhmER6MS9Cm5dDubBWrNQmmyOIM=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/whychooseus/whychoose.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhyChooseUs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.mjs [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.mjs [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$workflow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Workflow$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/workflow.mjs [app-client] (ecmascript) <export default as Workflow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
const reasons = [
    {
        title: "Engineering depth",
        description: "We ship production AI, not prototypes — from model selection to deployment and everything in between.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
        accent: "#6E8CFF",
        side: "right",
        top: 10
    },
    {
        title: "Built around you",
        description: "Every system is shaped by your data, your workflows and your goals. Never a template with your logo on it.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"],
        accent: "#9B7CFF",
        side: "left",
        top: 37
    },
    {
        title: "Agents that act",
        description: "Our AI doesn't just surface insight. It reasons, decides and executes the work that follows.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$workflow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Workflow$3e$__["Workflow"],
        accent: "#57D6E0",
        side: "right",
        top: 64
    },
    {
        title: "A partner past launch",
        description: "We stay close after go-live — tuning, monitoring and scaling the system as your business changes.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        accent: "#4FE0B0",
        side: "left",
        top: 91
    }
];
// Deterministic pseudo-random generator so server and client render
// identical particle positions (avoids hydration mismatch).
function seeded(i) {
    const x = Math.sin(i * 12.9898) * 43758.5453;
    return x - Math.floor(x);
}
const particles = Array.from({
    length: 34
}, (_, i)=>({
        x: seeded(i) * 100,
        y: seeded(i + 100) * 100,
        size: 1 + seeded(i + 200) * 2.2,
        delay: seeded(i + 300) * 6,
        duration: 5 + seeded(i + 400) * 6
    }));
function WhyChooseUs() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pinRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lineInnerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nodeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const cardRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const mobileCardRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const spotlightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "WhyChooseUs.useLayoutEffect": ()=>{
            const section = sectionRef.current;
            const pin = pinRef.current;
            if (!section || !pin) return;
            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "WhyChooseUs.useLayoutEffect.ctx": ()=>{
                    const cards = cardRefs.current.filter(Boolean);
                    const nodes = nodeRefs.current.filter(Boolean);
                    const mobileCards = mobileCardRefs.current.filter(Boolean);
                    const lineInner = lineInnerRef.current;
                    const heading = headingRef.current;
                    if (reduceMotion) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set([
                            cards,
                            mobileCards,
                            heading
                        ], {
                            autoAlpha: 1,
                            y: 0
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(nodes, {
                            scale: 1,
                            autoAlpha: 1
                        });
                        if (lineInner) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(lineInner, {
                            scaleY: 1
                        });
                        return;
                    }
                    /* ============================================================
         MOBILE / TABLET — simple staggered reveal, no pin
      ============================================================ */ const mm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].matchMedia();
                    mm.add("(max-width: 1023px)", {
                        "WhyChooseUs.useLayoutEffect.ctx": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(mobileCards, {
                                autoAlpha: 0,
                                y: 50,
                                force3D: true
                            });
                            mobileCards.forEach({
                                "WhyChooseUs.useLayoutEffect.ctx": (card)=>{
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(card, {
                                        autoAlpha: 1,
                                        y: 0,
                                        duration: 0.8,
                                        ease: "power3.out",
                                        scrollTrigger: {
                                            trigger: card,
                                            start: "top 82%",
                                            toggleActions: "play none none reverse"
                                        }
                                    });
                                }
                            }["WhyChooseUs.useLayoutEffect.ctx"]);
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".wcu-mobile-track-fill", {
                                scaleY: 0
                            }, {
                                scaleY: 1,
                                ease: "none",
                                transformOrigin: "top",
                                scrollTrigger: {
                                    trigger: ".wcu-mobile-track",
                                    start: "top 75%",
                                    end: "bottom 60%",
                                    scrub: 0.6
                                }
                            });
                        }
                    }["WhyChooseUs.useLayoutEffect.ctx"]);
                    /* ============================================================
         DESKTOP — pinned scrollytelling with thread + nodes
      ============================================================ */ mm.add("(min-width: 1024px)", {
                        "WhyChooseUs.useLayoutEffect.ctx": ()=>{
                            if (!lineInner) return;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(heading, {
                                autoAlpha: 1,
                                y: 0
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(cards, {
                                autoAlpha: 0,
                                y: 70,
                                rotateY: 0,
                                scale: 0.92,
                                force3D: true
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(nodes, {
                                scale: 0,
                                autoAlpha: 0,
                                force3D: true
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(lineInner, {
                                scaleY: 0,
                                transformOrigin: "top"
                            });
                            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                                defaults: {
                                    overwrite: "auto"
                                },
                                scrollTrigger: {
                                    trigger: section,
                                    start: "top top",
                                    end: "bottom bottom",
                                    scrub: 1,
                                    pin: pin,
                                    anticipatePin: 1,
                                    invalidateOnRefresh: true,
                                    pinSpacing: true
                                }
                            });
                            tl.to(heading, {
                                autoAlpha: 0,
                                y: -30,
                                duration: 1,
                                ease: "power2.inOut"
                            }, 0);
                            tl.to(lineInner, {
                                scaleY: 1,
                                duration: 8,
                                ease: "none"
                            }, 0.5);
                            const revealAt = [
                                1.2,
                                3.4,
                                5.6,
                                7.8
                            ];
                            reasons.forEach({
                                "WhyChooseUs.useLayoutEffect.ctx": (reason, i)=>{
                                    const dir = reason.side === "left" ? -28 : 28;
                                    tl.to(nodes[i], {
                                        scale: 1,
                                        autoAlpha: 1,
                                        duration: 0.5,
                                        ease: "back.out(2.2)"
                                    }, revealAt[i]);
                                    tl.to(cards[i], {
                                        autoAlpha: 1,
                                        y: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        duration: 0.8,
                                        ease: "power3.out"
                                    }, revealAt[i]).from(cards[i], {
                                        rotateY: dir,
                                        duration: 0.8,
                                        ease: "power3.out"
                                    }, revealAt[i]);
                                }
                            }["WhyChooseUs.useLayoutEffect.ctx"]);
                            requestAnimationFrame({
                                "WhyChooseUs.useLayoutEffect.ctx": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh()
                            }["WhyChooseUs.useLayoutEffect.ctx"]);
                        }
                    }["WhyChooseUs.useLayoutEffect.ctx"]);
                    /* ============================================================
         AMBIENT CURSOR SPOTLIGHT
      ============================================================ */ const spotlight = spotlightRef.current;
                    let raf = 0;
                    let px = 50;
                    let py = 40;
                    const onMove = {
                        "WhyChooseUs.useLayoutEffect.ctx.onMove": (e)=>{
                            const rect = section.getBoundingClientRect();
                            const nx = (e.clientX - rect.left) / rect.width * 100;
                            const ny = (e.clientY - rect.top) / rect.height * 100;
                            cancelAnimationFrame(raf);
                            raf = requestAnimationFrame({
                                "WhyChooseUs.useLayoutEffect.ctx.onMove": ()=>{
                                    px = nx;
                                    py = ny;
                                    if (spotlight) {
                                        spotlight.style.setProperty("--mx", `${px}%`);
                                        spotlight.style.setProperty("--my", `${py}%`);
                                    }
                                }
                            }["WhyChooseUs.useLayoutEffect.ctx.onMove"]);
                        }
                    }["WhyChooseUs.useLayoutEffect.ctx.onMove"];
                    section.addEventListener("pointermove", onMove);
                    return ({
                        "WhyChooseUs.useLayoutEffect.ctx": ()=>{
                            section.removeEventListener("pointermove", onMove);
                            cancelAnimationFrame(raf);
                        }
                    })["WhyChooseUs.useLayoutEffect.ctx"];
                }
            }["WhyChooseUs.useLayoutEffect.ctx"], section);
            return ({
                "WhyChooseUs.useLayoutEffect": ()=>ctx.revert()
            })["WhyChooseUs.useLayoutEffect"];
        }
    }["WhyChooseUs.useLayoutEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "why-us",
        className: "jsx-35da0b8716d5b104" + " " + "relative w-full max-w-full overflow-x-clip bg-black lg:h-[320vh]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    background: "radial-gradient(60% 45% at 18% 15%, rgba(110,140,255,0.16), transparent 60%), radial-gradient(55% 40% at 85% 80%, rgba(79,224,176,0.14), transparent 60%)"
                },
                className: "jsx-35da0b8716d5b104" + " " + "pointer-events-none absolute inset-0 opacity-70"
            }, void 0, false, {
                fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: spotlightRef,
                style: {
                    "--mx": "50%",
                    "--my": "40%",
                    background: "radial-gradient(420px circle at var(--mx) var(--my), rgba(120,140,255,0.10), transparent 70%)"
                },
                className: "jsx-35da0b8716d5b104" + " " + "pointer-events-none absolute inset-0 z-[1] transition-opacity duration-500"
            }, void 0, false, {
                fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-35da0b8716d5b104" + " " + "pointer-events-none absolute inset-0 z-[1] overflow-hidden",
                children: particles.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            animationDelay: `${p.delay}s`,
                            animationDuration: `${p.duration}s`
                        },
                        className: "jsx-35da0b8716d5b104" + " " + "wcu-particle absolute rounded-full bg-white"
                    }, i, false, {
                        fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                        lineNumber: 292,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "64px 64px"
                },
                className: "jsx-35da0b8716d5b104" + " " + "pointer-events-none absolute inset-0 z-[1] opacity-[0.06]"
            }, void 0, false, {
                fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: pinRef,
                className: "jsx-35da0b8716d5b104" + " " + "relative z-10 hidden h-screen w-full max-w-full overflow-hidden lg:block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: headingRef,
                        className: "jsx-35da0b8716d5b104" + " " + "absolute left-1/2 top-[7%] w-full max-w-[720px] -translate-x-1/2 px-6 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-35da0b8716d5b104" + " " + "text-[clamp(2.4rem,4.4vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.04em] text-white",
                                children: "The intelligence layer for teams who move fast"
                            }, void 0, false, {
                                fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                                lineNumber: 327,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-35da0b8716d5b104" + " " + "mx-auto mt-5 max-w-[480px] text-sm leading-7 text-white/55 md:text-base",
                                children: "Four reasons teams choose Mentroid to build the systems that run their business."
                            }, void 0, false, {
                                fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                                lineNumber: 330,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-35da0b8716d5b104" + " " + "absolute left-1/2 top-0 h-full w-px -translate-x-1/2 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-35da0b8716d5b104" + " " + "h-full w-full bg-white/10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: lineInnerRef,
                                style: {
                                    background: "linear-gradient(to bottom, #6E8CFF, #9B7CFF, #57D6E0, #4FE0B0)",
                                    boxShadow: "0 0 18px 1px rgba(120,150,255,0.55)"
                                },
                                className: "jsx-35da0b8716d5b104" + " " + "absolute inset-0 w-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this),
                    reasons.map((reason, i)=>{
                        const Icon = reason.icon;
                        const isRight = reason.side === "right";
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-35da0b8716d5b104",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: (el)=>{
                                        nodeRefs.current[i] = el;
                                    },
                                    style: {
                                        top: `${reason.top}%`,
                                        background: reason.accent,
                                        boxShadow: `0 0 16px 3px ${reason.accent}99`
                                    },
                                    className: "jsx-35da0b8716d5b104" + " " + "absolute left-1/2 z-20 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                                    lineNumber: 355,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        top: `${reason.top}%`,
                                        left: isRight ? "50%" : undefined,
                                        right: isRight ? undefined : "50%",
                                        width: "6%",
                                        background: `linear-gradient(${isRight ? "90deg" : "270deg"}, ${reason.accent}, transparent)`
                                    },
                                    className: "jsx-35da0b8716d5b104" + " " + "absolute h-px"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                                    lineNumber: 367,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: (el)=>{
                                        cardRefs.current[i] = el;
                                    },
                                    style: {
                                        top: `${reason.top}%`,
                                        left: isRight ? "57%" : undefined,
                                        right: isRight ? undefined : "57%",
                                        background: "linear-gradient(160deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))",
                                        transformStyle: "preserve-3d",
                                        perspective: "800px"
                                    },
                                    className: "jsx-35da0b8716d5b104" + " " + "group absolute w-[32%] -translate-y-1/2 rounded-2xl border border-white/10 p-6 backdrop-blur-xl transition-transform duration-500 hover:-translate-y-[calc(50%+4px)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                boxShadow: `0 0 30px 2px ${reason.accent}33, inset 0 0 0 1px ${reason.accent}44`
                                            },
                                            className: "jsx-35da0b8716d5b104" + " " + "pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                                            lineNumber: 393,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: `${reason.accent}1a`,
                                                boxShadow: `0 0 14px 1px ${reason.accent}55`
                                            },
                                            className: "jsx-35da0b8716d5b104" + " " + "mb-4 flex h-10 w-10 items-center justify-center rounded-full",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                size: 18,
                                                color: reason.accent,
                                                strokeWidth: 1.8,
                                                className: "jsx-35da0b8716d5b104"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                                                lineNumber: 406,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                                            lineNumber: 399,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-35da0b8716d5b104" + " " + "text-lg font-medium tracking-[-0.02em] text-white",
                                            children: reason.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                                            lineNumber: 408,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-35da0b8716d5b104" + " " + "mt-2.5 text-sm leading-6 text-white/60",
                                            children: reason.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                                            lineNumber: 411,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                                    lineNumber: 378,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, reason.title, true, {
                            fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                            lineNumber: 354,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                lineNumber: 318,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-35da0b8716d5b104" + " " + "relative z-10 w-full max-w-full px-6 py-24 sm:px-10 lg:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-35da0b8716d5b104" + " " + "mx-auto max-w-[560px] text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-35da0b8716d5b104" + " " + "text-[clamp(2rem,7vw,2.6rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white",
                                children: "The intelligence layer for teams who move fast"
                            }, void 0, false, {
                                fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                                lineNumber: 423,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-35da0b8716d5b104" + " " + "mx-auto mt-4 max-w-[420px] text-sm leading-7 text-white/55",
                                children: "Four reasons teams choose Mentroid to build the systems that run their business."
                            }, void 0, false, {
                                fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                                lineNumber: 426,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                        lineNumber: 422,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-35da0b8716d5b104" + " " + "wcu-mobile-track relative mx-auto mt-16 max-w-[440px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-35da0b8716d5b104" + " " + "absolute left-4 top-0 h-full w-px bg-white/10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                                lineNumber: 432,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-35da0b8716d5b104" + " " + "absolute left-4 top-0 h-full w-px overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "linear-gradient(to bottom, #6E8CFF, #9B7CFF, #57D6E0, #4FE0B0)",
                                        boxShadow: "0 0 14px 1px rgba(120,150,255,0.5)",
                                        transformOrigin: "top"
                                    },
                                    className: "jsx-35da0b8716d5b104" + " " + "wcu-mobile-track-fill h-full w-full"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                                    lineNumber: 434,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                                lineNumber: 433,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-35da0b8716d5b104" + " " + "flex flex-col gap-10",
                                children: reasons.map((reason, i)=>{
                                    const Icon = reason.icon;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-35da0b8716d5b104" + " " + "relative pl-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: reason.accent,
                                                    boxShadow: `0 0 12px 2px ${reason.accent}99`
                                                },
                                                className: "jsx-35da0b8716d5b104" + " " + "absolute left-4 top-6 h-2.5 w-2.5 -translate-x-1/2 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                                                lineNumber: 450,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                ref: (el)=>{
                                                    mobileCardRefs.current[i] = el;
                                                },
                                                style: {
                                                    background: "linear-gradient(160deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))"
                                                },
                                                className: "jsx-35da0b8716d5b104" + " " + "rounded-2xl border border-white/10 p-5 backdrop-blur-xl active:scale-[0.99]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            background: `${reason.accent}1a`,
                                                            boxShadow: `0 0 12px 1px ${reason.accent}55`
                                                        },
                                                        className: "jsx-35da0b8716d5b104" + " " + "mb-3.5 flex h-9 w-9 items-center justify-center rounded-full",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            size: 17,
                                                            color: reason.accent,
                                                            strokeWidth: 1.8,
                                                            className: "jsx-35da0b8716d5b104"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                                                            lineNumber: 474,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                                                        lineNumber: 467,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "jsx-35da0b8716d5b104" + " " + "text-base font-medium tracking-[-0.02em] text-white",
                                                        children: reason.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                                                        lineNumber: 476,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "jsx-35da0b8716d5b104" + " " + "mt-2 text-sm leading-6 text-white/60",
                                                        children: reason.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                                                        lineNumber: 479,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                                                lineNumber: 457,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, reason.title, true, {
                                        fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                                        lineNumber: 449,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                                lineNumber: 445,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                        lineNumber: 431,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/whychooseus/whychoose.tsx",
                lineNumber: 421,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "35da0b8716d5b104",
                children: ".wcu-particle.jsx-35da0b8716d5b104{opacity:0;animation-name:wcuTwinkle;animation-timing-function:ease-in-out;animation-iteration-count:infinite;box-shadow:0 0 6px 1px #a0b4ff99}@keyframes wcuTwinkle{0%{opacity:0;transform:translateY(0)}50%{opacity:.65;transform:translateY(-10px)}to{opacity:0;transform:translateY(-20px)}}@media (prefers-reduced-motion:reduce){.wcu-particle.jsx-35da0b8716d5b104{opacity:.25;animation:none}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/whychooseus/whychoose.tsx",
        lineNumber: 261,
        columnNumber: 5
    }, this);
}
_s(WhyChooseUs, "bIn/KkYsm75LmLBenweNDnXZ4P4=");
_c = WhyChooseUs;
var _c;
__turbopack_context__.k.register(_c, "WhyChooseUs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/navigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navigation",
    ()=>navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bot.mjs [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain-circuit.mjs [app-client] (ecmascript) <export default as BrainCircuit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$complex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-complex.mjs [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.mjs [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart-pulse.mjs [app-client] (ecmascript) <export default as HeartPulse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.mjs [app-client] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.mjs [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$smartphone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorSmartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/monitor-smartphone.mjs [app-client] (ecmascript) <export default as MonitorSmartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.mjs [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.mjs [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.mjs [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$workflow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Workflow$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/workflow.mjs [app-client] (ecmascript) <export default as Workflow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-client] (ecmascript) <export default as Zap>");
;
const navigation = {
    /* =========================================================
     SERVICES
  ========================================================= */ services: {
        title: "Services",
        description: "AI and software systems built around your business.",
        groups: [
            {
                title: "AI & Intelligence",
                items: [
                    {
                        title: "AI Development",
                        description: "Build intelligent applications powered by modern AI.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"],
                        href: "/services/ai-development",
                        image: "/assets/navbar/services/ai-development.webp"
                    },
                    {
                        title: "AI Automation",
                        description: "Automate repetitive workflows and operations.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$workflow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Workflow$3e$__["Workflow"],
                        href: "/services/ai-automation",
                        image: "/assets/navbar/services/ai-automation.webp"
                    },
                    {
                        title: "Custom Chatbots",
                        description: "AI assistants designed around your business.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
                        href: "/services/custom-chatbots",
                        image: "/assets/navbar/services/custom-chatbots.webp"
                    },
                    {
                        title: "ML Model Development",
                        description: "Custom predictive models built for your data.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"],
                        href: "/services/ml-development",
                        image: "/assets/navbar/services/ml-model-development.webp"
                    }
                ]
            },
            {
                title: "Product Engineering",
                items: [
                    {
                        title: "AI SaaS Development",
                        description: "Turn AI ideas into scalable SaaS products.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
                        href: "/services/ai-saas-development",
                        image: "/assets/navbar/services/ai-saas-development.webp"
                    },
                    {
                        title: "Web & Software Development",
                        description: "Modern full-stack products and platforms.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
                        href: "/services/software-development",
                        image: "/assets/navbar/services/web-software-development.webp"
                    }
                ]
            }
        ]
    },
    /* =========================================================
     SOLUTIONS
  ========================================================= */ solutions: {
        title: "Solutions",
        description: "AI solutions designed around measurable business problems.",
        groups: [
            {
                title: "Customer & Sales",
                items: [
                    {
                        title: "24/7 AI Customer Support",
                        description: "Intelligent customer assistance available around the clock.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
                        href: "/solutions/customer-support",
                        image: "/assets/navbar/solutions/ai-customer-support.webp"
                    },
                    {
                        title: "AI Lead Qualification",
                        description: "Automatically identify and qualify high-intent leads.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                        href: "/solutions/lead-qualification",
                        image: "/assets/navbar/solutions/ai-lead-qualification.webp"
                    },
                    {
                        title: "WhatsApp AI Assistant",
                        description: "Turn WhatsApp conversations into intelligent customer experiences.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
                        href: "/solutions/whatsapp-ai",
                        image: "/assets/navbar/solutions/whatsapp-ai-assistant.webp"
                    },
                    {
                        title: "Sales Automation",
                        description: "Automate repetitive sales processes and follow-ups.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$workflow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Workflow$3e$__["Workflow"],
                        href: "/solutions/sales-automation",
                        image: "/assets/navbar/solutions/sales-automation.webp"
                    }
                ]
            },
            {
                title: "Operations & Intelligence",
                items: [
                    {
                        title: "Business Process Automation",
                        description: "Connect workflows, teams and systems with intelligent automation.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$workflow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Workflow$3e$__["Workflow"],
                        href: "/solutions/business-automation",
                        image: "/assets/navbar/solutions/business-process-automation.webp"
                    },
                    {
                        title: "AI Knowledge Assistant",
                        description: "Give teams instant access to business knowledge and information.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"],
                        href: "/solutions/knowledge-assistant",
                        image: "/assets/navbar/solutions/ai-knowledge-assistant.webp"
                    },
                    {
                        title: "AI Recommendation Systems",
                        description: "Deliver personalized recommendations powered by machine learning.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
                        href: "/solutions/recommendation-systems",
                        image: "/assets/navbar/solutions/ai-recommendation.webp"
                    },
                    {
                        title: "Custom AI Platforms",
                        description: "Build tailored AI platforms around your unique business requirements.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$smartphone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorSmartphone$3e$__["MonitorSmartphone"],
                        href: "/solutions/custom-platforms",
                        image: "/assets/navbar/solutions/custom-ai-platforms.webp"
                    }
                ]
            }
        ]
    },
    /* =========================================================
     EXPERTISE
  ========================================================= */ expertise: {
        title: "Expertise",
        description: "The technologies behind intelligent systems.",
        groups: [
            {
                title: "AI Engineering",
                items: [
                    {
                        title: "Generative AI",
                        description: "Build intelligent experiences powered by modern generative models.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
                        href: "/expertise/generative-ai",
                        image: "/assets/navbar/Ai-development.jpg"
                    },
                    {
                        title: "AI Agents",
                        description: "Autonomous AI systems capable of reasoning and taking action.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"],
                        href: "/expertise/ai-agents",
                        image: "/assets/navbar/expertise/ai-agents.webp"
                    },
                    {
                        title: "RAG Systems",
                        description: "Connect AI models with your private and trusted knowledge.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"],
                        href: "/expertise/rag",
                        image: "/assets/navbar/expertise/rag-systems.webp"
                    },
                    {
                        title: "Machine Learning",
                        description: "Data-driven models designed to solve real business problems.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"],
                        href: "/expertise/machine-learning",
                        image: "/assets/navbar/expertise/machine-learning.webp"
                    }
                ]
            },
            {
                title: "Advanced Systems",
                items: [
                    {
                        title: "Deep Learning",
                        description: "Advanced neural networks for complex data and prediction tasks.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BrainCircuit$3e$__["BrainCircuit"],
                        href: "/expertise/deep-learning",
                        image: "/assets/navbar/expertise/deep-learning.webp"
                    },
                    {
                        title: "Computer Vision",
                        description: "Enable software to understand and analyze visual information.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$monitor$2d$smartphone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MonitorSmartphone$3e$__["MonitorSmartphone"],
                        href: "/expertise/computer-vision",
                        image: "/assets/navbar/expertise/computer-vision.webp"
                    },
                    {
                        title: "Predictive Analytics",
                        description: "Turn business data into forecasts and actionable insights.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"],
                        href: "/expertise/predictive-analytics",
                        image: "/assets/navbar/expertise/predictive-analytics.webp"
                    },
                    {
                        title: "Workflow Automation",
                        description: "Design intelligent workflows that reduce manual operations.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$workflow$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Workflow$3e$__["Workflow"],
                        href: "/expertise/workflow-automation",
                        image: "/assets/navbar/expertise/workflow-automation.webp"
                    }
                ]
            }
        ]
    },
    /* =========================================================
     INDUSTRIES
  ========================================================= */ industries: {
        title: "Industries",
        description: "AI applications tailored to your industry.",
        groups: [
            {
                title: "Industries We Serve",
                items: [
                    {
                        title: "Startups & SaaS",
                        description: "Build and scale intelligent products for fast-moving teams.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"],
                        href: "/industries/startups",
                        image: "/assets/navbar/industries/startups-saas.webp"
                    },
                    {
                        title: "Education",
                        description: "AI-powered platforms for modern learning and education.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
                        href: "/industries/education",
                        image: "/assets/navbar/industries/education.webp"
                    },
                    {
                        title: "Agriculture",
                        description: "Use AI and data to improve agricultural decision-making.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$complex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
                        href: "/industries/agriculture",
                        image: "/assets/navbar/industries/agriculture.webp"
                    },
                    {
                        title: "Healthcare",
                        description: "Intelligent technology for modern healthcare workflows.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__["HeartPulse"],
                        href: "/industries/healthcare",
                        image: "/assets/navbar/industries/healthcare.webp"
                    }
                ]
            },
            {
                title: "Business",
                items: [
                    {
                        title: "Finance",
                        description: "AI solutions for financial analysis, automation and operations.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"],
                        href: "/industries/finance",
                        image: "/assets/navbar/industries/finance.webp"
                    },
                    {
                        title: "Retail & E-commerce",
                        description: "Intelligent experiences for modern retail and commerce.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"],
                        href: "/industries/retail",
                        image: "/assets/navbar/industries/retail-ecommerce.webp"
                    },
                    {
                        title: "Professional Services",
                        description: "Automate knowledge-intensive workflows and client operations.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$complex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
                        href: "/industries/professional-services",
                        image: "/assets/navbar/industries/professional-services.webp"
                    },
                    {
                        title: "SMEs",
                        description: "Practical AI solutions designed for growing businesses.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$complex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
                        href: "/industries/smes",
                        image: "/assets/navbar/industries/smes.webp"
                    }
                ]
            }
        ]
    },
    /* =========================================================
     COMPANY
  ========================================================= */ company: {
        title: "Company",
        description: "Get to know the people and work behind Mentroid.",
        groups: [
            {
                title: "Mentroid",
                items: [
                    {
                        title: "About Mentroid",
                        description: "Learn about Mentroid, our capabilities and what we build.",
                        href: "/about",
                        image: "/assets/navbar/company/about.webp"
                    },
                    {
                        title: "Our Work",
                        description: "Explore the products, systems and experiences we have built.",
                        href: "/work",
                        image: "/assets/navbar/company/work.webp"
                    },
                    {
                        title: "Our Team",
                        description: "Meet the people building intelligent technology at Mentroid.",
                        href: "/team",
                        image: "/assets/navbar/company/team.webp"
                    },
                    {
                        title: "Our Process",
                        description: "See how we move from ideas and problems to working solutions.",
                        href: "/process",
                        image: "/assets/navbar/company/process.webp"
                    }
                ]
            },
            {
                title: "Connect",
                items: [
                    {
                        title: "Careers",
                        description: "Join Mentroid and build the next generation of intelligent systems.",
                        href: "/careers",
                        image: "/assets/navbar/company/careers.webp"
                    },
                    {
                        title: "Contact",
                        description: "Talk with our team about your next AI or software project.",
                        href: "/contact",
                        image: "/assets/navbar/company/contact.webp"
                    }
                ]
            }
        ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1556r3m._.js.map