"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { navigation } from "@/data/navigation";

import type { MenuKey } from "./Navbar";

type DesktopNavProps = {
  activeMenu: MenuKey | null;
  navTheme: "dark" | "light";
  onOpenMenu: (menu: MenuKey) => void;
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
  navTheme,
  onOpenMenu,
}: DesktopNavProps) {
  /*
    heroActive = true
      → dark/hero background
      → white navigation text

    heroActive = false
      → light/white background
      → dark navigation text
  */

const navText =
  navTheme === "dark"
    ? "text-white"
    : "text-[#07111f]";
    
const navHover =
  navTheme === "dark"
    ? "hover:bg-white/10 hover:text-white"
    : "hover:bg-black/[0.05] hover:text-[#07111f]";
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
          const item = navigation[key];

          const isActive = activeMenu === key;

          return (
            <button
              key={key}
              type="button"
              onMouseEnter={() => onOpenMenu(key)}
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
                tracking-[-0.01em]
                transition-all
                duration-200

                ${
                  isActive
  ? navTheme === "dark"
    ? "bg-white/10 text-white"
    : "bg-black/[0.05] text-[#07111f]"
  : `${navText} ${navHover}`
                }
              `}
            >
              <span>
                {item.title}
              </span>

              <ChevronDown
                size={14}
                strokeWidth={1.8}
                className={`
                  transition-transform
                  duration-200

                  ${
                    isActive
                      ? "rotate-180"
                      : "rotate-0"
                  }
                `}
              />
            </button>
          );
        })}

        {/* =====================================================
            WORK
        ===================================================== */}

        <Link
          href="/work"
          className={`
            shrink-0
            rounded-md
            px-3
            py-2.5
            text-[14px]
            font-medium
            tracking-[-0.01em]
            transition-all
            duration-200

            ${navText}
            ${navHover}
          `}
        >
          Work
        </Link>
      </div>
    </nav>
  );
}