
"use client";

import { useLayoutEffect, useRef } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Check,
  Database,
  FileText,
  Network,
  Workflow,
  Zap,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stages = [
  {
    id: "01",
    eyebrow: "THE BUSINESS CHALLENGE",
    title: "Start with the",
    accent: "real problem.",
    description:
      "Repetitive enquiries, scattered knowledge and manual handoffs slow teams down. We start by understanding the work that needs to change.",
    video: "/videos/ai.webm",
    inputTitle: "BEFORE MENTROID",
    inputs: ["Manual enquiries", "Scattered information", "Repetitive tasks"],
    outputTitle: "THE OPPORTUNITY",
    outputs: ["Find the bottleneck", "Map the workflow", "Define the outcome"],
    engineLabel: "PROBLEM DISCOVERY",
    tag: "UNDERSTAND",
  },
  {
    id: "02",
    eyebrow: "DATA & INTELLIGENCE",
    title: "Give information",
    accent: "a purpose.",
    description:
      "We connect documents, databases and business tools to give AI systems useful context through retrieval, models and structured knowledge.",
    video: "/videos/agentic-ai.webm",
    inputTitle: "CONNECTED KNOWLEDGE",
    inputs: ["Documents & files", "Databases & CRM", "Business context"],
    outputTitle: "AI CAN UNDERSTAND",
    outputs: ["Retrieve relevant facts", "Ground responses", "Use the right context"],
    engineLabel: "KNOWLEDGE + REASONING",
    tag: "CONNECT",
  },
  {
    id: "03",
    eyebrow: "AGENTS & AUTOMATION",
    title: "Turn insight into",
    accent: "action.",
    description:
      "AI agents connect knowledge to tools and APIs to route requests, update systems and move work forward—with human oversight when needed.",
    video: "/videos/automation.webm",
    inputTitle: "INTELLIGENT WORKFLOW",
    inputs: ["Customer request", "AI agent & tools", "Business rules"],
    outputTitle: "AFTER MENTROID",
    outputs: ["Respond or route", "Trigger an action", "Update the workflow"],
    engineLabel: "TOOLS → ACTIONS",
    tag: "EXECUTE",
  },
];

const inputIcons = [FileText, Database, Workflow];
const outputIcons = [BrainCircuit, Network, Zap];

