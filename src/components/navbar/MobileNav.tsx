"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";

import { navigation } from "@/data/navigation";
import type { MenuKey, MenuData } from "./Navbar";

const menuOrder: MenuKey[] = [
  "services",
  "solutions",
  "expertise",
  "industries",
  "company",
];

type MobileNavProps = {
  onClose: () => void;
};

const footerLinks = [
  { label: "About Mentroid", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "Our Work", href: "/work" },
  { label: "Contact", href: "/contact" },
  { label: "Our Process", href: "/process" },
];

export default function MobileNav({ onClose }: MobileNavProps) {
  const [openSection, setOpenSection] = useState<MenuKey | null>(null);
  const id = useId();
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex min-h-full w-full flex-col overflow-x-clip overflow-y-auto overscroll-contain bg-white px-4 pb-[max(18px,env(safe-area-inset-bottom))] text-[#07111f] sm:px-6">
      <nav aria-label="Mobile navigation" className="flex-1">
        {menuOrder.map((key) => {
          const menu = navigation[key] as MenuData;
          const isOpen = openSection === key;
          const panelId = `${id}-${key}-panel`;
          const buttonId = `${id}-${key}-button`;

          return (
            <section key={key} className="border-b border-[#07111f]/[0.09]">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenSection(isOpen ? null : key)}
                className="group flex min-h-[51px] w-full items-center justify-between gap-4 py-3 text-left text-[15px] font-medium tracking-[-0.02em] text-[#07111f] transition-colors duration-200 hover:text-[#079dad] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#079dad] sm:min-h-[55px] sm:text-base"
              >
                <span>{menu.title}</span>
                <ChevronDown
                  size={16}
                  strokeWidth={1.6}
                  className={`shrink-0 text-[#07111f]/55 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#079dad]" : "rotate-0"}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 pt-1">
                      {menu.groups.map((group) => (
                        <div key={group.title} className="mb-4 last:mb-0">
                          <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#07111f]/45">
                            {group.title}
                          </p>
                          <div className="grid grid-cols-1">
                            {group.items.map((item) => (
                              <Link
                                key={item.title}
                                href={item.href}
                                onClick={onClose}
                                className="group/item flex min-h-10 items-center justify-between gap-3 py-2 text-[13px] leading-5 text-[#07111f]/75 transition-colors duration-200 hover:text-[#079dad] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#079dad]"
                              >
                                <span>{item.title}</span>
                                <ArrowUpRight size={13} strokeWidth={1.6} className="shrink-0 text-[#079dad] opacity-0 transition-opacity duration-150 group-hover/item:opacity-100 group-focus-visible/item:opacity-100" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>
          );
        })}

        <Link
          href="/work"
          onClick={onClose}
          className="group flex min-h-[51px] items-center justify-between border-b border-[#07111f]/[0.09] py-3 text-[15px] font-medium tracking-[-0.02em] text-[#07111f] transition-colors duration-200 hover:text-[#079dad] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#079dad] sm:min-h-[55px] sm:text-base"
        >
          <span>Work</span>
          <ArrowUpRight size={16} strokeWidth={1.6} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </nav>

      <footer className="mt-7 shrink-0 border-t border-[#07111f]/[0.08] pt-5 sm:mt-8 sm:pt-6">
        <nav aria-label="Additional links" className="grid grid-cols-2 gap-x-5 gap-y-0.5">
          {footerLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="flex min-h-8 items-center py-1 text-[12px] font-medium text-[#07111f]/65 transition-colors duration-200 hover:text-[#079dad] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079dad]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          onClick={onClose}
          className="group mt-5 flex min-h-[46px] w-full items-center justify-between rounded-[7px] bg-[#07111f] px-4 py-3 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#102536] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#079dad] focus-visible:ring-offset-2"
        >
          <span>Let&apos;s Talk</span>
          <ArrowUpRight size={16} strokeWidth={1.7} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 pb-1 text-[9px] font-medium uppercase tracking-[0.12em] text-[#07111f]/40">
          <span>AI · ML · Software</span>
          <span>India · Global</span>
        </div>
      </footer>
    </div>
  );
}
