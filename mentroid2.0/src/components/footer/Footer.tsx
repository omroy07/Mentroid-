import Link from "next/link";
import {
  ArrowUpRight,
//   Facebook,
  Mail,
} from "lucide-react";

const services = [
  {
    label: "AI & Machine Learning",
    href: "/services",
  },
  {
    label: "Chatbot Development",
    href: "/services",
  },
  {
    label: "GenAI Projects",
    href: "/services",
  },
  {
    label: "Website Development",
    href: "/services",
  },
  {
    label: "IoT + ML Solutions",
    href: "/services",
  },
];

const company = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Process",
    href: "/#process",
  },
  {
    label: "Team",
    href: "/#team",
  },
  {
    label: "FAQ",
    href: "/#faq",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--surface-dark)] text-white">

      {/* CTA */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-24 lg:px-8">

          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">

            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                Let's Build
              </p>

              <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Have a difficult problem?
                <br />
                Let's build the system.
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--foreground)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Start a Project
              <ArrowUpRight size={17} />
            </Link>

          </div>

        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2"
            >
              <span className="text-2xl font-semibold tracking-[-0.05em]">
                mentroid
              </span>

              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Mentroid empowers businesses and professionals with innovative
              AI and ML solutions, creating intelligent systems that elevate
              performance and reshape digital interactions.
            </p>

            <div className="mt-7 flex items-center gap-3">

              <a
                href="mailto:mentroid@mentroid.co.in"
                aria-label="Email Mentroid"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-white/20 hover:text-white"
              >
                <Mail size={17} />
              </a>

              {/* <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mentroid LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-white/20 hover:text-white"
              >
                <Facebook size={17} />
              </a> */}

            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold">
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm text-slate-400">

              <p>
                Sehore, India
              </p>

              <a
                href="mailto:mentroid@mentroid.co.in"
                className="block transition-colors hover:text-white"
              >
                mentroid@mentroid.co.in
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 pt-2 font-medium text-white"
              >
                Contact Us
                <ArrowUpRight size={15} />
              </Link>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">

          <p>
            © {new Date().getFullYear()} Mentroid. All Rights Reserved.
          </p>

          <p>
            AI · ML · GenAI · Automation
          </p>

        </div>

      </div>
    </footer>
  );
}