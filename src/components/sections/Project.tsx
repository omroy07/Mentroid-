"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";


// `image`: optional real image (e.g. "/projects/atlas.jpg" in /public). Overrides the generated artwork.
type Project = { title: string; kind: string; desc: string; a: string; b: string; art?: number; link?: string; image?: string };

const U = (id: string) => `https://images.unsplash.com/${id}?w=1600&q=80&auto=format&fit=crop`;

const PROJECTS: Project[] = [
  { title: "LearnSphere", kind: "Education Platform", desc: "Science and maths platform with 2D/3D simulations, quizzes and an AI Tutor.", a: "#4f46e5", b: "#0ea5e9", art: 8, link: "https://www.mentroid.co.in/", image: U("photo-1516321318423-f06f85e504b3") },
  { title: "AgriTech", kind: "AI · Agriculture", desc: "Smart farming with crop recommendations and plant disease detection.", a: "#16a34a", b: "#065f46", art: 6, link: "https://www.mentroid.co.in/", image: U("photo-1500382017468-9049fed747ef") },
  { title: "ECGenius", kind: "Deep Learning · Healthcare", desc: "PyTorch and Flask app that detects cardiac arrhythmias from ECG signals.", a: "#e11d48", b: "#7c1d3a", art: 4, link: "https://www.mentroid.co.in/", image: U("photo-1576091160399-112ba8d25d1d") },
  { title: "VisionSTRA", kind: "AI · Accessibility", desc: "Road safety assistant for visually impaired users with real-time detection.", a: "#f59e0b", b: "#b45309", art: 1, link: "https://www.mentroid.co.in/", image: U("photo-1485827404703-89b55fcc595e") },
  { title: "SupportBot", kind: "AI Chatbot", desc: "Custom website chatbot that answers customer queries automatically.", a: "#7c3aed", b: "#312e81", art: 8, link: "https://www.mentroid.co.in/", image: U("photo-1677442136019-21780ecad995") },
  { title: "WhatsApp Flow", kind: "Automation", desc: "WhatsApp and CRM workflow automation for growing businesses.", a: "#10b981", b: "#047857", art: 3, link: "https://www.mentroid.co.in/", image: U("photo-1551288049-bebda4e38f71") },
  { title: "LeadScore", kind: "Lead Qualification", desc: "AI that scores and filters incoming leads before they reach sales.", a: "#ef4444", b: "#7f1d1d", art: 6, link: "https://www.mentroid.co.in/", image: U("photo-1460925895917-afdab827c52f") },
  { title: "DocuMind", kind: "RAG Assistant", desc: "Assistant trained on company documents that answers with sources.", a: "#0ea5e9", b: "#1e3a8a", art: 0, link: "https://www.mentroid.co.in/", image: U("photo-1451187580459-43490279c0fa") },
  { title: "SmartSearch", kind: "Semantic Search", desc: "Meaning-based search across products, docs and support data.", a: "#14b8a6", b: "#134e4a", art: 7, link: "https://www.mentroid.co.in/", image: U("photo-1518770660439-4636190af475") },
    { title: "VisionSTRA", kind: "AI · Accessibility", desc: "Road safety assistant for visually impaired users with real-time detection.", a: "#f59e0b", b: "#b45309", art: 1, link: "https://www.mentroid.co.in/", image: U("photo-1485827404703-89b55fcc595e") },

];

const N = PROJECTS.length;
const R = 4.4;            // helix radius (bigger ring = more room between cards)
const CW = 2.6, CH = 1.7; // card size
const ARC = CW / R;       // card arc width (rad)
const STEP = 0.65;    // angle between cards (rad) -> ~2.9 units of empty space between cards
const PITCH = 0.42;       // rise per radian: next turn sits ~2.6 units above, so layers never overlap
const SEG = 28;           // bend resolution
const UNFOLD_AT = 0.8;    // scroll point where helix opens into a grid

const smooth = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

