import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import type { MenuPageData } from "@/lib/menu-pages";

const categoryImages: Record<string, string> = {
  Services: "/assets/navbar/services.webp",
  Solutions: "/assets/navbar/solutions.webp",
  Expertise: "/assets/navbar/experties.webp",
  Industries: "/assets/navbar/industries.webp",
  Company: "/assets/navbar/experties.webp",
};

const deliverySteps = [
  ["01", "Understand the context", "We learn how your team works, what is getting in the way, and what a successful outcome means."],
  ["02", "Design the right solution", "We shape a practical approach around your goals, existing systems, data and users."],
  ["03", "Build, learn, improve", "We deliver in focused steps and use real feedback to make the result dependable."],
];

export default function MenuDetailPage({ data }: { data: MenuPageData }) {
  const Icon = data.item.icon;
  const image = categoryImages[data.category] ?? categoryImages.Expertise;

  return (
    <main className="min-h-screen overflow-hidden bg-[#07090d] text-white">
      <section data-navbar-theme="dark" className="relative isolate border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_30%,rgba(13,148,165,0.17),transparent_38%),linear-gradient(180deg,#0d1117_0%,#07090d_100%)]" />
        <div className="mx-auto grid min-h-[690px] max-w-[1440px] items-center gap-12 px-6 pb-16 pt-36 sm:px-10 md:grid-cols-[1.1fr_0.9fr] md:pb-20 lg:px-16">
          <div className="expertise-enter max-w-[760px]">
            <div className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-white/45">
              <span className="h-px w-8 bg-cyan-300/70" />
              <Link href="/" className="transition hover:text-white">Mentroid</Link>
              <span className="text-white/20">/</span>
              <span>{data.category}</span>
              <span className="text-white/20">/</span>
              <span>{data.group}</span>
            </div>
            <h1 className="text-[clamp(3.8rem,8vw,7.6rem)] font-medium leading-[0.83] tracking-[-0.085em]">{data.item.title}<span className="text-cyan-100/65">.</span></h1>
            <p className="mt-8 max-w-[570px] text-sm leading-7 text-white/55 sm:text-base sm:leading-8">{data.item.description}</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-xs font-medium text-[#090b10] transition hover:bg-cyan-100">Talk to our team <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
              <Link href="#approach" className="inline-flex items-center gap-2 px-3 py-3 text-xs text-white/55 transition hover:text-white">How we work <ArrowRight size={14} /></Link>
            </div>
          </div>

          <div className="expertise-visual relative mx-auto aspect-[1.08] w-full max-w-[530px]">
            <div className="expertise-orbit absolute inset-[1%] rounded-full border border-white/10" />
            <div className="expertise-orbit-reverse absolute inset-[10%] rounded-full border border-dashed border-cyan-100/20" />
            <div className="absolute inset-[17%] overflow-hidden rounded-[2rem] border border-white/15 bg-[#111820] shadow-[0_30px_100px_rgba(0,0,0,.45)]">
              <Image src={image} alt={`${data.category} visual`} fill priority sizes="(min-width: 768px) 40vw, 90vw" className="object-cover opacity-65" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090d] via-[#07090d]/15 to-[#07090d]/10" />
              <div className="expertise-pulse absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-cyan-100/30 bg-[#101821]/65 text-cyan-100 backdrop-blur-md sm:h-24 sm:w-24">
                {Icon ? <Icon size={38} strokeWidth={1.25} /> : <Sparkles size={38} strokeWidth={1.25} />}
              </div>
              <span className="absolute bottom-5 left-5 text-[9px] uppercase tracking-[0.2em] text-white/55">Mentroid / {data.category}</span>
            </div>
            <span className="absolute right-[7%] top-[13%] h-2 w-2 rounded-full bg-cyan-200 shadow-[0_0_18px_5px_rgba(103,232,249,.4)]" />
          </div>
        </div>
      </section>

      <section data-navbar-theme="dark" className="mx-auto max-w-[1440px] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div><p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">{data.group}</p><h2 className="text-[clamp(2.7rem,5vw,5rem)] font-medium leading-[0.88] tracking-[-0.075em]">Made for real<br /><span className="text-white/35">work, not demos.</span></h2></div>
          <p className="max-w-[580px] text-sm leading-7 text-white/50 md:justify-self-end">We connect the technology to the day-to-day work around it. That means thoughtful implementation, clear human oversight, and a system your team can trust as it grows.</p>
        </div>
        <div id="approach" className="grid sm:grid-cols-3">
          {deliverySteps.map(([number, title, description], index) => <article key={number} style={{ animationDelay: `${index * 90}ms` }} className="expertise-card border-b border-white/10 py-8 sm:border-r sm:px-6 sm:py-10 first:sm:pl-0 last:sm:border-r-0"><span className="text-[10px] tracking-[0.16em] text-cyan-100/55">{number}</span><h3 className="mt-7 text-xl font-medium tracking-[-0.04em]">{title}</h3><p className="mt-3 max-w-[330px] text-[12px] leading-6 text-white/45">{description}</p></article>)}
        </div>
      </section>

      <section data-navbar-theme="dark" className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
          <div className="mb-8 flex items-end justify-between gap-5"><div><p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-white/40">Explore more</p><h2 className="text-3xl font-medium tracking-[-0.06em]">More from {data.category}</h2></div><span className="hidden text-[9px] uppercase tracking-[0.18em] text-white/30 sm:block">{data.related.length} capabilities</span></div>
          <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {data.related.map((item, index) => <Link key={item.href} href={item.href} className="group flex min-h-[120px] items-center justify-between gap-4 border-b border-r border-white/10 px-5 py-5 transition-colors hover:bg-white/[0.04] sm:px-6"><div><span className="text-[9px] tracking-[0.16em] text-white/30">{String(index + 1).padStart(2, "0")}</span><p className="mt-2 text-sm font-medium text-white/75 transition group-hover:text-white">{item.title}</p></div><ArrowUpRight size={15} className="shrink-0 text-white/25 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-100/75" /></Link>)}
          </div>
        </div>
      </section>

      <section data-navbar-theme="dark" className="relative overflow-hidden px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="pointer-events-none absolute -right-24 top-0 h-[360px] w-[360px] rounded-full bg-cyan-400/[0.08] blur-[100px]" />
        <div className="relative mx-auto flex max-w-[1280px] flex-col gap-8 md:flex-row md:items-end md:justify-between"><div><p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-cyan-100/55">Build what’s next</p><h2 className="text-[clamp(3rem,6vw,5.8rem)] font-medium leading-[0.86] tracking-[-0.08em]">Let’s solve the<br /><span className="text-white/35">right problem.</span></h2></div><Link href="/contact" className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/20 px-6 py-4 text-xs transition hover:border-cyan-100/60 hover:bg-white/[0.04]">Start a conversation <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></Link></div>
      </section>
    </main>
  );
}
