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
      className="relative w-full overflow-hidden bg-[#f4f4f1] text-[#17171c]"
    >
      {/* 01 — Giant manifesto */}
      <div className="mx-auto max-w-[1800px] px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32 md:px-12 md:pb-36 md:pt-25 lg:px-16">
      

        
        <div
          ref={manifestoRef}
          className=" grid grid-cols-1 gap-8 pt-7 sm:mt-20 sm:pt-9 md:grid-cols-12 md:gap-8"
        >
          
          <div className="md:col-span-9">
           
<p
  data-word-reveal
  aria-label="We combine technical depth with real-world understanding to build intelligent systems around the way your business actually works."
  className="max-w-[1050px] text-[clamp(1.7rem,4.8vw,4.7rem)] font-normal leading-[1.02] tracking-[-0.065em]   max-[600px]:max-w-[600px]
  
  max-[600px]:text-[clamp(38px,5.2vw,44px)]
  max-[600px]:leading-[1.07]
  max-[600px]:tracking-[-0.06em]
  max-[380px]:text-[32px]"
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

           
          </div>
        </div>
      </div>

      {/* 02 — Centre-out transformation */}
      <div
        ref={transformationRef}
         data-navbar-theme="dark"
        className="relative overflow-hidden bg-[#17171c] text-[#f4f4f1]"
        style={{ clipPath: "inset(0% 0% 0% 0% round 0px)" }}
      >
        <div ref={transformationContentRef} className="mx-auto max-w-[1800px] px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:py-28 lg:px-16 lg:py-32">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5">
              <span className="mb-7 flex items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-white/45 sm:text-[10px]">
              
                What we stand for
              </span>
              <h3 className="m-0
              max-w-[1000px]

              text-[clamp(2.6rem,7vw,5.25rem)]
              font-normal
              leading-[0.96]
              tracking-[-0.065em]">
                Built for the real<br /><span>world.</span>
              </h3>
            </div>
            <div className="md:col-span-7 md:pt-12">
              <p className="max-w-[680px] text-[clamp(1.2rem,2.5vw,2.1rem)] leading-[1.2] tracking-[-0.045em] text-white/80">
                A useful AI system has to do more than work in a demo. It needs to fit the business, connect to the right tools, and know when a person should take over.
              </p>
              <div className="mt-10 grid grid-cols-1 border-t border-white/20 sm:grid-cols-2">
                {[
                  ["01 ", "Designed around your workflows"],
                  ["02 ", "Engineered beyond the prototype"],
                  ["03 ", "Integrated with existing systems"],
                  ["04 ", "Human fallback when it matters"],
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

      
    </section>
  );
}
