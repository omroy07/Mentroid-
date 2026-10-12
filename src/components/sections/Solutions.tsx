"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Solution = {
  number: string;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  image: string;
};

const solutions: Solution[] = [
  {
    number: "01",
    eyebrow: "CUSTOMER EXPERIENCE",
    title: "24/7 AI Customer",
    accent: "Support",
    description:
      "Give customers instant, intelligent support across the channels they already use.",
    image: "/assets/solutions/01.webp",
  },
  {
    number: "02",
    eyebrow: "GROWTH",
    title: "AI Lead",
    accent: "Qualification",
    description:
      "Identify, understand, and prioritize high-intent leads automatically.",
    image: "/assets/solutions/02.webp",
  },
  {
    number: "03",
    eyebrow: "SALES",
    title: "Sales",
    accent: "Automation",
    description:
      "Connect intelligence to your sales workflow and reduce repetitive manual work.",
    image: "/assets/solutions/03.webp",
  },
  {
    number: "04",
    eyebrow: "KNOWLEDGE",
    title: "AI Knowledge",
    accent: "Assistant",
    description:
      "Turn your internal knowledge into an intelligent system your team can actually use.",
    image: "/assets/solutions/04.webp",
  },
  {
    number: "05",
    eyebrow: "OPERATIONS",
    title: "Business Process",
    accent: "Automation",
    description:
      "Automate the processes that slow your teams down and connect the systems behind them.",
    image: "/assets/solutions/05.webp",
  },
  {
    number: "06",
    eyebrow: "INTELLIGENCE",
    title: "AI",
    accent: "Recommendations",
    description:
      "Use your data to deliver personalized recommendations and support better decisions.",
    image: "/assets/solutions/06.webp",
  },
  {
    number: "07",
    eyebrow: "CONVERSATIONAL AI",
    title: "WhatsApp AI",
    accent: "Assistant",
    description:
      "Bring intelligent conversations directly into the channel your customers already trust.",
    image: "/assets/solutions/07.webp",
  },
  {
    number: "08",
    eyebrow: "PLATFORM",
    title: "Custom AI",
    accent: "Platforms",
    description:
      "Build an AI platform around the unique requirements of your organization.",
    image: "/assets/solutions/08.webp",
  },
];

