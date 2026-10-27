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
            endTrigger: root.current,
            end: "bottom bottom-=500",
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

  const moveOffice = (direction: number) => setOfficeIndex((current) => (current + direction + offices.length) % offices.length);

  return (
    <main ref={root} className="mentroid-about" id="main-content">
      <section className="ma-hero">
        <div className="ma-shell ma-hero-inner">
          <p className="ma-eyebrow" data-reveal>About Mentroid</p>
          <h1 className="ma-display"><span><span data-hero-line>AI with purpose.</span></span><span><span data-hero-line>Engineering for</span></span><span><span data-hero-line>the real world.</span></span></h1>
          <div className="ma-hero-bottom" data-reveal>
            <p>We bring AI, software and automation together to help ambitious teams solve meaningful problems—and make better work possible.</p>
            <a className="ma-round-link" href="#our-approach" aria-label="Scroll to our approach"><ArrowDown size={20} /></a>
          </div>
          <div className="ma-hero-index"><span>MENTROID / ABOUT</span><span>INTELLIGENCE, PUT TO WORK</span></div>
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
          <div className="ma-image-frame ma-mission-image" data-reveal><Image src={MEDIA.mission} alt="A team collaborating around a shared problem" fill priority sizes="(max-width: 800px) 100vw, 50vw" /></div>
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
        <div className="ma-shell">
          <div className="ma-team-heading" data-reveal><p className="ma-eyebrow">The people behind the work</p><h2 className="ma-heading">Curious minds.<br />Careful builders.</h2><p className="ma-body">We bring together people who like asking better questions, learning quickly and making complex things useful.</p></div>
          <div className="ma-team-grid">
            {[
              { name: "AI & data", role: "Research · Models · Evaluation", image: MEDIA.timeline1, bio: "A thoughtful approach to model selection, retrieval, data and evaluation—with attention to what a system can and cannot reliably do." },
              { name: "Product & software", role: "Design · Engineering · Delivery", image: MEDIA.story, bio: "People who turn complex requirements into clear interfaces, robust applications and maintainable software." },
              { name: "Automation", role: "Agents · Integrations · Workflows", image: MEDIA.timeline3, bio: "Builders connecting tools and business processes so repetitive work can move with less friction." },
            ].map((person) => <button className="ma-person" type="button" key={person.name} onClick={() => setOpenBio(person.name)} data-reveal>
              <div className="ma-person-image"><Image src={person.image} alt="" fill sizes="(max-width: 700px) 90vw, 33vw" /></div><div className="ma-person-meta"><div><h3>{person.name}</h3><p>{person.role}</p></div><span className="ma-person-open"><ArrowUpRight size={19} /></span></div>
              {openBio === person.name && <span className="ma-sr-only">{person.bio}</span>}
            </button>)}
          </div>
          {openBio && <div className="ma-bio-modal" role="dialog" aria-modal="true" aria-label={`${openBio} team`}><div className="ma-bio-panel"><button className="ma-bio-close" onClick={() => setOpenBio(null)} aria-label="Close"><X /></button><p className="ma-eyebrow">How we contribute</p><h3>{openBio}</h3><p>{({ "AI & data": "A thoughtful approach to model selection, retrieval, data and evaluation—with attention to what a system can and cannot reliably do.", "Product & software": "People who turn complex requirements into clear interfaces, robust applications and maintainable software.", "Automation": "Builders connecting tools and business processes so repetitive work can move with less friction." } as Record<string, string>)[openBio]}</p></div></div>}
        </div>
      </section>

      <section className="ma-global ma-section">
        <div className="ma-shell">
          <div className="ma-global-head" data-reveal><div><p className="ma-eyebrow">Our outlook</p><h2 className="ma-heading">Built around people.<br />Ready for what’s next.</h2></div><div className="ma-slider-controls"><button onClick={() => moveOffice(-1)} aria-label="Previous panel"><ArrowLeft /></button><button onClick={() => moveOffice(1)} aria-label="Next panel"><ArrowRight /></button></div></div>
          <div className="ma-global-card" data-reveal><div className="ma-global-image"><Image key={offices[officeIndex].image} src={offices[officeIndex].image} alt="Mentroid's collaborative working approach" fill sizes="(max-width: 800px) 100vw, 60vw" /></div><div className="ma-global-copy"><span className="ma-eyebrow">0{officeIndex + 1} / 0{offices.length}</span><h3>{offices[officeIndex].city}</h3><p>{offices[officeIndex].label}</p><div className="ma-slider-dots">{offices.map((office, index) => <button key={office.city} aria-label={`Show panel ${index + 1}`} aria-pressed={officeIndex === index} onClick={() => setOfficeIndex(index)} />)}</div></div></div>
        </div>
      </section>

      <section className="ma-careers ma-section">
        <div className="ma-shell ma-careers-card" data-reveal><div className="ma-careers-image" data-parallax><Image src={MEDIA.careers} alt="A bright, collaborative workspace" fill sizes="100vw" /></div><div className="ma-careers-shade" /><div className="ma-careers-content"><p className="ma-eyebrow">Let’s make useful things</p><h2 className="ma-heading">Have a challenge<br />worth solving?</h2><p>Tell us what you’re trying to make possible. We’ll help you work out what comes next.</p><Link className="ma-light-button" href="/contact">Start a conversation <ArrowUpRight size={17} /></Link></div></div>
      </section>

      <footer className="ma-footer"><div className="ma-shell ma-footer-inner"><Link className="ma-wordmark" href="/">MENTROID<span>®</span></Link><p>Practical intelligence. Thoughtfully engineered.</p><div><Link href="/services">Services</Link><Link href="/work">Work</Link><Link href="/contact">Contact</Link></div><span className="ma-footer-copy">© {new Date().getFullYear()} Mentroid</span></div></footer>
    </main>
  );
}
