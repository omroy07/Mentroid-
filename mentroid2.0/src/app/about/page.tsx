"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ============================================================
   CONTENT
   Edit copy here — nothing else needs to change.
============================================================ */

const pillars = [
  {
    index: "01",
    label: "Mission",
    copy: "Make AI accessible, practical, and impactful for businesses and individuals.",
  },
  {
    index: "02",
    label: "Vision",
    copy: "Become India's go-to AI innovation hub for startups and enterprises.",
  },
  {
    index: "03",
    label: "What We Do",
    copy: "Design AI systems, build ML models, and ship automation that actually gets used.",
  },
];

/* ============================================================
   PARTICLE NETWORK (three.js)
   Sparse points in a shallow volume, connected by faint lines
   when close together. No color — pure graphite/white, so it
   sits behind the copy instead of competing with it.
============================================================ */

function useParticleNetwork(
  mountRef: React.RefObject<HTMLDivElement | null>,
  sectionRef: React.RefObject<HTMLElement | null>
) {
  useEffect(() => {
    const mount = mountRef.current;
    const section = sectionRef.current;
    if (!mount || !section) return;

    let frameId = 0;
    const state = { scrollProgress: 0 };

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 22;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    /* ---- Node field ---- */
    const COUNT = 90;
    const positions = new Float32Array(COUNT * 3);
    const velocities: THREE.Vector3[] = [];

    for (let i = 0; i < COUNT; i++) {
      const x = (Math.random() - 0.5) * 34;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 14;
      positions.set([x, y, z], i * 3);
      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.004,
          (Math.random() - 0.5) * 0.004,
          (Math.random() - 0.5) * 0.004
        )
      );
    }

    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const pointsMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.055,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(pointsGeo, pointsMat);
    scene.add(points);

    /* ---- Connective lines, rebuilt each frame from live positions ---- */
    const lineGeo = new THREE.BufferGeometry();
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.08,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    const MAX_DIST = 5.2;
    const maxSegments = COUNT * 6;
    const linePositions = new Float32Array(maxSegments * 6);

    function rebuildLines() {
      let ptr = 0;
      const pos = pointsGeo.attributes.position
        .array as Float32Array;

      for (let i = 0; i < COUNT; i++) {
        const ax = pos[i * 3];
        const ay = pos[i * 3 + 1];
        const az = pos[i * 3 + 2];

        for (let j = i + 1; j < COUNT; j++) {
          const bx = pos[j * 3];
          const by = pos[j * 3 + 1];
          const bz = pos[j * 3 + 2];

          const d = Math.hypot(ax - bx, ay - by, az - bz);
          if (d < MAX_DIST && ptr < maxSegments * 6 - 6) {
            linePositions[ptr++] = ax;
            linePositions[ptr++] = ay;
            linePositions[ptr++] = az;
            linePositions[ptr++] = bx;
            linePositions[ptr++] = by;
            linePositions[ptr++] = bz;
          }
        }
      }

      lineGeo.setAttribute(
        "position",
        new THREE.BufferAttribute(linePositions.subarray(0, ptr), 3)
      );
      lineGeo.attributes.position.needsUpdate = true;
    }

    rebuildLines();

    /* ---- Scroll-tied camera drift (depth / parallax) ---- */
    ScrollTrigger.create({
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        state.scrollProgress = self.progress;
      },
    });

    let last = performance.now();
    let sinceRebuild = 0;

    function animate(now: number) {
      const dt = Math.min(now - last, 48);
      last = now;
      sinceRebuild += dt;

      const pos = pointsGeo.attributes.position
        .array as Float32Array;

      for (let i = 0; i < COUNT; i++) {
        pos[i * 3] += velocities[i].x;
        pos[i * 3 + 1] += velocities[i].y;
        pos[i * 3 + 2] += velocities[i].z;

        if (Math.abs(pos[i * 3]) > 17) velocities[i].x *= -1;
        if (Math.abs(pos[i * 3 + 1]) > 10) velocities[i].y *= -1;
        if (Math.abs(pos[i * 3 + 2]) > 7) velocities[i].z *= -1;
      }
      pointsGeo.attributes.position.needsUpdate = true;

      // Rebuild the connective mesh at ~12fps — cheap and still smooth.
      if (sinceRebuild > 80) {
        rebuildLines();
        sinceRebuild = 0;
      }

      const p = state.scrollProgress;
      scene.rotation.y = p * 0.35 - 0.1;
      scene.rotation.x = p * -0.12;
      camera.position.z = 22 - p * 3;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }

    frameId = requestAnimationFrame(animate);

    function handleResize() {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      pointsGeo.dispose();
      lineGeo.dispose();
      pointsMat.dispose();
      lineMat.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [mountRef, sectionRef]);
}

