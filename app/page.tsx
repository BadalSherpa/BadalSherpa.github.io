import Motion from "@/components/Motion";
import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Process from "@/components/sections/Process";
import Credentials from "@/components/sections/Credentials";
import Contact, { Footer } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="btn btn-primary fixed left-4 top-3 z-[60] -translate-y-20 focus-visible:translate-y-0"
      >
        Skip to content
      </a>
      <Motion />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Process />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
