"use client";

import Link from "next/link";

import {
  ChevronDown,
} from "lucide-react";

import { navigation } from "@/data/navigation";

import type {
  MenuKey,
} from "./Navbar";

type DesktopNavProps = {
  activeMenu: MenuKey | null;
  heroActive: boolean;
  onOpenMenu: (
    menu: MenuKey
  ) => void;
};

const menuOrder: MenuKey[] = [
  "services",
  "solutions",
  "expertise",
  "industries",
  "company",
];

export default function DesktopNav({
  activeMenu,
  heroActive,
  onOpenMenu,
}: DesktopNavProps) {
  return (
    <nav
      className="
        hidden
        min-w-0
        flex-1
        items-center
        justify-center
        lg:flex
      "
    >
      <div
        className="
          flex
          min-w-0
          items-center
          gap-1
          xl:gap-2
        "
      >
        {menuOrder.map((key) => {
          const item =
            navigation[key];

          return (
            <button
              key={key}
              type="button"
              onMouseEnter={() =>
                onOpenMenu(key)
              }
              className={`
                group
                flex
                shrink-0
                items-center
                gap-1.5
                rounded-md
                px-3
                py-2.5
                text-[14px]
                font-medium
                transition-all
                duration-200
                ${
                  activeMenu === key
                    ? heroActive
                      ? "bg-white/10 text-white"
                      : "bg-black/[0.05] text-black"
                    : heroActive
                    ? "text-white/75 hover:bg-white/10 hover:text-white"
                    : "text-[var(--text-secondary)] hover:bg-black/[0.04] hover:text-[var(--foreground)]"
                }
              `}
            >
              {item.title}

              <ChevronDown
                size={14}
                strokeWidth={1.8}
                className={`
                  transition-transform
                  duration-200
                  ${
                    activeMenu === key
                      ? "rotate-180"
                      : ""
                  }
                `}
              />
            </button>
          );
        })}

        {/* WORK */}

        <Link
          href="/work"
          className={`
            shrink-0
            rounded-md
            px-3
            py-2.5
            text-[14px]
            font-medium
            transition-all
            duration-200
            ${
              heroActive
                ? "text-white/75 hover:bg-white/10 hover:text-white"
                : "text-[var(--text-secondary)] hover:bg-black/[0.04] hover:text-[var(--foreground)]"
            }
          `}
        >
          Work
        </Link>
      </div>
    </nav>
  );
}