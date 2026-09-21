"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Building2,
  ChevronDown,
  Menu,
  Workflow,
  Zap,
  X,
} from "lucide-react";

import { navigation } from "@/data/navigation";

type MenuKey =
  | "services"
  | "solutions"
  | "expertise"
  | "industries"
  | "company"
  | null;

const menuOrder: MenuKey[] = [
  "services",
  "solutions",
  "expertise",
  "industries",
  "company",
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navRef = useRef<HTMLElement>(null);

  /* -------------------------------------------
     Scroll state
  ------------------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* -------------------------------------------
     Close menus on Escape
  ------------------------------------------- */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* -------------------------------------------
     Close when clicking outside navbar
  ------------------------------------------- */

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  /* -------------------------------------------
     Prevent body scroll on mobile menu
  ------------------------------------------- */

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* -------------------------------------------
     Toggle mega menu
  ------------------------------------------- */

  const toggleMenu = (menu: MenuKey) => {
    setActiveMenu((current) =>
      current === menu ? null : menu
    );
  };

  /* -------------------------------------------
     Close everything
  ------------------------------------------- */

  const closeNavigation = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  return (
    <header
      ref={navRef}
      className="fixed inset-x-0 top-0 z-[100]"
    >
      {/* Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          mx-auto
          transition-all
          duration-300
          ${
            scrolled
              ? "border-b border-[var(--border)] bg-white/90 shadow-[0_8px_30px_rgba(7,17,31,0.06)] backdrop-blur-xl"
              : "bg-transparent"
          }
        `}
      >
        <div
          className={`
            mx-auto
            flex
            h-[76px]
            max-w-[1440px]
            items-center
            justify-between
            px-5
            sm:px-8
            lg:px-10
            transition-all
            duration-300
            ${
              scrolled
                ? "lg:h-[70px]"
                : "lg:h-[78px]"
            }
          `}
        >
          {/* -------------------------------------------
              LOGO
          ------------------------------------------- */}

          <Link
            href="/"
            onClick={closeNavigation}
            className="group relative z-[110] flex shrink-0 items-center"
            aria-label="Mentroid home"
          >
            <div className="relative flex h-11 w-[132px] items-center">
              {/* Logo video */}
              <video
                src="/assets/Mentroid-LOGO.webm"
                width={52}
                height={52}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden="true"
                className="
                  h-11
                  w-11
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              />

              {/* Wordmark */}
              <span
                className="
                  ml-1
                  text-[21px]
                  font-semibold
                  tracking-[-0.04em]
                  text-[var(--foreground)]
                "
              >
                Mentroid
              </span>
            </div>
          </Link>

          {/* -------------------------------------------
              DESKTOP NAVIGATION
          ------------------------------------------- */}

          <div className="hidden items-center lg:flex">
            <nav
              className="flex items-center gap-1"
              aria-label="Main navigation"
            >
              {menuOrder.map((key) => {
                if (!key) return null;

                const item = navigation[key];

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => toggleMenu(key)}
                    aria-expanded={activeMenu === key}
                    aria-haspopup="true"
                    className={`
                      group
                      relative
                      flex
                      items-center
                      gap-1.5
                      rounded-lg
                      px-3.5
                      py-2.5
                      text-[14px]
                      font-medium
                      transition-colors
                      duration-200
                      ${
                        activeMenu === key
                          ? "bg-[var(--blue-soft)] text-[var(--accent-blue)]"
                          : "text-[var(--text-secondary)] hover:bg-[var(--blue-soft)] hover:text-[var(--foreground)]"
                      }
                    `}
                  >
                    {item.title}

                    <ChevronDown
                      size={15}
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

              {/* Work */}
              <Link
                href="/work"
                className="
                  rounded-lg
                  px-3.5
                  py-2.5
                  text-[14px]
                  font-medium
                  text-[var(--text-secondary)]
                  transition-colors
                  duration-200
                  hover:bg-[var(--blue-soft)]
                  hover:text-[var(--foreground)]
                "
              >
                Work
              </Link>
            </nav>
          </div>

          {/* -------------------------------------------
              RIGHT SIDE
          ------------------------------------------- */}

          <div className="flex items-center gap-3">
            {/* Client Portal */}
            <Link
              href="/portal"
              className="
                hidden
                rounded-lg
                px-3
                py-2
                text-[13px]
                font-medium
                text-[var(--text-secondary)]
                transition-colors
                hover:text-[var(--foreground)]
                xl:block
              "
            >
              Client Portal
            </Link>

            {/* Let's Talk */}
            <Link
              href="/contact"
              className="
                group
                hidden
                items-center
                gap-2
                rounded-lg
                bg-[var(--foreground)]
                px-4
                py-2.5
                text-[13px]
                font-semibold
                text-white
                transition-all
                duration-200
                hover:bg-[var(--accent-blue)]
                sm:flex
              "
            >
              Let's Talk

              <ArrowUpRight
                size={15}
                strokeWidth={2}
                className="
                  transition-transform
                  duration-200
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>

            {/* Mobile button */}
            <button
              type="button"
              onClick={() => {
                setMobileOpen((current) => !current);
                setActiveMenu(null);
              }}
              aria-label={
                mobileOpen
                  ? "Close navigation"
                  : "Open navigation"
              }
              aria-expanded={mobileOpen}
              className="
                relative
                z-[110]
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                border
                border-[var(--border)]
                bg-white
                text-[var(--foreground)]
                transition-colors
                hover:bg-[var(--blue-soft)]
                lg:hidden
              "
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{
                      opacity: 0,
                      rotate: -90,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                    }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{
                      opacity: 0,
                      rotate: 90,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -90,
                    }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* -------------------------------------------
          DESKTOP MEGA MENU
      ------------------------------------------- */}

      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{
              opacity: 0,
              y: -8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
            className="
              absolute
              left-0
              right-0
              top-full
              hidden
              lg:block
            "
          >
            <div className="border-b border-[var(--border)] bg-white/95 shadow-[0_20px_50px_rgba(7,17,31,0.08)] backdrop-blur-xl">
              <MegaMenu
                menu={navigation[activeMenu]}
                menuKey={activeMenu}
                onNavigate={closeNavigation}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* -------------------------------------------
          MOBILE NAVIGATION
      ------------------------------------------- */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "calc(100dvh - 76px)",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              absolute
              left-0
              right-0
              top-[76px]
              overflow-hidden
              border-t
              border-[var(--border)]
              bg-white
              lg:hidden
            "
          >
            <MobileNavigation
              onClose={closeNavigation}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* =====================================================
   MEGA MENU
===================================================== */

type MegaMenuProps = {
  menu: {
    title: string;
    description: string;
    groups: {
      title: string;
      items: {
        title: string;
        description?: string;
        icon?: React.ElementType;
        href: string;
      }[];
    }[];
  };
  menuKey: string;
  onNavigate: () => void;
};

function MegaMenu({
  menu,
  menuKey,
  onNavigate,
}: MegaMenuProps) {
  return (
    <div className="mx-auto max-w-[1440px] px-10 py-8">
      <div className="grid grid-cols-[240px_1fr] gap-12">
        {/* Intro */}
        <div className="border-r border-[var(--border)] pr-8">
          <div
            className="
              mb-4
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-[var(--blue-soft)]
              text-[var(--accent-blue)]
            "
          >
            {menuKey === "services" && (
              <Zap size={19} />
            )}

            {menuKey === "solutions" && (
              <Workflow size={19} />
            )}

            {menuKey === "expertise" && (
              <BrainIcon size={19} />
            )}

            {menuKey === "industries" && (
              <BuildingIcon size={19} />
            )}

            {menuKey === "company" && (
              <BuildingIcon size={19} />
            )}
          </div>

          <h3 className="text-lg font-semibold tracking-[-0.02em] text-[var(--foreground)]">
            {menu.title}
          </h3>

          <p className="mt-2 text-[13px] leading-6 text-[var(--text-secondary)]">
            {menu.description}
          </p>

          <Link
            href={
              menuKey === "services"
                ? "/services"
                : menuKey === "solutions"
                ? "/solutions"
                : menuKey === "expertise"
                ? "/expertise"
                : menuKey === "industries"
                ? "/industries"
                : "/about"
            }
            onClick={onNavigate}
            className="
              group
              mt-6
              inline-flex
              items-center
              gap-2
              text-[13px]
              font-semibold
              text-[var(--accent-blue)]
            "
          >
            Explore {menu.title}

            <ArrowUpRight
              size={15}
              className="
                transition-transform
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </Link>
        </div>

        {/* Menu groups */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-8">
          {menu.groups.map((group) => (
            <div key={group.title}>
              <p
                className="
                  mb-4
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-[var(--text-secondary)]
                "
              >
                {group.title}
              </p>

              <div className="grid grid-cols-2 gap-2">
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={onNavigate}
                      className="
                        group
                        rounded-xl
                        border
                        border-transparent
                        p-3
                        transition-all
                        duration-200
                        hover:border-[var(--border)]
                        hover:bg-[var(--background)]
                      "
                    >
                      <div className="flex gap-3">
                        {Icon && (
                          <div
                            className="
                              mt-0.5
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-lg
                              bg-[var(--blue-soft)]
                              text-[var(--accent-blue)]
                              transition-transform
                              duration-200
                              group-hover:scale-105
                            "
                          >
                            <Icon size={16} strokeWidth={1.8} />
                          </div>
                        )}

                        <div className="min-w-0">
                          <div className="flex items-center gap-1">
                            <span
                              className="
                                text-[13px]
                                font-semibold
                                text-[var(--foreground)]
                              "
                            >
                              {item.title}
                            </span>

                            <ArrowUpRight
                              size={12}
                              className="
                                opacity-0
                                -translate-x-1
                                transition-all
                                duration-200
                                group-hover:translate-x-0
                                group-hover:opacity-100
                                text-[var(--accent-blue)]
                              "
                            />
                          </div>

                          {item.description && (
                            <p
                              className="
                                mt-1
                                text-[11px]
                                leading-5
                                text-[var(--text-secondary)]
                              "
                            >
                              {item.description}
                            </p>
                          )}
                        </div>
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
   MOBILE NAVIGATION
===================================================== */

function MobileNavigation({
  onClose,
}: {
  onClose: () => void;
}) {
  const [openSection, setOpenSection] =
    useState<MenuKey>(null);

  const toggleSection = (key: MenuKey) => {
    setOpenSection((current) =>
      current === key ? null : key
    );
  };

  return (
    <div className="h-full overflow-y-auto px-5 pb-10 pt-5 sm:px-8">
      <div className="space-y-1">
        {menuOrder.map((key) => {
          if (!key) return null;

          const menu = navigation[key];
          const isOpen = openSection === key;

          return (
            <div
              key={key}
              className="border-b border-[var(--border)]"
            >
              <button
                type="button"
                onClick={() => toggleSection(key)}
                aria-expanded={isOpen}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  py-4
                  text-left
                  text-[15px]
                  font-medium
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

              <AnimatePresence initial={false}>
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
                      ease: "easeOut",
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4">
                      {menu.groups.map((group) => (
                        <div
                          key={group.title}
                          className="mb-5 last:mb-0"
                        >
                          <p
                            className="
                              mb-2
                              text-[10px]
                              font-semibold
                              uppercase
                              tracking-[0.12em]
                              text-[var(--text-secondary)]
                            "
                          >
                            {group.title}
                          </p>

                          <div className="space-y-1">
                            {group.items.map((item) => {
                              const Icon = item.icon;

                              return (
                                <Link
                                  key={item.title}
                                  href={item.href}
                                  onClick={onClose}
                                  className="
                                    flex
                                    items-center
                                    gap-3
                                    rounded-xl
                                    px-2
                                    py-3
                                    transition-colors
                                    hover:bg-[var(--background)]
                                  "
                                >
                                  {Icon && (
                                    <span
                                      className="
                                        flex
                                        h-8
                                        w-8
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-[var(--blue-soft)]
                                        text-[var(--accent-blue)]
                                      "
                                    >
                                      <Icon size={16} />
                                    </span>
                                  )}

                                  <span>
                                    <span
                                      className="
                                        block
                                        text-[13px]
                                        font-medium
                                        text-[var(--foreground)]
                                      "
                                    >
                                      {item.title}
                                    </span>

                                    {item.description && (
                                      <span
                                        className="
                                          mt-0.5
                                          block
                                          text-[11px]
                                          text-[var(--text-secondary)]
                                        "
                                      >
                                        {item.description}
                                      </span>
                                    )}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {/* Work */}
        <Link
          href="/work"
          onClick={onClose}
          className="
            block
            border-b
            border-[var(--border)]
            py-4
            text-[15px]
            font-medium
            text-[var(--foreground)]
          "
        >
          Work
        </Link>

        {/* Client Portal */}
        <Link
          href="/portal"
          onClick={onClose}
          className="
            block
            border-b
            border-[var(--border)]
            py-4
            text-[15px]
            font-medium
            text-[var(--foreground)]
          "
        >
          Client Portal
        </Link>
      </div>

      {/* Mobile CTA */}
      <div className="mt-6">
        <Link
          href="/contact"
          onClick={onClose}
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[var(--foreground)]
            px-5
            py-3.5
            text-sm
            font-semibold
            text-white
            transition-colors
            hover:bg-[var(--accent-blue)]
          "
        >
          Let's Talk
          <ArrowUpRight size={16} />
        </Link>
      </div>

      {/* Small footer text */}
      <p className="mt-8 text-center text-xs text-[var(--text-secondary)]">
        Intelligent systems. Automated workflows.
      </p>
    </div>
  );
}

/* =====================================================
   SMALL ICON HELPERS
===================================================== */

function BrainIcon({
  size = 18,
}: {
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5a3 3 0 1 0-5.83 1A3.5 3.5 0 0 0 5 12a3.5 3.5 0 0 0 2 6.32A3 3 0 0 0 12 19" />
      <path d="M12 5a3 3 0 1 1 5.83 1A3.5 3.5 0 0 1 19 12a3.5 3.5 0 0 1-2 6.32A3 3 0 0 1 12 19" />
      <path d="M12 5v14" />
      <path d="M8 9h2" />
      <path d="M14 9h2" />
      <path d="M8 15h2" />
      <path d="M14 15h2" />
    </svg>
  );
}

function BuildingIcon({
  size = 18,
}: {
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21h18" />
      <path d="M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" />
      <path d="M15 9h2a2 2 0 0 1 2 2v10" />
      <path d="M9 7h2" />
      <path d="M9 11h2" />
      <path d="M9 15h2" />
    </svg>
  );
}