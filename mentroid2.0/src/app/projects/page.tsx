"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ============================================================
   DATA
============================================================ */

type Project = {
  category: string;
  title: string;
  description: string;
  tags: string[];
  accent: string; // hex
};

const projects: Project[] = [
  {
    category: "Agentic AI · Customer Ops",
    title: "Aether",
    description:
      "An autonomous support agent that resolves tickets end to end.",
    tags: ["Tool Use", "Zendesk"],
    accent: "#FF8A4C",
  },
  {
    category: "RAG · Enterprise Search",
    title: "Pulse",
    description: "Instant, cited answers pulled from every internal doc.",
    tags: ["Vector Search", "SSO"],
    accent: "#4CD3FF",
  },
  {
    category: "Automation · Operations",
    title: "Forge",
    description: "CRM, finance and logistics wired into one self-running flow.",
    tags: ["Workflow Engine", "ERP"],
    accent: "#B98CFF",
  },
  {
    category: "Copilot · Revenue",
    title: "Nova",
    description: "Drafts outreach, scores leads, preps reps before every call.",
    tags: ["Lead Scoring", "Voice"],
    accent: "#FF5C8A",
  },
  {
    category: "Agentic AI · Infrastructure",
    title: "Relay",
    description: "Specialized agents hand off work without losing context.",
    tags: ["Agent Mesh", "Observability"],
    accent: "#4CFFB0",
  },
];

const CARD_COUNT = projects.length;

/* ============================================================
   DETERMINISTIC PSEUDO-RANDOM (avoids hydration mismatch)
============================================================ */

