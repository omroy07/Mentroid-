"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    number: "01",
    label: "GENERATIVE AI",
    title: "Generative",
    accent: "AI",
    description:
      "Intelligent experiences built around your data, knowledge, customers and workflows.",
  },
  {
    number: "02",
    label: "AI AGENTS",
    title: "AI",
    accent: "Agents",
    description:
      "Systems that reason, use tools and execute tasks across your business.",
  },
  {
    number: "03",
    label: "RAG SYSTEMS",
    title: "Knowledge",
    accent: "Systems",
    description:
      "Grounded AI connected to your documents, knowledge and business context.",
  },
  {
    number: "04",
    label: "MACHINE LEARNING",
    title: "Machine",
    accent: "Learning",
    description:
      "Models designed to discover patterns, predict outcomes and support decisions.",
  },
  {
    number: "05",
    label: "AI PRODUCT ENGINEERING",
    title: "AI",
    accent: "Products",
    description:
      "Production-ready AI applications engineered from concept to deployment.",
  },
  {
    number: "06",
    label: "WORKFLOW AUTOMATION",
    title: "Workflow",
    accent: "Automation",
    description:
      "Intelligence connected to the systems and processes your business already runs.",
  },
];

function CapabilityImage({
  number,
  label,
  priority = false,
}: {
  number: string;
  label: string;
  priority?: boolean;
}) {
  return (
    <div className="group relative aspect-[1.35/1] w-full overflow-hidden border border-white/10 bg-[#0b0b0b] sm:aspect-[1.6/1] lg:aspect-auto lg:h-full">
      <Image
        src={`/assets/whatweengineer/${number}.webp`}
        alt={`${label.toLowerCase()} capability at Mentroid`}
        fill
        priority={priority}
        sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 48vw, 34vw"
        className="object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5" />
      <span className="absolute bottom-4 left-4 z-10 text-[9px] uppercase tracking-[0.2em] text-white/65 sm:bottom-5 sm:left-5">
        {label}
      </span>
    </div>
  );
}

export default function WhatWeEngineer() {
  const sectionRef = useRef<HTMLElement>(null);
  const desktopStageRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const desktopVisualsRef = useRef<HTMLDivElement[]>([]);
  const mobileCardsRef = useRef<HTMLElement[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = desktopStageRef.current;
    const intro = introRef.current;
    const track = trackRef.current;

    if (!section || !stage || !intro || !track) return;

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      // DESKTOP / TABLET: pinned cinematic horizontal scrolling.
      media.add("(min-width: 768px)", () => {
        const visuals = desktopVisualsRef.current.filter(Boolean);
        const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);

        gsap.set(track, { x: "100vw", force3D: true });
        gsap.set(intro, { autoAlpha: 1, yPercent: 0, scale: 1 });
        gsap.set(visuals, { scale: 1.06, xPercent: 3, force3D: true });

        const timeline = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          
scrollTrigger: {
  trigger: section,
  start: "top top",
  end: () => `+=${window.innerHeight * 7}`,
  scrub: 1.3,
  pin: stage,
  pinSpacing: true,
  anticipatePin: 1,
  invalidateOnRefresh: true,
},

        });

        timeline.to(intro, {
          yPercent: -35,
          autoAlpha: 0,
          scale: 0.97,
          duration: 0.75,
        });

        timeline.to(track, { x: 0, duration: 0.8 }, "<0.15");

       
timeline.to(track, {
  x: () => -distance(),
  duration: 5.8,
  ease: "none",
});

timeline.to(
  visuals,
  {
    scale: 1,
    xPercent: 0,
    duration: 5.8,
    ease: "none",
  },
  "<"
);


       

        const refreshFrame = window.requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });

        return () => window.cancelAnimationFrame(refreshFrame);
      });

      // MOBILE: natural vertical page scroll with alternating left/right reveals.
     
