
"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Scene = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  media: string;
};

const scenes: Scene[] = [
  {
    eyebrow: "INTELLIGENCE / 01",
    title: "Intelligence built",
    accent: "for what’s next.",
    description:
      "Mentroid build AI agents, RAG systems, automation workflows and AI-powered products that solve real business problems.",
    media: "/videos/ai.webm",
  },
  {
    eyebrow: "AGENTIC AI / 02",
    title: "AI that understands.",
    accent: "AI that acts.",
    description:
      "From AI agents and RAG systems to custom copilots, we build AI that can reason, respond and execute.",
    media: "/videos/agentic-ai.webm",
  },
  {
    eyebrow: "AUTOMATION / 03",
    title: "From intelligence",
    accent: "to automation.",
    description:
      "Connect data, people and workflows through intelligent automation designed around your business.",
    media: "/videos/automation.webm",
  },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const mediaRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;

    if (!section || !pin) return;

    const ctx = gsap.context(() => {
      const media = mediaRefs.current.filter(
        (item): item is HTMLDivElement => item !== null
      );
      const content = contentRefs.current.filter(
        (item): item is HTMLDivElement => item !== null
      );

      if (media.length !== scenes.length || content.length !== scenes.length) {
        return;
      }

      const setActiveVideo = (activeIndex: number) => {
        videoRefs.current.forEach((video, index) => {
          if (!video) return;

          if (index === activeIndex) {
            void video.play().catch(() => {
              // Playback can be restricted by browser settings.
            });
          } else {
            video.pause();
          }
        });
      };

      // Set the first scene as the initial visible scene.
      gsap.set(content, {
        autoAlpha: 0,
        y: 80,
        force3D: true,
      });

      gsap.set(content[0], {
        autoAlpha: 1,
        y: 0,
      });

      gsap.set(media, {
        autoAlpha: 0,
        scale: 1.08,
        xPercent: 0,
        yPercent: 0,
        force3D: true,
      });

      gsap.set(media[0], {
        autoAlpha: 1,
        scale: 1,
      });

      setActiveVideo(0);

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Each scene occupies a section of the scroll timeline.
            const index =
              self.progress < 0.39
                ? 0
                : self.progress < 0.73
                  ? 1
                  : 2;

            setActiveVideo(index);
          },
        },
      });

      // Scene 01: cinematic movement.
      timeline.to(media[0], {
        scale: 1.1,
        xPercent: -2,
        yPercent: -3,
        duration: 1,
        ease: "none",
      });

      // Scene 01 → Scene 02.
      timeline.to(
        content[0],
        {
          autoAlpha: 0,
          y: -70,
          duration: 0.35,
          ease: "power2.inOut",
        },
        "+=0.15"
      );

      timeline.to(
        media[0],
        {
          autoAlpha: 0,
          scale: 1.14,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "<"
      );

      timeline.to(
        media[1],
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.65,
          ease: "power2.out",
        },
        "<0.1"
      );

      timeline.to(
        content[1],
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
        },
        "<0.1"
      );

      // Scene 02 movement.
      timeline.to(media[1], {
        scale: 1.11,
        xPercent: 3,
        yPercent: -4,
        duration: 1,
        ease: "none",
      });

      // Scene 02 → Scene 03.
      timeline.to(
        content[1],
        {
          autoAlpha: 0,
          y: -70,
          duration: 0.35,
          ease: "power2.inOut",
        },
        "+=0.1"
      );

      timeline.to(
        media[1],
        {
          autoAlpha: 0,
          scale: 1.14,
          duration: 0.5,
          ease: "power2.inOut",
        },
        "<"
      );

      timeline.to(
        media[2],
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.65,
          ease: "power2.out",
        },
        "<0.1"
      );

      timeline.to(
        content[2],
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
        },
        "<0.1"
      );

      // Final scene movement and text exit.
      timeline.to(media[2], {
        scale: 1.08,
        xPercent: -2,
        yPercent: -2,
        duration: 0.5,
        ease: "none",
      });

      timeline.to(content[2], {
        autoAlpha: 0,
        y: -60,
        duration: 0.25,
        ease: "none",
      });

      // Subtle parallax for the scene backgrounds.
      gsap.to(section.querySelectorAll(".hero-parallax"), {
        yPercent: -12,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    }, section);

    return () => {
      ctx.revert();
      videoRefs.current.forEach((video) => video?.pause());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      data-navbar-theme="dark"
      className="relative h-[400vh] w-full max-w-full overflow-x-clip bg-black"
    >
      <div
        ref={pinRef}
        className="relative h-[100svh] min-h-[520px] w-full max-w-full overflow-hidden bg-black"
      >
        {/* Background videos */}
        <div className="absolute inset-0 h-full w-full overflow-hidden">
          {scenes.map((scene, index) => (
            <div
              key={scene.media}
              ref={(element) => {
                mediaRefs.current[index] = element;
              }}
              className={`absolute inset-0 h-full w-full overflow-hidden ${
                index === 0 ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <video
                ref={(element) => {
                  videoRefs.current[index] = element;
                }}
                className="hero-parallax absolute inset-0 h-full w-full object-cover"
                src={scene.media}
                autoPlay={index === 0}
                muted
                loop
                playsInline
                preload={index === 0 ? "auto" : "metadata"}
              />
            </div>
          ))}
        </div>

        {/* Cinematic overlays */}
        <div className="pointer-events-none absolute inset-0 z-[2] bg-black/25" />

        <div className="pointer-events-none absolute inset-0 z-[3] bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.38)_35%,rgba(0,0,0,0.08)_75%,rgba(0,0,0,0.22)_100%)]" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[30%] bg-gradient-to-t from-black/55 to-transparent" />

        {/* Scene content */}
        <div className="absolute inset-0 z-10 flex items-center overflow-hidden">
          <div className="w-full px-5 sm:px-6 md:px-10 lg:px-14 xl:px-16">
            <div className="relative min-h-[420px] w-full sm:min-h-[460px] md:min-h-[500px] lg:min-h-[520px]">
              {scenes.map((scene, index) => (
                <div
                  key={scene.title}
                  ref={(element) => {
                    contentRefs.current[index] = element;
                  }}
                  className={`absolute left-0 top-1/2 w-full max-w-[850px] -translate-y-1/2 ${
                    index === 0 ? "visible opacity-100" : "invisible opacity-0"
                  }`}
                >
                  <div className="mb-5 flex items-center gap-3 sm:mb-6 md:mb-7">
                    <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/70 sm:text-[10px] sm:tracking-[0.25em]">
                      {scene.eyebrow}
                    </span>
                  </div>

                  <div className="overflow-hidden">
                    <h1 className="max-w-[950px] text-[clamp(2.8rem,10vw,5.8rem)] font-medium leading-[0.9] tracking-[-0.065em] text-white sm:text-[clamp(3.2rem,8vw,5.8rem)] sm:tracking-[-0.075em]">
                      <span className="block">{scene.title}</span>
                      <span className="block text-white/60">
                        {scene.accent}
                      </span>
                    </h1>
                  </div>

                  <p className="mt-6 max-w-[390px] text-[13px] leading-6 text-white/65 sm:mt-7 sm:max-w-[440px] sm:text-sm sm:leading-7 md:mt-8 md:max-w-[480px] md:text-base md:leading-8">
                    {scene.description}
                  </p>

                



{index === 0 && (
  <div
    className="
      mt-6 flex w-full flex-col items-stretch gap-3
      sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center
      md:mt-9 md:gap-4 lg:mt-10 xl:gap-5
    "
  >
    {/* Primary CTA */}
    <a
      href="#contact"
      className="
        group relative isolate inline-flex min-h-11 w-full
        items-center justify-center gap-2 overflow-hidden rounded-full
        bg-white px-5 py-3 text-xs font-medium text-black
        transition-transform duration-300 ease-out
        hover:-translate-y-0.5 
        active:translate-y-0
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-white focus-visible:ring-offset-2
        focus-visible:ring-offset-black
        sm:w-auto sm:min-h-12 sm:gap-2.5 sm:px-5 sm:text-sm
        md:px-6 lg:min-h-[52px] lg:px-7 xl:px-8
      "
    >
      {/* Sliding shine */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-y-0 -left-1/2 z-0
          w-1/3 -skew-x-[20deg] bg-gradient-to-r
          from-transparent via-black/10 to-transparent
          transition-transform duration-700 ease-out
          group-hover:translate-x-[450%]
          motion-reduce:transition-none
        "
      />

      <span className="relative z-10">Start Your AI Project</span>

      <ArrowUpRight
        size={16}
        className="
          relative z-10 shrink-0 transition-transform duration-300
          group-hover:translate-x-0.5 group-hover:-translate-y-0.5
          sm:h-[17px] sm:w-[17px]
        "
      />
    </a>

    {/* Secondary CTA */}
    <a
      href="#selected-work"
      className="
        group relative isolate inline-flex min-h-11 w-full
        items-center justify-center gap-2 overflow-hidden rounded-full
        border border-white/25 px-5 py-3 text-xs font-medium text-white
        transition-all duration-300 ease-out
        hover:-translate-y-0.5 hover:border-white/60
        hover:bg-white/[0.06]
        active:translate-y-0
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-white focus-visible:ring-offset-2
        focus-visible:ring-offset-black
        sm:w-auto sm:min-h-12 sm:gap-2.5 sm:px-5 sm:text-sm
        md:px-6 lg:min-h-[52px] lg:px-7 xl:px-8
      "
    >
      {/* Sliding outline highlight */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-y-0 -left-1/2 z-0
          w-1/3 -skew-x-[20deg] bg-gradient-to-r
          from-transparent via-white/[0.12] to-transparent
          transition-transform duration-700 ease-out
          group-hover:translate-x-[450%]
          motion-reduce:transition-none
        "
      />

      <span className="relative z-10">See What We’ve Built</span>

      <ArrowUpRight
        size={16}
        className="
          relative z-10 shrink-0 transition-transform duration-300
          group-hover:translate-x-0.5 group-hover:-translate-y-0.5
          sm:h-[17px] sm:w-[17px]
        "
      />
    </a>
  </div>
)}




                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="pointer-events-none absolute bottom-5 left-5 right-5 z-20 flex items-end justify-between sm:bottom-6 sm:left-6 sm:right-6 md:bottom-7 md:left-10 md:right-10 lg:left-14 lg:right-14 xl:left-16 xl:right-16">
          <div className="flex items-center gap-2.5 text-[8px] uppercase tracking-[0.17em] text-white/50 sm:gap-3 sm:text-[9px] sm:tracking-[0.2em]">
            <ArrowDown size={13} />
            <span>Scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  );
}
