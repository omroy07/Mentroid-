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

export const menuPreviewImages: Record<
  MenuKey,
  string
> = {
  services:
    "/assets/navbar/Ai-automation.webp",

  solutions:
    "/assets/navbar/Ai-development.webp",

  expertise:
    "/assets/navbar/Ai-automation.webp",

  industries:
    "/assets/navbar/Ai-development.webp",

  company:
    "/assets/navbar/Ai-automation.webp",
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
  /* =======================================================
     TIMERS
  ======================================================= */

  const closeTimer =
    useRef<ReturnType<typeof setTimeout> | null>(
      null
    );

  const hideTimer =
    useRef<ReturnType<typeof setTimeout> | null>(
      null
    );

  /* =======================================================
     STATE
  ======================================================= */

  const [
    activeMenu,
    setActiveMenu,
  ] = useState<MenuKey | null>(null);

  const [
    mobileOpen,
    setMobileOpen,
  ] = useState(false);

  /*
    TRUE = hero / dark background
    FALSE = light section

    This controls ONLY the nav item color.
  */

const [navTheme, setNavTheme] =
  useState<"dark" | "light">("dark");

  /*
    Controls whether desktop navbar is visible.
  */

  const [
    navVisible,
    setNavVisible,
  ] = useState(false);

  /*
    Used so mobile navbar doesn't get hidden.
  */

  const [
    isMobile,
    setIsMobile,
  ] = useState(false);

  const [
    previewImage,
    setPreviewImage,
  ] = useState(
    menuPreviewImages.services
  );

  /* =======================================================
     DEVICE DETECTION
  ======================================================= */

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(
        window.innerWidth < 1024
      );
    };

    checkDevice();

    window.addEventListener(
      "resize",
      checkDevice
    );

    return () => {
      window.removeEventListener(
        "resize",
        checkDevice
      );
    };
  }, []);

 
