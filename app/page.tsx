import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { SideNavigation } from "@/components/ui/side-navigation";
import { Header } from "@/components/ui/header";

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      {/* <SideNavigation /> */}
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
