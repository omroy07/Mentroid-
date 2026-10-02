"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // EmailJS / API integration can be added here later.
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-[#f7f9fb] py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* Content */}
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent-blue)]">
              Get in Touch
            </p>

            <h2 className="max-w-xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Have a problem worth solving?
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
              Have questions, project ideas, or feedback? Tell us what
              you're building and let's explore how Mentroid can help.
            </p>

            {/* Contact Details */}
            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                  <Mail size={19} className="text-[var(--accent-blue)]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Email
                  </p>

                  <a
                    href="mailto:mentroid@mentroid.co.in"
                    className="text-sm font-medium text-slate-900 hover:underline"
                  >
                    mentroid@mentroid.co.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                  <MapPin size={19} className="text-[var(--accent-blue)]" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Location
                  </p>

                  <p className="text-sm font-medium text-slate-900">
                    Sehore, India
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8 lg:p-10">

            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)]">
                  <ArrowUpRight size={24} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  Message received.
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
                  Thank you for reaching out to Mentroid. We'll get back
                  to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-black/10 bg-[#f7f9fb] px-4 py-3.5 text-sm outline-none transition focus:border-[var(--accent-blue)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-black/10 bg-[#f7f9fb] px-4 py-3.5 text-sm outline-none transition focus:border-[var(--accent-blue)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="What can we help you with?"
                    className="w-full rounded-2xl border border-black/10 bg-[#f7f9fb] px-4 py-3.5 text-sm outline-none transition focus:border-[var(--accent-blue)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full resize-none rounded-2xl border border-black/10 bg-[#f7f9fb] px-4 py-3.5 text-sm outline-none transition focus:border-[var(--accent-blue)]"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-4 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Send Message
                  <ArrowUpRight size={17} />
                </button>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}