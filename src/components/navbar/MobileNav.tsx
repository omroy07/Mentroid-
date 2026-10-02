"use client";

import {
  useState,
} from "react";

import Link from "next/link";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

import { navigation } from "@/data/navigation";

import type {
  MenuKey,
  MenuData,
} from "./Navbar";

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

export default function MobileNav({
  onClose,
}: MobileNavProps) {
  const [
    openSection,
    setOpenSection,
  ] = useState<MenuKey | null>(null);

  return (
    <div
      className="
        flex
        h-full
        flex-col
        overflow-y-auto
        overflow-x-clip
        bg-white
        px-5
        pb-8
        pt-4
        text-[#07111f]
        sm:px-7
      "
    >
      {/* =================================================
          MAIN MENU
      ================================================= */}

      <div className="flex-1">
        {menuOrder.map((key) => {
          const menu =
            navigation[key] as MenuData;

          const isOpen =
            openSection === key;

          return (
            <div
              key={key}
              className="
                border-b
                border-black/[0.08]
              "
            >
              {/* =================================================
                  SECTION BUTTON
              ================================================= */}

              <button
                type="button"
                onClick={() =>
                  setOpenSection(
                    isOpen
                      ? null
                      : key
                  )
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  py-[18px]
                  text-left
                  text-[16px]
                  font-medium
                  tracking-[-0.015em]
                  text-[#07111f]
                "
              >
                <span>
                  {menu.title}
                </span>

                <span
                  className={`
                    flex
                    size-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-black/10
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "bg-[#07111f] text-white"
                        : "bg-transparent text-black/60"
                    }
                  `}
                >
                  <ChevronDown
                    size={15}
                    strokeWidth={1.7}
                    className={`
                      transition-transform
                      duration-300
                      ${
                        isOpen
                          ? "rotate-180"
                          : "rotate-0"
                      }
                    `}
                  />
                </span>
              </button>

              {/* =================================================
                  EXPANDABLE CONTENT
              ================================================= */}

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
                      duration: 0.3,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                    className="
                      overflow-hidden
                    "
                  >
                    <div className="pb-5">
                      {menu.groups.map(
                        (group) => (
                          <div
                            key={
                              group.title
                            }
                            className="mb-6 last:mb-0"
                          >
                            {/* GROUP TITLE */}

                            <p
                              className="
                                mb-2.5
                                text-[9px]
                                font-medium
                                uppercase
                                tracking-[0.18em]
                                text-black/40
                              "
                            >
                              {
                                group.title
                              }
                            </p>

                            {/* ITEMS */}

                            <div className="space-y-0.5">
                              {group.items.map(
                                (item) => (
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
                                      justify-between
                                      border-b
                                      border-black/[0.045]
                                      py-3
                                      text-[14px]
                                      tracking-[-0.01em]
                                      text-black/70
                                      transition-colors
                                      duration-200
                                      last:border-b-0
                                      hover:text-black
                                    "
                                  >
                                    <span>
                                      {
                                        item.title
                                      }
                                    </span>

                                    <ArrowUpRight
                                      size={14}
                                      strokeWidth={
                                        1.6
                                      }
                                      className="
                                        -translate-x-1
                                        opacity-0
                                        transition-all
                                        duration-200
                                        group-hover:translate-x-0
                                        group-hover:opacity-60
                                      "
                                    />
                                  </Link>
                                )
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

        {/* =================================================
            WORK
        ================================================= */}

        <Link
          href="/work"
          onClick={onClose}
          className="
            flex
            items-center
            justify-between
            border-b
            border-black/[0.08]
            py-[18px]
            text-[16px]
            font-medium
            tracking-[-0.015em]
            text-[#07111f]
          "
        >
          <span>Work</span>

          <ArrowUpRight
            size={17}
            strokeWidth={1.6}
          />
        </Link>
      </div>

      {/* =================================================
          BOTTOM AREA
      ================================================= */}

      <div className="mt-7">
        {/* SMALL LABEL */}

        <p
          className="
            mb-3
            text-[9px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-black/40
          "
        >
          Start a conversation
        </p>

        {/* CTA */}

        <Link
          href="/contact"
          onClick={onClose}
          className="
            group
            flex
            w-full
            items-center
            justify-between
            rounded-[10px]
            bg-[#07111f]
            px-5
            py-4
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-[#168cff]
          "
        >
          <span>
            Let's Talk
          </span>

          <span
            className="
              flex
              size-8
              items-center
              justify-center
              rounded-full
              bg-white/10
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            <ArrowUpRight
              size={15}
              strokeWidth={1.7}
            />
          </span>
        </Link>

        {/* FOOTER META */}

        <div className="mt-6 flex items-center justify-between">
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.16em]
              text-black/35
            "
          >
            AI · Software · Automation
          </p>

          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.16em]
              text-black/35
            "
          >
            India · Global
          </p>
        </div>
      </div>
    </div>
  );
}