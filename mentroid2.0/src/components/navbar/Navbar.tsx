"use client";

import Link from "next/link";
import { Menu, ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Why Us",
    href: "/#why-us",
  },
  {
    label: "Process",
    href: "/#process",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Team",
    href: "/#team",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-5 pt-5 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between rounded-full border border-black/10 bg-white/90 px-5 shadow-sm backdrop-blur-xl">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Mentroid Home"
          >
            <span className="text-xl font-semibold tracking-[-0.05em]">
              mentroid
            </span>

            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">

            {/* Portal */}
            <Link
              href="/portal"
              className="rounded-full px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
            >
              Sign In / Portal
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Let's Talk
              <ArrowUpRight size={16} strokeWidth={1.8} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={20} strokeWidth={1.8} />
            ) : (
              <Menu size={20} strokeWidth={1.8} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mt-2 rounded-3xl border border-black/10 bg-white p-5 shadow-xl md:hidden">
            <div className="flex flex-col">

              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-black/5 py-4 text-sm font-medium text-slate-700 transition-colors hover:text-slate-950 last:border-0"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/portal"
                onClick={() => setMenuOpen(false)}
                className="border-b border-black/5 py-4 text-sm font-medium text-slate-700"
              >
                Sign In / Portal
              </Link>

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-white"
              >
                Let's Talk
                <ArrowUpRight size={16} strokeWidth={1.8} />
              </Link>

            </div>
          </div>
        )}
      </div>
    </header>
  );
}