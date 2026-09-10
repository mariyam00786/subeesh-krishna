import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: true });
const ShortFilm = dynamic(() => import("@/components/ShortFilm"), { ssr: true });
const BehindTheScenes = dynamic(() => import("@/components/BehindTheScenes"), { ssr: true });
const About = dynamic(() => import("@/components/About"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Sticky top navigation bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Services — "How I Can Help" */}
        <Services />

        {/* 3. Recent Projects Grid */}
        <Projects />

        {/* 4. Featured Short Film Showcase */}
        <ShortFilm />

        {/* 5. Behind the Scenes Grid */}
        <BehindTheScenes />

        {/* 6. About Me Section */}
        <About />
      </main>

      {/* 7. Contact Section & Footer */}
      <Contact />
    </div>
  );
}
