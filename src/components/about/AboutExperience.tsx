"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, BrainCircuit, Code2, Workflow, X } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Swap these URLs for approved files in /public or your CDN when assets are ready.
const MEDIA = {
  hero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=85",
  mission: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=85",
  story: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
  timeline1: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=85",
  timeline2: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1800&q=85",
  timeline3: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=85",
  careers: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=85",
  office: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85",
};

const milestones = [
  { tag: "01 / Foundations", title: "Start with the real problem.", body: "We learn how your business works before deciding what to build. The right solution starts with people, processes and a clear outcome—not technology for its own sake.", image: MEDIA.timeline1, year: "DISCOVER" },
  { tag: "02 / Engineering", title: "Turn complexity into systems.", body: "From AI agents and retrieval systems to custom platforms and connected workflows, we bring the right engineering disciplines together around the job that needs to get done.", image: MEDIA.timeline2, year: "ENGINEER" },
  { tag: "03 / In the real world", title: "Build it to work beyond the demo.", body: "We care about the hand-off as much as the prototype: usable interfaces, integrations, testing, deployment and a path to keep improving after launch.", image: MEDIA.timeline3, year: "DEPLOY" },
];

const teamAreas = [
  { name: "AI & machine learning", detail: "Models, RAG systems, evaluation and computer vision", icon: BrainCircuit },
  { name: "Software engineering", detail: "Web products, platforms and dependable integrations", icon: Code2 },
  { name: "Automation & agents", detail: "Connected workflows that reduce repetitive work", icon: Workflow },
];

const offices = [
  { city: "Built for teams everywhere", label: "Remote-first collaboration", image: MEDIA.office },
  { city: "Made around your workflow", label: "From first conversation to deployment", image: MEDIA.mission },
  { city: "Designed to keep moving", label: "Systems that can evolve with you", image: MEDIA.story },
];

// Replace names, biographies, images and LinkedIn URLs with approved team details.
const founders = [
  {
    id: "founder-1",
    name: "Founder Name",
    role: "Founder & CEO",
    image: MEDIA.timeline1,
    bio: "Leading Mentroid's vision, strategy and growth, with a focus on building useful technology and long-term client relationships.",
    linkedin: "https://www.linkedin.com/in/replace-with-founder-profile/",
  },
  {
    id: "founder-2",
    name: "Co-founder Name",
    role: "Co-founder",
    image: MEDIA.story,
    bio: "Helping turn ideas into useful products and services through thoughtful planning, collaboration and execution.",
    linkedin: "https://www.linkedin.com/in/replace-with-cofounder-profile/",
  },
  {
    id: "founder-3",
    name: "Co-founder Name",
    role: "Co-founder",
    image: MEDIA.timeline3,
    bio: "Building thoughtful technology and engineering solutions that address real business challenges.",
    linkedin: "https://www.linkedin.com/in/replace-with-cofounder-profile/",
  },
];

const executives = [
  {
    id: "executive-1",
    name: "Executive Name",
    role: "Chief Technology Officer",
    image: MEDIA.timeline1,
    bio: "Responsible for technology direction, engineering quality and helping deliver dependable solutions.",
    linkedin: "https://www.linkedin.com/in/replace-with-executive-profile/",
  },
  {
    id: "executive-2",
    name: "Executive Name",
    role: "Head of AI & Machine Learning",
    image: MEDIA.story,
    bio: "Guiding AI, machine learning and applied research initiatives with a focus on practical outcomes.",
    linkedin: "https://www.linkedin.com/in/replace-with-executive-profile/",
  },
  {
    id: "executive-3",
    name: "Executive Name",
    role: "Head of Engineering",
    image: MEDIA.timeline2,
    bio: "Helping deliver reliable software, maintainable systems and digital products.",
    linkedin: "https://www.linkedin.com/in/replace-with-executive-profile/",
  },
  {
    id: "executive-4",
    name: "Executive Name",
    role: "Head of Operations",
    image: MEDIA.office,
    bio: "Supporting clear processes, team collaboration and dependable delivery.",
    linkedin: "https://www.linkedin.com/in/replace-with-executive-profile/",
  },
  {
    id: "executive-5",
    name: "Executive Name",
    role: "Head of Product",
    image: MEDIA.timeline3,
    bio: "Connecting user needs, product decisions and implementation to help teams build useful solutions.",
    linkedin: "https://www.linkedin.com/in/replace-with-executive-profile/",
  },
];