export default function IntelligenceSystem() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
  const orbitRef = useRef<HTMLDivElement | null>(null);
  const mobileStageRefs = useRef<(HTMLElement  | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;

    if (!section || !pin) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // DESKTOP: PINNED CINEMATIC EXPERIENCE
      mm.add("(min-width: 768px)", () => {
        const sceneElements = stageRefs.current.filter(
          (el): el is HTMLDivElement => el !== null
        );

        const videos = videoRefs.current.filter(
          (el): el is HTMLVideoElement => el !== null
        );

        const progressElements = progressRefs.current.filter(
          (el): el is HTMLDivElement => el !== null
        );

        if (sceneElements.length !== stages.length) return;

        gsap.set(sceneElements, {
          autoAlpha: 0,
          y: 22,
        });

        gsap.set(sceneElements[0], {
          autoAlpha: 1,
          y: 0,
        });

        gsap.set(progressElements, {
          scaleX: 0.25,
          transformOrigin: "left center",
        });

        gsap.set(progressElements[0], {
          scaleX: 1,
        });

        if (orbitRef.current) {
          gsap.to(orbitRef.current, {
            rotation: 360,
            duration: 36,
            repeat: -1,
            ease: "none",
          });
        }

        const activateVideo = (activeIndex: number) => {
          videos.forEach((video, index) => {
            if (index === activeIndex) {
              if (video.paused) {
                void video.play().catch(() => undefined);
              }
            } else {
              video.pause();
            }
          });
        };

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.85,
            pin,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const activeIndex =
                self.progress < 0.34
                  ? 0
                  : self.progress < 0.68
                    ? 1
                    : 2;

              activateVideo(activeIndex);
            },
          },
        });

        // Stage 01 remains visible long enough to read.
        timeline.to({}, { duration: 0.9 });

        timeline.to(sceneElements[0], {
          autoAlpha: 0,
          y: -18,
          duration: 0.35,
          ease: "power2.inOut",
        });

        timeline.to(
          progressElements[0],
          {
            scaleX: 0.25,
            duration: 0.3,
          },
          "<"
        );

        // Stage 02: connect data and knowledge.
        timeline.fromTo(
          sceneElements[1],
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            ease: "power3.out",
          }
        );

        timeline.to(
          progressElements[1],
          { scaleX: 1, duration: 0.4 },
          "<"
        );

        timeline.to({}, { duration: 0.9 });

        timeline.to(sceneElements[1], {
          autoAlpha: 0,
          y: -18,
          duration: 0.35,
          ease: "power2.inOut",
        });

        timeline.to(
          progressElements[1],
          { scaleX: 0.25, duration: 0.3 },
          "<"
        );

        // Stage 03: transform intelligence into action.
        timeline.fromTo(
          sceneElements[2],
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            ease: "power3.out",
          }
        );

        timeline.to(
          progressElements[2],
          { scaleX: 1, duration: 0.4 },
          "<"
        );

        // Hold the final scene before releasing the pin.
        timeline.to({}, { duration: 1.1 });

        activateVideo(0);

        return () => {
          timeline.scrollTrigger?.kill();
          timeline.kill();
          videos.forEach((video) => video.pause());
        };
      });

      // MOBILE: NATURAL FLOW, NO PINNED SCROLL.
      mm.add("(max-width: 767px)", () => {
        const cards = mobileStageRefs.current.filter(
          (el): el is HTMLDivElement => el !== null
        );

        const videos = videoRefs.current.filter(
          (el): el is HTMLVideoElement => el !== null
        );

        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { y: 18, autoAlpha: 0.5 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                once: true,
              },
            }
          );
        });

        videos.forEach((video) => video.pause());

        return () => {
          cards.forEach((card) => gsap.killTweensOf(card));
        };
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => mm.revert();
    }, section);

    return () => {
      ctx.revert();
      videoRefs.current.forEach((video) => video?.pause());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="intelligence-system"
      data-navbar-theme="dark"
      className="
        relative z-20
        -mt-[80px]
        w-full overflow-x-clip
        bg-[#080808] text-white
        sm:-mt-[110px]
        md:-mt-[140px]
        lg:-mt-[170px]
      "
    >
      {/* DESKTOP EXPERIENCE */}
      <div className="hidden md:block">
        <div className="h-[300vh]">
          <div
            ref={pinRef}
            className="
              relative h-[100svh]
              min-h-[680px]
              overflow-hidden
              bg-[#080808]
              px-[5vw]
              pb-8 pt-[7vh]
            "
          >
            {/* Subtle technical grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
                maskImage:
                  "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
              }}
            />

            {/* SECTION HEADING */}
            <div className="relative z-10 flex items-end justify-between gap-10">
              <div className="max-w-[720px]">
                <div className="mb-5 flex items-center gap-3">
                 
                </div>

                <h2 className="text-[clamp(3.2rem,5.5vw,6.2rem)] font-medium leading-[0.88] tracking-[-0.07em]">
                  From business complexity
                  <br />
                  <span className="text-white/35">
                    to intelligent action.
                  </span>
                </h2>
              </div>

              <p className="mb-1 hidden max-w-[300px] text-[13px] leading-6 text-white/50 lg:block">
                Understand the challenge. Connect the knowledge. Build
                systems that help work move forward.
              </p>
            </div>

            {/* CONNECTED BEFORE → AI → AFTER VISUALIZATION */}
            <div className="relative z-10 mt-[5vh] grid h-[min(49vh,470px)] min-h-[370px] grid-cols-[0.92fr_1.2fr_0.92fr] items-stretch gap-5 xl:gap-8">
              {stages.map((stage, index) => {
                const InputIcon = inputIcons[index];
                const OutputIcon = outputIcons[index];

                return (
                  <div
                    key={stage.id}
                    ref={(el) => {
                      stageRefs.current[index] = el;
                    }}
                    className="absolute inset-0 grid grid-cols-[0.92fr_1.2fr_0.92fr] items-stretch gap-5 xl:gap-8"
                  >
                    {/* LEFT: BUSINESS INPUTS */}
                    <div className="flex min-w-0 flex-col justify-center">
                      <div className="mb-4 flex items-center gap-2">
                        <span className="text-[9px] tracking-[0.18em] text-white/30">
                          {stage.id} / INPUT
                        </span>
                        
                      </div>

                      <p className="mb-4 text-[10px] font-medium tracking-[0.15em] text-white/65">
                        {stage.inputTitle}
                      </p>

                      <div className="space-y-2.5">
                        {stage.inputs.map((item, itemIndex) => (
                          <div
                            key={item}
                            className="
                              group flex items-center gap-3
                              border border-white/[0.10]
                              bg-white/[0.025]
                              px-3 py-3.5
                              transition-colors duration-300
                              hover:border-white/25
                              hover:bg-white/[0.05]
                              xl:px-4
                            "
                          >
                            <InputIcon
                              size={15}
                              strokeWidth={1.5}
                              className="shrink-0 text-white/45"
                            />
                            <span className="text-[11px] leading-4 text-white/70 xl:text-xs">
                              {item}
                            </span>
                            <span className="ml-auto text-[8px] text-white/25">
                              0{itemIndex + 1}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 flex items-center gap-2 text-[8px] uppercase tracking-[0.16em] text-white/30">
                        <ArrowDownRight size={13} />
                        <span>Business context</span>
                      </div>
                    </div>

                    {/* CENTER: INTELLIGENCE ENGINE */}
                    <div className="relative flex min-w-0 flex-col items-center justify-center overflow-hidden border border-white/[0.12] bg-[#0d0d0d] px-4 py-5 xl:px-6">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-30"
                        style={{
                          backgroundImage:
                            "radial-gradient(rgba(255,255,255,.28) .7px, transparent .7px)",
                          backgroundSize: "12px 12px",
                        }}
                      />

                      <div className="relative z-10 mb-3 flex w-full items-center justify-between gap-2">
                       
                        <span className="flex items-center gap-1.5 text-[8px] text-white/50">
                          <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                          SYSTEM FLOW
                        </span>
                      </div>

                      <div className="relative flex w-full flex-1 items-center justify-center overflow-hidden">
                        <div className="absolute h-[230px] w-[230px] rounded-full border border-white/[0.09] xl:h-[270px] xl:w-[270px]" />

                        <div
                          ref={orbitRef}
                          className="absolute h-[185px] w-[185px] rounded-full border border-dashed border-white/20 xl:h-[220px] xl:w-[220px]"
                        >
                          <span className="absolute -left-1 top-1/2 h-2 w-2 rounded-full bg-white/70" />
                          <span className="absolute right-5 top-5 h-1.5 w-1.5 rounded-full bg-white/45" />
                        </div>

                        <div className="absolute h-[138px] w-[138px] rounded-full border border-white/[0.14] xl:h-[164px] xl:w-[164px]" />

                        {/* Stage-specific video */}
                        <div className="relative z-10 h-[118px] w-[118px] overflow-hidden rounded-full border border-white/25 bg-black shadow-[0_0_70px_rgba(255,255,255,0.06)] xl:h-[140px] xl:w-[140px]">
                          <video
                            ref={(el) => {
                              videoRefs.current[index] = el;
                            }}
                            src={stage.video}
                            muted
                            loop
                            playsInline
                            preload={index === 0 ? "metadata" : "none"}
                            aria-label={`${stage.tag} visual`}
                            className="absolute inset-0 h-full w-full object-cover opacity-80"
                          />

                          <div className="pointer-events-none absolute inset-0 bg-black/20" />

                          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-center">
                            <BrainCircuit size={23} strokeWidth={1.2} />
                            <span className="text-[8px] uppercase tracking-[0.14em]">
                              AI CORE
                            </span>
                          </div>
                        </div>

                        <span className="absolute left-[7%] top-1/2 h-px w-[18%] bg-gradient-to-r from-transparent via-white/40 to-white/70" />
                        <span className="absolute right-[7%] top-1/2 h-px w-[18%] bg-gradient-to-l from-transparent via-white/40 to-white/70" />
                      </div>

                      <div className="relative z-10 mt-2 w-full border-t border-white/10 pt-3">
                        <p className="text-center text-[9px] uppercase tracking-[0.18em] text-white/70">
                          {stage.engineLabel}
                        </p>
                        <p className="mt-1 text-center text-[9px] leading-4 text-white/35">
                          Data <span className="px-1 text-white/60">/</span>
                          Intelligence <span className="px-1 text-white/60">/</span>
                          Action
                        </p>
                      </div>
                    </div>

                    {/* RIGHT: OUTCOMES */}
                    <div className="flex min-w-0 flex-col justify-center">
                      <div className="mb-4 flex items-center gap-2">
                        <span className="text-[9px] tracking-[0.18em] text-white/30">
                          OUTPUT / {stage.id}
                        </span>
                     
                      </div>

                      <p className="mb-4 text-[10px] font-medium tracking-[0.15em] text-white/65">
                        {stage.outputTitle}
                      </p>

                      <div className="space-y-2.5">
                        {stage.outputs.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-3 border border-white/[0.10] bg-white/[0.025] px-3 py-3.5 xl:px-4"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-white/20 text-white/65">
                              <Check size={11} />
                            </span>
                            <span className="text-[11px] leading-4 text-white/70 xl:text-xs">
                              {item}
                            </span>
                           
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 flex items-center gap-2 text-[8px] uppercase tracking-[0.16em] text-white/30">
                        <ArrowUpRight size={13} />
                        <span>Designed around your workflow</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* SCROLL PROGRESS */}
            <div className="relative z-10 mt-5 flex items-center justify-between gap-6 border-t border-white/[0.12] pt-4">
              <p className="max-w-[320px] text-[10px] leading-5 text-white/40">
                AI should do more than answer. It should help move the work
                forward.
              </p>

              <div className="flex w-[48%] max-w-[520px] items-center gap-5">
                {stages.map((stage, index) => (
                  <div key={stage.id} className="min-w-0 flex-1">
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <span className="text-[8px] tracking-[0.16em] text-white/55">
                        {stage.id}
                      </span>
                      <span className="truncate text-[8px] uppercase tracking-[0.12em] text-white/50">
                        {stage.tag}
                      </span>
                    </div>

                    <div className="h-px overflow-hidden bg-white/15">
                      <div
                        ref={(el) => {
                          progressRefs.current[index] = el;
                        }}
                        className="h-full w-full origin-left bg-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE: NATURAL SCROLLING */}
      <div className="px-5 pb-16 pt-16 sm:px-7 sm:pt-20 md:hidden">
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-3">
          
          </div>

          <h2 className="text-[clamp(2.6rem,11vw,4.4rem)] font-medium leading-[0.9] tracking-[-0.07em]">
            From business complexity
            <br />
            <span className="text-white/35">to intelligent action.</span>
          </h2>

          <p className="mt-5 max-w-[420px] text-[13px] leading-6 text-white/55">
            Understand the challenge. Connect the knowledge. Build systems
            that help work move forward.
          </p>
        </div>

        <div className="space-y-4">
          {stages.map((stage, index) => {
           
            return (
              <article
                key={stage.id}
                ref={(el) => {
                  mobileStageRefs.current[index] = el;
                }}
                className="border border-white/[0.12] bg-white/[0.025] p-4 sm:p-5"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="text-[9px] uppercase tracking-[0.18em] text-white/45">
                    {stage.id} / {stage.tag}
                  </span>
                  <ArrowUpRight size={15} className="text-white/45" />
                </div>

                <h3 className="text-[clamp(2rem,8vw,3rem)] font-medium leading-[0.94] tracking-[-0.06em]">
                  {stage.title}
                  <br />
                  <span className="text-white/35">{stage.accent}</span>
                </h3>

                <p className="mt-4 text-[12px] leading-6 text-white/55">
                  {stage.description}
                </p>

                <div className="relative mt-5 h-[180px] overflow-hidden border border-white/10 bg-black sm:h-[220px]">
                 
<video
  src={stage.video}
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
  aria-label={`${stage.tag} visual`}
  className="block h-full w-full object-cover opacity-80"
/>


                  <div className="absolute inset-0 bg-black/15" />

                 

                  <span className="absolute bottom-3 right-3 text-[8px] tracking-[0.16em] text-white/55">
                    {stage.id} / 03
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div>
                    <p className="mb-3 text-[8px] uppercase tracking-[0.16em] text-white/40">
                      {stage.inputTitle}
                    </p>

                    <div className="space-y-2">
                      {stage.inputs.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2 text-[10px] leading-4 text-white/65"
                        >
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-[8px] uppercase tracking-[0.16em] text-white/40">
                      {stage.outputTitle}
                    </p>

                    <div className="space-y-2">
                      {stage.outputs.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2 text-[10px] leading-4 text-white/65"
                        >
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 flex items-center gap-2 text-[10px] text-white/45">
          <span>Purpose-built AI. Connected to real business workflows.</span>
        </div>
      </div>
    </section>
  );
}
