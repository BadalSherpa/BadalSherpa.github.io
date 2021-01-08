import React from "react";
import { Row } from "antd";
import "./Intro.css";
import { Link } from "react-scroll";
import Typing from "react-typing-animation";

const Intro = () => {
  return (
    <Row
      id='intro'
      style={{
        textAlign: "center",
      }}
    >
      <div class='overlay'>
        <div className='intro-content'>
          <h1 class='animated fadeInDown'>Hi, I'm Badal Sherpa</h1>
          <p class='subtitle animated fadeInUp delay-05s'>
            <Typing speed={200} cursor='|'>
              <span
                style={{
                  color: "#DBEDF3",
                  fontFamily: "Arvo, cursive",

                  textShadow: "3px 0 #DA0463",
                }}
              >
                Full Stack Web Developer | Problem Solver | Data Science
                Enthusiast
              </span>
            </Typing>
          </p>
          <Link
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            duration={500}
            delay={700}
          >
            <i class='fa fa-angle-down page-scroll'></i>
          </Link>
        </div>
      </div>
    </Row>
  );
};

export default Intro;
