
import Hero from "@/components/hero/Hero";
import IntelligenceSystem from "@/components/sections/IntelligenceSystem";
import WhatWeEngineer from "@/components/sections/WhatWeEngineer";
import Solutions from "@/components/sections/Solutions";
import SelectedWork from "@/components/sections/SelectedWork";
import Industries from "@/components/sections/Industries";
import ProjectSection from "@/components/sections/ProjectSection";
import Proof from "@/components/sections/Proof";
import LetsBuild from "@/components/sections/LetsBuild";
import ClientStories from "@/components/sections/ClientStories";
import KeyFacts from "@/components/sections/KeyFacts";



export default function Home() {
  return (
    <main className="min-h-screen  ">
  
      
      <Hero/>
      <IntelligenceSystem/>
      <WhatWeEngineer/>
   <ProjectSection/>
      {/* <SelectedWork/> */}
      <ClientStories/>
      <Industries/>
      <Solutions/>
      <KeyFacts/>
      {/* <Proof/> */}
      <LetsBuild/>
    
    </main>
  );
}