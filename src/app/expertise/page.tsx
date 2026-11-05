import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Eye,
  LineChart,
  Network,
  Sparkles,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Expertise | Mentroid",
  description:
    "Explore Mentroid's expertise across generative AI, intelligent agents, machine learning, computer vision and automation.",
};

const capabilities = [
  {
    number: "01",
    group: "AI Engineering",
    title: "Generative AI",
    description:
      "Useful AI products, grounded in your business context and designed around the people who use them.",
    icon: Sparkles,
    tags: ["LLMs", "Multimodal AI", "Fine-tuning"],
  },
  {
    number: "02",
    group: "AI Engineering",
    title: "AI Agents",
    description:
      "Systems that reason through tasks, use tools and keep people in control of important decisions.",
    icon: Bot,
    tags: ["Tool use", "Agent workflows", "Guardrails"],
  },
  {
    number: "03",
    group: "AI Engineering",
    title: "RAG Systems",
    description:
      "Reliable answers from trusted company knowledge, with retrieval and evaluation built in.",
    icon: Network,
    tags: ["Knowledge search", "Vector databases", "Evaluation"],
  },
  {
    number: "04",
    group: "AI Engineering",
    title: "Machine Learning",
    description:
      "Predictive models shaped around your data, your constraints and the decisions they need to improve.",
    icon: BrainCircuit,
    tags: ["Model development", "Forecasting", "MLOps"],
  },
  {
    number: "05",
    group: "Advanced Systems",
    title: "Deep Learning",
    description:
      "Neural approaches for complex patterns across text, images, audio and high-dimensional data.",
    icon: BrainCircuit,
    tags: ["Neural networks", "Representation learning", "Model tuning"],
  },
  {
    number: "06",
    group: "Advanced Systems",
    title: "Computer Vision",
    description:
      "Give software the ability to inspect visual information and turn it into useful signals.",
    icon: Eye,
    tags: ["Image analysis", "Object detection", "Visual QA"],
  },
  {
    number: "07",
    group: "Advanced Systems",
    title: "Predictive Analytics",
    description:
      "Make better decisions with clear forecasts, meaningful metrics and data people can act on.",
    icon: LineChart,
    tags: ["Forecasting", "Risk scoring", "Decision support"],
  },
  {
    number: "08",
    group: "Advanced Systems",
    title: "Workflow Automation",
    description:
      "Connect tools and teams with intelligent workflows that reduce manual effort and friction.",
    icon: Workflow,
    tags: ["Integrations", "Process design", "Human review"],
  },
];

const principles = [
  ["01", "Start with the problem", "We map the real workflow and define what a useful outcome looks like."],
  ["02", "Choose the right approach", "We select models and architecture to fit your data, risk and delivery needs."],
  ["03", "Build for real use", "We test with people and real scenarios, then refine for reliability and adoption."],
];

