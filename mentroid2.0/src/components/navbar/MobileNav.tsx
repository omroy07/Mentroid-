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
  ] = useState<MenuKey | null>(
    null
  );

  return (
    <div
      className="
        h-full
        overflow-y-auto
        overflow-x-clip
        px-5
        pb-10
        pt-5
      "
    >
      {/* =================================================
          MAIN MENU
      ================================================= */}

      <div>
        {menuOrder.map((key) => {
          const menu =
            navigation[
              key
            ] as MenuData;

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
                  py-4
                  text-left
                  text-[15px]
                  font-medium
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
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>

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
                    className="
                      overflow-hidden
                    "
                  >
                    <div className="pb-4">
                      {menu.groups.map(
                        (group) => (
                          <div
                            key={
                              group.title
                            }
                            className="mb-5"
                          >
                            <p
                              className="
                                mb-2
                                text-[10px]
                                uppercase
                                tracking-[0.12em]
                                text-black/45
                              "
                            >
                              {
                                group.title
                              }
                            </p>

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
                                    block
                                    py-2.5
                                    text-[14px]
                                    text-black/75
                                    transition-colors
                                    hover:text-black
                                  "
                                >
                                  {
                                    item.title
                                  }
                                </Link>
                              )
                            )}
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

        {/* WORK */}

        <Link
          href="/work"
          onClick={onClose}
          className="
            block
            border-b
            border-black/[0.08]
            py-4
            text-[15px]
            font-medium
          "
        >
          Work
        </Link>

        {/* CLIENT PORTAL */}

        <Link
          href="/portal"
          onClick={onClose}
          className="
            block
            border-b
            border-black/[0.08]
            py-4
            text-[15px]
            font-medium
          "
        >
          Client Portal
        </Link>
      </div>

      {/* =================================================
          CTA
      ================================================= */}

      <Link
        href="/contact"
        onClick={onClose}
        className="
          mt-6
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-lg
          bg-[#07111f]
          px-5
          py-3.5
          text-sm
          font-semibold
          text-white
        "
      >
        Let's Talk

        <ArrowUpRight size={16} />
      </Link>
    </div>
  );
}