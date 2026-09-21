"use client";

import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  Workflow,
  Zap,
} from "lucide-react";
import type { ElementType } from "react";

import type { ActiveMenuKey } from "./Navbar";

type MenuItem = {
  title: string;
  description?: string;
  icon?: ElementType;
  href: string;
};

type MenuGroup = {
  title: string;
  items: MenuItem[];
};

type MegaMenuData = {
  title: string;
  description: string;
  groups: MenuGroup[];
};

type MegaMenuProps = {
  menu: MegaMenuData;
  menuKey: ActiveMenuKey;
  onNavigate: () => void;
};

export default function MegaMenu({
  menu,
  menuKey,
  onNavigate,
}: MegaMenuProps) {
  return (
    <div className="mx-auto max-w-[1440px] px-6 py-10 sm:px-8 lg:px-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
        {/* =====================================
            INTRO
        ===================================== */}

        <div className="lg:border-r lg:border-[var(--border)] lg:pr-12">
          {/* Eyebrow */}

          <div className="mb-5 flex items-center gap-3">
            <span
              className="
                h-[1px]
                w-7
                bg-[var(--accent-blue)]
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[var(--accent-blue)]
              "
            >
              Mentroid
            </span>
          </div>

          {/* Title */}

          <h2
            className="
              text-3xl
              font-semibold
              tracking-[-0.045em]
              text-[var(--foreground)]
            "
          >
            {menu.title}
          </h2>

          {/* Description */}

          <p
            className="
              mt-4
              max-w-[245px]
              text-[13px]
              leading-6
              text-[var(--text-secondary)]
            "
          >
            {menu.description}
          </p>

          {/* Explore */}

          <Link
            href={getExploreHref(menuKey)}
            onClick={onNavigate}
            className="
              group
              mt-7
              inline-flex
              items-center
              gap-2
              text-[12px]
              font-semibold
              text-[var(--foreground)]
            "
          >
            Explore {menu.title}

            <span
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-[var(--foreground)]
                text-white
                transition-colors
                group-hover:bg-[var(--accent-blue)]
              "
            >
              <ArrowRight size={12} />
            </span>
          </Link>
        </div>

        {/* =====================================
            GROUPS
        ===================================== */}

        <div className="grid grid-cols-1 gap-x-14 gap-y-10 md:grid-cols-2">
          {menu.groups.map((group) => (
            <div key={group.title}>
              {/* Group title */}

              <div className="mb-5 flex items-center gap-3">
                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[var(--text-secondary)]
                  "
                >
                  {group.title}
                </span>

                <span
                  className="
                    h-px
                    flex-1
                    bg-[var(--border)]
                  "
                />
              </div>

              {/* Items */}

              <div className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={onNavigate}
                      className="
                        group
                        flex
                        items-start
                        gap-4
                        border-b
                        border-transparent
                        py-3
                        transition-colors
                        duration-200
                        hover:border-[var(--border)]
                      "
                    >
                      {/* Icon */}

                      {Icon && (
                        <div
                          className="
                            mt-0.5
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            border
                            border-[var(--border)]
                            text-[var(--accent-blue)]
                            transition-all
                            duration-200
                            group-hover:border-[var(--accent-blue)]
                            group-hover:bg-[rgba(22,140,255,0.05)]
                          "
                        >
                          <Icon
                            size={16}
                            strokeWidth={1.7}
                          />
                        </div>
                      )}

                      {/* Content */}

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <span
                            className="
                              text-[13px]
                              font-semibold
                              tracking-[-0.01em]
                              text-[var(--foreground)]
                            "
                          >
                            {item.title}
                          </span>

                          <ArrowRight
                            size={14}
                            className="
                              shrink-0
                              -translate-x-2
                              text-[var(--accent-blue)]
                              opacity-0
                              transition-all
                              duration-200
                              group-hover:translate-x-0
                              group-hover:opacity-100
                            "
                          />
                        </div>

                        {item.description && (
                          <p
                            className="
                              mt-1
                              max-w-[340px]
                              text-[11px]
                              leading-5
                              text-[var(--text-secondary)]
                            "
                          >
                            {item.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   MENU ICON
===================================================== */

function MenuIcon({
  menuKey,
}: {
  menuKey: ActiveMenuKey;
}) {
  if (menuKey === "services") {
    return <Zap size={18} />;
  }

  if (menuKey === "solutions") {
    return <Workflow size={18} />;
  }

  if (menuKey === "expertise") {
    return <BrainCircuit size={18} />;
  }

  return <Building2 size={18} />;
}

/* =====================================================
   EXPLORE URL
===================================================== */

function getExploreHref(
  menuKey: ActiveMenuKey
) {
  switch (menuKey) {
    case "services":
      return "/services";

    case "solutions":
      return "/solutions";

    case "expertise":
      return "/expertise";

    case "industries":
      return "/industries";

    case "company":
      return "/about";

    default:
      return "/";
  }
}