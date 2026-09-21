import Navbar from "@/components/navbar/Navbar";
import About from "@/components/about/About";
import Process from "@/components/process/Process";
import FAQ from "@/components/faq/FAQ";
import Contact from "@/components/contact/Contact";
import Testimonials from "@/components/testimonials/Testimonials";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />

      {/* =========================================
          HERO
      ========================================= */}
      <section
        id="hero"
        className="flex min-h-screen items-center justify-center px-5 pt-24"
      >
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent-blue)]">
            AI · ML · GenAI · Automation
          </p>

          <h1 className="mx-auto max-w-5xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            Building intelligence
            <br />
            around your business.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Mentroid builds custom AI chatbots, machine learning systems,
            GenAI applications, and automated workflows that fit the way
            your business actually works.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-[var(--foreground)] px-6 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Start a Project
            </a>

            <a
              href="#projects"
              className="rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-medium text-slate-800 transition-all duration-200 hover:border-black/20"
            >
              Explore Our Work
            </a>
          </div>
        </div>
      </section>

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