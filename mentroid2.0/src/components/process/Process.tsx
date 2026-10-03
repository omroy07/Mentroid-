"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight, Sparkles } from "lucide-react";

type Card = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  tag: string;
};

const cards: Card[] = [
  {
    eyebrow: "AGENTS / 01",
    title: "AI agents that",
    accent: "get work done.",
    description:
      "Autonomous agents that reason over your data, make decisions and execute multi-step tasks without hand-holding.",
    tag: "Reasoning & execution",
  },
  {
    eyebrow: "RAG SYSTEMS / 02",
    title: "Knowledge that",
    accent: "stays current.",
    description:
      "Retrieval-augmented pipelines that ground every answer in your latest documents, tickets and records.",
    tag: "Grounded retrieval",
  },
  {
    eyebrow: "COPILOTS / 03",
    title: "Copilots built",
    accent: "into your product.",
    description:
      "Custom copilots embedded directly in your workflows, tuned to your tone, your data and your users.",
    tag: "Embedded intelligence",
  },
];

/* ---------------------------------------------------
   ORBIT SETTINGS
--------------------------------------------------- */
const ORBIT_DURATION = 24; // seconds per full 360° revolution
const MAX_RADIUS = 420; // horizontal radius of the circle (px)
const TILT = 34; // vertical offset between front and back (px) – gives depth

