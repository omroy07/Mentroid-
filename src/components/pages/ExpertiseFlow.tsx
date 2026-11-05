"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Eye,
  LineChart,
  Network,
  Sparkles,
  Workflow,
} from "lucide-react";

const stages = [
  { number: "01", label: "Understand", detail: "Map the work, users and decisions around the challenge." },
  { number: "02", label: "Engineer", detail: "Shape the right models, logic and safeguards for the job." },
  { number: "03", label: "Integrate", detail: "Connect the capability with the systems people already use." },
  { number: "04", label: "Improve", detail: "Learn from real use and keep making the system more useful." },
];

const expertiseIcons = {
  "Generative AI": Sparkles,
  "AI Agents": Bot,
  "RAG Systems": Network,
  "Machine Learning": BrainCircuit,
  "Deep Learning": BrainCircuit,
  "Computer Vision": Eye,
  "Predictive Analytics": LineChart,
  "Workflow Automation": Workflow,
} as const;

export default function ExpertiseFlow({
  title,
  iconName,
}: {
  title: string;
  iconName: string;
}) {
  const [activeStage, setActiveStage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActiveStage((current) => (current + 1) % stages.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [paused]);

  const CurrentIcon = expertiseIcons[iconName as keyof typeof expertiseIcons] ?? Workflow;

  return (
    <div
      className="expertise-flow relative mx-auto flex aspect-square w-full max-w-[590px] items-center justify-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
      aria-label={`${title} engineering process`}
    >
      <div className="expertise-system-grid absolute inset-[8%] rounded-full border border-white/[0.08]" />
      <div className="expertise-system-orbit absolute inset-[18%] rounded-full border border-dashed border-cyan-100/20" />
      <div className="expertise-system-grid absolute inset-[31%] rounded-full border border-white/10" />
      <div className="absolute inset-[31%] rounded-full bg-cyan-300/[0.07] blur-2xl" />

      <svg className="expertise-flow-lines absolute inset-[7%] h-[86%] w-[86%] overflow-visible" viewBox="0 0 100 100" aria-hidden="true">
        <path d="M24 34 Q34 43 43 47 M58 46 Q70 42 79 48 M57 57 Q48 67 39 74 M57 42 Q67 30 72 24" className="expertise-flow-path" />
        <path d="M23 34 Q38 16 49 41 Q63 67 80 48" className="expertise-flow-trail" />
      </svg>

      <div key={activeStage} className="expertise-flow-core relative z-10 flex h-[31%] w-[31%] flex-col items-center justify-center rounded-[2rem] border border-cyan-100/30 bg-[#101a20]/95 px-3 text-center shadow-[0_0_90px_rgba(34,211,238,.16)] backdrop-blur-xl">
        <CurrentIcon size={32} strokeWidth={1.2} className="mb-2 text-cyan-50" />
        <span className="text-[7px] uppercase tracking-[0.16em] text-cyan-100/55">{title}</span>
        <span className="mt-1 text-[8px] uppercase tracking-[0.18em] text-white/75">{stages[activeStage].label}</span>
      </div>

      {stages.map((stage, index) => (
        <button
          key={stage.number}
          type="button"
          aria-pressed={activeStage === index}
          aria-label={`${stage.number} ${stage.label}: ${stage.detail}`}
          onClick={() => setActiveStage(index)}
          className={`expertise-flow-node expertise-flow-node-${index + 1} ${activeStage === index ? "is-active" : ""}`}
        >
          <span>{stage.number}</span>
          <strong>{stage.label}</strong>
        </button>
      ))}

      <div className="absolute bottom-[2%] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-center">
        <p key={`detail-${activeStage}`} className="expertise-flow-detail max-w-[270px] text-[9px] leading-4 text-white/50">{stages[activeStage].detail}</p>
        <span className="flex items-center gap-1.5 text-[7px] uppercase tracking-[0.2em] text-white/30">Explore the process <ArrowUpRight size={10} /></span>
      </div>

      <span className="expertise-system-dot absolute left-[27%] top-[12%]" />
      <span className="expertise-system-dot expertise-system-dot-violet absolute bottom-[24%] right-[13%]" />
    </div>
  );
}
