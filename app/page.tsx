import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Marquee from "@/components/sections/Marquee";
import Work from "@/components/sections/Work";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Process from "@/components/sections/Process";
import Credentials from "@/components/sections/Credentials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Preloader />
      <Cursor />
      <div aria-hidden className="grain" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Work />
        <Experience />
        <Skills />
        <Process />
        <Credentials />
        <Contact />
      </main>
    </>
  );
}
