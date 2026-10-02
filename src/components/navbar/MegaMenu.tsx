"use client";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { ArrowUpRight } from "lucide-react";

import type {
  MenuData,
  MenuKey,
} from "./Navbar";

import {
  fallbackPreviewImages,
  menuPreviewImages,
} from "./Navbar";

type MegaMenuProps = {
  menu: MenuData;
  menuKey: MenuKey;
  previewImage: string;
  onPreviewChange: (image: string) => void;
  onNavigate: () => void;
};

export default function MegaMenu({
  menu,
  menuKey,
  previewImage,
  onPreviewChange,
  onNavigate,
}: MegaMenuProps) {
  return (
    <div
      className="
        w-full
        max-w-full
        overflow-x-clip
        border-t
        border-white/[0.08]
        bg-[#0b0d0c]/95
        text-white
        shadow-[0_20px_70px_rgba(0,0,0,0.22)]
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1440px]
          min-w-0
          grid-cols-1
          gap-8
          overflow-hidden
          px-6
          py-8
          sm:px-8
          lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]
          lg:gap-10
          lg:px-10
          lg:py-10
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div
          className="
            min-w-0
            grid
            grid-cols-2
            gap-x-8
            lg:gap-x-10
          "
        >
          {menu.groups.map((group) => (
            <div
              key={group.title}
              className="min-w-0"
            >
              {/* =================================================
                  GROUP TITLE
              ================================================= */}

              <p
                className="
                  mb-4
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.14em]
                  text-white/40
                "
              >
                {group.title}
              </p>

              {/* =================================================
                  ITEMS
              ================================================= */}

              <div className="space-y-0.5">
                {group.items.map(
                  (item, index) => {
                    const image =
                      item.image ||
                      fallbackPreviewImages[
                        index %
                          fallbackPreviewImages.length
                      ] ||
                      menuPreviewImages[
                        menuKey
                      ];

                    return (
                      <a
                        key={item.title}
                        href={item.href}
                        onMouseEnter={() =>
                          onPreviewChange(image)
                        }
                        onFocus={() =>
                          onPreviewChange(image)
                        }
                        onClick={onNavigate}
                        className="
                          group
                          relative
                          flex
                          min-w-0
                          items-center
                          py-1.5
                          text-[15px]
                          leading-6
                          tracking-[-0.015em]
                          text-white/75
                          transition-colors
                          duration-200
                          hover:text-white
                        "
                      >
                        {/* ACTIVE INDICATOR */}

                        <span
                          className="
                            absolute
                            -left-3
                            h-[2px]
                            w-0
                            bg-white
                            transition-all
                            duration-300
                            group-hover:w-1.5
                          "
                        />

                        <span className="truncate">
                          {item.title}
                        </span>

                        <ArrowUpRight
                          size={13}
                          strokeWidth={1.7}
                          className="
                            ml-1
                            shrink-0
                            -translate-x-1
                            text-white
                            opacity-0
                            transition-all
                            duration-200
                            group-hover:translate-x-0
                            group-hover:opacity-60
                          "
                        />
                      </a>
                    );
                  }
                )}
              </div>
            </div>
          ))}
        </div>

        {/* =================================================
            RIGHT PREVIEW
        ================================================= */}

        <div
          className="
            relative
            min-w-0
            min-h-[240px]
            overflow-hidden
            rounded-[12px]
            bg-white/[0.04]
            ring-1
            ring-white/[0.08]
            lg:min-h-[290px]
          "
        >
          <AnimatePresence mode="sync">
            <motion.img
              key={previewImage}
              src={previewImage}
              alt=""
              initial={{
                opacity: 0,
                scale: 1.04,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />
          </AnimatePresence>

          {/* CINEMATIC OVERLAY */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-black/20
            "
          />

          {/* EDGE GRADIENT */}

          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-24
              bg-gradient-to-t
              from-black/50
              to-transparent
            "
          />

          {/* LABEL */}

          <div
            className="
              absolute
              bottom-4
              left-4
              rounded-full
              border
              border-white/15
              bg-black/30
              px-3
              py-1.5
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-white
              backdrop-blur-md
            "
          >
            Mentroid Intelligence
          </div>
        </div>
      </div>
    </div>
  );
}