const allTeamMembers = [...founders, ...executives];

export default function AboutExperience() {
  const root = useRef<HTMLElement>(null);
  const [officeIndex, setOfficeIndex] = useState(0);
  const [openBio, setOpenBio] = useState<string | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) {
        gsap.set("[data-reveal]", { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.from("[data-hero-line]", {
        yPercent: 110, opacity: 0, duration: 0.95, stagger: 0.12,
        ease: "power4.out", delay: 0.12,
      });
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(el, { y: 34, autoAlpha: 0 }, {
          y: 0, autoAlpha: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%", once: true },
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.fromTo(el, { yPercent: -5 }, {
          yPercent: 5, ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.7 },
        });
      });

      // Stacked, scroll-pinned story cards — becomes a normal stack on small screens.
      if (window.matchMedia("(min-width: 900px)").matches) {
        const cards = gsap.utils.toArray<HTMLElement>("[data-story-card]");
        cards.forEach((card, index) => {
          if (index === cards.length - 1) return;
          ScrollTrigger.create({
            trigger: card,
            start: "top top+=105",
            endTrigger: cards[index + 1],
            end: "top top+=150",
            pin: true,
            pinSpacing: false,
            invalidateOnRefresh: true,
          });
          gsap.to(card, {
            scale: 0.96 - index * 0.015,
            filter: "brightness(0.88)",
            ease: "none",
            scrollTrigger: { trigger: card, start: "top top+=105", end: "bottom top+=20", scrub: true },
          });
        });
      }
    }, root);

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 250);
    return () => { window.clearTimeout(refresh); ctx.revert(); };
  }, []);

  useEffect(() => {
    if (!openBio) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenBio(null);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [openBio]);

  const moveOffice = (direction: number) => setOfficeIndex((current) => (current + direction + offices.length) % offices.length);

  return (
    <main ref={root} className="mentroid-about" id="main-content">
      <section className="ma-hero">
        <div className="ma-shell ma-hero-inner">
          <p className="ma-eyebrow" data-reveal>About Mentroid</p>
          <h1 className="ma-display "><span><span data-hero-line>A team focused on practical AI</span></span><span><span data-hero-line>and software development.</span></span></h1>
          <div className="ma-hero-visual" data-reveal>
            <Image src={MEDIA.hero} alt="Abstract sculptural representation of technology and intelligence" fill preload sizes="(max-width: 800px) 100vw, 92vw" />
            <span>INTELLIGENCE, PUT TO WORK</span>
          </div>
          <div className="ma-hero-bottom" data-reveal>
            <p>We bring AI, software and automation together to help ambitious teams solve meaningful problems—and make better work possible.</p>
            <a className="ma-round-link" href="#our-approach" aria-label="Scroll to our approach"><ArrowDown size={20} /></a>
          </div>
         
        </div>
      </section>

      <section className="ma-mission ma-section" id="our-approach">
        <div className="ma-shell ma-split">
          <div className="ma-copy" data-reveal>
            <p className="ma-eyebrow">Our point of view</p>
            <h2 className="ma-heading">Technology matters when it makes something better.</h2>
            <p className="ma-body">We believe the best technology doesn’t add complexity. It helps people make decisions, serve customers, understand information and move work forward—with systems shaped around the way their business actually operates.</p>
            <Link className="ma-text-link" href="/services">What we build <ArrowUpRight size={17} /></Link>
          </div>
          <div className="ma-image-frame ma-mission-image" data-reveal><Image src={MEDIA.mission} alt="A team collaborating around a shared problem" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
        </div>
      </section>

      <section className="ma-story-intro ma-section">
        <div className="ma-shell ma-story-intro-inner">
          <div><p className="ma-eyebrow" data-reveal>How we think</p><h2 className="ma-heading ma-heading-wide" data-reveal>From a hard question to a system people can rely on.</h2></div>
          <p className="ma-body" data-reveal>Mentroid brings product thinking and hands-on engineering into one process. We work across AI development, intelligent automation and digital product development—choosing the tools that fit the challenge, not the other way around.</p>
        </div>
      </section>

      <section className="ma-timeline ma-section" aria-label="How Mentroid works">
        <div className="ma-shell">
          <div className="ma-timeline-heading" data-reveal><p className="ma-eyebrow">Our approach</p><p className="ma-side-note">A practical path from idea to impact</p></div>
          <div className="ma-story-stack">
            {milestones.map((item) => <article className="ma-story-card" data-story-card key={item.tag}>
              <div className="ma-story-image"><Image src={item.image} alt="" fill sizes="(max-width: 900px) 100vw, 55vw" /></div>
              <div className="ma-story-content"><p className="ma-eyebrow">{item.tag}</p><h3>{item.title}</h3><p>{item.body}</p><span className="ma-story-word">{item.year}</span></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="ma-belief ma-section" aria-labelledby="ma-belief-title">
        <div className="ma-shell ma-belief-inner" data-reveal>
          <p className="ma-eyebrow">What guides us</p>
          <span className="ma-belief-mark" aria-hidden="true">“</span>
          <h2 id="ma-belief-title">Good technology should feel less like technology—and more like progress.</h2>
          <div className="ma-belief-foot"><span>THE MENTROID PRINCIPLE</span><span>Useful by design · Responsible in practice</span></div>
        </div>
      </section>

      <section className="ma-capabilities ma-section">
        <div className="ma-shell">
          <div className="ma-section-heading" data-reveal><div><p className="ma-eyebrow">What we bring together</p><h2 className="ma-heading">Different disciplines.<br />One connected team.</h2></div><p className="ma-body">The challenge determines the team, the architecture and the path forward.</p></div>
          <div className="ma-capability-list">
            {teamAreas.map(({ name, detail, icon: Icon }, index) => <article className="ma-capability-row" data-reveal key={name}><span className="ma-cap-number">0{index + 1}</span><Icon className="ma-cap-icon" strokeWidth={1.4} /><div><h3>{name}</h3><p>{detail}</p></div><ArrowUpRight className="ma-cap-arrow" /></article>)}
          </div>
          <Link className="ma-pill-link" href="/expertise">Explore our expertise <ArrowUpRight size={17} /></Link>
        </div>
      </section>

      <section className="ma-team ma-section" id="team">
        <div className="ma-shell ma-team-directory">
          <header className="ma-team-directory-header" data-reveal>
          
            <h2>Meet our team</h2>
          </header>

          <div className="ma-founders" data-reveal>
            <h3 className="ma-team-subheading">Founders</h3>
            <div className="ma-founder-grid">
              {founders.map((person) => (
                <button
                  className="ma-founder-card"
                  type="button"
                  key={person.id}
                  onClick={() => setOpenBio(person.id)}
                  aria-label={`View ${person.name}, ${person.role}`}
                >
                  <span className="ma-founder-image">
                    <Image
                      src={person.image}
                      alt={`Portrait of ${person.name}`}
                      fill
                      sizes="(max-width: 600px) 100vw, 370px"
                    />
                  </span>
                  <span className="ma-founder-meta">
                    <span className="ma-founder-name">{person.name}</span>
                    <span className="ma-founder-role">{person.role}</span>
                  </span>
                  <span className="ma-founder-open" aria-hidden="true">
                    <ArrowUpRight size={18} />
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="ma-executives" data-reveal>
            <h3 className="ma-team-subheading">Executive team</h3>
            <div className="ma-executive-list">
              {executives.map((person) => (
                <button
                  className="ma-executive-row"
                  type="button"
                  key={person.id}
                  onClick={() => setOpenBio(person.id)}
                  aria-label={`View ${person.name}, ${person.role}`}
                >
                  <span className="ma-executive-person">
                    <span className="ma-executive-avatar">
                      <Image
                        src={person.image}
                        alt={`Portrait of ${person.name}`}
                        fill
                        sizes="52px"
                      />
                    </span>
                    <span className="ma-executive-name">{person.name}</span>
                  </span>
                  <span className="ma-executive-role">{person.role}</span>
                  <ArrowUpRight
                    className="ma-executive-arrow"
                    size={18}
                    aria-hidden="true"
                  />
                </button>
              ))}
            </div>
          </div>

          {openBio && (() => {
            const member = allTeamMembers.find((person) => person.id === openBio);
            if (!member) return null;

            return (
              <div
                className="ma-bio-modal"
                role="presentation"
                onMouseDown={(event) => {
                  if (event.target === event.currentTarget) setOpenBio(null);
                }}
              >
                <section
                  className="ma-bio-panel ma-bio-panel--profile"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="ma-bio-name"
                >
                  {/* <button
                    className="ma-bio-close"
                    type="button"
                    onClick={() => setOpenBio(null)}
                    aria-label="Close team member profile"
                  >
                    <X />
                  </button> */}

                  <div className="ma-bio-profile-image">
                    <Image
                      src={member.image}
                      alt={`Portrait of ${member.name}`}
                      fill
                      sizes="(max-width: 600px) 100vw, 420px"
                    />
                  </div>

                  <div className="ma-bio-profile-content">
                   
                    <h3 id="ma-bio-name">{member.name}</h3>
                    <p className="ma-bio-role">{member.role}</p>
                    <p className="ma-bio-description">{member.bio}</p>

                    <a
                      className="ma-bio-linkedin"
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${member.name}'s LinkedIn profile`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.554V9h3.565v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                      </svg>
                      <span>Connect on LinkedIn</span>
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </section>
              </div>
            );
          })()}
        </div>
      </section>

      <section className="ma-global ma-section">
        <div className="ma-shell">
          <div className="ma-global-head" data-reveal><div><p className="ma-eyebrow">Our outlook</p><h2 className="ma-heading">Built around people.<br />Ready for what’s next.</h2></div><div className="ma-slider-controls"><button onClick={() => moveOffice(-1)} aria-label="Previous panel"><ArrowLeft /></button><button onClick={() => moveOffice(1)} aria-label="Next panel"><ArrowRight /></button></div></div>
          <div className="ma-global-card" data-reveal><div className="ma-global-image"><Image key={offices[officeIndex].image} src={offices[officeIndex].image} alt="Mentroid's collaborative working approach" fill sizes="(max-width: 800px) 100vw, 60vw" /></div><div className="ma-global-copy"><span className="ma-eyebrow">0{officeIndex + 1} / 0{offices.length}</span><h3>{offices[officeIndex].city}</h3><p>{offices[officeIndex].label}</p><div className="ma-slider-dots">{offices.map((office, index) => <button key={office.city} aria-label={`Show panel ${index + 1}`} aria-pressed={officeIndex === index} onClick={() => setOfficeIndex(index)} />)}</div></div></div>
        </div>
      </section>

      <section className="ma-insights ma-section" aria-labelledby="ma-insights-title">
        <div className="ma-shell">
          <div className="ma-insights-heading" data-reveal>
            <div><p className="ma-eyebrow">Ideas into action</p><h2 className="ma-heading" id="ma-insights-title">The questions behind better systems.</h2></div>
            <p className="ma-body">A few of the questions we bring to every engagement—before choosing a model, writing code or automating a process.</p>
          </div>
          <div className="ma-insights-grid">
            <article className="ma-insight-card" data-reveal><span>01 / CLARITY</span><h3>What problem are we actually solving?</h3><p>Start with the outcome, the people doing the work and the constraints that matter.</p></article>
            <article className="ma-insight-card" data-reveal><span>02 / RELIABILITY</span><h3>How will we know it works?</h3><p>Build in evaluation, useful feedback and clear expectations—not just a convincing demo.</p></article>
            <article className="ma-insight-card" data-reveal><span>03 / LONG-TERM VALUE</span><h3>What happens after launch?</h3><p>Plan for adoption, maintenance and improvement so the system keeps earning its place.</p></article>
          </div>
        </div>
      </section>

      <section className="ma-careers ma-section">
        <div className="ma-shell ma-careers-card" data-reveal><div className="ma-careers-image" data-parallax><Image src={MEDIA.careers} alt="A bright, collaborative workspace" fill sizes="100vw" /></div><div className="ma-careers-shade" /><div className="ma-careers-content"><p className="ma-eyebrow">Let’s make useful things</p><h2 className="ma-heading">Have a challenge<br />worth solving?</h2><p>Tell us what you’re trying to make possible. We’ll help you work out what comes next.</p><Link className="ma-light-button" href="/contact">Start a conversation <ArrowUpRight size={17} /></Link></div></div>
      </section>

      <footer className="ma-footer"><div className="ma-shell ma-footer-inner"><Link className="ma-wordmark" href="/">MENTROID<span>®</span></Link><p>Practical intelligence. Thoughtfully engineered.</p><div><Link href="/services">Services</Link><Link href="/work">Work</Link><Link href="/contact">Contact</Link></div><span className="ma-footer-copy">© {new Date().getFullYear()} Mentroid</span></div></footer>
    </main>
  );
}
