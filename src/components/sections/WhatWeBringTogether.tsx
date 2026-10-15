"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  {
    number: "5+",
    label: "AI & ML SOLUTIONS",
    title: "Intelligence that earns its place.",
    description:
      "AI systems, machine learning models and automations shaped around real business needs.",
    image: "/assets/keyfacts/aimlservice.webp",
    tone: "dark",
  },
  {
    number: "5+",
    label: "PROJECTS COMPLETED",
    title: "From idea to something real.",
    description:
      "Thoughtful digital products and intelligent workflows, built to move beyond the demo.",
    image: "/assets/keyfacts/project.webp",
    tone: "light",
  },
  {
    number: "14+",
    label: "OUR TEAM",
    title: "Different minds. Shared momentum.",
    description:
      "Product thinking, engineering and AI expertise working towards one clear outcome.",
    image: "/assets/keyfacts/team.webp",
    tone: "dark",
  },
] as const;

const benefits = [
  {
    no: "01",
    title: "Start with the business problem.",
    text: "We focus on the outcome first, then find the right combination of AI, software and automation.",
  },
  {
    no: "02",
    title: "Fit the way you already work.",
    text: "Connect data, tools and workflows instead of asking your team to rebuild everything around a new system.",
  },
  {
    no: "03",
    title: "Build for the next stage.",
    text: "Create a practical starting point with room to expand as your product, customers and operations evolve.",
  },
  {
    no: "04",
    title: "Keep people in the picture.",
    text: "Thoughtful automation includes boundaries, oversight and human judgement wherever it matters.",
  },
];

const partners = [
  { name: "Credible", logo: "/assets/partners/01.png" },
  { name: "Yellowtail", logo: "/assets/partners/02.png" },
  { name: "UX Design", logo: "/assets/partners/03.png" },
  { name: "Techni", logo: "/assets/partners/04.png" },
  { name: "Octo", logo: "/assets/partners/05.png" },
];

