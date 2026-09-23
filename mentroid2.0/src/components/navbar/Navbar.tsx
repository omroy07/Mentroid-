"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import { navigation } from "@/data/navigation";

import DesktopNav from "./DesktopNav";
import MegaMenu from "./MegaMenu";
import MobileNav from "./MobileNav";

/* =========================================================
   TYPES
========================================================= */

export type MenuKey =
  | "services"
  | "solutions"
  | "expertise"
  | "industries"
  | "company";

export type PreviewItem = {
  title: string;
  description?: string;
  href: string;
  image?: string;
};

export type MenuGroup = {
  title: string;
  items: PreviewItem[];
};

export type MenuData = {
  title: string;
  description: string;
  groups: MenuGroup[];
};

/* =========================================================
   MENU ORDER
========================================================= */

export const menuOrder: MenuKey[] = [
  "services",
  "solutions",
  "expertise",
  "industries",
  "company",
];

/* =========================================================
   MEGA MENU PREVIEW IMAGES
========================================================= */

export const menuPreviewImages: Record<
  MenuKey,
  string
> = {
  services:
    "/assets/navbar/AI-automation.jpg",

  solutions:
    "/assets/navbar/Ai-development.jpg",

  expertise:
    "/assets/navbar/AI-automation.jpg",

  industries:
    "/assets/navbar/Ai-development.jpg",

  company:
    "/assets/navbar/AI-automation.jpg",
};

/* =========================================================
   FALLBACK PREVIEW IMAGES
========================================================= */

export const fallbackPreviewImages = [
  "/assets/navbar/services.webp",
  "/assets/navbar/solutions.webp",
  "/assets/navbar/expertise.webp",
  "/assets/navbar/industries.webp",
];

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const closeTimer =
    useRef<ReturnType<typeof setTimeout> | null>(
      null
    );

  const [activeMenu, setActiveMenu] =
    useState<MenuKey | null>(null);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [heroActive, setHeroActive] =
    useState(true);

  const [previewImage, setPreviewImage] =
    useState(
      menuPreviewImages.services
    );

  /* =======================================================
     HERO DETECTION
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      const hero =
        document.getElementById("hero");

      if (!hero) {
        setHeroActive(false);
        return;
      }

      const rect =
        hero.getBoundingClientRect();

      const insideHero =
        rect.top <= 80 &&
        rect.bottom > 80;

      setHeroActive(insideHero);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );
    };
  }, []);

  /* =======================================================
     ESCAPE
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  /* =======================================================
     BODY LOCK
  ======================================================= */

  useEffect(() => {
    document.body.style.overflow =
      mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =======================================================
     MENU OPEN
  ======================================================= */

  const openMenu = (
    menu: MenuKey
  ) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    setActiveMenu(menu);

    setPreviewImage(
      menuPreviewImages[menu]
    );
  };

  /* =======================================================
     DELAYED CLOSE
  ======================================================= */

  const scheduleClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    closeTimer.current =
      setTimeout(() => {
        setActiveMenu(null);
      }, 140);
  };

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);

      closeTimer.current = null;
    }
  };

  /* =======================================================
     CLOSE EVERYTHING
  ======================================================= */

  const closeNavigation = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  return (
    <header
      className="
        fixed
        inset-x-0
        top-0
        z-[100]
        w-full
        max-w-full
        overflow-x-clip
      "
      onMouseEnter={cancelClose}
      onMouseLeave={scheduleClose}
    >
      {/* =================================================
          MAIN NAVBAR
      ================================================= */}

      <motion.nav
        initial={{
          y: -20,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.45,
          ease: [
            0.22,
            1,
            0.36,
            1,
          ],
        }}
        className="
          w-full
          max-w-full
          transition-all
          duration-300
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-[1440px]
            grid-cols-[auto_minmax(0,1fr)_auto]
            items-center
            gap-4
            px-5
            py-[15px]
            sm:px-8
            lg:px-10
          "
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <div className="relative z-20 flex shrink-0 items-center">
            <Link
              href="/"
              onClick={closeNavigation}
              className="group flex items-center"
            >
              <div className="flex h-11 w-[132px] items-center">
                <img
                  src="/assets/mentroid-logo.png"
                  width={52}
                  height={52}
                  alt="Mentroid"
                  className="
                    h-11
                    w-11
                    object-contain
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />

                <span
                  className={`
                    ml-1
                    text-[21px]
                    font-semibold
                    tracking-[-0.045em]
                    transition-colors
                    duration-300
                    ${
                      heroActive
                        ? "text-white"
                        : "text-[var(--foreground)]"
                    }
                  `}
                >
                  Mentroid
                </span>
              </div>
            </Link>
          </div>

          {/* =================================================
              DESKTOP NAV
          ================================================= */}

          <DesktopNav
            activeMenu={activeMenu}
            heroActive={heroActive}
            onOpenMenu={openMenu}
          />

          {/* =================================================
              RIGHT ACTIONS
          ================================================= */}

          <div className="relative z-20 flex shrink-0 items-center gap-2">
            <Link
              href="/portal"
              className={`
                hidden
                rounded-md
                px-3
                py-2.5
                text-[13px]
                font-medium
                transition-colors
                xl:block
                ${
                  heroActive
                    ? "text-white/75 hover:text-white"
                    : "text-[var(--text-secondary)] hover:text-[var(--foreground)]"
                }
              `}
            >
              Client Portal
            </Link>

            <Link
              href="/contact"
              className="
                group
                relative
                inline-flex
                h-10
                items-center
                justify-center
                gap-2
                overflow-hidden
                rounded-[8px]
                bg-[#07111f]
                px-4
                text-sm
                font-semibold
                text-white
                transition-colors
                duration-300
                hover:bg-[#168cff]
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  translate-y-full
                  bg-current
                  opacity-20
                  transition-transform
                  duration-300
                  group-hover:translate-y-0
                "
              />

              <span
                className="
                  relative
                  z-[1]
                  flex
                  items-center
                  gap-2
                "
              >
                Let's Talk

                <ArrowUpRight size={15} />
              </span>
            </Link>

            {/* MOBILE BUTTON */}

            <button
              type="button"
              onClick={() => {
                setMobileOpen(
                  (value) => !value
                );

                setActiveMenu(null);
              }}
              className={`
                flex
                size-10
                items-center
                justify-center
                rounded-lg
                lg:hidden
                ${
                  heroActive
                    ? "bg-white/10 text-white"
                    : "border border-black/10 bg-white text-black"
                }
              `}
              aria-label={
                mobileOpen
                  ? "Close menu"
                  : "Open menu"
              }
            >
              {mobileOpen ? (
                <X size={20} />
              ) : (
                <Menu size={20} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* =====================================================
          DESKTOP MEGA MENU
      ===================================================== */}

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
              duration: 0.22,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            className="
              absolute
              left-0
              right-0
              top-full
              hidden
              w-full
              max-w-full
              overflow-x-clip
              lg:block
            "
          >
            <MegaMenu
              menu={
                navigation[
                  activeMenu
                ] as MenuData
              }
              menuKey={activeMenu}
              previewImage={previewImage}
              heroActive={heroActive}
              onPreviewChange={
                setPreviewImage
              }
              onNavigate={
                closeNavigation
              }
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height:
                "calc(100dvh - 76px)",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              absolute
              left-0
              right-0
              top-[76px]
              overflow-hidden
              bg-white
              lg:hidden
            "
          >
            <MobileNav
              onClose={
                closeNavigation
              }
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}