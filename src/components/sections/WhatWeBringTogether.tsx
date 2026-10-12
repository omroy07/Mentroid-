"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  {
    number: "15+",
    label: "AI & ML SOLUTIONS",
    title: "Intelligence that earns its place.",
    description:
      "AI systems, machine learning models and automations shaped around real business needs.",
    image: "/assets/keyfacts/aimlservice.webp",
    tone: "dark",
  },
  {
    number: "4+",
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
        className="relative z-10 min-h-0 overflow-hidden border-y border-black/15 py-8 md:flex md:h-[100svh] md:min-h-[650px] md:flex-col md:justify-center md:py-12"
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
                {/* <span className={`text-[10px] uppercase tracking-[0.16em] ${
                  metric.tone === "light" ? "text-black/45" : "text-white/50"
                }`}>
                  0{index + 1} / 03
                </span> */}
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

        <div className="mt-6 flex items-center justify-between px-5 sm:px-8 md:px-12 lg:px-20 xl:px-24">
          <p className="text-[10px] uppercase tracking-[0.16em] text-black/45">
            Scroll to move through the work
          </p>
          <div className="hidden h-px w-32 bg-black/20 md:block">
            <div className="h-px w-1/3 bg-black" />
          </div>
        </div>
      </div>

      {/* BENEFITS: EDITORIAL NUMBERED ROWS */}
      <section className="relative border-b border-black/15 bg-[#e5e4df]">
        <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-20 xl:px-24">
          <div className="mb-14 grid gap-8 md:mb-20 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/50">
                WHY MENTROID
              </p>
              <h2 className="text-[clamp(3rem,7.5vw,7.5rem)] font-medium leading-[0.82] tracking-[-0.085em]">
                Good technology.
                <br />
                <span className="text-[#85857f]">Better outcomes.</span>
              </h2>
            </div>
            <p className="max-w-[360px] text-sm leading-relaxed text-black/60 sm:text-base md:col-span-4 md:justify-self-end">
              The value is not in adding more technology. It is in making the
              right things work better.
            </p>
          </div>

          <div ref={benefitsRef} className="border-t border-black/20">
            {benefits.map((benefit) => (
              <article
                key={benefit.no}
                data-benefit-row
                className="benefit-hover-card group relative isolate grid grid-cols-12 gap-3 overflow-hidden border-b border-black/20 px-0 py-7 transition-[padding] duration-500 hover:px-4 sm:py-9 md:gap-6 md:py-11 md:hover:px-6"
              >
                {/* Black reveal layer: rises from the bottom on hover/focus. */}
                <span
                  aria-hidden="true"
                  className="benefit-hover-ink pointer-events-none absolute inset-0 z-0 origin-bottom scale-y-0 bg-[#101112] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 group-focus-within:scale-y-100 motion-reduce:transition-none"
                />
                <p className="relative z-10 col-span-2 pt-1 text-[10px] tracking-[0.15em] text-black/45 transition-colors duration-500 group-hover:text-white/45 group-focus-within:text-white/45 md:col-span-1">
                  {benefit.no}
                </p>
                <h3 className="relative z-10 col-span-10 text-[clamp(1.45rem,3.3vw,3.4rem)] font-medium leading-[0.98] tracking-[-0.06em] text-[#141414] transition-[transform,color] duration-500 group-hover:translate-x-2 group-hover:text-white group-focus-within:text-white md:col-span-5">
                  {benefit.title}
                </h3>
                <p className="relative z-10 col-span-10 col-start-3 mt-2 max-w-[510px] text-sm leading-relaxed text-black/60 transition-colors duration-500 group-hover:text-white/65 group-focus-within:text-white/65 sm:text-base md:col-span-5 md:col-start-auto md:mt-0 md:justify-self-end">
                  {benefit.text}
                </p>
                {/* <span className="relative z-10 col-span-2 hidden justify-self-end text-2xl text-black transition-[transform,color] duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white group-focus-within:text-white md:flex">
                  ↗
                </span> */}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE SPLIT SCREEN */}
      <section className="audience-feature relative overflow-hidden bg-[#121416] text-white">
        <div className="mx-auto grid max-w-[1600px] md:min-h-[680px] md:grid-cols-2">
          <div className="audience-left flex flex-col justify-between px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:py-16 lg:px-20 lg:py-20 xl:px-24">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
              WHO WE BUILD WITH
            </p>
            <div className="mt-16">
              <h2 className="text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.82] tracking-[-0.085em]">
                Your next
                <br />
                <span className="text-white/45">move starts here.</span>
              </h2>
              <p className="mt-7 max-w-[440px] text-sm leading-relaxed text-white/65 sm:text-base">
                Whether you are building a new product or making an established
                operation more effective, start with the challenge worth solving.
              </p>
            </div>
            <p className="mt-12 text-[10px] uppercase tracking-[0.17em] text-white/40">
              Start with the problem. Build what matters.
            </p>
          </div>

          <div className="audience-right grid grid-rows-2 border-t border-white/15 md:border-l md:border-t-0">
            <article className="group flex min-h-[270px] flex-col justify-between border-b border-white/15 p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">
                  01 / STARTUPS & SAAS
                </p>
                <span className="text-2xl transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </div>
              <div>
                <h3 className="max-w-[440px] text-3xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-4xl">
                  From promising idea to useful product.
                </h3>
                <p className="mt-4 max-w-[450px] text-sm leading-relaxed text-white/60">
                  Explore, validate and build AI-enabled products with a practical path to growth.
                </p>
              </div>
            </article>
            <article className="group flex min-h-[270px] flex-col justify-between p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">
                  02 / SMES & GROWING TEAMS
                </p>
                <span className="text-2xl transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </div>
              <div>
                <h3 className="max-w-[440px] text-3xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-4xl">
                  Less repetitive work. More room to grow.
                </h3>
                <p className="mt-4 max-w-[450px] text-sm leading-relaxed text-white/60">
                  Connect tools, simplify workflows and give people more time for meaningful work.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

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
