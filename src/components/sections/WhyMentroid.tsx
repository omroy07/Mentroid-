"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDownRight,
  ArrowUpRight,
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

const audiences = [
  {
    number: "01",
    tag: "START / BUILD",
    title: "Startup founders",
    description:
      "Turn a promising idea into an AI MVP, or make an existing product more intelligent.",
    outcome: "AI MVPs · AI product features · SaaS",
    align: "left",
  },
  {
    number: "02",
    tag: "OPERATE / IMPROVE",
    title: "SME owners",
    description:
      "Reduce repetitive work across customer support, lead handling, and everyday operations.",
    outcome: "Automation · Customer operations · Sales",
    align: "right",
  },
  {
    number: "03",
    tag: "EXTEND / INTEGRATE",
    title: "CTOs & technical teams",
    description:
      "Add AI capabilities to existing platforms without treating your current systems as a blank slate.",
    outcome: "APIs · RAG · AI agents · Platform integration",
    align: "left",
  },
  {
    number: "04",
    tag: "CONNECT / SCALE",
    title: "Enterprise teams",
    description:
      "Connect internal knowledge, business tools, and workflows into systems teams can use responsibly.",
    outcome: "Knowledge systems · Workflow orchestration",
    align: "right",
  },
];

export default function WhyMentroid() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const manifestoRef = useRef<HTMLDivElement | null>(null);
  const transformationRef = useRef<HTMLDivElement | null>(null);
  const transformationContentRef = useRef<HTMLDivElement | null>(null);
  const principlesRef = useRef<HTMLDivElement | null>(null);
  const reasonRowsRef = useRef<(HTMLElement  | null)[]>([]);
  const audienceSectionRef = useRef<HTMLDivElement | null>(null);
  const audienceCardsRef = useRef<(HTMLElement  | null)[]>([]);
  const closingRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const intro = introRef.current;
      const headline = headlineRef.current;
      const manifesto = manifestoRef.current;
      const transformation = transformationRef.current;
      const transformationContent = transformationContentRef.current;
      const principles = principlesRef.current;
      const reasonRows = reasonRowsRef.current.filter(
        (element): element is HTMLDivElement => element !== null
      );
      const audienceSection = audienceSectionRef.current;
      const audienceCards = audienceCardsRef.current.filter(
        (element): element is HTMLDivElement => element !== null
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
          { autoAlpha: 1, clearProps: "all" }
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
          }
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
          }
        );
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
          }
        );

        const wordReveal = manifesto.querySelector<HTMLElement>("[data-word-reveal]");
        const words = wordReveal?.querySelectorAll<HTMLElement>("[data-reveal-word]");

        if (wordReveal && words?.length) {
          gsap.set(words, { opacity: 0.2 });
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
              end: "bottom 42%",
              scrub: 0.8,
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
          }
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
          }
        );
      }

      // Each principle enters independently. Its index rule draws across,
      // making the list feel like a progressing system rather than a card grid.
      reasonRows.forEach((row) => {
        const rule = row.querySelector<HTMLElement>("[data-principle-rule]");
        const title = row.querySelector<HTMLElement>("[data-principle-title]");
        const description = row.querySelector<HTMLElement>(
          "[data-principle-description]"
        );
        const number = row.querySelector<HTMLElement>("[data-principle-number]");

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
            { scaleX: 1, duration: 0.65, ease: "power2.out" }
          );
        }

        if (number) {
          timeline.fromTo(
            number,
            { y: 12, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.4, ease: "power2.out" },
            "-=0.35"
          );
        }

        if (title) {
          timeline.fromTo(
            title,
            { x: 24, autoAlpha: 0 },
            { x: 0, autoAlpha: 1, duration: 0.6, ease: "power3.out" },
            "-=0.25"
          );
        }

        if (description) {
          timeline.fromTo(
            description,
            { y: 14, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.5, ease: "power2.out" },
            "-=0.3"
          );
        }
      });

      // Buyer cards alternate directions and reveal through a clipped edge.
      audienceCards.forEach((card, index) => {
        const direction = index % 2 === 0 ? -42 : 42;
        const reveal = card.querySelector<HTMLElement>("[data-audience-reveal]");
        const details = card.querySelector<HTMLElement>("[data-audience-details]");

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
              index % 2 === 0
                ? "inset(0% 0% 0% 100%)"
                : "inset(0% 100% 0% 0%)",
          },
          {
            x: 0,
            y: 0,
            autoAlpha: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.8,
            ease: "power3.out",
          }
        );

        if (reveal) {
          timeline.fromTo(
            reveal,
            { x: index % 2 === 0 ? -14 : 14, autoAlpha: 0 },
            { x: 0, autoAlpha: 1, duration: 0.45, ease: "power2.out" },
            "-=0.35"
          );
        }

        if (details) {
          timeline.fromTo(
            details,
            { y: 10, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.45, ease: "power2.out" },
            "-=0.25"
          );
        }
      });

      if (closing) {
        const question = closing.querySelector<HTMLElement>("[data-cta-question]");
        const headingLines = closing.querySelectorAll<HTMLElement>("[data-cta-line]");
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
            0
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
            0.08
          );
        }

        if (ctaLink) {
          closeTimeline.fromTo(
            ctaLink,
            { y: 18, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, ease: "none", duration: 0.45 },
            0.52
          );
        }

        if (ctaArrow) {
          closeTimeline.fromTo(
            ctaArrow,
            { x: -5, y: 5, rotate: -20 },
            { x: 0, y: 0, rotate: 0, ease: "none", duration: 0.35 },
            0.65
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
      className="relative w-full overflow-hidden bg-[#f4f4f1] text-[#080808]"
    >
      {/* 01 — Giant manifesto */}
      <div className="mx-auto max-w-[1800px] px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32 md:px-12 md:pb-36 md:pt-40 lg:px-16">
        <div ref={introRef} className="mb-10 flex items-center gap-3 sm:mb-14">
         
          <span className="text-[9px] uppercase tracking-[0.24em] text-black/45 sm:text-[10px]">
            Why Mentroid 
          </span>
        </div>

        <h2
          ref={headlineRef}
          className="max-w-[1450px] text-[clamp(3.25rem,11.4vw,7rem)] font-medium leading-[0.79] tracking-[-0.095em]"
        >
          <span className="block overflow-hidden pb-[0.08em]">
            <span data-headline-line className="block">More than</span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <span data-headline-line className="block text-black/25">artificial intelligence.</span>
          </span>
        
        </h2>

        <div
          ref={manifestoRef}
          className="mt-14 grid grid-cols-1 gap-8 border-t border-black/15 pt-7 sm:mt-20 sm:pt-9 md:grid-cols-12 md:gap-8"
        >
          <div className="md:col-span-3">
            <span data-manifesto-line className="text-[9px] uppercase tracking-[0.2em] text-black/40 sm:text-[10px]">
              The difference
            </span>
          </div>
          <div className="md:col-span-9">
           
<p
  data-word-reveal
  aria-label="We combine technical depth with real-world understanding to build intelligent systems around the way your business actually works."
  className="max-w-[1050px] text-[clamp(1.7rem,4.8vw,4.7rem)] font-normal leading-[1.02] tracking-[-0.065em]"
>
  {["We", "combine", "technical", "depth", "with", "real-world", "understanding", "to", "build", "intelligent", "systems", "around", "the", "way", "your", "business", "actually", "works."].map((word, index) => (
    
<span
  key={`${word}-${index}`}
  data-reveal-word
  aria-hidden="true"
  className="inline-block mr-[0.18em]"
>


      {word}{" "}
    </span>
  ))}
</p>

            <div data-manifesto-line className="mt-7 flex items-center gap-3 text-[9px] uppercase tracking-[0.16em] text-black/40 sm:mt-9 sm:text-[10px]">
              <ArrowDownRight size={15} strokeWidth={1.3} />
              <span>Scroll to see what that means</span>
            </div>
          </div>
        </div>
      </div>

      {/* 02 — Centre-out transformation */}
      <div
        ref={transformationRef}
         data-navbar-theme="dark"
        className="relative overflow-hidden bg-[#101010] text-[#f4f4f1]"
        style={{ clipPath: "inset(0% 0% 0% 0% round 0px)" }}
      >
        <div ref={transformationContentRef} className="mx-auto max-w-[1800px] px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:py-28 lg:px-16 lg:py-32">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5">
              <span className="mb-7 flex items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-white/45 sm:text-[10px]">
              
                What we stand for
              </span>
              <h3 className="max-w-[700px] text-[clamp(2.8rem,7vw,6.8rem)] font-medium leading-[0.84] tracking-[-0.085em]">
                Built for<br />the real<br /><span className="text-white/30">world.</span>
              </h3>
            </div>
            <div className="md:col-span-7 md:pt-12">
              <p className="max-w-[680px] text-[clamp(1.2rem,2.5vw,2.1rem)] leading-[1.2] tracking-[-0.045em] text-white/80">
                A useful AI system has to do more than work in a demo. It needs to fit the business, connect to the right tools, and know when a person should take over.
              </p>
              <div className="mt-10 grid grid-cols-1 border-t border-white/20 sm:grid-cols-2">
                {[
                  ["01 / FIT", "Designed around your workflows"],
                  ["02 / DELIVERY", "Engineered beyond the prototype"],
                  ["03 / CONNECTION", "Integrated with existing systems"],
                  ["04 / OVERSIGHT", "Human fallback when it matters"],
                ].map(([label, value]) => (
                  <div key={label} className="border-b border-white/20 py-5 sm:even:pl-6 sm:odd:pr-6">
                    <span className="text-[9px] uppercase tracking-[0.16em] text-white/40">{label}</span>
                    <p className="mt-3 text-base tracking-[-0.02em] sm:text-lg">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 03 — Principles: scroll-progress editorial rows, not generic cards */}
      <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 sm:py-28 md:px-12 md:py-36 lg:px-16">
        <div className="mb-12 grid grid-cols-1 gap-6 md:mb-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <span className="text-[9px] uppercase tracking-[0.22em] text-black/40 sm:text-[10px]">The principles behind the work</span>
            <p className="mt-4 max-w-[260px] text-sm leading-6 text-black/50">
              Five decisions that shape how we plan, build, and deliver.
            </p>
          </div>
          <h3 className="max-w-[900px] text-[clamp(2rem,5.3vw,5rem)] leading-[0.93] tracking-[-0.07em] md:col-span-8">
            Not just what we build.<br /><span className="text-black/25">How we build it.</span>
          </h3>
        </div>

        <div ref={principlesRef} className="border-t border-black/15">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <article
                key={reason.number}
                ref={(element) => { reasonRowsRef.current[index] = element; }}
                className="group relative grid grid-cols-1 gap-4 border-b border-black/15 py-7 sm:grid-cols-12 sm:items-start sm:gap-6 sm:py-9 md:py-11"
              >
                <div className="flex items-center justify-between sm:col-span-2 sm:justify-start sm:gap-4">
                  <span data-principle-number className="text-[10px] tracking-[0.15em] text-black/40">/{reason.number}</span>
                  <Icon size={18} strokeWidth={1.3} className="text-black/40 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:hidden" />
                </div>
                <div className="sm:col-span-4">
                  <h4 data-principle-title className="max-w-[430px] text-[clamp(1.8rem,3.5vw,3.2rem)] font-medium leading-[0.95] tracking-[-0.07em]">{reason.title}</h4>
                  <span className="mt-3 block text-[8px] uppercase tracking-[0.16em] text-black/40 sm:text-[9px]">{reason.proof}</span>
                </div>
                <p data-principle-description className="max-w-[520px] text-[13px] leading-6 text-black/55 sm:col-span-5 sm:pt-1 sm:text-sm sm:leading-7">{reason.description}</p>
                
                <div data-principle-rule className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-black/50" aria-hidden="true" />
              </article>
            );
          })}
        </div>
      </div>

      {/* 04 — Who we work with: alternating side-in cards */}
      <div className="border-y border-black/10 bg-[#eaeae5]">
        <div ref={audienceSectionRef} className="mx-auto max-w-[1800px] px-5 py-20 sm:px-8 sm:py-24 md:px-12 md:py-32 lg:px-16">
          <div className="mb-12 grid grid-cols-1 gap-7 md:mb-16 md:grid-cols-12 md:items-end md:gap-8">
            <div className="md:col-span-7">
              <span className="mb-6 block text-[9px] uppercase tracking-[0.22em] text-black/40 sm:text-[10px]">Who we work with</span>
              <h3 className="text-[clamp(2.8rem,8vw,7rem)] font-medium leading-[0.83] tracking-[-0.085em]">
                Different stages.<br /><span className="text-black/25">Shared ambition.</span>
              </h3>
            </div>
            <p className="max-w-[420px] text-sm leading-7 text-black/55 md:col-span-5 md:justify-self-end">
              From a first product idea to complex internal systems, the right approach starts with understanding where you are now.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
            {audiences.map((audience, index) => (
              <article
                key={audience.number}
                ref={(element) => { audienceCardsRef.current[index] = element; }}
                className={`group relative min-h-[270px] overflow-hidden border border-black/15 bg-[#f4f4f1] p-5 sm:min-h-[310px] sm:p-7 md:p-8 ${
                  audience.align === "right" ? "md:translate-y-10" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-[10px] tracking-[0.16em] text-black/40">/{audience.number}</span>
                  <span className="text-right text-[8px] uppercase tracking-[0.16em] text-black/40 sm:text-[9px]">{audience.tag}</span>
                </div>

                <div data-audience-reveal className="mt-12 sm:mt-16">
                  <h4 className="max-w-[480px] text-[clamp(2rem,4.4vw,4rem)] font-medium leading-[0.88] tracking-[-0.075em] transition-transform duration-500 group-hover:translate-x-1">
                    {audience.title}
                  </h4>
                </div>

                <div data-audience-details className="mt-5 flex flex-col gap-5 border-t border-black/15 pt-4 sm:mt-6 sm:flex-row sm:items-end sm:justify-between">
                  <p className="max-w-[390px] text-[12px] leading-6 text-black/55 sm:text-[13px]">{audience.description}</p>
                  <span className="max-w-[220px] text-[8px] uppercase leading-5 tracking-[0.12em] text-black/40 sm:text-right sm:text-[9px]">{audience.outcome}</span>
                </div>

                <ArrowUpRight size={17} strokeWidth={1.3} className="absolute bottom-5 right-5 text-black/30 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:bottom-7 sm:right-7" />
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* 05 — Conversion close: scroll-linked question + cinematic line reveal */}
      <div
        ref={closingRef}
        className="mx-auto grid max-w-[1800px] grid-cols-1 gap-8 overflow-hidden px-5 py-24 sm:px-8 sm:py-28 md:grid-cols-12 md:items-end md:px-12 md:py-36 lg:px-16"
      >
        <div className="md:col-span-8">
          <span
            data-cta-question
            className="mb-6 block text-[9px] uppercase tracking-[0.2em] text-black/40 sm:mb-7 sm:text-[10px]"
          >
            Have a real problem to solve?
          </span>
          <h3 className="max-w-[1000px] text-[clamp(2.8rem,8vw,7.6rem)] font-medium leading-[0.84] tracking-[-0.085em]">
            <span className="block overflow-hidden pb-[0.08em]">
              <span data-cta-line className="block will-change-transform">Let&apos;s make</span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <span data-cta-line className="block will-change-transform">it work better.</span>
            </span>
          </h3>
        </div>
        <div className="md:col-span-4 md:flex md:justify-end">
          <Link
            href="#contact"
            data-cta-link
            className="group inline-flex min-h-12 items-center justify-between gap-8 border-b border-black/25 py-3 text-[10px] uppercase tracking-[0.16em] transition-colors duration-300 hover:border-black sm:text-[11px]"
          >
            <span>Discuss your project</span>
            <ArrowUpRight
              data-cta-arrow
              size={16}
              strokeWidth={1.35}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
