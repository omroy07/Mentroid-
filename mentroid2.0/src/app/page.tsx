import Navbar from "@/components/navbar/Navbar";
import About from "@/components/about/About";
import Process from "@/components/process/Process";
import FAQ from "@/components/faq/FAQ";
import Contact from "@/components/contact/Contact";
import Testimonials from "@/components/testimonials/Testimonials";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      {/* =========================================
          HERO
      ========================================= */}
      <Hero/>

      {/* =========================================
          ABOUT
      ========================================= */}
      <About />

      {/* =========================================
          PROJECTS
          Placeholder for Projects component
      ========================================= */}
      <section
        id="projects"
        className="bg-white py-24 sm:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent-blue)]">
            Selected Work
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            AI systems built for real-world use.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Explore the products, AI systems, and digital solutions built
            by Mentroid.
          </p>
        </div>
      </section>

      {/* =========================================
          PROCESS
      ========================================= */}
      <Process />

      {/* =========================================
          TESTIMONIALS
      ========================================= */}
      <Testimonials />

      {/* =========================================
          FAQ
      ========================================= */}
      <FAQ />

      {/* =========================================
          CONTACT
      ========================================= */}
      <Contact />

      {/* =========================================
          FOOTER
      ========================================= */}
      <Footer />
    </main>
  );
}