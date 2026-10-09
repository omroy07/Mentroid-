
"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    id: "ecgenius",
    number: "01",
    title: "ECGenius",
    category: "AI / HEALTHCARE",
    description:
      "Intelligent healthcare technology designed to support faster and smarter clinical decisions.",
    image: "/assets/selected-work/01.webp",
    link: "/work/ecgenius",
  },
  {
    id: "learnsphere",
    number: "02",
    title: "LearnSphere",
    category: "AI / EDTECH",
    description:
      "Modern learning platform combines intelligent recommendations with a seamless experience.",
    image: "/assets/selected-work/02.webp",
    link: "/work/learnsphere",
  },
  {
    id: "agritech",
    number: "03",
    title: "AgriTech",
    category: "AI / AGRICULTURE",
    description:
      "Data-driven agricultural intelligence built to transform complex field data into useful insights.",
    image: "/assets/selected-work/03.webp",
    link: "/work/agritech",
  },
  {
    id: "visionstra",
    number: "04",
    title: "VisionSTRA",
    category: "COMPUTER VISION",
    description:
      "Computer vision systems that turn visual information into actionable intelligence.",
    image: "/assets/selected-work/04.webp",
    link: "/work/visionstra",
  },
  {
    id: "automation",
    number: "05",
    title: "Automation",
    category: "AI / AUTOMATION",
    description:
      "Intelligent workflow automation designed to eliminate repetitive business processes.",
    image: "/assets/selected-work/05.webp",
    link: "/work/automation",
  },
  {
    id: "aiplatform",
    number: "06",
    title: "AI Platform",
    category: "AI / PLATFORM",
    description:
      "A scalable AI platform bringing models, workflows and intelligent products together.",
    image: "/assets/selected-work/06.webp",
    link: "/work/aiplatform",
  },
];

export default function ProjectSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !viewport || !track) return;

    const mm = gsap.matchMedia();

    // Desktop: vertical scrolling controls the horizontal gallery.
    // Mobile/tablet: native touch scrolling remains enabled.
    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const getDistance = () =>
          Math.max(0, track.scrollWidth - viewport.clientWidth);

        const horizontalTween = gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: viewport,
            start: "top top+=100",
            end: () => `+=${getDistance()}`,
            pin: viewport,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Recalculate the horizontal distance when the layout changes.
        const handleResize = () => ScrollTrigger.refresh();

        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("resize", handleResize);
          horizontalTween.scrollTrigger?.kill();
          horizontalTween.kill();
          gsap.set(track, { clearProps: "transform" });
        };
      }
    );

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="selected-work"
      data-navbar-theme="dark"
      className="
        relative
        w-full
        overflow-hidden
        bg-black
        py-20
        text-white
        sm:py-24
        md:py-28
        lg:py-32
      "
    >
      {/* HEADER */}
      <div
        className="
          relative
          z-20
          mx-auto
          mb-12
          flex
          w-[calc(100%-40px)]
          max-w-[1400px]
          items-end
          justify-between
          sm:mb-14
          sm:w-[calc(100%-48px)]
          md:mb-16
          md:w-[calc(100%-80px)]
          lg:mb-20
          lg:w-[calc(100%-112px)]
        "
      >
        <h2
          className="
            text-[clamp(3rem,7vw,7rem)]
            font-medium
            leading-[0.82]
            tracking-[-0.075em]
          "
        >
          Built to
          <br />
          <span className="text-white/40">move ideas.</span>
        </h2>

        <div className="hidden text-right sm:block">
          <p className="text-[8px] uppercase tracking-[0.16em] text-white/35 md:text-[9px]">
            06 projects
          </p>
          <p className="mt-2 text-[8px] text-white/30 md:text-[9px]">
            Scroll to explore
          </p>
        </div>
      </div>

      {/* PROJECT GALLERY */}
      <div
        ref={viewportRef}
        className="
          relative
          w-full
          overflow-x-auto
          overflow-y-hidden
          overscroll-x-contain
          touch-pan-x
          md:overflow-hidden
          motion-reduce:md:overflow-x-auto
        "
        style={{
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div
          ref={trackRef}
          className="
            flex
            w-max
            items-start
            gap-4
            px-5
            sm:gap-5
            sm:px-6
            md:gap-6
            md:px-10
            lg:gap-7
            lg:px-14
          "
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* BOTTOM INFORMATION */}
      <div
        className="
          mx-auto
          mt-12
          flex
          w-[calc(100%-40px)]
          max-w-[1400px]
          items-end
          justify-between
          sm:mt-14
          sm:w-[calc(100%-48px)]
          md:mt-16
          md:w-[calc(100%-80px)]
          lg:mt-20
          lg:w-[calc(100%-112px)]
        "
      >
        <p
          className="
            w-[175px]
            text-[8px]
            leading-[1.5]
            text-white/35
            sm:w-[230px]
            sm:text-[9px]
            md:w-auto
            md:max-w-[250px]
          "
        >
          AI systems, intelligent products
          <br />
          and digital experiences built for
          real-world impact.
        </p>

        <Link
          href="/work"
          className="
            shrink-0
            text-[8px]
            uppercase
            tracking-[0.16em]
            text-white/35
            transition-colors
            duration-300
            hover:text-white
            sm:text-[9px]
          "
        >
          Explore Work →
        </Link>
      </div>
    </section>
  );
}

