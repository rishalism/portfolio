import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import { Titillium } from "./ui/font";

export default function Home() {
  return (
    <main className={`${Titillium.className}h-full w-full`}>
    <div className="flex flex-col ">
        <Hero />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
