
import Industries from "@/components/sections/Industries";
import ClientStories from "@/components/sections/ClientStories";
import WhatWeBringTogether from "@/components/sections/WhatWeBringTogether";

import HeroSection from "@/components/hero/HeroSection";
import CTASection from "@/components/sections/CTASection";
import SolutionExpertise from "@/components/sections/SolutionExpertise";


export default function Home() {
  return (
    <main className="min-h-screen  ">
      {/* <Hero /> */}
      <HeroSection />

      <SolutionExpertise/>
     
      {/* <CaseStudies />  move to about page */}
      <WhatWeBringTogether />
      <Industries />
      {/* <Industries /> move to industries page */}
      <ClientStories />
      {/* <WhyMentroid /> */}
      <CTASection/>
      {/* <LetsBuild /> */}
    </main>
  );
}