/* ---- Generated AI artwork, one per project (drawn in the right ~55% of each card) ---- */
type Ctx = CanvasRenderingContext2D;
function wrap(g: Ctx, text: string, x: number, y: number, maxW: number, lh: number) {
  let line = "";
  text.split(" ").forEach((word) => {
    const test = line ? line + " " + word : word;
    if (g.measureText(test).width > maxW && line) { g.fillText(line, x, y); y += lh; line = word; } else line = test;
  });
  g.fillText(line, x, y);
}
const W_ = (a: number) => `rgba(255,255,255,${a})`;
const seeded = (s: number) => () => ((s = (s * 16807) % 2147483647) / 2147483647);
const gauss = (r: () => number) => (r() + r() + r() + r() - 2) * 1.2;
const seg = (g: Ctx, a: number, b: number, c: number, d: number) => { g.beginPath(); g.moveTo(a, b); g.lineTo(c, d); g.stroke(); };
const dot = (g: Ctx, x: number, y: number, r: number, f: string) => { g.fillStyle = f; g.beginPath(); g.arc(x, y, r, 0, 7); g.fill(); };

const ART: ((g: Ctx, w: number, h: number, r: () => number) => void)[] = [
  // 0 RAG: documents feeding a central answer node
  (g, w, h) => {
    const cx = w * 0.72, cy = h * 0.42; g.lineWidth = 2;
    for (let k = 0; k < 6; k++) {
      const a = (k / 6) * 6.283 + 0.4, x = cx + Math.cos(a) * w * 0.22, y = cy + Math.sin(a) * h * 0.3;
      g.strokeStyle = W_(0.25); seg(g, cx, cy, x, y);
      g.fillStyle = W_(0.14); g.beginPath(); g.roundRect(x - 34, y - 42, 68, 84, 10); g.fill();
      g.strokeStyle = W_(0.5); for (let l = 0; l < 4; l++) seg(g, x - 22, y - 24 + l * 14, x + 22 - (l % 2) * 14, y - 24 + l * 14);
    }
    dot(g, cx, cy, 46, W_(0.12)); dot(g, cx, cy, 24, W_(0.9));
  },
  // 1 Vision: detection boxes with corner brackets
  (g, w, h, r) => {
    for (let i = 0; i < 90; i++) dot(g, w * 0.44 + r() * w * 0.52, h * 0.12 + r() * h * 0.56, 2, W_(0.18));
    const boxes = [[0.5, 0.2, 150, 120, "0.97"], [0.7, 0.34, 120, 150, "0.93"], [0.58, 0.46, 110, 80, "0.88"]];
    g.lineWidth = 3; g.font = "500 22px system-ui";
    boxes.forEach(([bx, by, bw, bh, l]) => {
      const x = w * (bx as number), y = h * (by as number), c = 20;
      g.strokeStyle = W_(0.9);
      [[x, y, 1, 1], [x + (bw as number), y, -1, 1], [x, y + (bh as number), 1, -1], [x + (bw as number), y + (bh as number), -1, -1]].forEach(([px, py, sx, sy]) => {
        g.beginPath(); g.moveTo(px, py + sy * c); g.lineTo(px, py); g.lineTo(px + sx * c, py); g.stroke();
      });
      g.fillStyle = W_(0.9); g.fillText(l as string, x, y - 10);
    });
  },
  // 2 Voice: mirrored waveform
  (g, w, h, r) => {
    const n = 40, x0 = w * 0.44, x1 = w * 0.95, cy = h * 0.4; g.lineCap = "round"; g.lineWidth = 7;
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1), amp = Math.sin(t * Math.PI) * (0.35 + r() * 0.65) * h * 0.25;
      g.strokeStyle = W_(0.35 + 0.6 * Math.sin(t * Math.PI)); seg(g, x0 + t * (x1 - x0), cy - amp, x0 + t * (x1 - x0), cy + amp);
    }
  },
  // 3 Agents: pipeline of linked nodes
  (g, w, h) => {
    const P = [[0.5, 0.52], [0.6, 0.22], [0.72, 0.5], [0.82, 0.2], [0.9, 0.46]].map(([a, b]) => [w * a, h * b]);
    g.lineWidth = 2.5; g.strokeStyle = W_(0.5);
    for (let i = 0; i < P.length - 1; i++) {
      g.beginPath(); g.moveTo(P[i][0], P[i][1]);
      g.bezierCurveTo(P[i][0] + 50, P[i][1], P[i + 1][0] - 50, P[i + 1][1], P[i + 1][0], P[i + 1][1]); g.stroke();
    }
    P.forEach(([x, y], i) => { dot(g, x, y, 34, W_(0.12)); dot(g, x, y, i === P.length - 1 ? 16 : 10, W_(0.9)); });
  },
  // 4 Forecast: line + confidence band
  (g, w, h, r) => {
    const x0 = w * 0.46, x1 = w * 0.94, base = h * 0.58, pts: number[][] = [];
    for (let i = 0; i <= 30; i++) pts.push([x0 + (i / 30) * (x1 - x0), base - i * 5 - Math.sin(i * 0.6) * 14 - r() * 10]);
    g.fillStyle = W_(0.14); g.beginPath(); g.moveTo(pts[18][0], pts[18][1] - 6);
    pts.slice(18).forEach(([x, y], i) => g.lineTo(x, y - 6 - i * 3)); pts.slice(18).reverse().forEach(([x, y], i, a) => g.lineTo(x, y + 6 + (a.length - 1 - i) * 3)); g.fill();
    g.lineWidth = 4; g.strokeStyle = W_(0.95); g.beginPath(); pts.slice(0, 19).forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.stroke();
    g.setLineDash([10, 10]); g.strokeStyle = W_(0.6); g.beginPath(); pts.slice(18).forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y))); g.stroke(); g.setLineDash([]);
  },
  // 5 Generative: layered flowing waves
  (g, w, h) => {
    g.lineWidth = 3;
    for (let k = 0; k < 14; k++) {
      g.strokeStyle = W_(0.1 + k * 0.045); g.beginPath();
      for (let x = w * 0.42; x <= w * 0.96; x += 6) {
        const t = (x - w * 0.42) / (w * 0.54);
        const y = h * 0.4 + Math.sin(t * 5 + k * 0.35) * 46 * Math.sin(t * Math.PI) + (k - 7) * 9;
        x === w * 0.42 ? g.moveTo(x, y) : g.lineTo(x, y);
      }
      g.stroke();
    }
  },
  // 6 Anomaly: clustered points, flagged outliers
  (g, w, h, r) => {
    const cx = w * 0.68, cy = h * 0.4;
    for (let i = 0; i < 120; i++) dot(g, cx + gauss(r) * 70, cy + gauss(r) * 60, 3, W_(0.55));
    [[0.42, 0.15], [0.93, 0.22], [0.85, 0.62]].forEach(([a, b]) => {
      const x = w * a, y = h * b; dot(g, x, y, 6, W_(1)); g.lineWidth = 2.5; g.strokeStyle = W_(0.85); g.beginPath(); g.arc(x, y, 22, 0, 7); g.stroke();
    });
  },
  // 7 Search: embedding clusters + query ring
  (g, w, h, r) => {
    [[0.55, 0.28], [0.8, 0.22], [0.64, 0.52], [0.86, 0.5]].forEach(([a, b]) => {
      for (let i = 0; i < 26; i++) dot(g, w * a + gauss(r) * 36, h * b + gauss(r) * 30, 3, W_(0.5));
    });
    const qx = w * 0.64, qy = h * 0.52; g.lineWidth = 2; g.strokeStyle = W_(0.9);
    [30, 62, 98].forEach((rad, i) => { g.globalAlpha = 1 - i * 0.28; g.beginPath(); g.arc(qx, qy, rad, 0, 7); g.stroke(); }); g.globalAlpha = 1;
    dot(g, qx, qy, 9, W_(1));
  },
  // 8 Chat: alternating bubbles
  (g, w, h) => {
    [[0.46, 0.14, 0.3, false], [0.62, 0.3, 0.32, true], [0.46, 0.46, 0.26, false]].forEach(([a, b, c, me]) => {
      const x = w * (a as number), y = h * (b as number), bw = w * (c as number);
      g.fillStyle = me ? W_(0.9) : W_(0.16); g.beginPath(); g.roundRect(x, y, bw, 66, 24); g.fill();
      g.fillStyle = me ? "rgba(0,0,0,.35)" : W_(0.6); g.fillRect(x + 22, y + 22, bw - 70, 6); g.fillRect(x + 22, y + 38, bw - 110, 6);
    });
  },
];

