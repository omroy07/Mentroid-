"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CaseStudy = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: "ecgenius",
    number: "01",
    title: "ECGenius",
    category: "AI · Healthcare",
    description:
      "Intelligent healthcare technology designed to support faster and smarter clinical decisions.",
    image: "/assets/selected-work/01.webp",
    link: "/work/ecgenius",
  },
  {
    id: "learnsphere",
    number: "02",
    title: "LearnSphere",
    category: "AI · Education",
    description:
      "A modern learning platform combining intelligent recommendations with a seamless experience.",
    image: "/assets/selected-work/02.webp",
    link: "/work/learnsphere",
  },
  {
    id: "agritech",
    number: "03",
    title: "AgriTech",
    category: "AI · Agriculture",
    description:
      "Data-driven agricultural intelligence built to transform complex field data into useful insights.",
    image: "/assets/selected-work/03.webp",
    link: "/work/agritech",
  },
  {
    id: "visionstra",
    number: "04",
    title: "VisionSTRA",
    category: "Computer Vision",
    description:
      "Computer vision systems that turn visual information into actionable intelligence.",
    image: "/assets/selected-work/04.webp",
    link: "/work/visionstra",
  },
  {
    id: "automation",
    number: "05",
    title: "Automation",
    category: "AI · Workflow Automation",
    description:
      "Intelligent workflow automation designed to eliminate repetitive business processes.",
    image: "/assets/selected-work/05.webp",
    link: "/work/automation",
  },
  {
    id: "aiplatform",
    number: "06",
    title: "AI Platform",
    category: "AI · Product Engineering",
    description:
      "A scalable AI platform bringing models, workflows and intelligent products together.",
    image: "/assets/selected-work/06.webp",
    link: "/work/aiplatform",
  },
];

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const gallery = galleryRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;

    if (!section || !gallery || !track || !progress) return;

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const getDistance = () =>
          Math.max(0, track.scrollWidth - gallery.clientWidth);

        const horizontalTween = gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: gallery,
            start: "top top",
            end: () => `+=${Math.max(getDistance(), window.innerHeight * 0.8)}`,
            pin: gallery,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              gsap.set(progress, { scaleX: self.progress });
            },
          },
        });

        const refresh = () => ScrollTrigger.refresh();
        window.addEventListener("resize", refresh);

        return () => {
          window.removeEventListener("resize", refresh);
          horizontalTween.scrollTrigger?.kill();
          horizontalTween.kill();
          gsap.set([track, progress], { clearProps: "all" });
        };
      }
    );

    mm.add(
      "(max-width: 767px), (prefers-reduced-motion: reduce)",
      () => {
        gsap.set(progress, { scaleX: 0 });
        return () => gsap.set(progress, { clearProps: "all" });
      }
    );

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="selected-work"
      data-navbar-theme="dark"
      className="relative w-full overflow-hidden bg-[#171717] text-[#f3f3f0]"
    >
      {/* Section intro — aligned with the editorial heading rhythm used across the homepage */}
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1600px] pt-24 sm:w-[calc(100%-64px)] sm:pt-28 md:pt-32 lg:w-[calc(100%-10vw)] lg:pt-36">
        <div className="mb-7 flex items-center justify-between gap-4 sm:mb-9">
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/45 sm:text-[10px]">
           Case Studies
          </p>

          <nav
            aria-label="Case study navigation"
            className="hidden items-center gap-5 text-[10px] text-white/60 sm:flex md:gap-7"
          >
            <Link href="/work" className="transition-colors hover:text-white">
              All case studies ↗
            </Link>
            {/* <Link href="/contact" className="transition-colors hover:text-white">
              Contact ↗
            </Link> */}
          </nav>
          <Link
            href="/work"
            aria-label="View all case studies"
            className="text-white/60 transition-colors hover:text-white sm:hidden"
          >
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end md:gap-10">
          <h2 className="max-w-[900px] text-[clamp(3rem,7.4vw,7.2rem)] font-medium leading-[0.82] tracking-[-0.085em]">
            Selected
            <br />
            <span className="text-white/30">Case Studies.</span>
          </h2>

          <p className="max-w-[330px] pb-1 text-[11px] leading-[1.7] text-white/50 sm:text-xs md:pb-2">
            A closer look at intelligent products, applied AI and digital systems
            shaped around real-world challenges.
          </p>
        </div>
      </div>

      {/* Landscape case-study gallery */}
      <div
        ref={galleryRef}
        className="relative flex min-h-[58vh] flex-col justify-center overflow-x-auto overflow-y-hidden overscroll-x-contain touch-pan-x py-12 sm:min-h-[62vh] sm:py-14 lg:min-h-[66vh] lg:py-1 md:overflow-x-hidden"
        style={{
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div
          ref={trackRef}
          className="flex w-max items-start gap-8 px-5 sm:gap-10 sm:px-8 lg:gap-12 lg:px-[5vw]"
          style={{ willChange: "transform", touchAction: "pan-x" }}
        >
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="group w-[78vw] max-w-[440px] shrink-0 sm:w-[38vw] sm:max-w-[500px] lg:w-[27vw] lg:max-w-[470px]"
            >
              <Link
                href={study.link}
                aria-label={`Read the ${study.title} case study`}
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#171717]"
              >
                <div className="relative aspect-[1.42/1] overflow-hidden bg-[#242424]">
                  <Image
                    src={study.image}
                    alt={`${study.title} case study`}
                    fill
                    sizes="(max-width: 639px) 78vw, (max-width: 1023px) 38vw, 27vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-black/[0.04] transition-colors duration-500 group-hover:bg-black/10" />
                  <span className="absolute left-3 top-3 text-[9px] tracking-[0.12em] text-white/80 sm:left-4 sm:top-4">
                    CASE STUDY / {study.number}
                  </span>
                  <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/30 text-[#171717] transition-transform duration-300 group-hover:rotate-45 sm:bottom-4 sm:right-4 sm:h-9 sm:w-9">
                    <ArrowUpRight size={15} strokeWidth={1.6} />
                  </span>
                </div>

                <div className="mt-4 flex items-start justify-between gap-4 sm:mt-5">
                  <div className="min-w-0">
                    <h3 className="text-[clamp(1.1rem,1.65vw,1.55rem)] font-normal leading-tight tracking-[-0.045em] text-white/95">
                      {study.title}
                    </h3>
                    <p className="mt-1.5 text-[10px] leading-relaxed text-white/45 sm:text-[11px]">
                      {study.category}
                    </p>
                    <p className="mt-2 max-w-[360px] text-[10px] leading-[1.55] text-white/55 sm:text-[11px]">
                      {study.description}
                    </p>
                  </div>
                  <span className="mt-1 shrink-0 text-[9px] tracking-[0.1em] text-white/35">
                    {study.number}
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>

      {/* Quiet footer and progress line */}
      <div className="mx-auto flex w-[calc(100%-40px)] max-w-[1600px] items-end justify-between gap-5 pb-7 sm:w-[calc(100%-64px)] sm:pb-9 lg:w-[calc(100%-10vw)] lg:pb-10">
        <p className="max-w-[250px] text-[10px] leading-relaxed text-white/45 sm:text-[11px]">
          Selected case studies across AI, intelligent products and digital experiences.
        </p>

        <div className="flex min-w-[100px] flex-col items-end gap-2 sm:min-w-[150px]">
          <span className="flex items-center gap-2 text-[9px] text-white/45">
            Drag on mobile <ChevronRight size={12} className="sm:hidden" />
            <span className="hidden sm:inline">Scroll to explore</span>
          </span>
          <div className="h-px w-full overflow-hidden bg-white/20">
            <div
              ref={progressRef}
              className="h-full w-full origin-left scale-x-0 bg-white/80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
