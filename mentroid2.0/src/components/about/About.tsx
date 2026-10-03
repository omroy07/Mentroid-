"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
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
    detail: [
      "Translate research-grade AI into tools people actually use daily.",
      "Strip away complexity so teams adopt AI without a learning curve.",
      "Measure success by impact on the business, not model benchmarks.",
    ],
  },
  {
    index: "02",
    label: "Vision",
    copy: "Become India's go-to AI innovation hub for startups and enterprises.",
    detail: [
      "Build the default AI partner startups and enterprises reach for first.",
      "Set the bar for what thoughtful, production-grade AI looks like in India.",
      "Grow an ecosystem where AI innovation compounds across industries.",
    ],
  },
  {
    index: "03",
    label: "What We Do",
    copy: "Design AI systems, build ML models, and ship automation that actually gets used.",
    detail: [
      "Design custom AI systems around how your team already works.",
      "Build and fine-tune ML models trained on your own data.",
      "Ship automation end-to-end — not a proof of concept that stalls.",
    ],
  },
];

/* ============================================================
   PARTICLE NETWORK (three.js)
   Sparse glowing nodes in a shallow volume, connected by faint
   gradient-tinted lines when close together. A restrained cool
   palette (white / ice-blue / violet) keeps it premium and
   quiet rather than colorful — it sits behind the copy instead
   of competing with it. Reacts gently to scroll and pointer.
============================================================ */

