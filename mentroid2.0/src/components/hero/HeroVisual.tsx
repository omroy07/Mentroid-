"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const capabilities = [
  {
    id: "agents",
    label: "AI AGENTS",
    description: "Autonomous systems",
    position: "top",
  },
  {
    id: "rag",
    label: "RAG SYSTEMS",
    description: "Knowledge intelligence",
    position: "left",
  },
  {
    id: "automation",
    label: "AUTOMATION",
    description: "Intelligent workflows",
    position: "right",
  },
  {
    id: "ml",
    label: "ML MODELS",
    description: "Predictive intelligence",
    position: "bottom",
  },
];

export default function HeroVisual() {
  const visualRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<HTMLDivElement[]>([]);
  const linesRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!visualRef.current) return;

    const ctx = gsap.context(() => {
      // Initial entrance
      gsap.fromTo(
        visualRef.current,
        {
          opacity: 0,
          scale: 0.92,
          y: 30,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
          delay: 0.35,
        }
      );

      // Floating system
      gsap.to(visualRef.current, {
        y: -8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Central orb breathing
      if (orbRef.current) {
        gsap.to(orbRef.current, {
          scale: 1.08,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      // Nodes subtle movement
      nodesRef.current.forEach((node, index) => {
        gsap.to(node, {
          y: index % 2 === 0 ? -5 : 5,
          duration: 2.8 + index * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
        });
      });

      // Connection pulse
      if (linesRef.current) {
        gsap.to(linesRef.current, {
          opacity: 0.65,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, visualRef);

    return () => ctx.revert();
  }, []);

  const addNode = (node: HTMLDivElement | null) => {
    if (node && !nodesRef.current.includes(node)) {
      nodesRef.current.push(node);
    }
  };

  return (
    <div
      ref={visualRef}
      className="
        pointer-events-none
        absolute
        right-[-3%]
        top-1/2
        hidden
        h-[620px]
        w-[620px]
        -translate-y-1/2
        lg:block
        xl:right-[2%]
        2xl:right-[6%]
      "
    >
      {/* Technical grid */}
      <div
        className="
          absolute
          inset-[8%]
          rounded-full
          opacity-[0.12]
          [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
          [background-size:42px_42px]
          [mask-image:radial-gradient(circle,black_20%,transparent_72%)]
        "
      />

      {/* Outer orbital ring */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[390px]
          w-[390px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-slate-400/20
        "
      />

      {/* Second orbital ring */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[290px]
          w-[290px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-blue-300/20
        "
      />

      {/* SVG connection system */}
      <svg
        ref={linesRef}
        viewBox="0 0 620 620"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        {/* Top */}
        <path
          d="M310 260 L310 120"
          stroke="rgba(71, 85, 105, 0.28)"
          strokeWidth="1"
        />

        {/* Left */}
        <path
          d="M260 310 L105 310"
          stroke="rgba(71, 85, 105, 0.28)"
          strokeWidth="1"
        />

        {/* Right */}
        <path
          d="M360 310 L515 310"
          stroke="rgba(71, 85, 105, 0.28)"
          strokeWidth="1"
        />

        {/* Bottom */}
        <path
          d="M310 360 L310 500"
          stroke="rgba(71, 85, 105, 0.28)"
          strokeWidth="1"
        />

        {/* Diagonal orbital lines */}
        <path
          d="M190 190 C260 120 360 120 430 190"
          stroke="rgba(147, 197, 253, 0.28)"
          strokeWidth="1"
        />

        <path
          d="M190 430 C260 500 360 500 430 430"
          stroke="rgba(147, 197, 253, 0.2)"
          strokeWidth="1"
        />

        {/* Moving particles */}
        <circle
          cx="310"
          cy="120"
          r="3"
          fill="#94C8F8"
        />

        <circle
          cx="105"
          cy="310"
          r="3"
          fill="#94C8F8"
        />

        <circle
          cx="515"
          cy="310"
          r="3"
          fill="#94C8F8"
        />

        <circle
          cx="310"
          cy="500"
          r="3"
          fill="#94C8F8"
        />
      </svg>

      {/* Top capability */}
      <div
        ref={addNode}
        className="
          absolute
          left-1/2
          top-[3%]
          -translate-x-1/2
          text-center
        "
      >
        <div className="mb-2 flex items-center justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

          <span className="text-[10px] font-semibold tracking-[0.22em] text-slate-600">
            AI AGENTS
          </span>
        </div>

        <p className="text-[10px] text-slate-500">
          Autonomous systems
        </p>
      </div>

      {/* Left capability */}
      <div
        ref={addNode}
        className="
          absolute
          left-0
          top-1/2
          -translate-y-1/2
          text-right
        "
      >
        <div className="mb-2 flex items-center justify-end gap-2">
          <span className="text-[10px] font-semibold tracking-[0.22em] text-slate-600">
            RAG SYSTEMS
          </span>

          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
        </div>

        <p className="text-[10px] text-slate-400">
          Knowledge intelligence
        </p>
      </div>

      {/* Right capability */}
      <div
        ref={addNode}
        className="
          absolute
          right-0
          top-1/2
          -translate-y-1/2
        "
      >
        <div className="mb-2 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

          <span className="text-[10px] font-semibold tracking-[0.22em] text-slate-600">
            AUTOMATION
          </span>
        </div>

        <p className="text-[10px] text-slate-500">
          Intelligent workflows
        </p>
      </div>

      {/* Bottom capability */}
      <div
        ref={addNode}
        className="
          absolute
          bottom-[3%]
          left-1/2
          -translate-x-1/2
          text-center
        "
      >
        <div className="mb-2 flex items-center justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

          <span className="text-[10px] font-semibold tracking-[0.22em] text-slate-600">
            ML MODELS
          </span>
        </div>

        <p className="text-[10px] text-slate-500">
          Predictive intelligence
        </p>
      </div>

      {/* Central intelligence node */}
      <div
        ref={orbRef}
        className="
          absolute
          left-1/2
          top-1/2
          h-[170px]
          w-[170px]
          -translate-x-1/2
          -translate-y-1/2
        "
      >
        {/* Soft glow */}
        <div
          className="
            absolute
            inset-[-45px]
            rounded-full
            bg-blue-200/20
            blur-[45px]
          "
        />

        {/* Main sphere */}
        <div
          className="
            absolute
            inset-0
            rounded-full
            border
            border-white/70
            bg-white/45
            shadow-[0_25px_80px_rgba(100,150,200,0.18)]
            backdrop-blur-xl
          "
        />

        {/* Inner sphere */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[105px]
            w-[105px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-blue-200/50
            bg-gradient-to-br
            from-white
            via-[#DCEEFF]
            to-[#BFE1FF]
            shadow-[inset_0_0_40px_rgba(255,255,255,0.9)]
          "
        />

        {/* Core */}
        <div
          className="
            absolute
            left-1/2
            top-1/2
            flex
            h-14
            w-14
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-slate-950
            shadow-[0_10px_40px_rgba(15,23,42,0.25)]
          "
        >
          <span className="text-xl font-semibold tracking-[-0.08em] text-white">
            M
          </span>
        </div>

        {/* Orbit dot */}
        <div
          className="
            absolute
            right-[4px]
            top-[32px]
            h-3
            w-3
            rounded-full
            border-2
            border-white
            bg-[#8CC7F8]
            shadow-[0_0_20px_rgba(140,199,248,0.8)]
          "
        />
      </div>

      {/* Tiny system label */}
      <div
        className="
          absolute
          bottom-[19%]
          left-[17%]
          rounded-full
          border
          border-slate-300/30
          bg-white/35
          px-3
          py-1.5
          backdrop-blur-md
        "
      >
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

          <span className="text-[8px] font-medium uppercase tracking-[0.18em] text-slate-500">
            Systems online
          </span>
        </div>
      </div>
    </div>
  );
}