export default function WhatWeBringTogether() {
  const rootRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const benefitsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const intro = introRef.current;
    const showcase = showcaseRef.current;
    const track = trackRef.current;
    if (!root || !intro || !showcase || !track) return;

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduceMotion) return;

      const mm = gsap.matchMedia();

      // Desktop: pin the showcase and scrub a horizontal editorial gallery.
      mm.add("(min-width: 900px)", () => {
        const cards = cardsRef.current.filter(Boolean);
        if (cards.length !== 3) return;

        const distance = () =>
          Math.max(0, track.scrollWidth - showcase.clientWidth);

        gsap.set(cards, { autoAlpha: 1, y: 70, rotate: (i) => (i - 1) * 2 });
        gsap.set(cards.map((card) => card.querySelector(".metric-image")).filter(Boolean), {
          scale: 1.18,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: showcase,
            start: "top top",
            end: () => `+=${Math.max(window.innerHeight * 2.1, distance() * 1.25)}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(cards, {
          y: 0,
          rotate: 0,
          stagger: 0.08,
          duration: 0.55,
          ease: "power3.out",
        });
        tl.to(cards.map((card) => card.querySelector(".metric-image")).filter(Boolean), {
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        }, "<");
        tl.to(track, {
          x: () => -distance(),
          duration: 2,
          ease: "none",
        }, "+=0.15");
        tl.to(cards, {
          y: -35,
          stagger: 0.04,
          duration: 0.35,
          ease: "power2.inOut",
        }, "-=0.2");

        return () => tl.kill();
      });

      // Mobile/tablet: vertical card reveals, no pinning or forced horizontal scroll.
      mm.add("(max-width: 899px)", () => {
        const cards = cardsRef.current.filter(Boolean);
        cards.forEach((card, index) => {
          gsap.fromTo(card, {
            autoAlpha: 0,
            y: 70,
            x: index % 2 === 0 ? -22 : 22,
          }, {
            autoAlpha: 1,
            y: 0,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          });

          const image = card.querySelector(".metric-image");
          if (image) {
            gsap.fromTo(image, { scale: 1.12 }, {
              scale: 1,
              duration: 1.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 88%",
                once: true,
              },
            });
          }
        });
      });

      // Split reveal: benefits rows alternate from left and right.
      const rows = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll("[data-benefit-row]")
      );
      rows.forEach((row, index) => {
        gsap.fromTo(row, {
          autoAlpha: 0,
          x: index % 2 === 0 ? -65 : 65,
        }, {
          autoAlpha: 1,
          x: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 87%",
            once: true,
          },
        });
      });

      const audience = root.querySelector(".audience-feature");
      if (audience) {
        const left = audience.querySelector(".audience-left");
        const right = audience.querySelector(".audience-right");
        if (left) {
          gsap.fromTo(left, { x: -70, autoAlpha: 0 }, {
            x: 0, autoAlpha: 1, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: audience, start: "top 80%", once: true },
          });
        }
        if (right) {
          gsap.fromTo(right, { x: 70, autoAlpha: 0 }, {
            x: 0, autoAlpha: 1, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: audience, start: "top 80%", once: true },
          });
        }
      }

      const partnerSection = root.querySelector(".partner-strip");
      if (partnerSection) {
        gsap.fromTo(partnerSection, { y: 50, autoAlpha: 0 }, {
          y: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: partnerSection, start: "top 90%", once: true },
        });
      }

      requestAnimationFrame(() => ScrollTrigger.refresh());
      return () => mm.revert();
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="mentroid-proof"
      data-navbar-theme="light"
      className="relative w-full overflow-clip bg-[#f1f0ec] text-[#111]"
    >
      {/* EDITORIAL INTRO */}
      <div
        ref={introRef}
        className="relative mx-auto flex min-h-[68svh] max-w-[1600px] flex-col justify-between px-5 pb-10 pt-32 sm:px-8 sm:pb-14 md:px-12 md:pt-36 lg:px-20 lg:pb-16 xl:px-24"
      >
       

        <div className="mt-20 grid gap-8 md:mt-24 md:grid-cols-12 md:items-end">
          <div className="md:col-span-9">
            <h2 className="editorial-title text-[clamp(3.4rem,10.2vw,10.2rem)] font-medium leading-[0.78] tracking-[-0.09em]">
              Built for
              <br />
              <span className="text-[#898984]">what&apos;s next.</span>
            </h2>
          </div>
          <div className="md:col-span-3 md:pb-2">
            <p className="max-w-[360px] text-sm leading-relaxed text-black/65 sm:text-base">
              A closer look at the work, the people and the practical thinking
              behind intelligent technology.
            </p>
            <div className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.16em] text-black/55">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/25 text-base">↓</span>
              Explore the details
            </div>
          </div>
        </div>
      </div>

      {/* CINEMATIC HORIZONTAL SHOWCASE */}
      <div
        ref={showcaseRef}
        className="relative z-10 min-h-0 overflow-hidden  py-8 md:flex md:h-[100svh] md:min-h-[650px] md:flex-col md:justify-center md:py-12"
      >
        <div className="mb-6 flex items-center justify-between px-5 sm:px-8 md:mb-8 md:px-12 lg:px-20 xl:px-24">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/50">
            What we bring together
          </p>
          <p className="text-[10px] uppercase tracking-[0.16em] text-black/40">
            01 — 03
          </p>
        </div>

        <div
          ref={trackRef}
          className="metric-track flex w-full flex-col gap-4 px-5 sm:px-8 md:w-max md:flex-row md:gap-5 md:px-12 lg:px-20 xl:px-24"
        >
          {metrics.map((metric, index) => (
            <article
              key={metric.label}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={`metric-card relative isolate flex min-h-[490px] w-full shrink-0 flex-col justify-between overflow-hidden rounded-[3px] p-6 sm:min-h-[540px] sm:p-8 md:h-[min(66svh,680px)] md:min-h-[540px] md:w-[min(70vw,880px)] md:p-10 lg:p-12 ${
                metric.tone === "light" ? "bg-[#dfdfd9] text-[#111]" : "bg-[#151719] text-white"
              }`}
            >
              {metric.image && (
                <div className="absolute inset-0 -z-10 overflow-hidden">
                  <div className="metric-image absolute inset-0">
                    <Image
                      src={metric.image}
                      alt=""
                      fill
                      sizes="(max-width: 899px) 100vw, 70vw"
                      className={`object-cover ${metric.tone === "dark" ? "opacity-45" : "opacity-25"}`}
                    />
                  </div>
                  <div className={`absolute inset-0 ${
                    metric.tone === "dark"
                      ? "bg-gradient-to-t from-black/95 via-black/35 to-black/10"
                      : "bg-gradient-to-t from-[#dfdfd9]/95 via-[#dfdfd9]/35 to-[#dfdfd9]/10"
                  }`} />
                </div>
              )}

              <div className="flex items-start justify-between gap-4">
                <p className={`text-[10px] font-medium uppercase tracking-[0.19em] ${
                  metric.tone === "light" ? "text-black/55" : "text-white/65"
                }`}>
                  {metric.label}
                </p>
              
              </div>

              <div className="relative mt-20 md:mt-12">
                <p className="metric-number text-[clamp(6rem,15vw,13rem)] font-medium leading-[0.72] tracking-[-0.105em]">
                  {metric.number}
                </p>
                  {/* <div className={`my-7 h-px w-full ${
                    metric.tone === "light" ? "bg-black/20" : "bg-white/25"}`} /> */}
                <h3 className="max-w-[680px] text-[clamp(2rem,4.2vw,4.5rem)] my-7 font-medium leading-[0.91] tracking-[-0.065em]">
                  {metric.title}
                </h3>
                <p className={`mt-5 max-w-[510px] text-sm leading-relaxed sm:text-base ${
                  metric.tone === "light" ? "text-black/65" : "text-white/70"
                }`}>
                  {metric.description}
                </p>
              </div>

              <div className={`mt-8 flex items-center justify-between border-t pt-4 text-[10px] uppercase tracking-[0.15em] ${
                metric.tone === "light" ? "border-black/20 text-black/50" : "border-white/25 text-white/55"
              }`}>
                <span>Mentroid / {metric.label.toLowerCase()}</span>
                <span className="text-xl leading-none transition-transform duration-500 group-hover:translate-x-1">↗</span>
              </div>
            </article>
          ))}
        </div>

       
      </div>

    

      {/* PARTNERS */}
      <section className="partner-strip relative overflow-hidden border-b border-black/15 bg-[#f1f0ec] py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-[1600px] px-5 sm:px-8 md:px-12 lg:px-20 xl:px-24">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/45">
                PEOPLE WE WORK WITH
              </p>
              <h2 className="mt-3 text-2xl font-medium tracking-[-0.055em] sm:text-3xl">
                Built through collaboration.
              </h2>
            </div>
            <p className="max-w-[320px] text-sm leading-relaxed text-black/55">
              A shared effort makes better work possible.
            </p>
          </div>

          <div className="grid grid-cols-2 border-l border-t border-black/15 sm:grid-cols-3 md:grid-cols-5">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex h-24 items-center justify-center border-b border-r border-black/15 px-5 py-6 transition-colors duration-300 hover:bg-white sm:h-28"
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={140}
                  height={48}
                  className="max-h-9 w-auto max-w-full object-contain grayscale opacity-55 transition-all duration-300 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
