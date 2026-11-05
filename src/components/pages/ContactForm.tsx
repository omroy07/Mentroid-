"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

const projectTypes = ["AI & machine learning", "Product engineering", "Workflow automation", "Not sure yet"];

export default function ContactForm() {
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const name = String(fields.get("name") ?? "").trim();
    const email = String(fields.get("email") ?? "").trim();
    const company = String(fields.get("company") ?? "").trim();
    const message = String(fields.get("message") ?? "").trim();
    const subject = `Project enquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not provided"}`,
      `Project type: ${projectType}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:hello@mentroid.co.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setNotice("Your email draft is ready. Review it and send it from your email app.");
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form-card">
      <div className="mb-8 flex items-start justify-between gap-5">
        <div>
          <p className="text-[9px] uppercase tracking-[0.2em] text-cyan-100/55">Project inquiry</p>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.06em] text-white sm:text-4xl">Tell us what<br />you’re thinking.</h2>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-100/20 bg-cyan-100/[0.05] text-cyan-100"><Sparkles size={19} strokeWidth={1.3} /></span>
      </div>

      <fieldset className="mb-7">
        <legend className="mb-3 text-[10px] font-medium text-white/70">What can we help with?</legend>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((type) => (
            <button key={type} type="button" aria-pressed={projectType === type} onClick={() => setProjectType(type)} className={`contact-topic ${projectType === type ? "contact-topic-active" : ""}`}>
              {projectType === type && <Check size={12} />}{type}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="contact-field"><span>Your name <b>*</b></span><input autoComplete="name" name="name" placeholder="Jane Smith" required /></label>
        <label className="contact-field"><span>Work email <b>*</b></span><input autoComplete="email" name="email" type="email" placeholder="jane@company.com" required /></label>
        <label className="contact-field sm:col-span-2"><span>Company <em>Optional</em></span><input autoComplete="organization" name="company" placeholder="Your company name" /></label>
        <label className="contact-field sm:col-span-2"><span>A little about the project <b>*</b></span><textarea name="message" rows={4} placeholder="What are you hoping to build or improve?" required /></label>
      </div>

      <div className="mt-7 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[285px] text-[10px] leading-5 text-white/35">Submitting opens a prefilled email for you to review and send.</p>
        <button type="submit" className="group inline-flex items-center justify-center gap-3 rounded-full bg-cyan-100 px-6 py-3.5 text-xs font-semibold text-[#061014] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-100">Send project note <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></button>
      </div>
      <p role="status" aria-live="polite" className="mt-4 min-h-5 text-[11px] text-cyan-100/80">{notice}</p>
    </form>
  );
}
