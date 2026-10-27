
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { navigation } from "@/data/navigation";
import DesktopNav from "./DesktopNav";
import MegaMenu from "./MegaMenu";
import MobileNav from "./MobileNav";

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

export const menuOrder: MenuKey[] = [
  "services",
  "solutions",
  "expertise",
  "industries",
  "company",
];

export const menuPreviewImages: Record<MenuKey, string> = {
  services: "/assets/navbar/Ai-automation.webp",
  solutions: "/assets/navbar/Ai-development.webp",
  expertise: "/assets/navbar/experties.webp",
  industries: "/assets/navbar/Ai-development.webp",
  company: "/assets/navbar/Ai-automation.webp",
};

export const fallbackPreviewImages = [
  "/assets/navbar/services.webp",
  "/assets/navbar/solutions.webp",
  "/assets/navbar/expertise.webp",
  "/assets/navbar/industries.webp",
];

export default function Navbar() {
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
    const [announcementVisible, setAnnouncementVisible] = useState(true);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState(
    menuPreviewImages.services
  );

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

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const openMenu = (menu: MenuKey) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }

    setActiveMenu(menu);
    setPreviewImage(menuPreviewImages[menu]);
  };

  const toggleMenu = (menu: MenuKey) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
      return;
    }

    openMenu(menu);
  };

  const cancelClose = () => {
    if (!closeTimer.current) return;

    clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };

  const scheduleClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    closeTimer.current = setTimeout(() => {
      setActiveMenu(null);
      closeTimer.current = null;
    }, 180);
  };

  const closeNavigation = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  const toggleMobile = () => {
    setMobileOpen((current) => !current);
    setActiveMenu(null);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-[100] w-full overflow-x-clip">
       {announcementVisible && (
        <div className="relative flex min-h-12 items-center justify-center bg-[#29443b] text-white px-10 py-2 text-center text-[12px] leading-4 text-white sm:text-[12px] lg:text-[15px]">
          <p>
           Introducing Mentroid AI-powered solutions{" "}
            <Link href="/about" className="ml-1 underline underline-offset-4 hover:opacity-75">
              Meet Mentroid <span aria-hidden="true">↗</span>
            </Link>
          </p>
          <button
            type="button"
            aria-label="Dismiss announcement"
            onClick={() => setAnnouncementVisible(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/80 transition hover:text-white"
          >
            <X size={16} strokeWidth={1.6} />
          </button>
        </div>
      )}
      {/* MAIN NAVBAR */}
      <motion.nav
        initial={false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0 }}
        className="
          pointer-events-auto
          relative
          z-20
          w-full
          bg-white
          text-[#07111f]
        "
      >
        <div
          className="
            mx-auto flex h-[60px] w-full max-w-[1600px]
            items-center justify-center px-4 
            min-[480px]:px-5
            sm:px-7
            lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto]
lg:gap-x-8 lg:px-10
xl:gap-x-10 xl:px-12
2xl:px-14
          "
        >
          {/* LOGO */}
          <div className="relative z-20 flex shrink-0  items-center">
            <Link
              href="/"
              onClick={closeNavigation}
              aria-label="Mentroid home"
              className="group flex items-center"
            >
              <div className="flex h-10 w-auto items-center sm:h-11 lg:h-12">
                <img
                  src="/assets/mentroid-logo.png"
                  width={52}
                  height={52}
                  alt="Mentroid"
                  className="
                    h-10 w-10 shrink-0 object-contain
                    transition-transform duration-300
                    group-hover:scale-[1.04]
                    sm:h-11 sm:w-11
                    lg:h-10 lg:w-12
                  "
                />

                <span className="ml-1.5 flex min-w-0 flex-col justify-center gap-[4px]">
                  <span className="whitespace-nowrap text-[19px] font-semibold leading-none tracking-[-0.045em] text-[#07111f] transition-colors duration-300 sm:text-[20px] lg:text-[18px]">
                    Mentroid
                  </span>

                  <span className="whitespace-nowrap text-[7px] font-medium uppercase leading-none tracking-[0.16em] text-[#079dad] sm:text-[7px]">
                    AI · ML SERVICES
                  </span>
                </span>
              </div>
            </Link>
          </div>

          {/* DESKTOP NAVIGATION */}
          <DesktopNav
            activeMenu={activeMenu}
            onOpenMenu={openMenu}
            onToggleMenu={toggleMenu}
          />

          {/* RIGHT ACTIONS */}
          <div className="relative z-20 flex shrink-0 items-center gap-2 sm:gap-2.5 lg:gap-3">
            {/* ORIGINAL LET'S TALK BUTTON — STYLING PRESERVED */}
            <Link
              href="/contact"
              onClick={closeNavigation}
              className="
                mentroid-gradient-border
                group
                relative
                hidden
                h-10
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-[10px]
                p-[1.5px]
                text-[16px]
                font-semibold 
                leading-none
                text-white
                transition-transform
                duration-300
                hover:scale-[1.015]
                lg:inline-flex
                lg:h-11
              "
            >
              <span
                className="
                  relative
                  flex
                  h-full
                  w-full
                  items-center
                  justify-center
                  gap-2
                  overflow-hidden
                  rounded-[8.5px]
                  bg-transparent
                  px-3.5
                  text-[#07111f]
                  lg:px-5
                "
              >
                <span
                  className="
                    absolute
                    inset-0
                    translate-y-full
                    transition-transform
                    duration-300
                  "
                />

                <span className="relative z-[1] flex items-center gap-2 whitespace-nowrap">
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
              </span>
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={toggleMobile}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-[9px]
                text-[#07111f]
                transition-transform duration-300
                active:scale-95
                sm:h-10 sm:w-10
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

   
      {/* DESKTOP MEGA MENU — SMOOTH COHERE-STYLE TRANSITION */}
      <AnimatePresence initial={false}>
        {activeMenu && (
          <motion.div
            key="mentroid-mega-menu"
            initial={{
              opacity: 0,
              y: -10,
              scaleY: 0.985,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scaleY: 1,
            }}
            exit={{
              opacity: 0,
              y: -6,
              scaleY: 0.99,
            }}
            transition={{
              opacity: {
                duration: 0.2,
                ease: "easeOut",
              },
              y: {
                duration: 0.28,
                ease: [0.22, 1, 0.36, 1],
              },
              scaleY: {
                duration: 0.28,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            style={{
              transformOrigin: "top center",
            }}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
            className="
              pointer-events-auto
              absolute
              left-0
              right-0
              top-full
              z-10
              hidden
              w-full
              overflow-x-clip
              bg-white
              lg:block
            "
          >
            <MegaMenu
              menu={navigation[activeMenu] as MenuData}
              menuKey={activeMenu}
              previewImage={previewImage}
              onPreviewChange={setPreviewImage}
              onNavigate={closeNavigation}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "calc(100dvh - 60px)",
            }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              pointer-events-auto
              absolute
              left-0
              right-0
              top-[60px]
              z-10
              max-h-[calc(100dvh-60px)]
              overflow-hidden
              overflow-y-auto
              overscroll-contain
              bg-white
              lg:hidden
            "
          >
            <MobileNav onClose={closeNavigation} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
