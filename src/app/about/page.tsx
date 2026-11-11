
import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";

import VisionMission from "@/components/about/VisionMission";

// import WhyMentroid from "@/components/sections/WhyMentroid";
import OurTeam from "@/components/about/OurTeam";
import WhyMentroid from "@/components/about/WhyMentroid";
import WhoWeWork from "@/components/about/WhoWeWork";
import BuildWithMentroid from "@/components/about/BuildWithMentroid";
import CaseStudies from "@/components/about/CaseStudies";
import FinalCTA from "@/components/about/FinalCTA";
WhyMentroid
export const metadata: Metadata = {
  title: "About Mentroid | AI, Automation & Software Development",
  description:
    "Discover Mentroid — a team bringing AI, machine learning, automation, and software development together to solve real-world business challenges.",
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <AboutHero />
      <VisionMission/>
      <WhoWeWork/>
<OurTeam/>
      {/* <WhyMentroid/> */}
<WhyMentroid/>
<BuildWithMentroid/>
<CaseStudies/>
<FinalCTA/> 
    </main>
  );
}
