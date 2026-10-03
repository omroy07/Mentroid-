import Navbar from "@/components/navbar/Navbar";
import About from "@/components/about/About";
import Process from "@/components/process/Process";
import FAQ from "@/components/faq/FAQ";
import Contact from "@/components/contact/Contact";
import Testimonials from "@/components/testimonials/Testimonials";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import OurProjects from "./projects/page";
import WhyChooseUs from "@/components/whychooseus/whychoose";
import TeamSection from "@/components/ourteam/ourteam";

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
      <Process/>

      {/* =========================================
          PROJECTS
          Placeholder for Projects component
      ========================================= */}
     <OurProjects/>

      {/* =========================================
          PROCESS
      ========================================= */}
      <WhyChooseUs/>
      <TeamSection/>
      <Testimonials/>

      {/* =========================================
          TESTIMONIALS
      ========================================= */}
      

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