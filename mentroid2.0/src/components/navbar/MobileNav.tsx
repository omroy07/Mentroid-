"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

import {
  menuOrder,
  type ActiveMenuKey,
} from "./Navbar";

import { navigation } from "@/data/navigation";

type MobileNavProps = {
  onClose: () => void;
};

export default function MobileNav({
  onClose,
}: MobileNavProps) {
  const [openSection, setOpenSection] =
    useState<ActiveMenuKey | null>(null);

  const toggleSection = (
    key: ActiveMenuKey
  ) => {
    setOpenSection((current) =>
      current === key ? null : key
    );
  };

  return (
    <div
      className="
        h-full
        overflow-y-auto
        bg-white
        px-5
        pb-8
        pt-2
        sm:px-8
      "
    >
      {/* =====================================
          MOBILE NAV
      ===================================== */}

      <div>
        {menuOrder.map((key) => {
          const menu = navigation[key];

          const isOpen =
            openSection === key;

          return (
            <div
              key={key}
              className="
                border-b
                border-[var(--border)]
              "
            >
              {/* Header */}

              <button
                type="button"
                onClick={() =>
                  toggleSection(key)
                }
                aria-expanded={isOpen}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  py-5
                  text-left
                  text-[15px]
                  font-semibold
                  tracking-[-0.01em]
                  text-[var(--foreground)]
                "
              >
                {menu.title}

                <ChevronDown
                  size={18}
                  className={`
                    transition-transform
                    duration-200
                    ${
                      isOpen
                        ? "rotate-180 text-[var(--accent-blue)]"
                        : "text-[var(--text-secondary)]"
                    }
                  `}
                />
              </button>

              {/* Content */}

              <AnimatePresence
                initial={false}
              >
                {isOpen && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pb-5">
                      {/* Description */}

                      <p
                        className="
                          mb-5
                          max-w-[360px]
                          text-[12px]
                          leading-5
                          text-[var(--text-secondary)]
                        "
                      >
                        {menu.description}
                      </p>

                      {menu.groups.map(
                        (group) => (
                          <div
                            key={group.title}
                            className="
                              mb-6
                              last:mb-0
                            "
                          >
                            {/* Group */}

                            <p
                              className="
                                mb-3
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-[0.17em]
                                text-[var(--text-secondary)]
                              "
                            >
                              {group.title}
                            </p>

                            {/* Items */}

                            <div className="space-y-1">
                              {group.items.map(
                                (item) => {
                                  const Icon =
                                    item.icon;

                                  return (
                                    <Link
                                      key={
                                        item.title
                                      }
                                      href={
                                        item.href
                                      }
                                      onClick={
                                        onClose
                                      }
                                      className="
                                        group
                                        flex
                                        items-center
                                        gap-3
                                        py-2.5
                                      "
                                    >
                                      {/* Icon */}

                                      {Icon && (
                                        <span
                                          className="
                                            flex
                                            h-8
                                            w-8
                                            shrink-0
                                            items-center
                                            justify-center
                                            border
                                            border-[var(--border)]
                                            text-[var(--accent-blue)]
                                          "
                                        >
                                          <Icon
                                            size={15}
                                            strokeWidth={
                                              1.7
                                            }
                                          />
                                        </span>
                                      )}

                                      {/* Text */}

                                      <span className="min-w-0 flex-1">
                                        <span
                                          className="
                                            block
                                            text-[12px]
                                            font-medium
                                            text-[var(--foreground)]
                                          "
                                        >
                                          {
                                            item.title
                                          }
                                        </span>

                                        {item.description && (
                                          <span
                                            className="
                                              mt-0.5
                                              block
                                              text-[10px]
                                              leading-4
                                              text-[var(--text-secondary)]
                                            "
                                          >
                                            {
                                              item.description
                                            }
                                          </span>
                                        )}
                                      </span>

                                      <ArrowRight
                                        size={13}
                                        className="
                                          text-[var(--text-secondary)]
                                          transition-all
                                          duration-200
                                          group-hover:translate-x-1
                                          group-hover:text-[var(--accent-blue)]
                                        "
                                      />
                                    </Link>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {/* =====================================
            WORK
        ===================================== */}

        <Link
          href="/work"
          onClick={onClose}
          className="
            flex
            items-center
            justify-between
            border-b
            border-[var(--border)]
            py-5
            text-[15px]
            font-semibold
            text-[var(--foreground)]
          "
        >
          Work

          <ArrowRight
            size={17}
            className="text-[var(--text-secondary)]"
          />
        </Link>

        {/* =====================================
            CLIENT PORTAL
        ===================================== */}

        <Link
          href="/portal"
          onClick={onClose}
          className="
            flex
            items-center
            justify-between
            border-b
            border-[var(--border)]
            py-5
            text-[15px]
            font-semibold
            text-[var(--foreground)]
          "
        >
          Client Portal

          <ArrowRight
            size={17}
            className="text-[var(--text-secondary)]"
          />
        </Link>
      </div>

      {/* =====================================
          CTA
      ===================================== */}

      <div className="pt-6">
        <Link
          href="/contact"
          onClick={onClose}
          className="
            group
            flex
            w-full
            items-center
            justify-between
            border
            border-[var(--foreground)]
            px-5
            py-3.5
            text-[13px]
            font-semibold
            text-[var(--foreground)]
            transition-all
            duration-200
            hover:bg-[var(--foreground)]
            hover:text-white
          "
        >
          Let's Talk

          <span
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-full
              bg-[var(--foreground)]
              text-white
              transition-colors
              group-hover:bg-[var(--accent-blue)]
            "
          >
            <ArrowUpRight size={14} />
          </span>
        </Link>
      </div>

      {/* =====================================
          FOOTER MESSAGE
      ===================================== */}

      <p
        className="
          mt-7
          text-[10px]
          tracking-wide
          text-[var(--text-secondary)]
        "
      >
        Intelligent systems. Automated workflows.
      </p>
    </div>
  );
}