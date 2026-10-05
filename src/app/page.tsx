
import Hero from "@/components/hero/Hero";
import IntelligenceSystem from "@/components/sections/IntelligenceSystem";
import WhatWeEngineer1 from "@/components/sections/WhatWeEngineer1";
import Solutions from "@/components/sections/Solutions";
import SelectedWork from "@/components/sections/SelectedWork";
import Industries from "@/components/sections/Industries";

import Proof from "@/components/sections/Proof";
import LetsBuild from "@/components/sections/LetsBuild";
import ClientStories from "@/components/sections/ClientStories";
import KeyFacts from "@/components/sections/KeyFacts";


export default function Home() {
  return (
    <main className="min-h-screen  ">
  
      
      <Hero/>
      <IntelligenceSystem/>
      <WhatWeEngineer1/>
      <Solutions/>
      <SelectedWork/>
      <ClientStories/>
      <Industries/>
      <KeyFacts/>
      <Proof/>
      <LetsBuild/>
    
    </main>
  );
}