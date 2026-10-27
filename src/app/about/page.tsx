

import AboutCTA from "./components/AboutCta";
import AboutFaq from "./components/AboutFAQ";
import AboutHero from "./components/AboutHero";
import CapabilitiesSection from "./components/CapabilitiesSection";
import CaseStudies from "./components/CaseStudies";
import MissionSection from "./components/MissionSection";
import TeamStrip from "./components/TeamStrip";
import TechStackSection from "./components/TechStackSection";
import ValuesSection from "./components/ValuesSection";

export default function About() {
  return (
    <main className="min-h-screen  ">
      <AboutHero/>
      <MissionSection/>
      <CapabilitiesSection/>
      <ValuesSection/>
      <TechStackSection/>
      <TeamStrip/>
      <CaseStudies/>
  <AboutFaq/>
      <AboutCTA/>
      
    </main>
  );
}
