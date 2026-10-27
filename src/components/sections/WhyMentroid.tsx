"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDownRight,
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  Blocks,
  Cable,
  CircleCheck,
  Compass,
  GitBranch,
  Workflow,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    number: "01",
    title: "Business before technology",
    description:
      "We start with your goals, constraints, people, and processes—not a pre-packaged AI template.",
    proof: "START WITH THE RIGHT PROBLEM",
    icon: Compass,
  },
  {
    number: "02",
    title: "Built beyond the demo",
    description:
      "We consider reliability, maintainability, deployment, and the experience of the people who will use the system.",
    proof: "DESIGNED FOR REAL OPERATIONS",
    icon: CircleCheck,
  },
  {
    number: "03",
    title: "Connected to your world",
    description:
      "AI should work with the tools you already rely on: APIs, CRMs, databases, WhatsApp, and internal platforms.",
    proof: "INTEGRATION OVER ISOLATION",
    icon: Cable,
  },
  {
    number: "04",
    title: "Automation with judgement",
    description:
      "When a request is uncertain or sensitive, a good system should know when to bring a person into the loop.",
    proof: "HUMAN OVERSIGHT BUILT IN",
    icon: Workflow,
  },
  {
    number: "05",
    title: "One connected journey",
    description:
      "From architecture and development to deployment and ongoing improvement, we consider the whole lifecycle.",
    proof: "IDEA → DEPLOYMENT → IMPROVEMENT",
    icon: GitBranch,
  },
];