function useParticleNetwork(
  mountRef: React.RefObject<HTMLDivElement | null>,
  sectionRef: React.RefObject<HTMLElement | null>
) {
  useEffect(() => {
    const mount = mountRef.current;
    const section = sectionRef.current;
    if (!mount || !section) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    let frameId = 0;
    const state = { scrollProgress: 0, pointerX: 0, pointerY: 0 };

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

    /* ---- Soft glow sprite for nodes (canvas-generated radial gradient) ---- */
    function makeGlowTexture() {
      const size = 128;
      const c = document.createElement("canvas");
      c.width = size;
      c.height = size;
      const ctx = c.getContext("2d")!;
      const g = ctx.createRadialGradient(
        size / 2,
        size / 2,
        0,
        size / 2,
        size / 2,
        size / 2
      );
      g.addColorStop(0, "rgba(255,255,255,1)");
      g.addColorStop(0.35, "rgba(255,255,255,0.55)");
      g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, size, size);
      const tex = new THREE.CanvasTexture(c);
      tex.needsUpdate = true;
      return tex;
    }
    const glowTexture = makeGlowTexture();

    /* ---- Node field ---- */
    const COUNT = 90;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const sizes = new Float32Array(COUNT);
    const velocities: THREE.Vector3[] = [];

    // Restrained cool palette: mostly soft white, a few ice-blue / violet accents.
    const palette = [
      new THREE.Color(0xffffff),
      new THREE.Color(0xffffff),
      new THREE.Color(0xffffff),
      new THREE.Color(0x9fc6ff), // ice blue
      new THREE.Color(0xc4a6ff), // soft violet
    ];

    for (let i = 0; i < COUNT; i++) {
      const x = (Math.random() - 0.5) * 34;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 14;
      positions.set([x, y, z], i * 3);

      const col = palette[Math.floor(Math.random() * palette.length)];
      colors.set([col.r, col.g, col.b], i * 3);
      sizes[i] = 0.045 + Math.random() * 0.05;

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
    pointsGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const pointsMat = new THREE.PointsMaterial({
      size: 0.34,
      map: glowTexture,
      transparent: true,
      opacity: 0.85,
      vertexColors: true,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(pointsGeo, pointsMat);
    scene.add(points);

    /* ---- Connective lines, rebuilt each frame from live positions ---- */
    const lineGeo = new THREE.BufferGeometry();
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x9fc6ff,
      transparent: true,
      opacity: 0.09,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    const MAX_DIST = 5.2;
    const maxSegments = COUNT * 6;
    const linePositions = new Float32Array(maxSegments * 6);

    function rebuildLines() {
      let ptr = 0;
      const pos = pointsGeo.attributes.position.array as Float32Array;

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

    /* ---- Long flowing "data" curves — a handful of sweeping arcs that
       read as signal/data paths threading through the node field. ---- */
    const flowLines: {
      mesh: THREE.Line;
      mat: THREE.LineBasicMaterial;
      speed: number;
      phase: number;
    }[] = [];

    const FLOW_COUNT = 5;
    for (let i = 0; i < FLOW_COUNT; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 36,
        (Math.random() - 0.5) * 22,
        (Math.random() - 0.5) * 10
      );
      const mid1 = start
        .clone()
        .add(
          new THREE.Vector3(
            (Math.random() - 0.5) * 18,
            (Math.random() - 0.5) * 14,
            (Math.random() - 0.5) * 8
          )
        );
      const mid2 = mid1
        .clone()
        .add(
          new THREE.Vector3(
            (Math.random() - 0.5) * 18,
            (Math.random() - 0.5) * 14,
            (Math.random() - 0.5) * 8
          )
        );
      const end = mid2
        .clone()
        .add(
          new THREE.Vector3(
            (Math.random() - 0.5) * 18,
            (Math.random() - 0.5) * 14,
            (Math.random() - 0.5) * 8
          )
        );

      const curve = new THREE.CatmullRomCurve3([start, mid1, mid2, end]);
      const curvePoints = curve.getPoints(80);
      const geo = new THREE.BufferGeometry().setFromPoints(curvePoints);

      const tint = Math.random() > 0.5 ? 0x9fc6ff : 0xc4a6ff;
      const mat = new THREE.LineBasicMaterial({
        color: tint,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      const mesh = new THREE.Line(geo, mat);
      scene.add(mesh);
      flowLines.push({
        mesh,
        mat,
        speed: 0.15 + Math.random() * 0.2,
        phase: Math.random() * Math.PI * 2,
      });
    }

    /* ---- Scroll-tied camera drift (depth / parallax) ---- */
    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        state.scrollProgress = self.progress;
      },
    });

    /* ---- Gentle pointer parallax ---- */
    function handlePointerMove(e: PointerEvent) {
      const rect = mount.getBoundingClientRect();
      state.pointerX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      state.pointerY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    }
    if (!reduceMotion) {
      window.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
    }

    let last = performance.now();
    let sinceRebuild = 0;
    let camX = 0;
    let camY = 0;

    function animate(now: number) {
      const dt = Math.min(now - last, 48);
      const t = now * 0.001;
      last = now;
      sinceRebuild += dt;

      if (!reduceMotion) {
        const pos = pointsGeo.attributes.position.array as Float32Array;

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

        // Slow, breathing pulse on the node glow so the field never looks static.
        pointsMat.opacity = 0.7 + Math.sin(t * 0.5) * 0.12;

        // Flowing data curves fade in/out on independent cycles, like
        // signal pulses traveling through the network.
        flowLines.forEach((f) => {
          const cycle = (Math.sin(t * f.speed + f.phase) + 1) / 2; // 0..1
          f.mat.opacity = Math.max(0, cycle - 0.55) * 0.9;
        });
      }

      const p = state.scrollProgress;
      const targetRotY = p * 0.35 - 0.1 + state.pointerX * 0.05;
      const targetRotX = p * -0.12 + state.pointerY * -0.04;

      scene.rotation.y += (targetRotY - scene.rotation.y) * 0.05;
      scene.rotation.x += (targetRotX - scene.rotation.x) * 0.05;

      camX += (state.pointerX * 0.6 - camX) * 0.03;
      camY += (-state.pointerY * 0.4 - camY) * 0.03;
      camera.position.x = camX;
      camera.position.y = camY;
      camera.position.z = 22 - p * 3;
      camera.lookAt(0, 0, 0);

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
      window.removeEventListener("pointermove", handlePointerMove);
      scrollTrigger.kill();
      pointsGeo.dispose();
      lineGeo.dispose();
      pointsMat.dispose();
      lineMat.dispose();
      glowTexture.dispose();
      flowLines.forEach((f) => {
        f.mesh.geometry.dispose();
        f.mat.dispose();
      });
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [mountRef, sectionRef]);
}

/* ============================================================
   AMBIENT GRADIENT / SMOKE LAYER (CSS + GSAP)
   A few very soft, large, blurred color fields drifting slowly
   behind the particle network. This is what gives the section
   its cinematic depth without ever reading as "colorful" —
   opacity stays low and hues stay cool/graphite throughout.
============================================================ */

function useAmbientDrift(containerRef: React.RefObject<HTMLDivElement | null>) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const blobs = Array.from(
      container.querySelectorAll<HTMLDivElement>("[data-smoke-blob]")
    );
    if (blobs.length === 0) return;

    const ctx = gsap.context(() => {
      if (reduceMotion) return;

      blobs.forEach((blob, i) => {
        const dir = i % 2 === 0 ? 1 : -1;
        gsap.to(blob, {
          x: `+=${dir * (60 + i * 18)}`,
          y: `+=${-dir * (40 + i * 10)}`,
          scale: 1.12,
          duration: 26 + i * 6,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
        gsap.to(blob, {
          opacity: 0.85,
          duration: 10 + i * 3,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: i * 1.4,
        });
      });
    }, container);

    return () => ctx.revert();
  }, [containerRef]);
}

/* ============================================================
   ABOUT SECTION
============================================================ */

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasMountRef = useRef<HTMLDivElement | null>(null);
  const smokeRef = useRef<HTMLDivElement | null>(null);
  const flowSvgRef = useRef<SVGSVGElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const modalCardRef = useRef<HTMLDivElement | null>(null);
  const modalGlowRef = useRef<HTMLDivElement | null>(null);

  useParticleNetwork(canvasMountRef, sectionRef);
  useAmbientDrift(smokeRef);

  /* ---- Popup card: open/close animation ---- */
  useEffect(() => {
    const overlay = overlayRef.current;
    const card = modalCardRef.current;
    const glow = modalGlowRef.current;
    if (!overlay || !card) return;

    const ctx = gsap.context(() => {
      gsap.killTweensOf([overlay, card, glow]);

      if (openIndex !== null) {
        gsap.set(overlay, { pointerEvents: "auto" });
        gsap.fromTo(
          overlay,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.4, ease: "power2.out" }
        );
        gsap.fromTo(
          card,
          { autoAlpha: 0, scale: 0.9, y: 28 },
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.6)",
            delay: 0.05,
          }
        );
        if (glow) {
          gsap.fromTo(
            glow,
            { opacity: 0, scale: 0.85 },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "power2.out",
              delay: 0.05,
            }
          );
          gsap.to(glow, {
            rotate: 360,
            duration: 28,
            ease: "none",
            repeat: -1,
          });
        }
      } else {
        gsap.to(card, {
          autoAlpha: 0,
          scale: 0.92,
          y: 16,
          duration: 0.3,
          ease: "power2.in",
        });
        gsap.to(overlay, {
          autoAlpha: 0,
          duration: 0.35,
          ease: "power2.in",
          delay: 0.05,
          onComplete: () => {
            gsap.set(overlay, { pointerEvents: "none" });
          },
        });
      }
    });

    return () => ctx.revert();
  }, [openIndex]);

  /* ---- Popup card: escape to close + lock background scroll ---- */
  useEffect(() => {
    if (openIndex === null) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
    }
    window.addEventListener("keydown", handleKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

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

      // Smoke layer drifts a touch slower than the particle canvas —
      // the differing speeds are what sell the sense of depth.
      gsap.to(smokeRef.current, {
        yPercent: 4,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.8,
        },
      });

      // Flowing data lines: continuous dash-offset animation reads as
      // signal traveling along the paths. Kept out of ScrollTrigger so
      // it never stalls — it's meant to feel alive independent of scroll.
      if (flowSvgRef.current && !reduceMotion) {
        const paths = flowSvgRef.current.querySelectorAll("path[data-flow]");
        paths.forEach((path, i) => {
          gsap.fromTo(
            path,
            { strokeDashoffset: 0 },
            {
              strokeDashoffset: -400,
              duration: 14 + i * 3,
              ease: "none",
              repeat: -1,
            }
          );
        });
      }
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
        py-10
       
      "
    >
      {/* ---- Ambient gradient / smoke layer ---- */}
      <div
        ref={smokeRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div
          data-smoke-blob
          className="absolute -left-[10%] top-[-10%] h-[620px] w-[620px] rounded-full opacity-60 blur-[110px]"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.22) 0%, rgba(99,102,241,0) 70%)",
          }}
        />
        <div
          data-smoke-blob
          className="absolute right-[-8%] top-[20%] h-[520px] w-[520px] rounded-full opacity-50 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0) 70%)",
          }}
        />
        <div
          data-smoke-blob
          className="absolute left-[20%] bottom-[-15%] h-[560px] w-[560px] rounded-full opacity-50 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.16) 0%, rgba(168,85,247,0) 70%)",
          }}
        />
        <div
          data-smoke-blob
          className="absolute right-[10%] bottom-[-10%] h-[460px] w-[460px] rounded-full opacity-40 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 70%)",
          }}
        />
      </div>

      {/* Particle network backdrop */}
      <div
        ref={canvasMountRef}
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          opacity-80
        "
      />

      {/* ---- Flowing AI / data lines (SVG overlay) ---- */}
      <svg
        ref={flowSvgRef}
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] h-full w-full opacity-70 mix-blend-screen"
        viewBox="0 0 1400 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="flowGradA" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(159,198,255,0)" />
            <stop offset="50%" stopColor="rgba(159,198,255,0.55)" />
            <stop offset="100%" stopColor="rgba(159,198,255,0)" />
          </linearGradient>
          <linearGradient id="flowGradB" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(196,166,255,0)" />
            <stop offset="50%" stopColor="rgba(196,166,255,0.45)" />
            <stop offset="100%" stopColor="rgba(196,166,255,0)" />
          </linearGradient>
          <filter id="flowBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.4" />
          </filter>
        </defs>

        <path
          data-flow
          d="M -100 160 C 300 60, 650 260, 1000 120 S 1500 40, 1600 140"
          fill="none"
          stroke="url(#flowGradA)"
          strokeWidth="1.2"
          strokeDasharray="10 14"
          filter="url(#flowBlur)"
        />
        <path
          data-flow
          d="M -100 420 C 260 520, 620 320, 980 480 S 1480 560, 1600 440"
          fill="none"
          stroke="url(#flowGradB)"
          strokeWidth="1"
          strokeDasharray="8 16"
          filter="url(#flowBlur)"
        />
        <path
          data-flow
          d="M -100 700 C 320 620, 700 800, 1040 660 S 1500 580, 1600 700"
          fill="none"
          stroke="url(#flowGradA)"
          strokeWidth="1"
          strokeDasharray="6 18"
          filter="url(#flowBlur)"
        />
      </svg>

      {/* Top hairline — ties visually to the hero above */}
      <div className="absolute inset-x-0 top-0 z-[3] h-px bg-white/10" />

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
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                onClick={() => setOpenIndex(i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpenIndex(i);
                  }
                }}
                className="
                  group
                  grid
                  cursor-pointer
                  grid-cols-[auto_1fr]
                  gap-6
                  border-t
                  border-white/10
                  py-9
                  transition-colors
                  duration-300
                  first:border-t
                  hover:border-white/25
                  focus:outline-none
                  focus-visible:border-white/40
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
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
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

      {/* ============ Popup: pillar detail card ============ */}
      <div
        ref={overlayRef}
        role="dialog"
        aria-modal="true"
        aria-label={openIndex !== null ? pillars[openIndex].label : undefined}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpenIndex(null);
        }}
        style={{ opacity: 0, visibility: "hidden", pointerEvents: "none" }}
        className="
          fixed
          inset-0
          z-[100]
          flex
          items-center
          justify-center
          bg-black/75
          px-6
          backdrop-blur-md
        "
      >
        <div
          ref={modalCardRef}
          style={{ opacity: 0 }}
          className="
            relative
            w-full
            max-w-lg
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-[#0a0a0c]
            p-9
            shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]
            md:p-12
          "
        >
          {/* Rotating conic glow ring behind the card content */}
          <div
            ref={modalGlowRef}
            aria-hidden
            className="pointer-events-none absolute -inset-[2px] -z-10 opacity-0"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(159,198,255,0.35), rgba(196,166,255,0.3), transparent 40%, transparent 60%, rgba(159,198,255,0.35))",
              filter: "blur(30px)",
            }}
          />

          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            aria-label="Close"
            className="
              absolute
              right-5
              top-5
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              text-white/50
              transition-colors
              duration-200
              hover:border-white/25
              hover:text-white
              focus:outline-none
              focus-visible:border-white/40
            "
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden
            >
              <path
                d="M1 1L13 13M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {openIndex !== null && (
            <>
              <span
                className="
                  text-[11px]
                  font-medium
                  tracking-[0.1em]
                  text-white/35
                "
              >
                {pillars[openIndex].index}
              </span>

              <h3
                className="
                  mt-4
                  text-[clamp(1.7rem,3vw,2.4rem)]
                  font-medium
                  leading-[1.1]
                  tracking-[-0.02em]
                  text-white
                "
              >
                {pillars[openIndex].label}
              </h3>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-white/60
                  md:text-base
                  md:leading-8
                "
              >
                {pillars[openIndex].copy}
              </p>

              <ul className="mt-7 flex flex-col gap-3">
                {pillars[openIndex].detail.map((line) => (
                  <li
                    key={line}
                    className="
                      flex
                      items-start
                      gap-3
                      text-sm
                      leading-6
                      text-white/55
                      md:text-[15px]
                    "
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                    {line}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  );
}