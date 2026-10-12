import Hero from "@/components/hero/Hero";
import IntelligenceSystem from "@/components/sections/IntelligenceSystem";
import WhatWeEngineer from "@/components/sections/WhatWeEngineer";
import Solutions from "@/components/sections/Solutions";
import WhyMentroid from "@/components/sections/WhyMentroid";
import CaseStudies from "@/components/sections/CaseStudies";
import Industries from "@/components/sections/Industries";
import ClientStories from "@/components/sections/ClientStories";
import WhatWeBringTogether from "@/components/sections/WhatWeBringTogether";
import LetsBuild from "@/components/sections/LetsBuild";

export default function Home() {
  return (
    <main className="min-h-screen  ">
      <Hero />
      <IntelligenceSystem />
      <WhatWeEngineer />
      <Solutions />
      <CaseStudies />
      <Industries />
      <WhyMentroid />
      <ClientStories />
      <WhatWeBringTogether />
      <LetsBuild />
    </main>
  );
}