/* =======================================================
   NAVBAR THEME DETECTION

   Every major section should have:

   data-navbar-theme="dark"
   OR
   data-navbar-theme="light"

   The section closest to the navbar determines
   the navbar text color.
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
      return;
    }

    /*
      We check a point near the top of the viewport.

      This is intentional because the navbar itself
      lives at the top of the screen.
    */

    const checkPoint = 140;

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
      If no section contains the point,
      find the section closest to it.
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

    if (!activeSection) {
      return;
    }

    const theme =
      activeSection.dataset.navbarTheme;

    if (theme === "dark") {
      setNavTheme("dark");
    }

    if (theme === "light") {
      setNavTheme("light");
    }

    ticking = false;
  };

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(
        updateNavbarTheme
      );

      ticking = true;
    }
  };

  updateNavbarTheme();

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
     MOBILE NAVBAR
  ======================================================= */

  useEffect(() => {
    if (isMobile) {
      setNavVisible(true);
    } else {
      setNavVisible(false);
    }
  }, [isMobile]);

  /* =======================================================
     REVEAL NAVBAR
  ======================================================= */

  const showNavbar = () => {
    if (isMobile) {
      return;
    }

    if (hideTimer.current) {
      clearTimeout(
        hideTimer.current
      );

      hideTimer.current = null;
    }

    setNavVisible(true);
  };

  /* =======================================================
     HIDE NAVBAR
  ======================================================= */

  const hideNavbar = () => {
    if (isMobile) {
      return;
    }

    if (activeMenu) {
      return;
    }

    if (hideTimer.current) {
      clearTimeout(
        hideTimer.current
      );
    }

    hideTimer.current =
      setTimeout(() => {
        setNavVisible(false);
      }, 450);
  };

  /* =======================================================
     TOP REVEAL ZONE
  ======================================================= */

  useEffect(() => {
    if (isMobile) {
      return;
    }

    const handleMouseMove = (
      event: MouseEvent
    ) => {
      /*
        Invisible top area.

        If cursor enters the first 55px
        of the viewport, reveal navbar.
      */

      if (event.clientY <= 55) {
        showNavbar();
      }
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, [isMobile]);

  /* =======================================================
     ESCAPE
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key !== "Escape") {
        return;
      }

      setActiveMenu(null);
      setMobileOpen(false);

      if (!isMobile) {
        setNavVisible(false);
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
  }, [isMobile]);

  /* =======================================================
     BODY LOCK
  ======================================================= */

  useEffect(() => {
    document.body.style.overflow =
      mobileOpen
        ? "hidden"
        : "";

    return () => {
      document.body.style.overflow =
        "";
    };
  }, [mobileOpen]);

  /* =======================================================
     OPEN MENU
  ======================================================= */

  const openMenu = (
    menu: MenuKey
  ) => {
    if (closeTimer.current) {
      clearTimeout(
        closeTimer.current
      );

      closeTimer.current = null;
    }

    if (hideTimer.current) {
      clearTimeout(
        hideTimer.current
      );

      hideTimer.current = null;
    }

    setNavVisible(true);

    setActiveMenu(menu);

    setPreviewImage(
      menuPreviewImages[menu]
    );
  };

  /* =======================================================
     CANCEL CLOSE
  ======================================================= */

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(
        closeTimer.current
      );

      closeTimer.current = null;
    }

    if (hideTimer.current) {
      clearTimeout(
        hideTimer.current
      );

      hideTimer.current = null;
    }

    if (!isMobile) {
      setNavVisible(true);
    }
  };

  /* =======================================================
     CLOSE MENU WITH DELAY
  ======================================================= */

  const scheduleClose = () => {
    if (closeTimer.current) {
      clearTimeout(
        closeTimer.current
      );
    }

    closeTimer.current =
      setTimeout(() => {
        setActiveMenu(null);

        if (!isMobile) {
          hideNavbar();
        }
      }, 180);
  };

  /* =======================================================
     CLOSE EVERYTHING
  ======================================================= */

  const closeNavigation = () => {
    setActiveMenu(null);
    setMobileOpen(false);

    if (!isMobile) {
      setNavVisible(false);
    }
  };

  /* =======================================================
     MOBILE MENU
  ======================================================= */

  const toggleMobile = () => {
    setMobileOpen(
      (current) => {
        const next =
          !current;

        if (next) {
          setNavVisible(true);
        }

        return next;
      }
    );

    setActiveMenu(null);
  };

  /* =======================================================
     NAVBAR VISIBILITY
  ======================================================= */

  const shouldShow =
    isMobile ||
    mobileOpen ||
    navVisible;

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <>
      {/* =====================================================
          INVISIBLE DESKTOP REVEAL ZONE

          The navbar is hidden, but this area allows the
          user to bring it back by moving the cursor upward.
      ===================================================== */}

      <div
        className="
          fixed
          inset-x-0
          top-0
          z-[95]
          hidden
          h-[55px]
          lg:block
        "
        onMouseEnter={showNavbar}
      />

      {/* =====================================================
          NAVIGATION HEADER
      ===================================================== */}

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
          initial={false}
          animate={{
            y: shouldShow
              ? 0
              : -110,

            opacity:
              shouldShow
                ? 1
                : 0,
          }}
          transition={{
            y: {
              duration: 0.55,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            },

            opacity: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
          className="
            w-full
            max-w-full
            bg-transparent
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

                IMPORTANT:
                Logo color never changes.
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
                onClick={
                  closeNavigation
                }
                className="
                  group
                  flex
                  items-center
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-[132px]
                    items-center
                  "
                >
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

                heroActive ONLY controls the nav item
                text color.
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
              "
            >
              {/* =================================================
                  LET'S TALK

                  Always same color.
              ================================================= */}

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
                  hover:bg-[#111]
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

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.7}
                  />
                </span>
              </Link>

              {/* =================================================
                  MOBILE BUTTON

                  Fixed dark style.
              ================================================= */}

              <button
                type="button"
                onClick={
                  toggleMobile
                }
                className="
                  flex
                  size-10
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#07111f]
                  text-white
                  lg:hidden
                "
                aria-label={
                  mobileOpen
                    ? "Close menu"
                    : "Open menu"
                }
              >
                {mobileOpen ? (
                  <X
                    size={20}
                    strokeWidth={1.8}
                  />
                ) : (
                  <Menu
                    size={20}
                    strokeWidth={1.8}
                  />
                )}
              </button>
            </div>
          </div>
        </motion.nav>

        {/* =====================================================
            DESKTOP MEGA MENU

            Fixed dark theme.
            It does NOT change based on heroActive.
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
              onMouseEnter={
                cancelClose
              }
              onMouseLeave={
                scheduleClose
              }
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
                menuKey={
                  activeMenu
                }
                previewImage={
                  previewImage
                }
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
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
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
    </>
  );
}