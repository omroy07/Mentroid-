
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Workflow,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    number: "01",
    eyebrow: "SERVICES",
    title: "Technology built around your business.",
    description:
      "From custom AI systems to digital products, we turn complex requirements into practical technology designed around the way you work.",
    image:
      "https://images.unsplash.com/photo-1763897913733-0d228fce7b5b?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Minimal translucent architectural glass forms",
    theme: "dark",
    icon: Bot,
    tags: [
      "AI Development",
      "AI Automation",
      "Custom Chatbots",
      "ML Model Development",
      "AI SaaS Development",
      "Web & Software Development",
    ],
    href: "/services",
    linkLabel: "Explore our services",
  },
  {
    number: "02",
    eyebrow: "SOLUTIONS",
    title: "Make intelligence useful.",
    description:
      "Connect AI to the moments that matter—from customer conversations and lead qualification to internal knowledge and business operations.",
    image:
      "https://framerusercontent.com/images/MSQrFxLE4XYnPRMwqDOSjNbsOE.png?height=1124&width=1122",
    imageAlt: "Three-dimensional white particle cube on a black background",
    theme: "black",
    icon: Workflow,
    tags: [
      "24/7 AI Customer Support",
      "AI Lead Qualification",
      "WhatsApp AI Assistant",
      "Sales Automation",
      "Business Process Automation",
      "AI Knowledge Assistant",
      "AI Recommendation Systems",
      "Custom AI Platforms",
    ],
    href: "/solutions",
    linkLabel: "Explore our solutions",
  },
  {
    number: "03",
    eyebrow: "EXPERTISE",
    title: "Deep expertise engineering.",
    description:
      "We bring modern AI techniques and sound engineering together to build systems that move beyond experimentation and into real-world use.",
    image:
      "https://images.unsplash.com/photo-1763897913733-0d228fce7b5b?auto=format&fit=crop&w=1800&q=85",
    imageAlt: "Geometric glass structures with soft natural light",
    theme: "light",
    icon: BrainCircuit,
    tags: [
      "Generative AI",
      "AI Agents",
      "RAG Systems",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Predictive Analytics",
      "Workflow Automation",
    ],
    href: "/expertise",
    linkLabel: "Explore our expertise",
  },
];

export default function ServicesSolutionsExpertise() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Animate the heading independently.
      gsap.fromTo(
        "[data-capability-heading]",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "[data-capability-heading]",
            start: "top 88%",
            once: true,
          },
        }
      );

      // Animate card contents, not the sticky article itself.
      gsap.utils
        .toArray<HTMLElement>("[data-capability-card]")
        .forEach((card) => {
          const content = card.querySelector<HTMLElement>(
            "[data-card-content]"
          );
          const visual = card.querySelector<HTMLElement>(
            "[data-card-visual]"
          );

          if (content) {
            gsap.fromTo(
              content.children,
              { y: 18, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.65,
                stagger: 0.07,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 78%",
                  once: true,
                },
              }
            );
          }

          if (visual) {
            gsap.fromTo(
              visual,
              { scale: 1.06 },
              {
                scale: 1,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 82%",
                  once: true,
                },
              }
            );
          }
        });

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="capabilities-heading"
      className="bg-[#f0eee9] px-4 py-20 text-[#20211f] sm:px-6 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1600px]">
        {/* Section heading */}
        <header
          data-capability-heading
          className="mx-auto mb-12 max-w-4xl text-center sm:mb-16 lg:mb-20"
        >
         

          <h2
            id="capabilities-heading"
            className="text-balance text-4xl font-normal leading-[1.08] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-[64px]"
          >
            Purpose-built AI solutions.
          </h2>

         
        </header>

        {/* Sticky card stack */}
        <div className="relative pb-[8vh]">
          {capabilities.map((item, index) => {
            
            const isLight = item.theme === "light";

            return (
              <article
                key={item.number}
                data-capability-card
                style={{
  top: `calc(90px + ${index * 65}px)`,
  zIndex: index + 1,
}}
className={`group sticky mb-0 min-h-[650px] overflow-hidden rounded-[22px] border sm:rounded-[28px] lg:min-h-[690px] ${
  isLight
    ? "border-black/[0.07] bg-[#e5e9e2] text-[#202320]"
    : "border-white/[0.12] bg-[#071013] text-white"
}`}
              >
                {/* Background image */}
                <div
                  data-card-visual
                  className={`absolute inset-0 z-0 overflow-hidden ${
                    item.theme === "black"
                      ? "left-[28%] sm:left-[38%] lg:left-[48%]"
                      : "left-[25%] sm:left-[35%] lg:left-[43%]"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading={index === 0 ? "eager" : "lazy"}
                    className={`h-full w-full transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045] ${
                      item.theme === "black"
                        ? "object-contain object-center"
                        : "object-cover object-center"
                    }`}
                  />
                </div>

                {/* Image contrast */}
                <div
                  className={`pointer-events-none absolute inset-0 z-[1] ${
                    item.theme === "dark"
                      ? "bg-[linear-gradient(90deg,#10262b_0%,rgba(9,20,23,0.98)_27%,rgba(6,10,13,0.78)_49%,rgba(5,8,10,0.08)_100%)]"
                      : item.theme === "black"
                        ? "bg-[linear-gradient(90deg,#050505_0%,#050505_37%,rgba(5,5,5,0.9)_49%,rgba(5,5,5,0.08)_100%)]"
                        : "bg-[linear-gradient(90deg,#e5e9e2_0%,rgba(229,233,226,0.98)_35%,rgba(229,233,226,0.72)_56%,rgba(229,233,226,0.06)_100%)]"
                  }`}
                />

                {/* Foreground content */}
                <div className="relative z-10 flex min-h-[620px] flex-col justify-between p-5 sm:p-10 md:p-12 lg:min-h-[620px] lg:p-16">
                  <div className="flex items-center justify-between gap-4">
                    <p
                      className={`text-[9px] font-semibold uppercase tracking-[0.18em] sm:text-xs sm:tracking-[0.2em] ${
                        isLight ? "text-[#4e5750]" : "text-white/70"
                      }`}
                    >
                     {item.eyebrow}
                    </p>

                   
                  </div>

                  <div
                    data-card-content
                    className="max-w-[650px] py-12 sm:py-16 lg:py-20"
                  >
                    <h3 className="max-w-[600px] text-balance text-3xl font-normal leading-[1.08] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-[68px]">
                      {item.title}
                    </h3>

                    <p
                      className={`mt-5 max-w-[470px] text-sm leading-6 sm:mt-6 sm:text-base sm:leading-7 ${
                        isLight ? "text-[#4f554f]" : "text-white/75"
                      }`}
                    >
                      {item.description}
                    </p>

                    <div className="mt-7 flex max-w-[560px] flex-wrap gap-2 sm:mt-8">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full border px-3 py-2 text-[12px] font-normal leading-tight sm:text-xs ${
                            isLight
                              ? "border-black/15 bg-white/25 text-[#000000]"
                              : "border-white/20 bg-white/[0.06] text-white/85 backdrop-blur-sm"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={item.href}
                      className={`mt-8 inline-flex min-h-12 items-center gap-4 font-normal rounded-[10px] px-5 text-[16px] transition-colors duration-300 sm:mt-10 sm:px-6 ${
                        isLight
                          ? "bg-[#000000] text-white hover:bg-[#29443b]"
                          : "bg-white text-[#000000] hover:bg-[#fff]"
                      }`}
                    >
                      {item.linkLabel}
                      
                    </Link>
                  </div>

                 
               
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