export default function Solutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const sceneRefs = useRef<HTMLDivElement[]>([]);
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const titleRefs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const intro = introRef.current;

    if (!section || !stage || !intro) return;

    const context = gsap.context(() => {
      const scenes = sceneRefs.current.slice(0, solutions.length);
      const images = imageRefs.current.slice(0, solutions.length);
      const titles = titleRefs.current.slice(0, solutions.length);

      if (
        scenes.length !== solutions.length ||
        images.length !== solutions.length ||
        titles.length !== solutions.length
      ) {
        return;
      }

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // Use the same cinematic scene sequence on every screen size.
      // Only typography, spacing and image framing change responsively in CSS.
      gsap.set(scenes, { autoAlpha: 0, xPercent: 3 });
      gsap.set(images, {
        clipPath: reduceMotion ? "inset(0% 0% 0% 0%)" : "inset(9% 7% 9% 7%)",
        scale: reduceMotion ? 1 : 1.07,
      });
      gsap.set(titles, { y: reduceMotion ? 0 : 24, autoAlpha: 0 });
      gsap.set(intro, { autoAlpha: 1, y: 0, scale: 1 });

      const timeline = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          // Slightly shorter than the original 10-viewport sequence.
          // Keep enough scroll room for eight readable scenes on phones too.
          end: () => `+=${window.innerHeight * (reduceMotion ? 5.5 : 8.2)}`,
          pin: stage,
          pinSpacing: true,
          scrub: reduceMotion ? 0.35 : 1.1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Intro moves away before the first solution appears.
      timeline.to(intro, {
        y: reduceMotion ? 0 : -35,
        autoAlpha: 0,
        scale: 0.985,
        duration: 0.65,
        ease: "power2.inOut",
      });

      timeline.set(scenes[0], { autoAlpha: 1, xPercent: 0 });
      timeline.to(
        images[0],
        {
          clipPath: "inset(0% 0% 0% 0%)",
          scale: 1,
          duration: 0.65,
          ease: "power2.inOut",
        },
        "<"
      );
      timeline.to(titles[0], { y: 0, autoAlpha: 1, duration: 0.45 }, "<0.15");
      timeline.to({}, { duration: 0.3 });

      for (let index = 0; index < solutions.length - 1; index++) {
        const currentScene = scenes[index];
        const nextScene = scenes[index + 1];
        const currentImage = images[index];
        const nextImage = images[index + 1];
        const currentTitle = titles[index];
        const nextTitle = titles[index + 1];

        // Small reading beat before transitioning to the next use case.
        timeline.to({}, { duration: 0.28 });

        timeline.to(
          [currentTitle, currentScene],
          {
            y: reduceMotion ? 0 : -16,
            xPercent: -2,
            autoAlpha: 0,
            duration: 0.32,
            ease: "power2.inOut",
          }
        );
        timeline.to(currentImage, { scale: 1.035, duration: 0.32 }, "<");

        timeline.set(nextScene, { autoAlpha: 1, xPercent: 3 });
        timeline.set(nextTitle, { y: reduceMotion ? 0 : 20, autoAlpha: 0 });

        timeline.fromTo(
          nextImage,
          {
            clipPath: reduceMotion ? "inset(0% 0% 0% 0%)" : "inset(9% 7% 9% 7%)",
            scale: reduceMotion ? 1 : 1.055,
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 0.52,
            ease: "power2.inOut",
          }
        );
        timeline.to(
          nextScene,
          { xPercent: 0, autoAlpha: 1, duration: 0.32, ease: "power2.out" },
          "<"
        );
        timeline.to(nextTitle, { y: 0, autoAlpha: 1, duration: 0.42 }, "<0.12");
      }

      timeline.to({}, { duration: 0.3 });
      timeline.to(
        titles[titles.length - 1],
        { y: reduceMotion ? 0 : -12, autoAlpha: 0, duration: 0.35, ease: "power2.inOut" }
      );
      timeline.to(images[images.length - 1], { scale: 1.025, duration: 0.35 }, "<");

      const refreshFrame = window.requestAnimationFrame(() => ScrollTrigger.refresh());
      return () => window.cancelAnimationFrame(refreshFrame);
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="solutions"
      data-navbar-theme="light"
      className="relative z-20 w-full overflow-x-clip bg-[#f5f5f2] text-[#080808]"
    >
      <div
        ref={stageRef}
        className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-[#f5f5f2] max-sm:min-h-[520px]"
      >
        {/* Persistent metadata */}
       

        {/* Intro — same full-screen visual treatment on all devices */}
        <div
          ref={introRef}
          className="absolute inset-0 z-[90] flex items-center px-5 sm:px-7 md:px-10 lg:px-16"
        >
          <div className="w-full max-w-[1000px]">
            <div className="mb-5 flex items-center gap-3 sm:mb-7">
             
              <span className="text-[8px] uppercase tracking-[0.19em] text-black/45 sm:text-[9px] sm:tracking-[0.24em]">
                Solutions built around you
              </span>
            </div>
            <h2 className="text-[clamp(3.15rem,12.5vw,5rem)] font-medium leading-[0.82] tracking-[-0.085em] sm:text-[clamp(4.5rem,10vw,7rem)] md:text-[clamp(5rem,8.5vw,8rem)] lg:text-[clamp(6rem,9.5vw,9.5rem)]">
              Intelligence
              <br />
              with an <span className="text-black/30">outcome.</span>
            </h2>
            <p className="mt-5 max-w-[330px] text-[11px] leading-[1.65] text-black/50 sm:mt-7 sm:max-w-[390px] sm:text-[13px] sm:leading-6 md:mt-8 md:max-w-[430px] md:text-[14px] md:leading-7">
              We connect intelligence to the moments that matter — customers,
              sales, knowledge, operations, and decisions.
            </p>
            <div className="mt-6 flex items-center gap-3 text-[7px] uppercase tracking-[0.16em] text-black/45 sm:mt-8 sm:text-[8px] sm:tracking-[0.2em] md:mt-9 md:text-[9px]">
              <span>Explore our solutions</span>
              <ArrowDownRight size={13} />
            </div>
          </div>
        </div>

        {/* Solution scenes — shared markup and animation across all breakpoints */}
        {solutions.map((solution, index) => (
          <div
            key={solution.number}
            ref={(element) => {
              if (element) sceneRefs.current[index] = element;
            }}
            className="absolute inset-0 overflow-hidden opacity-0 will-change-transform"
            aria-label={solution.eyebrow}
          >
            <span className="pointer-events-none absolute -bottom-[10vw] -left-[2vw] z-0 select-none text-[45vw] font-medium leading-none tracking-[-0.12em] text-black/[0.035] sm:text-[40vw] md:text-[34vw] lg:text-[30vw]">
              {solution.number}
            </span>

            {/* Full-bleed responsive image frame */}
            <div
              ref={(element) => {
                if (element) imageRefs.current[index] = element;
              }}
              className="absolute inset-[10vh_4vw_7vh] z-10 overflow-hidden bg-black sm:inset-[9vh_4vw_7vh] md:inset-[7vh_5vw]"
            >
              <Image
                src={solution.image}
                alt={`${solution.eyebrow.toLowerCase()} solution`}
                fill
                priority={index === 0}
                loading={index === 0 ? undefined : "lazy"}
                sizes="(max-width: 767px) 92vw, (max-width: 1023px) 92vw, 90vw"
                className="object-cover grayscale"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/15" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/20" />
            
              <span className="absolute bottom-3 right-3 z-20 max-w-[55%] text-right text-[7px] uppercase tracking-[0.14em] text-white/55 sm:bottom-5 sm:right-5 sm:text-[8px] sm:tracking-[0.18em] md:bottom-6 md:right-6 md:text-[9px] md:tracking-[0.22em]">
                {solution.eyebrow}
              </span>
            </div>

            {/* Responsive title overlay */}
            <div
              ref={(element) => {
                if (element) titleRefs.current[index] = element;
              }}
              className="absolute bottom-[11vh] left-[7vw] z-30 w-[86vw] max-w-[660px] will-change-transform sm:bottom-[10vh] sm:left-[7vw] sm:w-[82vw] md:bottom-[13vh] md:left-[8vw] md:w-auto md:max-w-[min(720px,75vw)]"
            >
              <div className="mb-2 flex items-center gap-2 sm:mb-3 sm:gap-3">
                <span className="text-[7px] uppercase tracking-[0.16em] text-white/65 sm:text-[8px] sm:tracking-[0.2em] md:text-[9px] md:tracking-[0.22em]">
                  {solution.number} / 08
                </span>
                
                <span className="max-w-[52vw] truncate text-[7px] uppercase tracking-[0.14em] text-white/70 sm:text-[8px] sm:tracking-[0.18em] md:text-[9px] md:tracking-[0.22em]">
                  {solution.eyebrow}
                </span>
              </div>

              <h3 className="text-[clamp(2.45rem,10.5vw,4.1rem)] font-medium leading-[0.84] tracking-[-0.085em] text-white sm:text-[clamp(3.2rem,8vw,5.5rem)] md:text-[clamp(3.4rem,6.5vw,7.2rem)]">
                {solution.title}
                <br />
                <span className="text-white/55">{solution.accent}</span>
              </h3>

              <p className="mt-3 max-w-[290px] text-[10px] leading-[1.55] text-white/80 sm:mt-4 sm:max-w-[350px] sm:text-[12px] sm:leading-5 md:mt-5 md:max-w-[390px] md:text-[13px] md:leading-6 lg:text-[14px]">
                {solution.description}
              </p>

              <a
                href="#contact"
                className="group mt-3 inline-flex items-center gap-2 py-1 text-[7px] uppercase tracking-[0.14em] text-white/85 transition-colors hover:text-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-white sm:mt-4 sm:gap-3 sm:text-[8px] sm:tracking-[0.18em] md:mt-6 md:text-[9px] md:tracking-[0.2em]"
              >
                <span>Discuss this use case</span>
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
