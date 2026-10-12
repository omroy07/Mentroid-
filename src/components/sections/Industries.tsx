"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    number: "01",
    name: "Healthcare",
    statement: "Intelligence for better decisions.",
    description:
      "AI systems that help healthcare organizations turn complex information into useful, actionable insight.",
    image: "/assets/industries/01.webp",
  },
  {
    number: "02",
    name: "Agriculture",
    statement: "Data that understands the field.",
    description:
      "Machine learning and predictive systems built around agricultural data, operations and outcomes.",
    image: "/assets/industries/02.webp",
  },
  {
    number: "03",
    name: "Education",
    statement: "Learning that adapts.",
    description:
      "Intelligent learning experiences that connect knowledge, personalization and engagement.",
    image: "/assets/industries/03.webp",
  },
  {
    number: "04",
    name: "Finance",
    statement: "Intelligence behind every decision.",
    description:
      "AI-powered systems for analysis, automation, customer experience and operational intelligence.",
    image: "/assets/industries/04.webp",
  },
  {
    number: "05",
    name: "SMEs",
    statement: "Enterprise intelligence without enterprise complexity.",
    description:
      "Practical AI systems designed around the unique workflows and resources of growing businesses.",
    image: "/assets/industries/05.webp",
  },
  {
    number: "06",
    name: "Startups & SaaS",
    statement: "Build intelligence into the product.",
    description:
      "AI-native product experiences and scalable systems designed to move quickly from idea to production.",
    image: "/assets/industries/06.webp",
  },
  {
    number: "07",
    name: "Retail & E-commerce",
    statement: "Every interaction becomes intelligent.",
    description:
      "Personalization, recommendations, customer support and automation designed for modern commerce.",
    image: "/assets/industries/07.webp",
  },
  {
    number: "08",
    name: "Professional Services",
    statement: "Automate expertise, not relationships.",
    description:
      "Intelligent workflows that help professional teams work faster without losing the human layer.",
    image: "/assets/industries/08.webp",
  },
];

