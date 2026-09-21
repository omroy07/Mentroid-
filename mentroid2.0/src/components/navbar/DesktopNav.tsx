"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

import {
  menuOrder,
  type ActiveMenuKey,
  type MenuKey,
} from "./Navbar";

import { navigation } from "@/data/navigation";

type DesktopNavProps = {
  activeMenu: MenuKey;
  onMenuToggle: (
    menu: ActiveMenuKey
  ) => void;
};

export default function DesktopNav({
  activeMenu,
  onMenuToggle,
}: DesktopNavProps) {
  return (
    <div className="ml-10 hidden lg:flex">
      <nav
        aria-label="Main navigation"
        className="flex items-center"
      >
        {menuOrder.map((key) => {
          const item = navigation[key];

          const isActive =
            activeMenu === key;

          return (
            <button
              key={key}
              type="button"
              onClick={() => onMenuToggle(key)}
              aria-expanded={isActive}
              aria-haspopup="true"
              className="
                group
                relative
                flex
                items-center
                gap-1.5
                px-4
                py-3
                text-[13px]
                font-medium
                text-[var(--text-secondary)]
                transition-colors
                duration-200
                hover:text-[var(--foreground)]
              "
            >
              {item.title}

              <ChevronDown
                size={13}
                strokeWidth={1.8}
                className={`
                  transition-all
                  duration-200
                  ${
                    isActive
                      ? "rotate-180 text-[var(--accent-blue)]"
                      : "text-[var(--text-secondary)] group-hover:text-[var(--foreground)]"
                  }
                `}
              />

              {/* Active line */}

              <span
                className={`
                  absolute
                  bottom-1
                  left-4
                  right-4
                  h-[1.5px]
                  origin-center
                  bg-[var(--accent-blue)]
                  transition-transform
                  duration-200
                  ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0"
                  }
                `}
              />
            </button>
          );
        })}

        {/* Work */}

        <Link
          href="/work"
          className="
            px-4
            py-3
            text-[13px]
            font-medium
            text-[var(--text-secondary)]
            transition-colors
            duration-200
            hover:text-[var(--foreground)]
          "
        >
          Work
        </Link>
      </nav>
    </div>
  );
}