export default function Process() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const blobRefs = useRef<(HTMLDivElement | null)[]>([]);
  const particleRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const els = cardRefs.current.filter(Boolean) as HTMLDivElement[];
      if (!els.length) return;

      const step = 360 / els.length;
      let radius = MAX_RADIUS;

      const computeRadius = () => {
        radius = Math.min(MAX_RADIUS, section.clientWidth * 0.36);
      };
      computeRadius();

      /* ---------------------------------------------------
         CIRCULAR ORBIT
         One continuous angle drives every card. Each card sits
         `step` degrees apart on the circle, so positions, scale,
         opacity, blur and z-order all derive from one formula —
         no snapping, no easing seams, a perfect loop.
      --------------------------------------------------- */
      const orbit = { angle: 0 };

      const render = () => {
        els.forEach((el, i) => {
          const theta = ((orbit.angle + i * step) * Math.PI) / 180;
          const sin = Math.sin(theta);
          const cos = Math.cos(theta);
          const depth = (cos + 1) / 2; // 1 = front, 0 = back

          gsap.set(el, {
            xPercent: -50,
            yPercent: -50,
            x: sin * radius,
            y: (1 - depth) * -TILT + TILT * 0.5,
            scale: 0.72 + depth * 0.28,
            opacity: 0.18 + depth * 0.82,
            rotateY: sin * 10,
            filter: `blur(${((1 - depth) * 3).toFixed(2)}px)`,
            zIndex: Math.round(depth * 100),
            force3D: true,
          });
        });
      };

      render();

      const loop = gsap.to(orbit, {
        angle: 360,
        duration: ORBIT_DURATION,
        ease: "none", // constant angular speed = smooth circular motion
        repeat: -1,
        onUpdate: render,
      });

      if (reduceMotion) loop.pause();

      // ease to a stop / back to speed instead of hard pausing
      const slowDown = () =>
        gsap.to(loop, { timeScale: 0, duration: 0.8, ease: "power2.out" });
      const speedUp = () =>
        !reduceMotion &&
        gsap.to(loop, { timeScale: 1, duration: 0.8, ease: "power2.in" });

      const onResize = () => {
        computeRadius();
        render();
      };

      section.addEventListener("mouseenter", slowDown);
      section.addEventListener("mouseleave", speedUp);
      window.addEventListener("resize", onResize);

      /* ---------------------------------------------------
         SMOKY BACKGROUND DRIFT
      --------------------------------------------------- */
      const blobs = blobRefs.current.filter(Boolean) as HTMLDivElement[];
      blobs.forEach((blob, i) => {
        gsap.to(blob, {
          x: i % 2 === 0 ? 60 : -70,
          y: i % 2 === 0 ? -40 : 50,
          scale: 1.15,
          duration: 10 + i * 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });

      /* ---------------------------------------------------
         GLOWING PARTICLES
      --------------------------------------------------- */
      const particles = particleRefs.current.filter(
        Boolean
      ) as HTMLDivElement[];
      particles.forEach((p, i) => {
        gsap.set(p, { y: 40, autoAlpha: 0 });
        gsap.to(p, {
          y: -220,
          autoAlpha: 1,
          duration: 6 + (i % 5),
          ease: "none",
          repeat: -1,
          delay: i * 0.6,
        });
        gsap.to(p, {
          autoAlpha: 0,
          duration: 1.2,
          repeat: -1,
          repeatDelay: 5 + (i % 5),
          delay: i * 0.6 + 4.8,
        });
      });

      return () => {
        section.removeEventListener("mouseenter", slowDown);
        section.removeEventListener("mouseleave", speedUp);
        window.removeEventListener("resize", onResize);
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="what-we-build"
      className="relative w-full max-w-full overflow-hidden bg-black"
    >
      {/* ======================================================
          SMOKY / FOGGY BACKGROUND
      ======================================================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          ref={(el) => {
            blobRefs.current[0] = el;
          }}
          className="absolute left-[10%] top-[15%] h-[420px] w-[420px] rounded-full bg-white/[0.05] blur-[120px]"
        />
        <div
          ref={(el) => {
            blobRefs.current[1] = el;
          }}
          className="absolute right-[8%] top-[35%] h-[380px] w-[380px] rounded-full bg-indigo-300/[0.06] blur-[130px]"
        />
        <div
          ref={(el) => {
            blobRefs.current[2] = el;
          }}
          className="absolute bottom-[5%] left-[35%] h-[460px] w-[460px] rounded-full bg-white/[0.04] blur-[140px]"
        />

        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              particleRefs.current[i] = el;
            }}
            className="absolute h-[3px] w-[3px] rounded-full bg-white/70 shadow-[0_0_8px_2px_rgba(255,255,255,0.4)]"
            style={{
              left: `${(i * 137) % 100}%`,
              bottom: "10%",
            }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.75)_100%)]" />

      {/* ======================================================
          SECTION HEADER
      ======================================================= */}
      <div className="relative z-10 px-6 md:px-10 lg:px-14">
        <div className="flex items-center gap-3 md:mb-20">
          <Sparkles size={13} className="text-white/50" />
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/70">
            WHAT WE BUILD
          </span>
        </div>

        <h2 className="text-[clamp(2.4rem,5.5vw,3.6rem)] font-medium leading-[0.95] tracking-[-0.06em] text-white">
          Systems that think,
          <span className="block text-white/60">and ship on their own.</span>
        </h2>
      </div>

      {/* ======================================================
          ORBIT STAGE
      ======================================================= */}
      <div className="relative z-10 mt-20 h-[420px] w-full max-w-full [perspective:1600px] md:h-[480px]">
        <div className="absolute left-1/2 top-1/2">
          {cards.map((card, i) => (
            <div
              key={card.title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="
                group
                absolute
                left-0
                top-0
                w-[300px]
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                p-7
                backdrop-blur-xl
                transition-[border-color,background-color]
                duration-500
                hover:border-white/25
                hover:bg-white/[0.06]
                md:w-[340px]
              "
            >
              {/* glow ring on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(120px_120px_at_50%_0%,rgba(255,255,255,0.12),transparent)]" />

              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]">
                <Sparkles size={15} className="text-white/70" />
              </div>

              <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-white/45">
                {card.eyebrow}
              </span>

              <h3 className="mt-3 text-[1.35rem] font-medium leading-[1.05] tracking-[-0.03em] text-white">
                {card.title}
                <span className="block text-white/55">{card.accent}</span>
              </h3>

              <p className="mt-4 text-[13px] leading-6 text-white/55">
                {card.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-[10px] uppercase tracking-[0.15em] text-white/40">
                  {card.tag}
                </span>

                <ArrowUpRight
                  size={14}
                  className="text-white/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}