/* ================================================================
   PROJECT CARD
================================================================ */

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      data-project-card
      className="
        group
        relative
        h-[320px]
        w-[250px]
        shrink-0
        sm:h-[400px]
        sm:w-[290px]
        md:h-[440px]
        md:w-[320px]
        lg:h-[490px]
        lg:w-[355px]
        xl:h-[500px]
        xl:w-[375px]
      "
    >
      <div
        className="
          relative
          h-full
          w-full
          overflow-hidden
          rounded-[3px]
          bg-[#151515]
          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          transition-shadow
          duration-300
          group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.4)]
        "
      >
        {/* IMAGE */}
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes="
            (max-width: 639px) 250px,
            (max-width: 767px) 290px,
            (max-width: 1023px) 320px,
            (max-width: 1279px) 355px,
            375px
          "
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.035]
          "
        />

        {/* IMAGE OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-black/10
            transition-colors
            duration-300
            group-hover:bg-black/20
          "
        />

        {/* TOP META */}
        <div
          className="
            absolute
            left-5
            right-5
            top-5
            z-20
            flex
            items-center
            justify-between
            sm:left-6
            sm:right-6
            sm:top-6
          "
        >
          <span className="text-[8px] font-medium uppercase tracking-[0.16em] text-white/70">
            {project.number}
          </span>

          <span
            className="
              max-w-[150px]
              text-right
              text-[7px]
              uppercase
              tracking-[0.14em]
              text-white/70
              sm:text-[8px]
            "
          >
            {project.category}
          </span>
        </div>

        {/* PROJECT DETAILS */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            z-20
            bg-gradient-to-t
            from-black
            via-black/85
            to-transparent
            px-5
            pb-5
            pt-16
            sm:px-6
            sm:pb-6
            sm:pt-20
          "
        >
          <div className="flex items-end justify-between gap-4">
            <div className="min-w-0">
              <h3
                className="
                  text-[clamp(2rem,4vw,3.2rem)]
                  font-medium
                  leading-[0.86]
                  tracking-[-0.07em]
                  text-white
                "
              >
                {project.title}
              </h3>

              <p className="mt-3 max-w-[280px] text-[8px] leading-[1.5] text-white/60 sm:text-[9px]">
                {project.description}
              </p>
            </div>

            <Link
              href={project.link}
              aria-label={`View ${project.title}`}
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white/80
                text-black
                transition-transform
                duration-300
                group-hover:rotate-45
              "
            >
              <ArrowUpRight size={15} strokeWidth={1.7} />
            </Link>
          </div>
        </div>

        {/* SUBTLE HOVER BORDER */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-30
            rounded-[3px]
            border
            border-transparent
            transition-colors
            duration-300
            group-hover:border-white/20
          "
        />
      </div>
    </article>
  );
}
