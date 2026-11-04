import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Clock3, Mail, MoveUpRight } from "lucide-react";
import ContactForm from "@/components/pages/ContactForm";

export const metadata: Metadata = {
  title: "Contact Mentroid | Start a Project",
  description: "Tell Mentroid about your AI, software or automation project.",
};

const steps = [
  ["01", "You share the challenge"],
  ["02", "We learn the context"],
  ["03", "We plan a useful next step"],
];

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07090d] text-white">
      <section data-navbar-theme="dark" className="relative isolate border-b border-white/10">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_16%,rgba(0,180,194,0.14),transparent_33%),radial-gradient(ellipse_at_8%_70%,rgba(82,68,155,0.12),transparent_35%),linear-gradient(145deg,#0a0d12,#07090d_70%)]" />
        <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-36 sm:px-10 sm:pb-24 lg:px-16">
          <div className="mb-8 flex items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-white/40"><Link href="/" className="transition hover:text-white">Mentroid</Link><span className="text-white/20">/</span><span>Contact</span></div>
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div className="contact-intro max-w-[620px]">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-100/15 bg-cyan-100/[0.04] px-3 py-1.5 text-[8px] uppercase tracking-[0.18em] text-cyan-50/65"><span className="h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_10px_2px_rgba(103,232,249,.45)]" />Let’s talk about what’s next</div>
              <h1 className="text-[clamp(3.7rem,8vw,7.4rem)] font-medium leading-[0.83] tracking-[-0.09em]">Big idea?<br /><span className="text-white/35">Let’s build it.</span></h1>
              <p className="mt-8 max-w-[440px] text-sm leading-7 text-white/50">Tell us where you want to go. We’ll help shape the right AI, software or automation path to get there.</p>

              <div className="mt-10 space-y-0 border-t border-white/10">
                {steps.map(([number, label]) => <div key={number} className="flex items-center gap-4 border-b border-white/10 py-4"><span className="text-[9px] tracking-[0.15em] text-cyan-100/50">{number}</span><span className="text-xs text-white/60">{label}</span><ArrowDown size={13} className="ml-auto text-white/20" /></div>)}
              </div>

              <div className="mt-8 flex flex-wrap gap-5">
                <a href="mailto:hello@mentroid.co.in" className="group inline-flex items-center gap-2 text-xs text-white/55 transition hover:text-cyan-100"><Mail size={15} strokeWidth={1.5} />hello@mentroid.co.in<MoveUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
                <span className="inline-flex items-center gap-2 text-xs text-white/40"><Clock3 size={14} strokeWidth={1.5} />India · Global</span>
              </div>
            </div>

            <div className="contact-card-wrap relative">
              <div className="contact-card-glow pointer-events-none absolute -inset-3 rounded-[2rem] bg-cyan-300/[0.07] blur-2xl" />
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1440px] items-center justify-between border-t border-white/10 px-6 py-5 text-[8px] uppercase tracking-[0.2em] text-white/30 sm:px-10 lg:px-16"><span>Start a conversation</span><span>We’re listening</span></div>
      </section>

      <section data-navbar-theme="dark" className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <p className="max-w-[500px] text-sm leading-6 text-white/45">Have a quick question? Email us directly and we’ll point you in the right direction.</p>
        <Link href="/expertise" className="group inline-flex items-center gap-2 text-xs text-cyan-100/70 transition hover:text-white">Explore our expertise <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
      </section>
    </main>
  );
}
