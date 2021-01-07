import React from "react";
import "antd/dist/antd.css";
import { Link } from "react-scroll";
import "./Header.css";

import {
  AboutIcon,
  InterestIcon,
  SkillIcon,
  CodingProfileIcon,
  ExperienceIcon,
  ProjectIcon,
  CertificationIcon,
  ContactIcon,
} from "../images/icons";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const CustomHeader = () => {
  return (
    <Navbar
      sticky='top'
      collapseOnSelect
      expand='lg'
      variant='dark'
      style={{ background: "black" }}
    >
      <Navbar.Brand href='https://www.linkedin.com/in/badal-sherpa-5799a9196/'>
        <i class='fas fa-user-secret' /> Badal Sherpa
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ml-auto'>
          <Link to='about' spy={true} smooth={true} duration={500}>
            <Nav.Link href='/'>
              <AboutIcon></AboutIcon> ABOUT
            </Nav.Link>
          </Link>
          <Link to='services' spy={true} smooth={true} duration={500}>
            <Nav.Link href='/'>
              <InterestIcon></InterestIcon> INTERESTS
            </Nav.Link>
          </Link>
          <Link to='skills' spy={true} smooth={true} duration={500}>
            <Nav.Link href='/'>
              <SkillIcon></SkillIcon> SKILLS
            </Nav.Link>
          </Link>

          <Link to='code' spy={true} smooth={true} duration={500}>
            <Nav.Link href='/'>
              <CodingProfileIcon /> CODING PROFILES
            </Nav.Link>
          </Link>
          <Link
            to='experiences'
            spy={true}
            smooth={true}
            duration={500}
            delay={700}
          >
            <Nav.Link href='/'>
              <ExperienceIcon /> EXPERIENCES
            </Nav.Link>
          </Link>

          <Link
            to='projects'
            spy={true}
            smooth={true}
            duration={500}
            delay={700}
          >
            <Nav.Link href='/'>
              <ProjectIcon /> PROJECTS
            </Nav.Link>
          </Link>

          <Link
            activeClass='active1'
            to='certifications'
            spy={true}
            smooth={true}
            duration={500}
          >
            <Nav.Link href='/'>
              <CertificationIcon /> CERTIFICATIONS
            </Nav.Link>
          </Link>

          <Link
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            duration={500}
          >
            <Nav.Link href='/'>
              <ContactIcon /> CONTACT
            </Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomHeader;
