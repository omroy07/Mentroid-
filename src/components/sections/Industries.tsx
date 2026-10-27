
"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  CircleHelp,
  FileText,
  Plus,
  Settings2,
  Sparkles,
  TrendingUp,
  UserRound,
  Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  
  {
    name: "Education",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    description:
      "Create engaging learning experiences with intelligent assistance and streamlined academic workflows.",
    benefits: [
      "Personalize learning assistance",
      "Automate routine administration",
      "Make educational resources easier to access",
    ],
    useCase: "Learning Assistant",
    prompt:
      "Create a learning plan based on a student's progress and learning goals.",
    insights: [
      ["Personalized learning", "Adapt resources to individual needs."],
      ["Student support", "Answer common questions efficiently."],
      ["Progress insights", "Summarize learning outcomes."],
    ],
  },
  {
    name: "Agriculture",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
    description:
      "Turn agricultural data into useful insights that support better planning and operational decisions.",
    benefits: [
      "Analyze agricultural data",
      "Support informed planning",
      "Automate routine reporting",
    ],
    useCase: "Agriculture Insights",
    prompt:
      "Review available farm data and identify useful patterns for crop planning.",
    insights: [
      ["Data analysis", "Organize available agricultural information."],
      ["Planning support", "Identify patterns for better decisions."],
      ["Resource insights", "Explore operational efficiencies."],
    ],
  },
  {
    name: "Healthcare",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
    description:
      "Help healthcare teams reduce administrative workload and make important information easier to find.",
    benefits: [
      "Streamline administrative workflows",
      "Retrieve approved information",
      "Simplify routine coordination",
    ],
    useCase: "Healthcare Support Assistant",
    prompt:
      "Organize incoming administrative requests and summarize the next steps for staff.",
    insights: [
      ["Request management", "Organize administrative inquiries."],
      ["Knowledge access", "Find information in approved resources."],
      ["Team efficiency", "Simplify repetitive coordination."],
    ],
  },
  {
    name: "Finance",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    description:
      "Improve financial research, document analysis, and operational workflows with intelligent automation.",
    benefits: [
      "Accelerate financial research",
      "Automate routine back-office work",
      "Streamline customer service operations",
    ],
    useCase: "Investment Research Agent",
    prompt:
      "Summarize the key findings from financial reports into concise bullet points.",
    insights: [
      ["Financial analysis", "Summarize reported results."],
      ["Risk review", "Highlight items requiring further review."],
      ["Research assistance", "Bring relevant information together."],
    ],
  },
 

  
];

export default function Industries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const industry = industries[activeIndex];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-industry-heading]",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        "[data-industry-panel]",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  function selectIndustry(index: number) {
    if (index === activeIndex) return;

    setActiveIndex(index);

    // Animate the existing visual when the selection changes.
    requestAnimationFrame(() => {
      if (visualRef.current) {
        gsap.fromTo(
          visualRef.current,
          { opacity: 0.55, y: 8 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          }
        );
      }

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { opacity: 0.4, y: 8 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          }
        );
      }
    });
  }

  return (
    <section
      ref={sectionRef}
      id="industries"
      className="relative overflow-hidden bg-white py-20 text-[#17191f] sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div
          data-industry-heading
          className="mb-14 text-center sm:mb-20 lg:mb-24"
        >
          

          <h2 className="mx-auto max-w-5xl text-3xl font-medium leading-[1.15] tracking-[-0.055em] sm:text-5xl lg:text-[64px]">
            Powering progress across industries
          </h2>

         
        </div>

        {/* Main split layout */}
        <div className="grid items-start gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20 xl:gap-28">
          {/* Left: Dynamic AI product visual */}
         
{/* Left: Dynamic industry image */}
<div
  data-industry-panel
  className="min-w-0 lg:sticky lg:top-24"
>
  <div
    ref={visualRef}
    className="relative aspect-[4/5] max-h-[760px] overflow-hidden rounded-[22px] border border-[#d9def0] bg-[#e9ecf8] sm:rounded-[28px] lg:aspect-[4/4.5]"
  >
    <img
      key={industry.name}
      src={industry.image}
      alt={`${industry.name} industry`}
      className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
      loading="lazy"
    />

    {/* Subtle blue overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#101b35]/75 via-[#101b35]/10 to-transparent" />

    
  </div>

 
</div>

          {/* Right: Industry selector and content */}
          <div data-industry-panel className="min-w-0">
            
            <div className="border-t border-[#25272d]">
              {industries.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => selectIndustry(index)}
                    aria-pressed={isActive}
                    className={`group relative block w-full border-b border-[#d9d9dc] py-5 text-left transition-colors duration-300 sm:py-6 ${
                      isActive
                        ? "border-b-[#25272d]"
                        : "hover:bg-[#f8f9fc]"
                    }`}
                  >
                    {/* Active blue accent */}
                   <span
  className={`absolute left-0 top-0 h-[3px]  ${
    isActive ? "w-full" : "w-0"
  }`}
  style={{
    background:
      "linear-gradient(90deg, #FF765F 0%, #D66F9C 50%, #536FCE 100%)",
  }}
/>

                    <span className="flex items-center justify-between gap-4">
                      <span
                        className="text-xl font-normal tracking-[-0.04em] transition-colors duration-300 sm:text-[28px]"
                          
                        
                      >
                        {item.name}
                      </span>

                     
                    </span>

                    {/* Expand the active industry */}
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                        isActive
                          ? "mt-5 grid-rows-[1fr] opacity-100"
                          : "mt-0 grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div ref={isActive ? contentRef : undefined}>
                          <p className="max-w-xl text-sm leading-7 text-[#000000] sm:text-[22px]">
                            {item.description}
                          </p>

                          <ul className="mt-5 space-y-3">
                            {item.benefits.map((benefit) => (
                              <li
                                key={benefit}
                                className="flex items-start gap-3 text-[13px] leading-6 text-[#000000] sm:text-[16px]"
                              >
                                <CheckCircle2
                                  size={17}
                                  strokeWidth={1.7}
                                  className="mt-1 shrink-0 text-[#000000]"
                                />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#25272d] transition-colors hover:text-[#000000]">
                            <span>Learn More</span>
                            <ArrowRight
                              size={16}
                              className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="/industries"
              className="group text-[18px] mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-[10px] border border-[#29443b] px-6 py-3 text-sm font-medium text-[#25272d] transition-all duration-300 hover:border-[#ffff] hover:bg-[#29443b] hover:text-white sm:px-7"
            >
              See all industries
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