media.add("(max-width: 767px)", () => {
  const cards = mobileCardsRef.current.filter(Boolean);

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion) {
    gsap.set(cards, {
      x: 0,
      y: 0,
      autoAlpha: 1,
    });
    return;
  }

  cards.forEach((card, index) => {
    // Odd cards enter from the right; even cards from the left.
    const fromX = index % 2 === 0 ? -45 : 45;

    gsap.fromTo(
      card,
      {
        x: fromX,
        y: 18,
        autoAlpha: 0,
      },
      {
        x: 0,
        y: 0,
        autoAlpha: 1,
        duration: 0.72,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          end: "bottom 12%",
          toggleActions: "play none restart reverse",
        },
      }
    );
  });
});

    }, section);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="what-we-engineer"
      data-navbar-theme="dark"
      className="relative z-30 -mt-10 w-full overflow-x-clip bg-[#050505] text-white sm:-mt-12 md:-mt-16 lg:-mt-20"
    >
      {/* Desktop / tablet cinematic horizontal experience */}
      <div
        ref={desktopStageRef}
        className="relative hidden h-[100svh] w-full overflow-hidden bg-[#050505] md:block"
      >
        <div
          ref={introRef}
          className="absolute inset-0 z-40 flex items-center px-8 lg:px-16 xl:px-20"
        >
          <div className="w-full max-w-[1100px]">
            <div className="mb-7 flex items-center gap-3">
              
              <span className="text-[9px] uppercase tracking-[0.24em] text-white/45">
                What we engineer
              </span>
            </div>

            <h2 className="max-w-[1050px] text-[clamp(5rem,8.4vw,9.5rem)] font-medium leading-[0.84] tracking-[-0.085em]">
              We build intelligence{" "}
              <span className="text-white/30">that works.</span>
            </h2>

            <p className="mt-8 max-w-[430px] text-sm leading-7 text-white/50">
              From generative AI and intelligent agents to machine learning and
              automation, we engineer systems around real business problems.
            </p>

            <div className="mt-10 flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-white/35">
              <span>Explore our capabilities</span>
              <ArrowDownRight size={14} />
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          className="absolute left-0 top-0 flex h-full w-max will-change-transform"
        >
          {capabilities.map((item, index) => (
            <article
              key={item.number}
              className="relative h-[100svh] w-screen shrink-0 overflow-hidden px-[6vw]"
            >
              <span className="pointer-events-none absolute bottom-[-5%] right-[3%] select-none text-[34vw] font-medium leading-none tracking-[-0.12em] text-white/[0.025]">
                {item.number}
              </span>

              <div className="relative z-10 flex h-full items-center">
                <div className="w-[53%] max-w-[760px] pr-8 xl:pr-12">
                  <div className="mb-7 flex items-center gap-3">
                    <span className="text-[9px] tracking-[0.22em] text-white/35">
                      {item.number} / 06
                    </span>
                    
                    <span className="text-[9px] tracking-[0.22em] text-white/50">
                      {item.label}
                    </span>
                  </div>

                  <h3 className="text-[clamp(4rem,7.8vw,8.6rem)] font-medium leading-[0.84] tracking-[-0.085em]">
                    {item.title}
                    <br />
                    <span className="text-white/30">{item.accent}</span>
                  </h3>

                  <p className="mt-8 max-w-[390px] text-[15px] leading-7 text-white/50">
                    {item.description}
                  </p>

                  <a
                    href="#contact"
                    className="group mt-9 inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-white/55 transition-colors hover:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-white"
                  >
                    <span>Discuss a project</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>

                <div
                  ref={(element) => {
                    if (element) desktopVisualsRef.current[index] = element;
                  }}
                  className="absolute right-[1vw] top-1/2 h-[44vh] w-[34vw] max-w-[560px] -translate-y-1/2 overflow-hidden border border-white/10 bg-[#0a0a0a] xl:right-[3vw] xl:h-[48vh] xl:w-[33vw]"
                >
                  <Image
                    src={`/assets/whatweengineer/${item.number}.webp`}
                    alt={`${item.label.toLowerCase()} visual`}
                    fill
                    priority={index === 0}
                    sizes="(min-width: 1280px) 33vw, 34vw"
                    className="object-cover grayscale"
                  />
                  {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/5" />
                  <span className="absolute bottom-5 right-5 text-[8px] uppercase tracking-[0.2em] text-white/50">
                    Mentroid / {item.number}
                  </span> */}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Mobile: vertical cards with alternating entrance animation */}
      <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-20 sm:px-7 sm:pb-24 sm:pt-24 md:hidden">
        <div className="mb-12 sm:mb-14">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-7 bg-white/35" />
            <span className="text-[9px] uppercase tracking-[0.22em] text-white/45">
              What we engineer
            </span>
          </div>

          <h2 className="max-w-[650px] text-[clamp(3.25rem,13vw,5.5rem)] font-medium leading-[0.86] tracking-[-0.08em]">
            We build intelligence{" "}
            <span className="text-white/30">that works.</span>
          </h2>

          <p className="mt-6 max-w-[420px] text-[13px] leading-6 text-white/50 sm:text-sm sm:leading-7">
            We engineer AI and software around the real problems your business
            needs to solve.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {capabilities.map((item, index) => (
            <article
              key={item.number}
              ref={(element) => {
                if (element) mobileCardsRef.current[index] = element;
              }}
              className="grid grid-cols-1 gap-5 sm:grid-cols-[0.9fr_1.1fr] sm:items-center sm:gap-7"
            >
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-[9px] tracking-[0.2em] text-white/35">
                    {item.number} / 06
                  </span>
                  <span className="h-px w-6 bg-white/20" />
                  <span className="text-[8px] uppercase tracking-[0.16em] text-white/45">
                    {item.label}
                  </span>
                </div>

                <h3 className="text-[clamp(2.9rem,11vw,4.8rem)] font-medium leading-[0.86] tracking-[-0.08em]">
                  {item.title}
                  <br />
                  <span className="text-white/30">{item.accent}</span>
                </h3>

                <p className="mt-5 max-w-[340px] text-[13px] leading-6 text-white/50">
                  {item.description}
                </p>

                <a
                  href="#contact"
                  className="group mt-5 inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-white"
                >
                  <span>Discuss a project</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>

              <CapabilityImage
                number={item.number}
                label={item.label}
                priority={index === 0}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