export default function Industries() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const imageInnerRefs = useRef<HTMLDivElement[]>([]);
  const numberRefs = useRef<HTMLSpanElement[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const intro = introRef.current;
    const list = listRef.current;

    if (!section || !stage || !intro || !list) return;

    const ctx = gsap.context(() => {
      const items = itemRefs.current;
      const images = imageRefs.current;
      const imageInners = imageInnerRefs.current;
      const numbers = numberRefs.current;

      if (
        items.length !== industries.length ||
        images.length !== industries.length ||
        imageInners.length !== industries.length ||
        numbers.length !== industries.length
      ) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add(
        {
          mobile: "(max-width: 767px)",
          tablet: "(min-width: 768px) and (max-width: 1023px)",
          desktop: "(min-width: 1024px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (mediaContext) => {
          const conditions = mediaContext.conditions as {
            mobile: boolean;
            tablet: boolean;
            desktop: boolean;
            reduceMotion: boolean;
          };
          const { mobile, tablet, reduceMotion } = conditions;

          // Reduced-motion users get a natural, readable section without pinning.
          if (reduceMotion) {
            gsap.set([intro, list], { clearProps: "all" });
            gsap.set(items, { autoAlpha: 1, scale: 1, clearProps: "transform" });
            gsap.set(images, { autoAlpha: 0, clipPath: "inset(0% 0% 0% 0%)" });
            gsap.set(images[0], { autoAlpha: 1 });
            gsap.set(numbers, { autoAlpha: 1 });
            section.style.height = "auto";
            stage.style.position = "relative";
            stage.style.height = "auto";
            stage.style.minHeight = "100svh";
            return () => {
              section.style.removeProperty("height");
              stage.style.removeProperty("position");
              stage.style.removeProperty("height");
              stage.style.removeProperty("min-height");
            };
          }

          const viewportHeight = window.innerHeight;
          const scrollScreens = mobile ? 9.4 : tablet ? 9.8 : 10.2;
          const targetRatio = mobile ? 0.23 : tablet ? 0.34 : 0.36;

          // Keep the section's physical height in sync with the timeline's scroll distance.
          section.style.height = `${viewportHeight * scrollScreens}px`;
          stage.style.height = `${viewportHeight}px`;

          const getIndustryOffset = (index: number) => {
            const item = items[index];
            if (!item) return 0;
            const targetY = window.innerHeight * targetRatio;
            // Account for both the list's top position and the item's position within it.
            return targetY - list.offsetTop - item.offsetTop - item.offsetHeight * 0.15;
          };

          gsap.set(intro, { autoAlpha: 0, y: mobile ? 34 : 56 });
          gsap.set(list, { autoAlpha: 0, y: 0 });
          gsap.set(items, { autoAlpha: 0.12, scale: 0.975, transformOrigin: "left center" });
          gsap.set(images, {
            autoAlpha: 0,
            clipPath: "inset(7% 0% 7% 0%)",
          });
          gsap.set(images[0], { autoAlpha: 1, clipPath: "inset(0% 0% 0% 0%)" });
          gsap.set(imageInners, { scale: 1.07 });
          gsap.set(numbers, { autoAlpha: 0 });

          const timeline = gsap.timeline({
            defaults: { ease: "power3.inOut" },
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${window.innerHeight * scrollScreens}`,
              pin: stage,
              pinSpacing: false,
              scrub: mobile ? 0.65 : 0.9,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              refreshPriority: -1,
            },
          });

          // Intro enters, holds briefly, then clears the stage for the industry sequence.
          timeline.to(intro, {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          });
          timeline.to({}, { duration: mobile ? 0.35 : 0.45 });
          timeline.to(intro, {
            autoAlpha: 0,
            y: mobile ? -30 : -48,
            duration: 0.55,
            ease: "power3.inOut",
          });
          timeline.set(list, { autoAlpha: 1 });

          // First industry.
          timeline.to(items[0], {
            autoAlpha: 1,
            scale: 1,
            duration: 0.45,
            ease: "power3.out",
          });
          timeline.to(list, { y: () => getIndustryOffset(0), duration: 0.55 }, "<");
          timeline.fromTo(
            images[0],
            { clipPath: "inset(7% 0% 7% 0%)" },
            { autoAlpha: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 0.65 },
            "<0.05"
          );
          timeline.fromTo(
            imageInners[0],
            { scale: 1.07 },
            { scale: 1, duration: 0.8, ease: "power2.out" },
            "<"
          );
          timeline.to(numbers[0], { autoAlpha: 1, duration: 0.18 }, "<0.12");

          // Transition each active title, number and image together.
          industries.forEach((_, index) => {
            if (index === 0) return;

            const previousItem = items[index - 1];
            const currentItem = items[index];
            const previousImage = images[index - 1];
            const currentImage = images[index];
            const previousNumber = numbers[index - 1];
            const currentNumber = numbers[index];
            const currentInner = imageInners[index];

            timeline.to({}, { duration: mobile ? 0.2 : 0.28 });
            timeline.to(list, {
              y: () => getIndustryOffset(index),
              duration: mobile ? 0.62 : 0.72,
              ease: "power3.inOut",
            });
            timeline.to(
              previousItem,
              { autoAlpha: 0.16, scale: 0.975, duration: 0.3, ease: "power2.out" },
              "<0.05"
            );
            timeline.to(
              currentItem,
              { autoAlpha: 1, scale: 1, duration: 0.42, ease: "power3.out" },
              "<0.1"
            );
            timeline.to(
              previousImage,
              {
                autoAlpha: 0,
                clipPath: "inset(7% 0% 7% 0%)",
                duration: 0.42,
                ease: "power2.inOut",
              },
              "<"
            );
            timeline.fromTo(
              currentImage,
              { autoAlpha: 0, clipPath: "inset(10% 0% 10% 0%)" },
              {
                autoAlpha: 1,
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 0.65,
                ease: "power3.inOut",
              },
              "<0.08"
            );
            timeline.fromTo(
              currentInner,
              { scale: 1.07 },
              { scale: 1, duration: 0.8, ease: "power2.out" },
              "<"
            );
            timeline.to(previousNumber, { autoAlpha: 0, duration: 0.12 }, "<0.05");
            timeline.to(currentNumber, { autoAlpha: 1, duration: 0.16 }, "<0.06");
          });

          timeline.to({}, { duration: mobile ? 0.3 : 0.4 });

          // Refresh after images and layout have had a frame to settle.
          const refreshId = window.requestAnimationFrame(() => ScrollTrigger.refresh());

          return () => {
            window.cancelAnimationFrame(refreshId);
            timeline.scrollTrigger?.kill();
            timeline.kill();
            section.style.removeProperty("height");
            stage.style.removeProperty("height");
          };
        }
      );

      return () => mm.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="industries"
      data-navbar-theme="light"
      className="relative w-full overflow-clip bg-[#f4f4f1] text-[#080808]"
    >
      <div
        ref={stageRef}
        className="relative h-[100svh] w-full overflow-hidden bg-[#f4f4f1]"
      >
        {/* Intro */}
        <div
          ref={introRef}
          className="absolute inset-0 z-[100] flex items-center px-5 sm:px-7 md:px-10 lg:px-16"
        >
          <div className="w-full max-w-[1050px]">
            <div className="mb-6 flex items-center gap-3 sm:mb-8">
              
            
            </div>

            <h2 className="max-w-[900px] text-[clamp(3.3rem,13.5vw,5.8rem)] font-medium leading-[0.8] tracking-[-0.09em] sm:text-[clamp(4.5rem,11vw,7rem)] md:text-[clamp(5.5rem,9.5vw,10rem)]">
              Intelligence
              <br />
              for every
              <br />
              <span className="text-black/25">industry.</span>
            </h2>

            <p className="mt-6 max-w-[330px] text-[11px] leading-5 text-black/45 sm:mt-8 sm:max-w-[430px] sm:text-[14px] sm:leading-7 md:text-[15px]">
              Different industries. Different constraints. The same principle —
              intelligence built around how the business actually works.
            </p>
          </div>
        </div>

        {/* Industry list */}
        <div
          ref={listRef}
          className="absolute left-5 top-[18vh] z-30 w-[calc(100%-40px)] will-change-transform sm:left-7 sm:top-[19vh] sm:w-[calc(100%-56px)] md:left-[6vw] md:top-[31vh] md:w-[52vw] lg:left-[6vw] lg:w-[52vw]"
        >
          {industries.map((industry, index) => (
            <div
              key={industry.number}
              ref={(element) => {
                if (element) itemRefs.current[index] = element;
              }}
              className="group flex min-h-[58px] items-baseline gap-3 border-b border-black/[0.08] py-3 will-change-transform sm:min-h-[66px] sm:gap-4 md:min-h-[7.2vw] md:gap-5"
            >
              <span
                ref={(element) => {
                  if (element) numberRefs.current[index] = element;
                }}
                className="w-6 shrink-0 text-[8px] uppercase tracking-[0.18em] text-black/35 sm:w-7 sm:text-[9px]"
              >
                {industry.number}
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="max-w-full text-[clamp(1.85rem,8.5vw,3.25rem)] font-medium leading-[0.88] tracking-[-0.075em] sm:text-[clamp(2.2rem,7vw,3.8rem)] md:text-[clamp(2.6rem,6.3vw,4.8rem)]">
                  {industry.name}
                </h3>
                <p className="mt-2 max-w-[300px] text-[9px] leading-4 text-black/40 sm:mt-3 sm:text-[10px] sm:leading-5 md:max-w-[390px] md:text-[12px]">
                  {industry.statement}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Image window */}
        <div className="absolute bottom-[2vh] left-5 right-5 z-20 h-[25vh] overflow-hidden bg-black sm:bottom-[3vh] sm:left-7 sm:right-7 sm:h-[27vh] md:bottom-auto md:left-auto md:right-[5vw] md:top-1/2 md:h-[58vh] md:w-[38vw] md:-translate-y-1/2 lg:right-[5vw] lg:h-[58vh] lg:w-[38vw]">
          {industries.map((industry, index) => (
            <div
              key={industry.number}
              ref={(element) => {
                if (element) imageRefs.current[index] = element;
              }}
              className="absolute inset-0 overflow-hidden opacity-0 will-change-[clip-path,opacity]"
            >
              <div
                ref={(element) => {
                  if (element) imageInnerRefs.current[index] = element;
                }}
                className="absolute inset-0 will-change-transform"
              >
                <Image
                  src={industry.image}
                  alt={`${industry.name} solutions by Mentroid`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 56px), 38vw"
                  className="object-cover grayscale"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 bg-black/[0.12]" />
              <div className="absolute left-4 top-4 z-10 text-[7px] uppercase tracking-[0.2em] text-white/65 sm:left-5 sm:top-5 sm:text-[8px]">
                MENTROID / {industry.number}
              </div>
              <div className="absolute bottom-4 right-4 z-10 max-w-[70%] text-right text-[7px] uppercase tracking-[0.2em] text-white/65 sm:bottom-5 sm:right-5 sm:text-[8px]">
                {industry.name}
              </div>
            </div>
          ))}
        </div>

        {/* Supporting copy */}
        <div className="absolute bottom-[8vh] right-[22vw] z-40 hidden max-w-[320px] lg:block">
          <p className="text-[14px] leading-6 text-black/40">
            Intelligence becomes useful when it understands the environment
            around it.
          </p>
          <div className="mt-5 flex items-center gap-2 text-[8px] uppercase tracking-[0.18em] text-black/35">
            <span>Built around your industry</span>
            <ArrowUpRight size={12} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
