"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

type SmoothScrollProps = {
  children: React.ReactNode;
};

export default function SmoothScroll({
  children,
}: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.075,
      smoothWheel: true,
      autoRaf: false,
    });

    // Sync Lenis scrolling with GSAP ScrollTrigger
    const handleScroll = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", handleScroll);

    // Single RAF loop for Lenis
    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);

    // Prevent GSAP's own lag smoothing
    // from interfering with Lenis.
    gsap.ticker.lagSmoothing(0);

    // Recalculate ScrollTrigger positions
    // after the page has mounted.
    const refresh = () => {
      ScrollTrigger.refresh();
    };

    requestAnimationFrame(refresh);

    return () => {
      lenis.off("scroll", handleScroll);

      gsap.ticker.remove(raf);

      lenis.destroy();

      ScrollTrigger.refresh();
    };
  }, []);

  return <>{children}</>;
}