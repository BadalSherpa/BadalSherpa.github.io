import React from "react";
import Intro from "../components/Intro";
import About from "../components/About";
import Interests from "../components/Interests";
import Skills from "../components/Skills";
import Layout from "antd/lib/layout/layout";
import Resume from "../components/Resume";
import Experience from "../components/Experiences";
import CodingProfile from "../components/CodingProfiles";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Connect from "../components/Connect";

const CustomContent = () => {
  return (
    <Layout style={{ overflow: "hidden", scrollBehavior: "smooth" }}>
      <Intro />

      <About />

      <Interests />

      <Skills />

      <CodingProfile />

      <Resume />

      <Experience />

      <Projects />

      <Certifications />

      <Contact />

      <Connect />
    </Layout>
  );
};

export default CustomContent;
