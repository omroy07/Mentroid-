import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, CircleCheck } from "lucide-react";
import type { MenuPageData } from "@/lib/menu-pages";
import ExpertiseFlow from "@/components/pages/ExpertiseFlow";

export default function ExpertiseDetailPage({ data }: { data: MenuPageData }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07090d] text-white">
      <section data-navbar-theme="dark" className="relative isolate border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_72%_42%,rgba(0,178,194,0.13),transparent_36%),linear-gradient(135deg,#090c11_0%,#07090d_65%)]" />
        <div className="mx-auto grid min-h-[740px] max-w-[1440px] items-center gap-12 px-6 pb-12 pt-36 sm:px-10 md:grid-cols-[1fr_0.95fr] md:gap-6 md:pb-16 lg:px-16">
          <div className="expertise-detail-enter relative z-10 max-w-[700px]">
            <div className="mb-8 flex flex-wrap items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-white/45">
              <Link href="/" className="transition hover:text-white">Mentroid</Link><span className="text-white/20">/</span><Link href="/expertise" className="transition hover:text-white">Expertise</Link><span className="text-white/20">/</span><span>{data.group}</span>
            </div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-100/15 bg-cyan-100/[0.04] px-3 py-1.5 text-[8px] uppercase tracking-[0.18em] text-cyan-50/65"><span className="h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_10px_2px_rgba(103,232,249,.45)]" />Capability  /  {data.group}</div>
            <h1 className="max-w-[800px] text-[clamp(3.5rem,8vw,7.8rem)] font-medium leading-[0.83] tracking-[-0.09em]">{data.item.title}<span className="text-cyan-100/65">.</span></h1>
            <p className="mt-8 max-w-[530px] text-sm leading-7 text-white/55 sm:text-base sm:leading-8">{data.item.description}</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-cyan-100 px-6 py-3.5 text-xs font-medium text-[#061014] transition hover:bg-white">Discuss a project <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
              <Link href="#capability-details" className="inline-flex items-center gap-2 px-3 py-3 text-xs text-white/50 transition hover:text-white">Explore the approach <ArrowDown size={14} /></Link>
            </div>
          </div>

          <ExpertiseFlow title={data.item.title} iconName={data.item.title} />
        </div>
        <div className="mx-auto flex max-w-[1440px] items-center justify-between border-t border-white/10 px-6 py-5 text-[8px] uppercase tracking-[0.2em] text-white/30 sm:px-10 lg:px-16"><span>Mentroid / Applied Intelligence</span><span>01 — 04</span></div>
      </section>

      <section id="capability-details" data-navbar-theme="dark" className="mx-auto max-w-[1440px] px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[0.22em] text-cyan-100/55">Beyond the model</p>
            <h2 className="max-w-[530px] text-[clamp(3rem,6vw,5.8rem)] font-medium leading-[0.86] tracking-[-0.08em]">Designed for<br /><span className="text-white/35">the whole system.</span></h2>
          </div>
          <div className="pt-2 md:pt-4">
            <p className="max-w-[650px] text-base leading-8 text-white/65">{data.item.description} We shape the technical approach around your workflows, your data, and the outcomes your team needs to achieve.</p>
            <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">
              {[
                ["Grounded in your context", "Designed around the tools, information and people already in your workflow."],
                ["Built to keep improving", "Measured against real usage so the system can become more useful over time."],
              ].map(([title, description]) => <div key={title} className="flex gap-3"><CircleCheck size={17} className="mt-0.5 shrink-0 text-cyan-100/70" strokeWidth={1.4} /><div><h3 className="text-sm font-medium text-white/85">{title}</h3><p className="mt-2 max-w-[310px] text-[11px] leading-5 text-white/40">{description}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section data-navbar-theme="dark" className="relative overflow-hidden border-y border-white/10 bg-[#0c1115]">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-2">
          <div className="relative min-h-[310px] overflow-hidden border-b border-white/10 md:min-h-[500px] md:border-b-0 md:border-r">
            <Image src="/assets/navbar/experties.webp" alt="Mentroid artificial intelligence system visual" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover opacity-45 grayscale" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#071014]/35 via-[#071014]/15 to-[#071014]/90" />
            <div className="absolute left-7 top-7 flex items-center gap-3 text-[9px] uppercase tracking-[0.18em] text-white/50"><span className="h-px w-7 bg-cyan-100/50" />Applied intelligence</div>
            <div className="absolute bottom-8 left-7 right-7"><span className="text-[8px] uppercase tracking-[0.2em] text-cyan-100/50">A capability in context</span><p className="mt-3 max-w-[440px] text-2xl font-medium leading-tight tracking-[-0.05em] sm:text-3xl">Technology should fit the work it is here to improve.</p></div>
          </div>
          <div className="flex flex-col justify-center px-7 py-14 sm:px-12 md:px-16 md:py-20">
            <p className="text-[9px] uppercase tracking-[0.2em] text-cyan-100/55">Explore the field</p>
            <h2 className="mt-4 text-4xl font-medium leading-[0.92] tracking-[-0.07em] sm:text-5xl">Related<br /><span className="text-white/35">expertise.</span></h2>
            <div className="mt-8 border-t border-white/10">{data.related.map((item, index) => <Link key={item.href} href={item.href} className="group flex items-center justify-between gap-4 border-b border-white/10 py-4 text-sm text-white/55 transition hover:text-white"><span><span className="mr-4 text-[9px] tracking-[0.14em] text-white/25">{String(index + 1).padStart(2, "0")}</span>{item.title}</span><ArrowUpRight size={14} className="shrink-0 text-white/20 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-100" /></Link>)}</div>
          </div>
        </div>
      </section>

      <section data-navbar-theme="dark" className="px-6 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><p className="mb-4 text-[9px] uppercase tracking-[0.22em] text-cyan-100/55">Your next move</p><h2 className="text-[clamp(3rem,6.5vw,6.2rem)] font-medium leading-[0.86] tracking-[-0.08em]">Put expertise<br /><span className="text-white/35">into practice.</span></h2></div><Link href="/contact" className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/20 px-6 py-4 text-xs transition hover:border-cyan-100/55 hover:bg-white/[0.04]">Talk through a challenge <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></Link></div>
      </section>
    </main>
  );
}
