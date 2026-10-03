
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { label: "AI & Machine Learning", href: "/services" },
  { label: "Chatbot Development", href: "/services" },
  { label: "GenAI Projects", href: "/services" },
  { label: "Website Development", href: "/services" },
  { label: "IoT + ML Solutions", href: "/services" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/#process" },
  { label: "Team", href: "/#team" },
  { label: "FAQ", href: "/#faq" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">

      {/* Subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:px-8">

        {/* Top heading */}
        <div className="mb-16 border-b border-white/15 pb-12 md:mb-20 md:pb-16">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-white/50">
                <span className="h-px w-8 bg-white/60" />
                Let's build the future
              </p>

              <h2 className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                Ideas into
                <br />
                <span className="font-light text-white/40">
                  intelligent reality.
                </span>
              </h2>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit items-center gap-5 border border-white/30 px-6 py-4 text-[10px] uppercase tracking-[0.2em] transition-all duration-500 hover:bg-white hover:text-black"
            >
              Start a project
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="group inline-flex items-center gap-2">
              <span className="text-3xl font-semibold tracking-[-0.07em]">
                mentroid
              </span>
              <span className="h-2 w-2 rounded-full bg-white transition-transform duration-300 group-hover:scale-150" />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-8 text-white/45">
              Mentroid empowers businesses and professionals with
              innovative AI and ML solutions, creating intelligent
              systems that elevate performance and reshape digital
              interactions.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="mailto:mentroid@mentroid.co.in"
                aria-label="Email Mentroid"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                <Mail size={17} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-7 text-[11px] font-medium uppercase tracking-[0.25em] text-white">
              Services
            </h3>

            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/45 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-white transition-all duration-300 group-hover:w-3" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-7 text-[11px] font-medium uppercase tracking-[0.25em] text-white">
              Company
            </h3>

            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/45 transition-colors duration-300 hover:text-white"
                  >
                    <span className="h-px w-0 bg-white transition-all duration-300 group-hover:w-3" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-7 text-[11px] font-medium uppercase tracking-[0.25em] text-white">
              Contact
            </h3>

            <div className="space-y-5 text-sm text-white/45">
              <p>Sehore, India</p>

              <a
                href="mailto:mentroid@mentroid.co.in"
                className="block break-all transition-colors duration-300 hover:text-white"
              >
                mentroid@mentroid.co.in
              </a>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 pt-2 text-sm text-white"
              >
                Contact Us
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col justify-between gap-5 border-t border-white/15 pt-7 text-[10px] uppercase tracking-[0.16em] text-white/35 sm:flex-row sm:items-center lg:mt-24">

          <p>
            © {new Date().getFullYear()} Mentroid. All Rights Reserved.
          </p>

          <p className="text-white/50">
            AI <span className="mx-2 text-white/20">·</span>
            ML <span className="mx-2 text-white/20">·</span>
            GenAI <span className="mx-2 text-white/20">·</span>
            Automation
          </p>

          <Link
            href="/"
            className="group inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            Back to top
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}