export default function ExpertisePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07090d] text-white">
      <section data-navbar-theme="dark" className="relative isolate border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_35%,rgba(13,148,165,0.18),transparent_38%),radial-gradient(ellipse_at_10%_80%,rgba(88,75,185,0.12),transparent_34%)]" />
        <div className="mx-auto grid min-h-[710px] max-w-[1440px] items-end gap-14 px-6 pb-16 pt-36 sm:px-10 md:min-h-[780px] md:grid-cols-[1.2fr_0.8fr] md:items-center md:pb-20 lg:px-16">
          <div className="expertise-enter max-w-[850px]">
            <div className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/50">
              <span className="h-px w-8 bg-cyan-300/70" />
              Mentroid / Expertise
            </div>
            <h1 className="text-[clamp(4rem,10vw,9rem)] font-medium leading-[0.82] tracking-[-0.09em]">
              Intelligence,
              <br />
              <span className="text-white/35">engineered.</span>
            </h1>
            <p className="mt-9 max-w-[560px] text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              From the first model to the full product around it, we bring the expertise to turn complex technology into something your business can use.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link href="#capabilities" className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-medium text-[#090b10] transition hover:bg-cyan-100">
                Explore our expertise <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
              </Link>
              <span className="text-[10px] uppercase tracking-[0.18em] text-white/35">Research · Engineering · Delivery</span>
            </div>
          </div>

          <div className="expertise-visual relative mx-auto flex aspect-square w-full max-w-[470px] items-center justify-center md:mb-4">
            <div className="expertise-orbit absolute inset-[2%] rounded-full border border-white/10" />
            <div className="expertise-orbit-reverse absolute inset-[13%] rounded-full border border-dashed border-cyan-200/20" />
            <div className="relative h-[72%] w-[72%] overflow-hidden rounded-[2rem] border border-white/15 bg-[#101821] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
              <Image src="/assets/navbar/experties.webp" alt="Abstract AI intelligence visual" fill priority sizes="(min-width: 768px) 34vw, 80vw" className="object-cover opacity-70 transition duration-700 expertise-image" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b10] via-[#080b10]/15 to-[#080b10]/10" />
              <div className="absolute inset-0 bg-cyan-950/15 mix-blend-color" />
              <div className="expertise-pulse absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-cyan-100/30 bg-[#101821]/60 shadow-[0_0_70px_rgba(34,211,238,0.22)] backdrop-blur-md sm:h-24 sm:w-24">
                <Sparkles className="text-cyan-100" size={39} strokeWidth={1.2} />
              </div>
              <span className="absolute bottom-5 left-5 text-[9px] uppercase tracking-[0.2em] text-white/55">Mentroid Intelligence</span>
            </div>
            <span className="absolute right-[10%] top-[10%] h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_18px_5px_rgba(103,232,249,0.4)]" />
            <span className="absolute bottom-[14%] left-[6%] h-1.5 w-1.5 rounded-full bg-violet-300/80 shadow-[0_0_14px_4px_rgba(196,181,253,0.35)]" />
          </div>
        </div>
        <div className="mx-auto flex max-w-[1440px] items-center justify-between border-t border-white/10 px-6 py-5 text-[9px] uppercase tracking-[0.2em] text-white/35 sm:px-10 lg:px-16">
          <span>Capabilities for what comes next</span><span>01 — 08</span>
        </div>
      </section>

      <section id="capabilities" data-navbar-theme="dark" className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mb-14 grid gap-8 md:mb-20 md:grid-cols-[1fr_0.65fr] md:items-end">
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.23em] text-cyan-200/65">What we know how to build</p>
            <h2 className="max-w-[760px] text-[clamp(3.2rem,7vw,6.6rem)] font-medium leading-[0.86] tracking-[-0.08em]">Deep expertise.<br /><span className="text-white/35">Practical outcomes.</span></h2>
          </div>
          <p className="max-w-[430px] text-sm leading-7 text-white/50 md:justify-self-end">The right technology depends on the job. We combine these disciplines to solve the problem in front of you, without adding complexity for its own sake.</p>
        </div>

        <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ number, group, title, description, icon: Icon, tags }, index) => (
            <article key={number} style={{ animationDelay: `${index * 70}ms` }} className="expertise-card group relative flex min-h-[310px] flex-col border-b border-r border-white/10 p-6 transition-colors duration-300 hover:bg-white/[0.035] sm:min-h-[340px] sm:p-7 lg:p-8">
              <div className="mb-7 flex items-start justify-between">
                <span className="text-[10px] tracking-[0.16em] text-white/30">{number}</span>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-cyan-100/75 transition-all group-hover:border-cyan-200/35 group-hover:bg-cyan-200/[0.07] group-hover:text-cyan-100"><Icon size={20} strokeWidth={1.4} /></div>
              </div>
              <p className="mb-3 text-[8px] uppercase tracking-[0.18em] text-cyan-100/50">{group}</p>
              <h3 className="text-[clamp(1.45rem,2vw,1.9rem)] font-medium tracking-[-0.05em]">{title}</h3>
              <p className="mt-3 text-[12px] leading-6 text-white/45">{description}</p>
              <div className="mt-auto flex flex-wrap gap-2 pt-7">{tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-[8px] uppercase tracking-[0.1em] text-white/40">{tag}</span>)}</div>
              <ArrowUpRight size={15} className="absolute bottom-8 right-7 text-white/0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan-100/70" />
            </article>
          ))}
        </div>
      </section>

      <section data-navbar-theme="light" className="bg-[#f1f3f4] text-[#0a1018]">
        <div className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-[#137e8c]">How we apply it</p>
              <h2 className="text-[clamp(3.4rem,7vw,6.4rem)] font-medium leading-[0.86] tracking-[-0.08em]">Built with<br />intent.</h2>
              <p className="mt-7 max-w-[360px] text-sm leading-7 text-[#53606c]">Good engineering starts with understanding the people, systems and decisions around the problem.</p>
            </div>
            <div className="border-t border-[#0a1018]/15">
              {principles.map(([number, title, description]) => <div key={number} className="grid gap-4 border-b border-[#0a1018]/15 py-7 sm:grid-cols-[54px_0.8fr_1fr] sm:items-start sm:py-8"><span className="text-[10px] tracking-[0.16em] text-[#137e8c]">{number}</span><h3 className="text-xl font-medium tracking-[-0.04em]">{title}</h3><p className="max-w-[360px] text-sm leading-6 text-[#53606c]">{description}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section data-navbar-theme="dark" className="relative overflow-hidden bg-[#07090d] px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-16">
        <div className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-cyan-400/[0.08] blur-[100px]" />
        <div className="relative mx-auto flex max-w-[1280px] flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div><p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">Have a challenge in mind?</p><h2 className="max-w-[780px] text-[clamp(3.2rem,7vw,6.7rem)] font-medium leading-[0.86] tracking-[-0.08em]">Let’s make it<br /><span className="text-white/35">work for you.</span></h2></div>
          <Link href="/#lets-build" className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/20 px-6 py-4 text-xs transition hover:border-cyan-100/60 hover:bg-white/[0.04]">Talk to our team <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></Link>
        </div>
      </section>
    </main>
  );
}