function makeTexture(p: (typeof PROJECTS)[number], idx: number) {
  const w = 768, h = Math.round((768 * CH) / CW);
  const c = document.createElement("canvas");
  c.width = w; c.height = h;
  const g = c.getContext("2d")!;
  g.beginPath(); g.roundRect(0, 0, w, h, 38); g.clip(); // rounded corners via alpha

  const light = !!p.image; // image cards use the white aesthetic

  if (light) {
    g.fillStyle = "#f3f2ee"; g.fillRect(0, 0, w, h);
  } else {
    const grad = g.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, p.a); grad.addColorStop(1, p.b);
    g.fillStyle = grad; g.fillRect(0, 0, w, h);
    const glow = g.createRadialGradient(w * 0.8, h * 0.15, 0, w * 0.8, h * 0.15, w * 0.6);
    glow.addColorStop(0, "rgba(255,255,255,.28)"); glow.addColorStop(1, "rgba(255,255,255,0)");
    g.fillStyle = glow; g.fillRect(0, 0, w, h);
    g.save(); ART[idx % ART.length](g, w, h, seeded(idx * 977 + 13)); g.restore();
  }

  // image frame (light cards): inset, rounded, full width on top
  const PAD = 24, IH = Math.round(h * 0.6);

  const label = () => {
    if (light) {
      g.fillStyle = "#8a8a8f"; g.font = "500 24px system-ui, sans-serif";
      g.fillText(p.kind.toUpperCase(), 44, PAD + IH + 46);
      g.fillStyle = "#111114"; g.font = "600 58px system-ui, sans-serif";
      g.fillText(p.title, 44, h - 38);
      g.fillStyle = "#5c5c62"; g.font = "400 21px system-ui, sans-serif";
      wrap(g, p.desc, w * 0.58, PAD + IH + 40, w * 0.58 - 44 + 0 > 0 ? w - w * 0.58 - 44 : 280, 28);
    } else {
      g.fillStyle = "rgba(255,255,255,.75)"; g.font = "500 30px system-ui, sans-serif";
      g.fillText(p.kind, 44, 66);
      g.fillStyle = "rgba(255,255,255,.82)"; g.font = "400 25px system-ui, sans-serif";
      wrap(g, p.desc, 44, 124, 262, 33);
      g.fillStyle = "#fff"; g.font = "600 76px system-ui, sans-serif";
      g.fillText(p.title, 44, h - 52);
    }
  };

  // placeholder frame shows until the photo loads
  if (light) { g.fillStyle = "#e4e2dc"; g.beginPath(); g.roundRect(PAD, PAD, w - PAD * 2, IH, 26); g.fill(); }
  label();

  const t = new THREE.CanvasTexture(c);
  if (p.image) {
    const im = new Image();
    im.crossOrigin = "anonymous";
    let retried = false;
    im.onload = () => {
      const bw = w - PAD * 2;
      const k = Math.max(bw / im.width, IH / im.height); // cover-fit
      g.save();
      g.beginPath(); g.roundRect(PAD, PAD, bw, IH, 26); g.clip();
      g.drawImage(im, PAD + (bw - im.width * k) / 2, PAD + (IH - im.height * k) / 2, im.width * k, im.height * k);
      g.restore();
      t.needsUpdate = true;
    };
    im.onerror = () => {
      console.error("Image failed:", p.image);
      if (!retried) {
        retried = true;
        im.src = `https://picsum.photos/seed/${encodeURIComponent(p.title)}/1600/900`;
      }
    };
    im.src = p.image;
  }
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