/* ============================================================
   ABOUT SECTION
============================================================ */

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasMountRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useParticleNetwork(canvasMountRef, sectionRef);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const rows = rowRefs.current.filter(Boolean) as HTMLDivElement[];

      gsap.set(headingRef.current, { autoAlpha: 0, y: 40 });
      gsap.set(rows, { autoAlpha: 0, y: 32 });

      gsap.to(headingRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      });

      rows.forEach((row, i) => {
        gsap.to(row, {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          delay: i * 0.06,
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
          },
        });
      });

      // Gentle parallax on the whole canvas mount as the section passes.
      gsap.to(canvasMountRef.current, {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="
        relative
        w-full
        max-w-full
        overflow-hidden
        bg-black
        py-28
        md:py-36
        lg:py-44
      "
    >
      {/* Particle network backdrop */}
      <div
        ref={canvasMountRef}
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          opacity-70
        "
      />

      {/* Top hairline — ties visually to the hero above */}
      <div className="absolute inset-x-0 top-0 z-[1] h-px bg-white/10" />

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1400px]
          px-6
          md:px-10
          lg:px-14
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-16
            lg:grid-cols-[minmax(0,420px)_1fr]
            lg:gap-24
          "
        >
          {/* ============ LEFT: sticky intro ============ */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div ref={headingRef}>
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/50">
                About Mentroid
              </span>

              <h2
                className="
                  mt-6
                  text-[clamp(2.4rem,4.4vw,3.6rem)]
                  font-medium
                  leading-[1.05]
                  tracking-[-0.03em]
                  text-white
                "
              >
                Built for teams who
                <br className="hidden md:block" />
                won&apos;t bend their
                <br className="hidden md:block" />
                workflow to fit a template.
              </h2>

              <p
                className="
                  mt-7
                  max-w-[420px]
                  text-sm
                  leading-7
                  text-white/60
                  md:text-base
                  md:leading-8
                "
              >
                Mentroid builds custom chatbots and ML models for
                businesses that don&apos;t want to force-fit their
                workflow into someone else&apos;s template.
              </p>
            </div>
          </div>

          {/* ============ RIGHT: pillars ============ */}
          <div className="flex flex-col">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.label}
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
                className="
                  group
                  grid
                  grid-cols-[auto_1fr]
                  gap-6
                  border-t
                  border-white/10
                  py-9
                  transition-colors
                  duration-300
                  first:border-t
                  md:gap-10
                  md:py-11
                "
              >
                <span
                  className="
                    text-xs
                    font-medium
                    tracking-[0.1em]
                    text-white/35
                  "
                >
                  {pillar.index}
                </span>

                <div>
                  <h3
                    className="
                      text-xl
                      font-medium
                      tracking-[-0.02em]
                      text-white
                      md:text-2xl
                    "
                  >
                    {pillar.label}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-[560px]
                      text-sm
                      leading-7
                      text-white/60
                      md:text-base
                      md:leading-8
                    "
                  >
                    {pillar.copy}
                  </p>
                </div>
              </div>
            ))}

            <div className="border-t border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}