"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Database,
  Layers3,
  Network,
  Server,
  Workflow,
  Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  {
    number: "01",
    label: "UNDERSTAND",
    title: "We start with the problem.",
    description:
      "Before choosing a model or writing a line of code, we understand the business, the workflow, the users and the data.",
  },
  {
    number: "02",
    label: "DESIGN",
    title: "Then we design the intelligence.",
    description:
      "Models, agents, knowledge, tools and infrastructure are shaped around the real context of the product.",
  },
  {
    number: "03",
    label: "BUILD",
    title: "Intelligence becomes something real.",
    description:
      "We turn architecture into working products, AI experiences and systems that people can actually use.",
  },
  {
    number: "04",
    label: "INTEGRATE",
    title: "Intelligence enters the workflow.",
    description:
      "AI becomes part of the systems your business already uses — connecting people, data, tools and decisions.",
  },
  {
    number: "05",
    label: "DEPLOY",
    title: "From prototype to production.",
    description:
      "We engineer for reliability, security, performance and the realities of production environments.",
  },
  {
    number: "06",
    label: "EVOLVE",
    title: "AI gets better after launch.",
    description:
      "The system keeps learning from real usage, new data and changing business requirements.",
  },
];

export default function HowWeBuild() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const prototypeRef = useRef<HTMLDivElement | null>(null);
  const productionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const frame = frameRef.current;
    const viewport = viewportRef.current;
    const progress = progressRef.current;

    if (!section || !stage || !frame || !viewport || !progress) return;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add(
        {
          desktop: "(min-width: 769px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const conditions = context.conditions as {
            desktop: boolean;
            reduceMotion: boolean;
          };

          const desktop = conditions.desktop;
          const reduceMotion = conditions.reduceMotion;

          const sceneEls = sceneRefs.current.filter(
            Boolean
          ) as HTMLDivElement[];

          const nodes = nodeRefs.current.filter(
            Boolean
          ) as HTMLDivElement[];

          const labels = labelRefs.current.filter(
            Boolean
          ) as HTMLDivElement[];

          /* =========================================================
             REDUCED MOTION
          ========================================================= */

          if (reduceMotion) {
            gsap.set(sceneEls, {
              autoAlpha: 0,
              visibility: "hidden",
            });

            gsap.set(sceneEls[0], {
              autoAlpha: 1,
              visibility: "visible",
            });

            gsap.set(frame, {
              width: desktop ? "72vw" : "calc(100vw - 32px)",
              height: desktop ? "68vh" : "64vh",
            });

            return;
          }

          /* =========================================================
             INITIAL STATE
          ========================================================= */

          // Every scene starts completely invisible.
          // This is the main fix for the overlapping issue.
          gsap.set(sceneEls, {
            autoAlpha: 0,
            visibility: "hidden",
            y: desktop ? 35 : 20,
          });

          // ONLY scene 01 is visible initially.
          gsap.set(sceneEls[0], {
            autoAlpha: 1,
            visibility: "visible",
            y: 0,
          });

          gsap.set(nodes, {
            scale: 0,
            opacity: 0,
          });

          gsap.set(labels, {
            opacity: 0,
            y: 20,
          });

          gsap.set(prototypeRef.current, {
            opacity: 0,
            y: 80,
            scale: 0.92,
          });

          gsap.set(productionRef.current, {
            opacity: 0,
            scale: 0.82,
          });

          gsap.set(".design-layer", {
            opacity: 0,
            scale: 0.9,
          });

          gsap.set(".integration-window", {
            opacity: 0,
            scale: 0.82,
          });

          gsap.set(".evolve-piece", {
            opacity: 0,
            scale: 0.8,
          });

          gsap.set(".final-build-statement", {
            autoAlpha: 0,
            visibility: "hidden",
            y: 40,
          });

          /* =========================================================
             MAIN TIMELINE
          ========================================================= */

          const tl = gsap.timeline({
            defaults: {
              ease: "power3.inOut",
            },

            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "bottom bottom",
              pin: stage,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          /* =========================================================
             OPENING
          ========================================================= */

          tl.to(
            ".how-build-intro",
            {
              autoAlpha: 0,
              y: -40,
              duration: 0.8,
            },
            0.7
          );

          tl.to(
            frame,
            {
              width: desktop ? "72vw" : "calc(100vw - 32px)",
              height: desktop ? "68vh" : "64vh",
              duration: 1,
            },
            0.4
          );

          /* =========================================================
             SCENE 01 — UNDERSTAND
          ========================================================= */

          tl.to(
            nodes.slice(0, 4),
            {
              scale: 1,
              opacity: 1,
              stagger: 0.08,
              duration: 0.5,
            },
            1.1
          );

          tl.to(
            labels.slice(0, 5),
            {
              opacity: 1,
              y: 0,
              stagger: 0.08,
              duration: 0.5,
            },
            1.2
          );

          tl.to(
            nodes.slice(0, 4),
            {
              x: desktop
                ? (i) => [190, -170, 150, -130][i]
                : (i) => [80, -70, 65, -55][i],

              y: desktop
                ? (i) => [-100, -50, 100, 80][i]
                : (i) => [-60, -35, 60, 45][i],

              duration: 0.9,
              stagger: 0.04,
            },
            1.8
          );

          /* =========================================================
             TRANSITION 01 → 02

             IMPORTANT:
             Scene 01 is fully hidden BEFORE Scene 02 appears.
          ========================================================= */

          tl.to(
            sceneEls[0],
            {
              autoAlpha: 0,
              visibility: "hidden",
              y: -30,
              duration: 0.35,
            },
            2.8
          );

          tl.set(sceneEls[1], {
            autoAlpha: 1,
            visibility: "visible",
            y: 30,
          });

          tl.to(sceneEls[1], {
            y: 0,
            duration: 0.45,
          });

          /* =========================================================
             SCENE 02 — DESIGN
          ========================================================= */

          tl.to(
            nodes.slice(0, 4),
            {
              x: 0,
              y: 0,
              scale: 0.7,
              opacity: 0.2,
              duration: 0.6,
            },
            "<"
          );

          tl.to(
            ".design-layer",
            {
              opacity: 1,
              scale: 1,
              duration: 0.7,
            },
            "<0.1"
          );

          /* =========================================================
             TRANSITION 02 → 03
          ========================================================= */

          tl.to(
            sceneEls[1],
            {
              autoAlpha: 0,
              visibility: "hidden",
              y: -30,
              duration: 0.35,
            },
            "+=0.7"
          );

          tl.set(sceneEls[2], {
            autoAlpha: 1,
            visibility: "visible",
            y: 30,
          });

          tl.to(sceneEls[2], {
            y: 0,
            duration: 0.45,
          });

          /* =========================================================
             SCENE 03 — BUILD
          ========================================================= */

          tl.to(
            frame,
            {
              backgroundColor: "#f4f4f1",
              borderColor: "rgba(0,0,0,0.12)",
              color: "#090909",
              borderRadius: "0px",
              duration: 0.7,
            },
            "<"
          );

          tl.to(
            prototypeRef.current,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.85,
              ease: "power4.out",
            },
            "<0.1"
          );

          /* =========================================================
             TRANSITION 03 → 04
          ========================================================= */

          tl.to(
            sceneEls[2],
            {
              autoAlpha: 0,
              visibility: "hidden",
              y: -30,
              duration: 0.35,
            },
            "+=0.8"
          );

          tl.set(sceneEls[3], {
            autoAlpha: 1,
            visibility: "visible",
            y: 30,
          });

          tl.to(sceneEls[3], {
            y: 0,
            duration: 0.45,
          });

          /* =========================================================
             SCENE 04 — INTEGRATE
          ========================================================= */

          tl.to(
            prototypeRef.current,
            {
              scale: desktop ? 0.72 : 0.76,
              x: desktop ? -170 : 0,
              y: desktop ? 10 : 0,
              duration: 0.7,
            },
            "<"
          );

          tl.to(
            ".integration-window",
            {
              opacity: 1,
              scale: 1,

              x: (i) =>
                desktop
                  ? [220, -190, 180, -140][i]
                  : [0, 0, 0, 0][i],

              y: (i) =>
                desktop
                  ? [-90, -60, 80, 100][i]
                  : [-100, -35, 35, 100][i],

              stagger: 0.1,
              duration: 0.75,
            },
            "<0.15"
          );

          /* =========================================================
             TRANSITION 04 → 05
          ========================================================= */

          tl.to(
            sceneEls[3],
            {
              autoAlpha: 0,
              visibility: "hidden",
              y: -30,
              duration: 0.35,
            },
            "+=0.8"
          );

          tl.set(sceneEls[4], {
            autoAlpha: 1,
            visibility: "visible",
            y: 30,
          });

          tl.to(sceneEls[4], {
            y: 0,
            duration: 0.45,
          });

          /* =========================================================
             SCENE 05 — DEPLOY
          ========================================================= */

          tl.to(
            ".integration-window",
            {
              opacity: 0,
              scale: 0.7,
              duration: 0.45,
              stagger: 0.04,
            },
            "<"
          );

          tl.to(
            frame,
            {
              width: desktop ? "92vw" : "calc(100vw - 20px)",
              height: desktop ? "82vh" : "72vh",
              borderRadius: "0px",
              duration: 0.9,
            },
            "<0.1"
          );

          tl.to(
            prototypeRef.current,
            {
              opacity: 0,
              scale: 1.3,
              duration: 0.6,
            },
            "<"
          );

          tl.to(
            productionRef.current,
            {
              opacity: 1,
              scale: 1,
              duration: 0.85,
              ease: "power4.out",
            },
            "<0.15"
          );

          /* =========================================================
             TRANSITION 05 → 06
          ========================================================= */

          tl.to(
            sceneEls[4],
            {
              autoAlpha: 0,
              visibility: "hidden",
              y: -30,
              duration: 0.35,
            },
            "+=0.8"
          );

          tl.set(sceneEls[5], {
            autoAlpha: 1,
            visibility: "visible",
            y: 30,
          });

          tl.to(sceneEls[5], {
            y: 0,
            duration: 0.45,
          });

          /* =========================================================
             SCENE 06 — EVOLVE
          ========================================================= */

          tl.to(
            productionRef.current,
            {
              scale: desktop ? 0.82 : 0.78,
              opacity: 0.12,
              duration: 0.6,
            },
            "<"
          );

          tl.to(
            ".evolve-piece",
            {
              opacity: 1,
              scale: 1,

              x: (i) =>
                desktop
                  ? [260, -280, 210, -230, 100, -110][i]
                  : [70, -65, 50, -45, 30, -25][i],

              y: (i) =>
                desktop
                  ? [-150, -100, 120, 160, -180, 180][i]
                  : [-140, -100, 90, 130, -150, 150][i],

              stagger: 0.06,
              duration: 0.85,
            },
            "<0.15"
          );

          /* =========================================================
             FINAL FRAME
          ========================================================= */

          tl.to(
            frame,
            {
              width: "100vw",
              height: "100vh",
              borderColor: "rgba(255,255,255,0.14)",
              backgroundColor: "#050505",
              color: "#ffffff",
              duration: 1,
            },
            "+=0.4"
          );

          tl.to(
            ".evolve-piece",
            {
              x: 0,
              y: 0,
              scale: 1,
              opacity: 0.18,
              stagger: 0.04,
              duration: 0.7,
            },
            "<"
          );

          tl.to(
            ".final-build-statement",
            {
              autoAlpha: 1,
              visibility: "visible",
              y: 0,
              duration: 0.85,
              ease: "power4.out",
            },
            "+=0.1"
          );

          /* =========================================================
             PROGRESS
          ========================================================= */

          tl.to(
            progress,
            {
              scaleY: 1,
              duration: tl.duration(),
              ease: "none",
            },
            0
          );

          requestAnimationFrame(() => {
            ScrollTrigger.refresh();
          });
        }
      );
    }, section);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-we-build"
      className="relative h-[1000vh] bg-[#050505] text-white"
    >
      <div
        ref={stageRef}
        className="relative flex h-screen w-full items-center justify-center overflow-hidden"
      >
        {/* =========================================================
            TOP META
        ========================================================= */}

        <div className="pointer-events-none absolute left-6 top-6 z-[100] flex items-center gap-3 md:left-10 md:top-10">
          <span className="text-[10px] font-medium tracking-[0.28em] text-white/45">
            07
          </span>

          <span className="h-px w-8 bg-white/20" />

          <span className="text-[10px] font-medium tracking-[0.28em] text-white/55">
            HOW WE BUILD
          </span>
        </div>

        {/* =========================================================
            PROGRESS
        ========================================================= */}

        <div className="pointer-events-none absolute right-5 top-1/2 z-[100] hidden h-28 w-px -translate-y-1/2 bg-white/10 md:right-10 md:block">
          <div
            ref={progressRef}
            className="h-full w-full origin-top scale-y-0 bg-white"
          />
        </div>

        {/* =========================================================
            INTRO
        ========================================================= */}

        <div className="how-build-intro pointer-events-none absolute inset-x-6 top-[18%] z-30 md:left-[9vw] md:right-auto md:top-[21%]">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
            The system behind the system
          </p>

          <h2 className="max-w-[900px] text-[clamp(42px,7vw,104px)] font-medium leading-[0.92] tracking-[-0.055em]">
            Good AI doesn&apos;t
            <br />
            start with a model.
            <br />
            <span className="text-white/35">
              It starts with context.
            </span>
          </h2>
        </div>

        {/* =========================================================
            MAIN FRAME
        ========================================================= */}

        <div
          ref={frameRef}
          className="relative z-10 flex h-[58vh] w-[86vw] items-center justify-center overflow-hidden border border-white/15 bg-[#080808] text-white"
        >
          <div
            ref={viewportRef}
            className="relative h-full w-full overflow-hidden"
          >
            {/* =====================================================
                CORNER MARKS
            ===================================================== */}

            <span className="absolute left-0 top-0 z-40 h-5 w-px bg-current/40" />
            <span className="absolute left-0 top-0 z-40 h-px w-5 bg-current/40" />

            <span className="absolute right-0 top-0 z-40 h-5 w-px bg-current/40" />
            <span className="absolute right-0 top-0 z-40 h-px w-5 bg-current/40" />

            <span className="absolute bottom-0 left-0 z-40 h-5 w-px bg-current/40" />
            <span className="absolute bottom-0 left-0 z-40 h-px w-5 bg-current/40" />

            <span className="absolute bottom-0 right-0 z-40 h-5 w-px bg-current/40" />
            <span className="absolute bottom-0 right-0 z-40 h-px w-5 bg-current/40" />

            {/* =====================================================
                SCENES
            ===================================================== */}

            {scenes.map((scene, index) => (
              <div
                key={scene.number}
                ref={(el) => {
                  sceneRefs.current[index] = el;
                }}
                className="invisible absolute inset-0 z-20 opacity-0"
              >
                {/* =================================================
                    SCENE HEADER
                ================================================= */}

                <div className="absolute left-6 top-6 max-w-[280px] md:left-10 md:top-10 md:max-w-[390px]">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="text-[10px] tracking-[0.25em] text-current/40">
                      {scene.number}
                    </span>

                    <span className="h-px w-7 bg-current/20" />

                    <span className="text-[10px] tracking-[0.25em] text-current/55">
                      {scene.label}
                    </span>
                  </div>

                  <h3 className="text-[clamp(30px,4vw,62px)] font-medium leading-[0.96] tracking-[-0.045em]">
                    {scene.title}
                  </h3>

                  <p className="mt-5 max-w-[370px] text-[13px] leading-[1.7] text-current/50 md:text-[14px]">
                    {scene.description}
                  </p>
                </div>

                {/* =================================================
                    UNDERSTAND
                ================================================= */}

                {index === 0 && (
                  <div className="absolute inset-0">
                    <div className="absolute left-1/2 top-1/2 h-px w-[58%] -translate-x-1/2 bg-current/10" />

                    <div className="absolute left-1/2 top-1/2 h-[58%] w-px -translate-x-1/2 bg-current/10" />

                    {[
                      {
                        text: "BUSINESS",
                        icon: <Layers3 size={14} />,
                      },
                      {
                        text: "WORKFLOW",
                        icon: <Workflow size={14} />,
                      },
                      {
                        text: "USERS",
                        icon: <Network size={14} />,
                      },
                      {
                        text: "DATA",
                        icon: <Database size={14} />,
                      },
                    ].map((item, i) => (
                      <div
                        key={item.text}
                        ref={(el) => {
                          nodeRefs.current[i] = el;
                        }}
                        className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 border border-current/15 bg-current/[0.035] px-4 py-3 ${
                          i === 0
                            ? "-ml-[230px] -mt-[110px]"
                            : i === 1
                            ? "ml-[70px] -mt-[80px]"
                            : i === 2
                            ? "-ml-[210px] mt-[80px]"
                            : "ml-[80px] mt-[110px]"
                        }`}
                      >
                        <span className="opacity-45">
                          {item.icon}
                        </span>

                        <span className="text-[9px] tracking-[0.2em] opacity-65">
                          {item.text}
                        </span>
                      </div>
                    ))}

                    {[
                      "CONTEXT",
                      "CONSTRAINTS",
                      "OBJECTIVES",
                      "REALITY",
                      "OUTCOMES",
                    ].map((label, i) => (
                      <div
                        key={label}
                        ref={(el) => {
                          labelRefs.current[i] = el;
                        }}
                        className={`absolute text-[9px] tracking-[0.2em] text-current/30 ${
                          i === 0
                            ? "bottom-[20%] left-[18%]"
                            : i === 1
                            ? "right-[18%] top-[25%]"
                            : i === 2
                            ? "bottom-[28%] right-[25%]"
                            : i === 3
                            ? "left-[26%] top-[27%]"
                            : "bottom-[18%] left-[46%]"
                        }`}
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                )}

                {/* =================================================
                    DESIGN
                ================================================= */}

                {index === 1 && (
                  <div className="design-layer absolute inset-0">
                    <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-current/15" />

                    <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-current/10" />

                    <div className="absolute left-1/2 top-1/2 flex h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-current/20 bg-current/[0.04]">
                      <BrainCircuit
                        size={32}
                        strokeWidth={1}
                        className="opacity-70"
                      />
                    </div>

                    {[
                      ["MODEL", "top-[24%] left-[48%]"],
                      ["AGENT", "top-[42%] right-[19%]"],
                      ["KNOWLEDGE", "bottom-[24%] right-[30%]"],
                      ["TOOLS", "bottom-[26%] left-[25%]"],
                      [
                        "INFRASTRUCTURE",
                        "top-[39%] left-[18%]",
                      ],
                    ].map(([text, position]) => (
                      <div
                        key={text}
                        className={`absolute ${position} text-[9px] tracking-[0.22em] text-current/45`}
                      >
                        {text}
                      </div>
                    ))}

                    <div className="absolute left-1/2 top-1/2 h-px w-[62%] -translate-x-1/2 bg-current/10" />
                  </div>
                )}

                {/* =================================================
                    BUILD
                ================================================= */}

                {index === 2 && (
                  <div
                    ref={prototypeRef}
                    className="absolute left-1/2 top-[56%] w-[78%] -translate-x-1/2 -translate-y-1/2 md:w-[58%]"
                  >
                    <div className="overflow-hidden border border-black/10 bg-white shadow-[0_40px_100px_rgba(0,0,0,0.12)]">
                      <div className="flex h-9 items-center justify-between border-b border-black/10 px-4">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-black/20" />
                          <span className="h-2 w-2 rounded-full bg-black/10" />
                          <span className="h-2 w-2 rounded-full bg-black/10" />
                        </div>

                        <span className="text-[8px] tracking-[0.2em] text-black/35">
                          MENTROID / SYSTEM
                        </span>
                      </div>

                      <div className="grid min-h-[250px] grid-cols-12">
                        <div className="col-span-3 border-r border-black/10 p-4">
                          <div className="space-y-4">
                            <div className="h-2 w-14 bg-black/10" />
                            <div className="h-2 w-10 bg-black/5" />
                            <div className="h-2 w-12 bg-black/5" />
                            <div className="h-2 w-8 bg-black/5" />
                          </div>
                        </div>

                        <div className="col-span-9 p-5">
                          <div className="mb-6 flex items-end justify-between">
                            <div>
                              <p className="text-[8px] tracking-[0.2em] text-black/30">
                                INTELLIGENCE
                              </p>

                              <div className="mt-2 h-5 w-32 bg-black/80" />
                            </div>

                            <div className="h-8 w-8 border border-black/10" />
                          </div>

                          <div className="grid grid-cols-3 gap-3">
                            {[1, 2, 3].map((item) => (
                              <div
                                key={item}
                                className="h-24 border border-black/10 p-3"
                              >
                                <div className="h-2 w-8 bg-black/10" />

                                <div className="mt-8 h-8 w-full bg-black/[0.04]" />
                              </div>
                            ))}
                          </div>

                          <div className="mt-4 h-14 border border-black/10" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* =================================================
                    INTEGRATE
                ================================================= */}

                {index === 3 && (
                  <div className="absolute inset-0">
                    {[
                      {
                        title: "CRM",
                        icon: <Layers3 size={16} />,
                      },
                      {
                        title: "WHATSAPP",
                        icon: <Workflow size={16} />,
                      },
                      {
                        title: "DATABASE",
                        icon: <Database size={16} />,
                      },
                      {
                        title: "INTERNAL TOOLS",
                        icon: <Server size={16} />,
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="integration-window absolute left-1/2 top-[52%] flex h-[110px] w-[150px] -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-current/15 bg-current/[0.025]"
                      >
                        <div className="text-center">
                          <div className="mb-3 flex justify-center opacity-45">
                            {item.icon}
                          </div>

                          <span className="text-[8px] tracking-[0.2em] text-current/50">
                            {item.title}
                          </span>
                        </div>
                      </div>
                    ))}

                    <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-current/25 bg-current/[0.04]">
                      <Zap
                        size={24}
                        strokeWidth={1}
                        className="opacity-70"
                      />
                    </div>
                  </div>
                )}

                {/* =================================================
                    DEPLOY
                ================================================= */}

                {index === 4 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      ref={productionRef}
                      className="text-center"
                    >
                      <div className="mb-6 flex items-center justify-center gap-3">
                        <span className="h-px w-10 bg-current/20" />

                        <span className="text-[9px] tracking-[0.3em] text-current/40">
                          PRODUCTION
                        </span>

                        <span className="h-px w-10 bg-current/20" />
                      </div>

                      <div className="text-[clamp(55px,10vw,150px)] font-medium leading-[0.82] tracking-[-0.07em]">
                        <span className="block text-current/25">
                          FROM
                        </span>

                        <span className="block">
                          PROTOTYPE
                        </span>

                        <span className="my-3 block text-current/20">
                          TO
                        </span>

                        <span className="block">
                          PRODUCTION.
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* =================================================
                    EVOLVE
                ================================================= */}

                {index === 5 && (
                  <div className="absolute inset-0">
                    {[
                      "MODELS",
                      "AGENTS",
                      "DATA",
                      "WORKFLOWS",
                      "PRODUCT",
                      "AUTOMATION",
                    ].map((item, i) => (
                      <div
                        key={item}
                        className={`evolve-piece absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] tracking-[0.24em] text-current ${
                          i % 2 === 0
                            ? "border border-current/15 px-4 py-3"
                            : ""
                        }`}
                      >
                        {item}
                      </div>
                    ))}

                    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
                      <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-8 bg-current/20" />

                        <span className="text-[9px] tracking-[0.3em] text-current/40">
                          CONTINUOUS INTELLIGENCE
                        </span>

                        <span className="h-px w-8 bg-current/20" />
                      </div>

                      <div className="max-w-[700px] text-[clamp(38px,6vw,86px)] font-medium leading-[0.9] tracking-[-0.055em]">
                        AI gets better
                        <br />
                        after it goes live.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* =====================================================
                FINAL STATEMENT
            ===================================================== */}

            <div className="final-build-statement pointer-events-none invisible absolute inset-0 z-[60] flex translate-y-10 flex-col items-center justify-center text-center opacity-0">
              <p className="mb-6 text-[9px] tracking-[0.32em] text-white/35">
                MENTROID / HOW WE BUILD
              </p>

              <h3 className="max-w-[900px] text-[clamp(48px,8vw,120px)] font-medium leading-[0.86] tracking-[-0.065em]">
                From intelligence
                <br />
                <span className="text-white/30">
                  to impact.
                </span>
              </h3>

              <div className="mt-8 flex items-center gap-3 text-[9px] tracking-[0.25em] text-white/35">
                <span>07</span>
                <ArrowDownRight size={12} />
                <span>PROOF</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM META
        ========================================================= */}

        <div className="pointer-events-none absolute bottom-6 left-6 z-[100] flex items-center gap-3 md:bottom-10 md:left-10">
          <span className="text-[9px] tracking-[0.22em] text-white/25">
            ENGINEERED AROUND CONTEXT
          </span>

          <ArrowUpRight
            size={12}
            className="text-white/30"
          />
        </div>

        <div className="pointer-events-none absolute bottom-6 right-6 z-[100] hidden items-center gap-3 md:bottom-10 md:right-10 md:flex">
          <span className="text-[9px] tracking-[0.22em] text-white/25">
            SCROLL TO BUILD
          </span>

          <span className="h-px w-8 bg-white/15" />
        </div>
      </div>
    </section>
  );
}