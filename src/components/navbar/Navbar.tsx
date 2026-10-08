"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import Link from "next/link";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

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

export const menuPreviewImages: Record<MenuKey, string> = {
  services: "/assets/navbar/Ai-automation.webp",
  solutions: "/assets/navbar/Ai-development.webp",
  expertise: "/assets/navbar/Ai-automation.webp",
  industries: "/assets/navbar/Ai-development.webp",
  company: "/assets/navbar/Ai-automation.webp",
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
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [navTheme, setNavTheme] = useState<"dark" | "light">("dark");

  const [previewImage, setPreviewImage] = useState(
    menuPreviewImages.services
  );

  /* =======================================================
     NAVBAR THEME DETECTION
  ======================================================= */

  useEffect(() => {
    let ticking = false;

    const updateNavbarTheme = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>(
          "[data-navbar-theme]"
        )
      );

      if (!sections.length) {
        ticking = false;
        return;
      }

      /*
       * The navbar occupies the top of the viewport.
       * Check slightly below it so the correct section
       * controls the text color.
       */
      const checkPoint = 120;

      let activeSection: HTMLElement | null = null;

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (
          rect.top <= checkPoint &&
          rect.bottom >= checkPoint
        ) {
          activeSection = section;
          break;
        }
      }

      /*
       * Fallback:
       * Find the section closest to the navbar.
       */
      if (!activeSection) {
        let closestDistance = Infinity;

        for (const section of sections) {
          const rect = section.getBoundingClientRect();

          const distance =
            rect.top > checkPoint
              ? rect.top - checkPoint
              : checkPoint - rect.bottom;

          if (distance < closestDistance) {
            closestDistance = distance;
            activeSection = section;
          }
        }
      }

      if (activeSection) {
        const theme = activeSection.dataset.navbarTheme;

        if (theme === "dark" || theme === "light") {
          setNavTheme(theme);
        }
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(updateNavbarTheme);
    };

    updateNavbarTheme();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      handleScroll,
      { passive: true }
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
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      setActiveMenu(null);
      setMobileOpen(false);
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
     BODY SCROLL LOCK
  ======================================================= */

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [mobileOpen]);

  /* =======================================================
     OPEN MENU
  ======================================================= */

  const openMenu = (menu: MenuKey) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }

    setActiveMenu(menu);
    setPreviewImage(menuPreviewImages[menu]);
  };

  /* =======================================================
     CANCEL CLOSE
  ======================================================= */

  const cancelClose = () => {
    if (!closeTimer.current) return;

    clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };

  /* =======================================================
     CLOSE MENU
  ======================================================= */

  const scheduleClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    closeTimer.current = setTimeout(() => {
      setActiveMenu(null);
      closeTimer.current = null;
    }, 180);
  };

  /* =======================================================
     CLOSE EVERYTHING
  ======================================================= */

  const closeNavigation = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  /* =======================================================
     MOBILE MENU
  ======================================================= */

  const toggleMobile = () => {
    setMobileOpen((current) => !current);
    setActiveMenu(null);
  };

  /* =======================================================
     NAVBAR
  ======================================================= */

  return (
    <>
      <header
        className="
          fixed
          inset-x-0
          top-0
          z-[100]
          w-full
          overflow-x-clip
          pointer-events-none
        "
      >
        {/* =================================================
            MAIN NAVBAR
        ================================================= */}

        <motion.nav
          initial={false}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            y: {
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            },
            opacity: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
          className="
            pointer-events-auto
            w-full
          "
        >
         <div
  className="
    mx-auto
    flex
    w-full
    max-w-[1600px]
    items-center
    justify-between
    px-4
    py-3

    min-[480px]:px-5

    sm:px-7
    sm:py-3.5

    lg:grid
    lg:grid-cols-[auto_minmax(0,1fr)_auto]
    lg:gap-3
    lg:px-10
    lg:py-4

    xl:px-12
    2xl:px-14
  "
>
            {/* =================================================
                LOGO
            ================================================= */}

            <div
              className="
                relative
                z-20
                flex
                shrink-0
                items-center
              "
            >
              <Link
                href="/"
                onClick={closeNavigation}
                aria-label="Mentroid home"
                className="
                  group
                  flex
                  items-center
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-auto
                    items-center

                    sm:h-11

                    lg:h-12
                  "
                >
                  <img
                    src="/assets/mentroid-logo.png"
                    width={52}
                    height={52}
                    alt="Mentroid"
                    className="
                      h-10
                      w-10
                      shrink-0
                      object-contain
                      transition-transform
                      duration-300
                      group-hover:scale-[1.04]

                      sm:h-11
                      sm:w-11

                      lg:h-12
                      lg:w-12
                    "
                  />

                  <span
                    className={`
                      ml-1.5
                      whitespace-nowrap
                      text-[19px]
                      font-semibold
                      leading-none
                      tracking-[-0.045em]
                      transition-colors
                      duration-300

                      sm:text-[20px]

                      lg:text-[21px]

                      ${
                        navTheme === "dark"
                          ? "text-white"
                          : "text-[#07111f]"
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
              navTheme={navTheme}
              onOpenMenu={openMenu}
            />

            {/* =================================================
                RIGHT ACTIONS
            ================================================= */}

            <div
              className="
                relative
                z-20
                flex
                shrink-0
                items-center
                gap-2

                sm:gap-2.5

                lg:gap-3
              "
            >
              {/* =================================================
                  LET'S TALK
              ================================================= */}

              <Link
  href="/contact"
  onClick={closeNavigation}
  className="
    group
    relative
    hidden
    h-10
    shrink-0
    items-center
    justify-center
    gap-2
    overflow-hidden
    rounded-[9px]
    bg-[#07111f]
    px-3.5
    text-[13px]
    font-semibold
    leading-none
    text-white
    transition-transform
    duration-300
    hover:scale-[1.015]

    lg:inline-flex
    lg:h-11
    lg:px-5
  "
>
                <span
                  className="
                    absolute
                    inset-0
                    translate-y-full
                    bg-white/[0.08]
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
                    whitespace-nowrap
                  "
                >
                  Let's Talk

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.7}
                    className="
                      shrink-0
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5

                      lg:size-[15px]
                    "
                  />
                </span>
              </Link>

              {/* =================================================
                  MOBILE / TABLET BUTTON
              ================================================= */}

           <button
  type="button"
  onClick={toggleMobile}
  aria-label={mobileOpen ? "Close menu" : "Open menu"}
  aria-expanded={mobileOpen}
  className="
    flex
    h-10
    w-10
    shrink-0
    items-center
    justify-center
    rounded-[9px]
    bg-[#07111f]
    text-white
    transition-transform
    duration-300
    active:scale-95

    sm:h-10
    sm:w-10

    lg:hidden
  "
>
  {mobileOpen ? (
    <X size={20} strokeWidth={1.8} />
  ) : (
    <Menu size={20} strokeWidth={1.8} />
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
                ease: [0.22, 1, 0.36, 1],
              }}
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
              className="
                pointer-events-auto
                absolute
                left-0
                right-0
                top-full
                hidden
                w-full
                overflow-x-clip
                lg:block
              "
            >
              <MegaMenu
                menu={
                  navigation[activeMenu] as MenuData
                }
                menuKey={activeMenu}
                previewImage={previewImage}
                onPreviewChange={setPreviewImage}
                onNavigate={closeNavigation}
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
                  "calc(100dvh - 68px)",
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
                pointer-events-auto
                absolute
                left-0
                right-0
                top-[68px]
                max-h-[calc(100dvh-68px)]
                overflow-hidden
                overflow-y-auto
                overscroll-contain
                bg-white
                lg:hidden
              "
            >
              <MobileNav
                onClose={closeNavigation}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}