export default function Project() {

  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const capRef = useRef<HTMLDivElement>(null);
  const capTitle = useRef<HTMLParagraphElement>(null);
  const capDesc = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current!, canvas = canvasRef.current!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    const group = new THREE.Group(); // holds the guide lines only
    scene.add(group);

    /* ---- cards: one bent mesh each ---- */
    const meshes = PROJECTS.map((p, i) => {
      const geo = new THREE.PlaneGeometry(CW, CH, SEG, 1);
      geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e4); // positions change every frame
      const mat = new THREE.MeshBasicMaterial({
        map: makeTexture(p, i), side: THREE.FrontSide, transparent: true, alphaTest: 0.5,
      });
      const m = new THREE.Mesh(geo, mat);
      m.frustumCulled = false;
      scene.add(m);
      return m;
    });
    const hover = new Array(N).fill(1);

    /* ---- two guide lines tracing the ribbon edges ---- */
    const LP = 260;
    const a0 = -ARC, a1 = (N - 1) * STEP + ARC;
    const lines = [1, -1].map((side) => {
      const pts: number[] = [];
      for (let i = 0; i < LP; i++) {
        const a = a0 + ((a1 - a0) * i) / (LP - 1);
        pts.push(R * Math.cos(a), a * PITCH + side * (CH / 2 + 0.16), R * Math.sin(a));
      }
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.Float32BufferAttribute(pts, 3));
      const l = new THREE.Line(g, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 }));
      l.frustumCulled = false;
      group.add(l);
      return l;
    });

    /* ---- layout / resize ---- */
    const resize = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.position.set(0, 0, 12.5 * Math.max(1, 1.25 / camera.aspect));
      camera.updateProjectionMatrix();
    };
    resize();
    addEventListener("resize", resize);

    /* ---- input ---- */
    const pointer = new THREE.Vector2(9, 9);
    const ray = new THREE.Raycaster();
    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      pointer.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    };
    const onLeave = () => pointer.set(9, 9);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { rootMargin: "100% 0px" });
    io.observe(section);

    /* ---- per-frame card placement ---- */
    let shown = -2, sp = 0, last = performance.now(), born = last, raf = 0, hovered = -1;

   const frame = (now: number) => {
  raf = requestAnimationFrame(frame);

  if (!visible) {
    last = now;
    return;
  }

  const dt = Math.min((now - last) / 1000, 0.05);
  last = now;

  // Scroll progress
  const rect = section.getBoundingClientRect();

  const target = Math.min(
    1,
    Math.max(0, -rect.top / (rect.height - innerHeight))
  );

  sp +=
    (target - sp) *
    (reduce ? 1 : 1 - Math.exp(-dt * 6));

  // Background text animation
  const bgRight = document.querySelector(
    ".motion-bg-right"
  ) as HTMLElement | null;

  const bgLeft = document.querySelector(
    ".motion-bg-left"
  ) as HTMLElement | null;

  if (bgRight) {
    bgRight.style.transform =
      `translate(${sp * 45}vw, -50%)`;
  }

  if (bgLeft) {
    bgLeft.style.transform =
      `translate(${-sp * 45}vw, -50%)`;
  }

  const rot = Math.min(1, sp / UNFOLD_AT);

  const phi =
    -Math.PI / 2 +
    rot * (N - 1) * STEP;

  const u = smooth(
    UNFOLD_AT,
    1,
    sp
  );

  const cphi = Math.cos(phi);
  const sphi = Math.sin(phi);

  group.rotation.y = phi;
  group.position.y = -phi * PITCH;

  const lp = reduce
    ? 1
    : 1 -
      Math.pow(
        1 - Math.min(1, (now - born) / 1800),
        3
      );

  lines.forEach((l) => {
    l.geometry.setDrawRange(
      0,
      Math.floor(LP * lp)
    );

    (
      l.material as THREE.LineBasicMaterial
    ).opacity = 0.35 * (1 - u);
  });

// Hover
ray.setFromCamera(pointer, camera);

const hit = ray.intersectObjects(meshes, false)[0];

hovered = hit
  ? meshes.findIndex((mesh) => mesh === hit.object)
  : -1;

  let front = 0;
  let best = -2;

  meshes.forEach((m, i) => {
    hover[i] +=
      ((i === hovered ? 1.12 : 1) -
        hover[i]) *
      (1 - Math.exp(-dt * 10));

    const hs = hover[i];

    const lift =
      ((hs - 1) / 0.12) * 0.35 * u;

    const ai = i * STEP;

    const cx =
      ((i % 3) - 1) * (CW + 1.0);

    const cy =
      (1 - Math.floor(i / 3)) *
      (CH + 0.8);

    const pos =
      m.geometry.attributes
        .position as THREE.BufferAttribute;

    for (let col = 0; col <= SEG; col++) {
      const s =
        col / SEG - 0.5;

      const ang =
        ai + s * ARC * hs;

      const hx =
        R * Math.cos(ang);

      const hz =
        R * Math.sin(ang);

      const hy =
        ang * PITCH -
        phi * PITCH;

      const wx =
        hx * cphi +
        hz * sphi;

      const wz =
        -hx * sphi +
        hz * cphi;

      for (let row = 0; row < 2; row++) {
        const v =
          row === 0 ? 1 : -1;

        const idx =
          row * (SEG + 1) + col;

        pos.setXYZ(
          idx,
          wx +
            (cx +
              s * CW * hs -
              wx) *
              u,

          hy +
            v *
              (CH / 2) *
              hs +
            (
              cy +
              v *
                (CH / 2) *
                hs -
              (hy +
                v *
                  (CH / 2) *
                  hs)
            ) *
              u,

          wz +
            (lift - wz) *
              u
        );
      }
    }

    pos.needsUpdate = true;

    const facing =
      (Math.sin(ai - phi) + 1) / 2;

    const shade =
      0.3 +
      0.7 *
        Math.pow(
          facing,
          1.4
        );

    const k =
      shade +
      (1 - shade) * u;

    (
      m.material as THREE.MeshBasicMaterial
    ).color.setScalar(k);

    if (facing > best) {
      best = facing;
      front = i;
    }
  });

  const show =
    u < 0.5 ? front : -1;

  if (show !== shown) {
    shown = show;

    if (
      show >= 0 &&
      capTitle.current &&
      capDesc.current
    ) {
      capTitle.current.textContent =
        PROJECTS[show].title;

      capDesc.current.textContent =
        PROJECTS[show].desc;
    }

    if (capRef.current) {
      capRef.current.style.opacity =
        show >= 0 ? "1" : "0";
    }
  }

  renderer.render(scene, camera);
};
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      io.disconnect();
      meshes.forEach((m) => { m.geometry.dispose(); (m.material as THREE.MeshBasicMaterial).map?.dispose(); (m.material as THREE.Material).dispose(); });
      lines.forEach((l) => { l.geometry.dispose(); (l.material as THREE.Material).dispose(); });
      renderer.dispose();
    };
  }, []);

  return (
    <section ref={sectionRef} style={{ height: "850vh", background: "#07080b" }}>
   <div style={{ position: "sticky", top: 0, height: "100svh", overflow: "hidden" }}>

  <div className="motion-bg">
    <span className="motion-bg-right">DESIGN</span>
    <span className="motion-bg-left">MOTION</span>
  </div>

        <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
        
<div
          ref={capRef}
          aria-live="polite"
          style={{
            position: "absolute", bottom: "6svh", left: "5vw", right: "5vw", pointerEvents: "none",
            fontFamily: "system-ui, sans-serif", transition: "opacity .4s ease",
          }}
        >
          <p ref={capTitle} style={{ margin: 0, color: "#f2f1ee", fontSize: "clamp(1.3rem, 2.2vw, 2rem)", fontWeight: 600, letterSpacing: "-0.03em" }} />
          <p ref={capDesc} style={{ margin: "6px 0 0", color: "#9a9ca3", fontSize: "1rem", maxWidth: "46ch", lineHeight: 1.5 }} />
        </div>
      </div>
    </section>
  );
}