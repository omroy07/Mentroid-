import Navbar from "@/components/navbar/Navbar";

import Footer from "@/components/footer/Footer";
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
import NeuralCore from "@/components/3d/NeuralCore";
import Projects from "../components/sections/Projects"
export default function Home() {
  return (
    <main className="min-h-screen ">
      {/* <NeuralCore/> */}
      <Navbar />
      <Hero/>
      <Projects/>
      <IntelligenceSystem/>
      <WhatWeEngineer1/>
      <Solutions/>
      <SelectedWork/>
      <ClientStories/>
      <Industries/>
      <KeyFacts/>
      <Proof/>
      <LetsBuild/>
      <Footer />
    </main>
  );
}