export default function WhyMentroid() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const manifestoRef = useRef<HTMLDivElement | null>(null);
  const manifestoStageRef = useRef<HTMLDivElement | null>(null);
  const transformationRef = useRef<HTMLDivElement | null>(null);
  const transformationContentRef = useRef<HTMLDivElement | null>(null);
  const principlesRef = useRef<HTMLDivElement | null>(null);
  const reasonRowsRef = useRef<(HTMLElement | null)[]>([]);
  const audienceSectionRef = useRef<HTMLDivElement | null>(null);
  const audienceCardsRef = useRef<(HTMLElement | null)[]>([]);
  const closingRef = useRef<HTMLDivElement | null>(null);
  const audienceCarouselRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const intro = introRef.current;
      const headline = headlineRef.current;
      const manifesto = manifestoRef.current;
      const manifestoStage = manifestoStageRef.current;
      const transformation = transformationRef.current;
      const transformationContent = transformationContentRef.current;
      const principles = principlesRef.current;
      const reasonRows = reasonRowsRef.current.filter(
        (element): element is HTMLDivElement => element !== null,
      );
      const audienceSection = audienceSectionRef.current;
      const audienceCards = audienceCardsRef.current.filter(
        (element): element is HTMLDivElement => element !== null,
      );
      const closing = closingRef.current;

      if (reducedMotion) {
        gsap.set(
          [
            intro,
            headline,
            manifesto,
            transformation,
            transformationContent,
            principles,
            ...reasonRows,
            audienceSection,
            ...audienceCards,
            closing,
          ],
          { autoAlpha: 1, clearProps: "all" },
        );
        return;
      }

      if (intro) {
        gsap.fromTo(
          intro,
          { y: 16, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.65,
            ease: "power3.out",
            scrollTrigger: {
              trigger: intro,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      if (headline) {
        gsap.fromTo(
          headline.querySelectorAll("[data-headline-line]"),
          { yPercent: 115, autoAlpha: 0 },
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: "power4.out",
            scrollTrigger: {
              trigger: headline,
              start: "top 84%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Hold the manifesto on screen while the copy reveals. pinSpacing reserves
      // its scroll distance, so section 02 cannot slide underneath it.
      if (manifestoStage && window.matchMedia("(min-width: 768px)").matches) {
        ScrollTrigger.create({
          trigger: manifestoStage,
          start: "top top",
          end: () => `+=${Math.round(window.innerHeight * 1.35)}`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });
      }

      if (manifesto) {
        // Keep the label and scroll hint on their original entrance animation.
        // The main paragraph has its own scroll-linked word reveal below.
        gsap.fromTo(
          manifesto.querySelectorAll("[data-manifesto-line]"),
          { y: 24, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            stagger: 0.14,
            ease: "power3.out",
            scrollTrigger: {
              trigger: manifesto,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );

        const wordReveal =
          manifesto.querySelector<HTMLElement>("[data-word-reveal]");
        const words = wordReveal
          ? Array.from(
              wordReveal.querySelectorAll<HTMLElement>("[data-reveal-word]"),
            )
          : [];

        if (wordReveal && words.length) {
          // Keep this reveal in normal document flow; never pin the manifesto.
          gsap.set(words, { opacity: 0.18 });

          gsap.to(words, {
            opacity: 1,
            ease: "none",
            stagger: {
              each: 0.035,
              from: "start",
            },
            scrollTrigger: {
              trigger: wordReveal,
              start: "top 78%",
              end: () => `+=${Math.round(window.innerHeight * 1.2)}`,
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          });
        }
      }

      // Centre-out reveal: a scroll-linked clip-path, adapted from Motion's
      // scroll image reveal pattern without adding another animation library.
      if (transformation && transformationContent) {
        gsap.fromTo(
          transformation,
          { clipPath: "inset(42% 44% 42% 44% round 16px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 0px)",
            ease: "none",
            scrollTrigger: {
              trigger: transformation,
              start: "top 88%",
              end: "top 28%",
              scrub: 0.7,
              invalidateOnRefresh: true,
            },
          },
        );

        gsap.fromTo(
          transformationContent,
          { y: 26, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: transformation,
              start: "top 65%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }

      // Each principle enters independently. Its index rule draws across,
      // making the list feel like a progressing system rather than a card grid.
      reasonRows.forEach((row) => {
        const rule = row.querySelector<HTMLElement>("[data-principle-rule]");
        const title = row.querySelector<HTMLElement>("[data-principle-title]");
        const description = row.querySelector<HTMLElement>(
          "[data-principle-description]",
        );
        const number = row.querySelector<HTMLElement>(
          "[data-principle-number]",
        );

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 84%",
            toggleActions: "play none none reverse",
          },
        });

        if (rule) {
          timeline.fromTo(
            rule,
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 0.65, ease: "power2.out" },
          );
        }

        if (number) {
          timeline.fromTo(
            number,
            { y: 12, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.4, ease: "power2.out" },
            "-=0.35",
          );
        }

        if (title) {
          timeline.fromTo(
            title,
            { x: 24, autoAlpha: 0 },
            { x: 0, autoAlpha: 1, duration: 0.6, ease: "power3.out" },
            "-=0.25",
          );
        }

        if (description) {
          timeline.fromTo(
            description,
            { y: 14, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.5, ease: "power2.out" },
            "-=0.3",
          );
        }
      });

      // Buyer cards alternate directions and reveal through a clipped edge.
      audienceCards.forEach((card, index) => {
        const direction = index % 2 === 0 ? -42 : 42;
        const reveal = card.querySelector<HTMLElement>(
          "[data-audience-reveal]",
        );
        const details = card.querySelector<HTMLElement>(
          "[data-audience-details]",
        );

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 86%",
            toggleActions: "play none none reverse",
          },
        });

        timeline.fromTo(
          card,
          {
            x: direction,
            y: 24,
            autoAlpha: 0,
            clipPath:
              index % 2 === 0 ? "inset(0% 0% 0% 100%)" : "inset(0% 100% 0% 0%)",
          },
          {
            x: 0,
            y: 0,
            autoAlpha: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.8,
            ease: "power3.out",
          },
        );

        if (reveal) {
          timeline.fromTo(
            reveal,
            { x: index % 2 === 0 ? -14 : 14, autoAlpha: 0 },
            { x: 0, autoAlpha: 1, duration: 0.45, ease: "power2.out" },
            "-=0.35",
          );
        }

        if (details) {
          timeline.fromTo(
            details,
            { y: 10, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.45, ease: "power2.out" },
            "-=0.25",
          );
        }
      });

      if (closing) {
        const question = closing.querySelector<HTMLElement>(
          "[data-cta-question]",
        );
        const headingLines =
          closing.querySelectorAll<HTMLElement>("[data-cta-line]");
        const ctaLink = closing.querySelector<HTMLElement>("[data-cta-link]");
        const ctaArrow = closing.querySelector<HTMLElement>("[data-cta-arrow]");

        // The question drifts horizontally with scroll; the headline resolves
        // line-by-line through clipping masks, then the project link settles in.
        const closeTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: closing,
            start: "top 88%",
            end: "center 48%",
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        if (question) {
          closeTimeline.fromTo(
            question,
            { x: -34, autoAlpha: 0.35 },
            { x: 0, autoAlpha: 1, ease: "none", duration: 0.7 },
            0,
          );
        }

        if (headingLines.length) {
          closeTimeline.fromTo(
            headingLines,
            { yPercent: 115, autoAlpha: 0 },
            {
              yPercent: 0,
              autoAlpha: 1,
              stagger: 0.18,
              ease: "none",
              duration: 0.9,
            },
            0.08,
          );
        }

        if (ctaLink) {
          closeTimeline.fromTo(
            ctaLink,
            { y: 18, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, ease: "none", duration: 0.45 },
            0.52,
          );
        }

        if (ctaArrow) {
          closeTimeline.fromTo(
            ctaArrow,
            { x: -5, y: 5, rotate: -20 },
            { x: 0, y: 0, rotate: 0, ease: "none", duration: 0.35 },
            0.65,
          );
        }
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-mentroid"
      data-navbar-theme="light"
      className="relative w-full bg-[#f4f4f1] text-[#080808]"
    >
      {/* 01 — Scale-inspired pinned manifesto; original Mentroid copy retained */}
      <div
        ref={manifestoStageRef}
        className="relative flex min-h-[100svh] w-full items-center bg-black text-white"
      >
        <div className="mx-auto w-full max-w-[1800px] px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-0 lg:px-14">
          <div
            ref={manifestoRef}
            className="grid grid-cols-1 items-stretch gap-3 md:grid-cols-12 md:gap-4"
          >
            <div className="relative min-h-[250px] overflow-hidden rounded-2xl bg-[#080b0d] sm:min-h-[340px] md:col-span-4 md:min-h-[40svh] md:rounded-[24px]">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Cinematic artificial intelligence brain scan footage"
              >
                <source
                  src="https://cdn.sanity.io/files/50zba0eo/production/97c3da76fd2ebdb89834e10e0aed5f090a2754e1.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl bg-[#183f2e] px-6 py-7 sm:min-h-[390px] sm:px-9 sm:py-10 md:col-span-8 md:min-h-[70svh] md:rounded-[24px] md:px-10 md:py-10 lg:px-14 lg:py-12">
              <p
                data-word-reveal
                aria-label="We combine technical depth with real-world understanding to build intelligent systems around the way your business actually works."
                className="max-w-[1050px] text-[clamp(2rem,5.1vw,3.25rem)] font-normal leading-[1.02] tracking-[-0.065em] text-balance"
              >
                {[
                  "We",
                  "combine",
                  "technical",
                  "depth",
                  "with",
                  "real-world",
                  "understanding",
                  "to",
                  "build",
                  "intelligent",
                  "systems",
                  "around",
                  "the",
                  "way",
                  "your",
                  "business",
                  "actually",
                  "works.",
                ].map((word, index) => (
                  <span
                    key={`${word}-${index}`}
                    data-reveal-word
                    aria-hidden="true"
                    className="mr-[0.19em] inline-block"
                  >
                    {word}{" "}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 02 — Principles: scroll-progress editorial rows, not generic cards */}
      <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 sm:py-28 md:px-12 md:py-36 lg:px-16">
        <div className="mb-12 grid grid-cols-1 gap-6 md:mb-16 md:grid-cols-12 md:gap-8">
          <h3 className="max-w-[900px] text-[clamp(2rem,5.3vw,5.5rem)] leading-[0.93] tracking-[-0.07em] md:col-span-8">
            Not just what we build.
            <br />
            <span>How we build it.</span>
          </h3>
        </div>

        <div ref={principlesRef} className="border-t border-black/15">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <article
                key={reason.number}
                ref={(element) => {
                  reasonRowsRef.current[index] = element;
                }}
                className="group relative grid grid-cols-1 gap-4 border-b border-black/15 py-7 sm:grid-cols-12 sm:items-start sm:gap-6 sm:py-9 md:py-11"
              >
                <div className="flex items-center justify-between sm:col-span-2 sm:justify-start sm:gap-4">
                  <span
                    data-principle-number
                    className="text-[26px] font-semibold tracking-[0.15em] text-black/40"
                  >
                    {reason.number}
                  </span>
                  <Icon
                    size={18}
                    strokeWidth={1.3}
                    className="text-black/40 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:hidden"
                  />
                </div>
                <div className="sm:col-span-4">
                  <h4
                    data-principle-title
                    className="max-w-[430px] text-[clamp(1.8rem,3.5vw,3.2rem)] font-medium leading-[0.95] tracking-[-0.07em]"
                  >
                    {reason.title}
                  </h4>
                  <span className="mt-3 block text-[8px] uppercase tracking-[0.16em] text-black/40 sm:text-[9px]"></span>
                </div>
                <p
                  data-principle-description
                  className="max-w-[520px] text-[13px] leading-6 text-black/75 sm:col-span-5 sm:pt-1 sm:text-[22px] sm:leading-7"
                >
                  {reason.description}
                </p>

                <div
                  data-principle-rule
                  className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-black/50"
                  aria-hidden="true"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
