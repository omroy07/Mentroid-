import FAQ from "@/components/work/FAQ";
import SelectedProjects from "@/components/work/SelectedProject";
import WorkCta from "@/components/work/WorkCta";
import WorkHero from "@/components/work/WorkHero";
import WorkHeroVideo from "@/components/work/WorkVideo";


export const metadata = {
  title: "Selected AI and Software Projects | Mentroid",
  description:
    "Explore Mentroid portfolio projects in education, agriculture, signal analysis and visual assistance, with clear project context and status.",
};

export default function WorkPage() {
  return (
    <main className="bg-[#f0eee9] text-[#202020]">
      <WorkHero />
      <WorkHeroVideo/>
      <SelectedProjects/>
     <FAQ/>
     <WorkCta/> 
    </main>
  );
}