function seeded(n: number) {
  let t = (n += 0x6d2b79f5);
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

/* Off-screen entry vector for each card: unique direction, rotation, scale, blur */
const ENTRY = [
  { x: -900, y: -60, rotate: -38, scale: 0.55, blur: 10 },
  { x: 40, y: -820, rotate: 22, scale: 1.5, blur: 8 },
  { x: 940, y: 40, rotate: 44, scale: 0.5, blur: 12 },
  { x: -60, y: 860, rotate: -30, scale: 1.4, blur: 9 },
  { x: 760, y: -680, rotate: 16, scale: 0.7, blur: 11 },
];

/* Resting fan offsets once the whole deck has landed (idle state) */
const FAN = [
  { x: -30, y: 16, rotate: -10 },
  { x: -15, y: 6, rotate: -5 },
  { x: 0, y: 0, rotate: 0 },
  { x: 16, y: -6, rotate: 5.5 },
  { x: 32, y: -14, rotate: 10.5 },
];

/* Wider spread offsets shown on hover of the whole deck */
const SPREAD = [
  { x: -190, y: 28, rotate: -16 },
  { x: -96, y: -4, rotate: -8 },
  { x: 0, y: -18, rotate: 0 },
  { x: 98, y: -4, rotate: 8 },
  { x: 196, y: 28, rotate: 16 },
];

const STAGGER = 0.5;
const PARTICLES_PER_CARD = 9;

export default function OurProjectsStack() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const shakeRef = useRef<HTMLDivElement | null>(null);
  const groundRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const eyebrowRef = useRef<HTMLSpanElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const particleGroupRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isSpread = useRef(false);

  const particleSets = useMemo(
    () =>
      Array.from({ length: CARD_COUNT }, (_, c) =>
        Array.from({ length: PARTICLES_PER_CARD }, (_, i) => {
          const seed = c * 97 + i * 13.7;
          const angle = seeded(seed) * Math.PI * 2;
          const distance = 40 + seeded(seed * 1.7) * 130;
          const size = 2 + seeded(seed * 2.3) * 4;
          return { id: i, angle, distance, size };
        })
      ),
    []
  );

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

      if (prefersReducedMotion) {
        gsap.set(cards, { autoAlpha: 1, x: 0, y: 0, rotate: 0, scale: 1, filter: "blur(0px)" });
        cards.forEach((_, i) => {
          gsap.set(cardRefs.current[i], { x: FAN[i].x, y: FAN[i].y, rotate: FAN[i].rotate });
        });
        gsap.set([eyebrowRef.current, headingRef.current], { autoAlpha: 1, y: 0 });
        return;
      }

      /* ----------------------------------------------------
         INITIAL STATES
      ---------------------------------------------------- */
      gsap.set(eyebrowRef.current, { autoAlpha: 0, y: 14 });
      gsap.set(headingRef.current, { autoAlpha: 0, y: 34 });
      gsap.set(groundRef.current, { autoAlpha: 0, scaleX: 0.4 });
      gsap.set(glowRef.current, { autoAlpha: 0, scale: 0.6 });
      gsap.set(stageRef.current, { scale: 1.08 });

      cards.forEach((card, i) => {
        gsap.set(card, {
          autoAlpha: 0,
          x: ENTRY[i].x,
          y: ENTRY[i].y,
          rotate: ENTRY[i].rotate,
          scale: ENTRY[i].scale,
          filter: `blur(${ENTRY[i].blur}px)`,
          zIndex: 10 + i,
        });
        gsap.set(particleGroupRefs.current[i], { autoAlpha: 0 });
      });

      /* ----------------------------------------------------
         MASTER TIMELINE — fires once as the deck enters view
      ---------------------------------------------------- */
      const tl = gsap.timeline({
  paused: true,
  defaults: { overwrite: "auto" },
});

ScrollTrigger.create({
  trigger: section,
  start: "top 68%",
  onEnter: () => tl.restart(),
  onEnterBack: () => tl.restart(),
});

      // header
      tl.to(eyebrowRef.current, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out" }, 0)
        .to(headingRef.current, { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out" }, 0.08)
        .to(glowRef.current, { autoAlpha: 0.8, scale: 1, duration: 1, ease: "power2.out" }, 0.1)
        .to(groundRef.current, { autoAlpha: 0.5, scaleX: 0.6, duration: 0.6, ease: "power2.out" }, 0.15)
        // slow camera drift in across the whole sequence
        .to(stageRef.current, { scale: 1, duration: CARD_COUNT * STAGGER + 1.6, ease: "power2.out" }, 0.1);

      cards.forEach((card, i) => {
        const start = 0.35 + i * STAGGER;
        const accent = projects[i].accent;

        // flight in — fast, motion-blurred approach toward the stack center
        tl.to(
          card,
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            rotate: ENTRY[i].rotate * 0.15,
            scale: 1.08,
            filter: "blur(0px)",
            duration: 0.5,
            ease: "power3.in",
          },
          start
        )
          // spring impact — overshoot then settle
          .to(
            card,
            {
              scale: 1,
              rotate: 0,
              duration: 0.5,
              ease: "elastic.out(1, 0.5)",
            },
            start + 0.5
          )
          // camera shake on impact, diminishing per card
          .to(
            shakeRef.current,
            {
              keyframes: {
                x: [0, -6 + i, 5 - i * 0.6, -3, 0],
                y: [0, 3, -3, 1, 0],
              },
              duration: 0.4,
              ease: "power2.out",
            },
            start + 0.48
          )
          // ground contact shadow pulses wider with every landing
          .to(
            groundRef.current,
            { scaleX: 0.62 + i * 0.09, autoAlpha: 0.55, duration: 0.35, ease: "power2.out" },
            start + 0.48
          )
          // impact glow flash colored per project
          .fromTo(
            card,
            { boxShadow: `0 0 0px 0px ${accent}00` },
            {
              boxShadow: `0 0 70px 6px ${accent}55`,
              duration: 0.18,
              ease: "power2.out",
              onComplete: () => {
                gsap.to(card, { boxShadow: `0 18px 60px -12px rgba(0,0,0,0.6)`, duration: 0.5 });
              },
            },
            start + 0.5
          )
          // particle burst at the point of impact
          .fromTo(
            particleGroupRefs.current[i],
            { autoAlpha: 1 },
            { autoAlpha: 0, duration: 0.6, ease: "power1.out" },
            start + 0.48
          );

        particleSets[i].forEach((p, pi) => {
          const el = particleGroupRefs.current[i]?.children[pi] as HTMLElement | undefined;
          if (!el) return;
          const dx = Math.cos(p.angle) * p.distance;
          const dy = Math.sin(p.angle) * p.distance;
          gsap.set(el, { x: 0, y: 0, scale: 0.3, autoAlpha: 0 });
          tl.to(
            el,
            { x: dx, y: dy, scale: 1, autoAlpha: 1, duration: 0.35, ease: "power2.out" },
            start + 0.48
          ).to(
            el,
            { autoAlpha: 0, scale: 0.4, duration: 0.35, ease: "power1.in" },
            start + 0.75
          );
        });
      });

      // deck settles from a tight stack into its resting fan
      const fanStart = 0.35 + (CARD_COUNT - 1) * STAGGER + 0.95;
      cards.forEach((card, i) => {
        tl.to(
          card,
          {
            x: FAN[i].x,
            y: FAN[i].y,
            rotate: FAN[i].rotate,
            duration: 0.8,
            ease: "power3.out",
          },
          fanStart + i * 0.05
        );
      });
      tl.to(groundRef.current, { scaleX: 1, autoAlpha: 0.6, duration: 0.8, ease: "power3.out" }, fanStart);
    }, section);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ----------------------------------------------------
     INTERACTIVE DECK — hover to spread, hover a card to lift it
  ---------------------------------------------------- */
  const spreadDeck = () => {
    if (isSpread.current) return;
    isSpread.current = true;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      gsap.to(card, {
        x: SPREAD[i].x,
        y: SPREAD[i].y,
        rotate: SPREAD[i].rotate,
        duration: 0.6,
        ease: "power3.out",
        overwrite: "auto",
      });
    });
  };

  const collapseDeck = () => {
    if (!isSpread.current) return;
    isSpread.current = false;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      gsap.to(card, {
        x: FAN[i].x,
        y: FAN[i].y,
        rotate: FAN[i].rotate,
        scale: 1,
        duration: 0.5,
        ease: "power3.inOut",
        overwrite: "auto",
      });
    });
  };

  const liftCard = (i: number) => {
    const card = cardRefs.current[i];
    if (!card) return;
    gsap.to(card, {
      y: (isSpread.current ? SPREAD[i].y : FAN[i].y) - 22,
      scale: 1.04,
      zIndex: 40,
      duration: 0.35,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const dropCard = (i: number) => {
    const card = cardRefs.current[i];
    if (!card) return;
    const base = isSpread.current ? SPREAD[i] : FAN[i];
    gsap.to(card, {
      y: base.y,
      scale: 1,
      zIndex: 10 + i,
      duration: 0.35,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full max-w-full overflow-hidden bg-black py-28 md:py-36"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-14">
        <div className="mb-20 max-w-[640px] md:mb-28">
          <span
            ref={eyebrowRef}
            className="mb-5 block text-[10px] font-medium uppercase tracking-[0.25em] text-white/50"
          >
            Our Projects
          </span>
          <h2
            ref={headingRef}
            className="text-[clamp(2.6rem,6vw,3.8rem)] font-medium leading-[0.95] tracking-[-0.06em] text-white"
          >
            One deck.
            <span className="block text-white/60">Five proofs of intelligence.</span>
          </h2>
        </div>

        {/* ====================================================
            STAGE
        ==================================================== */}
        <div
          ref={stageRef}
          className="relative mx-auto flex h-[460px] w-full max-w-[380px] items-center justify-center sm:h-[500px] sm:max-w-[400px]"
          style={{ perspective: "1600px" }}
        >
          {/* ambient glow behind the deck */}
          <div
            ref={glowRef}
            className="pointer-events-none absolute h-[520px] w-[520px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(120,110,255,0.06) 45%, rgba(0,0,0,0) 72%)",
              filter: "blur(20px)",
            }}
          />

          <div ref={shakeRef} className="relative h-full w-full">
            {/* deck, hover to spread */}
            <div
              className="absolute inset-0"
              style={{ transformStyle: "preserve-3d" }}
              onMouseEnter={spreadDeck}
              onMouseLeave={collapseDeck}
            >
              {projects.map((project, i) => (
                <div
                  key={project.title}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  onMouseEnter={() => liftCard(i)}
                  onMouseLeave={() => dropCard(i)}
                  className="absolute inset-0 flex cursor-pointer flex-col justify-between border border-white/10 bg-[#0a0a0c] p-7 will-change-transform"
                  style={{
                    transformStyle: "preserve-3d",
                    boxShadow: "0 18px 60px -12px rgba(0,0,0,0.6)",
                  }}
                >
                  {/* particle burst layer, local to this card */}
                  <div
                    ref={(el) => {
                      particleGroupRefs.current[i] = el;
                    }}
                    className="pointer-events-none absolute left-1/2 top-1/2 h-0 w-0"
                  >
                    {particleSets[i].map((p) => (
                      <div
                        key={p.id}
                        className="absolute rounded-full"
                        style={{
                          width: `${p.size}px`,
                          height: `${p.size}px`,
                          background: project.accent,
                          boxShadow: `0 0 6px 1px ${project.accent}99`,
                        }}
                      />
                    ))}
                  </div>

                  {/* per-card accent wash */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-60"
                    style={{
                      background: `radial-gradient(420px circle at 20% 0%, ${project.accent}14, transparent 60%)`,
                    }}
                  />

                  <div className="relative">
                    <div className="mb-8 flex items-center gap-2">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: project.accent }}
                      />
                      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/45">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-medium tracking-[-0.03em] text-white">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-[260px] text-sm leading-6 text-white/60">
                      {project.description}
                    </p>
                  </div>

                  <div className="relative flex items-end justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-white/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-white/40 transition-colors duration-300"
                      style={{ color: undefined }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* contact shadow grounding the deck */}
          <div
            ref={groundRef}
            className="pointer-events-none absolute bottom-2 h-8 w-[70%] rounded-[50%]"
            style={{
              background:
                "radial-gradient(ellipse, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0) 75%)",
              filter: "blur(6px)",
            }}
          />
        </div>

        <p className="mx-auto mt-14 max-w-[320px] text-center text-[11px] uppercase tracking-[0.2em] text-white/35">
          Hover the deck to spread it
        </p>
      </div>
    </section>
  );
}