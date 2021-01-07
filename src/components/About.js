import React from "react";
import { Col } from "antd";
import Profile from "../images/badalChangba.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import { Element } from "react-scroll";
import "./About.css";

const About = () => {
  return (
    <Element id='about' name='about' className='element'>
      <ScrollAnimation animateIn='fadeIn'>
        <Col style={{ textAlign: "center", background: "white" }}>
          <div>
            <div
              data-aos='fade-up'
              style={{ paddingBottom: "5vh", fontSize: "1.5rem" }}
            >
              <strong>About Me</strong>
            </div>
            <ScrollAnimation animateIn='zoomInUp'>
              <img src={Profile} id='prof-pic' alt='Badal Sherpa' />
            </ScrollAnimation>
            <ScrollAnimation duration='3' animateIn='swing'>
              <p>
                Hey!{" "}
                <img
                  src='https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif'
                  width='30px'
                  alt='Hello from Badal Changba'
                ></img>
                😄 my name is Badal Sherpa and I'm a Full Stack Web Developer
                with a passion for frontend web designing and back end
                development. I'm currently a 3rd year student pursuing Bachelor
                of Technology in Computer Science from
                <a href='https://www.lpu.in/'>
                  <bold> Lovely Professional University, Punjab</bold>
                </a>
                . As being from a computer science student my interests lies in
                programming and learning new technical stuffs. I am an
                enthusiastic Competitive programming learner and believe in
                working hard and enjoying life aswell.
              </p>
              <p>
                I am from 4th mile Sukhia Pokhri, Darjeeling , West Bengal India
                . I love designing web frontend websites with good catchy styles
                and theme Apart from technical things ,I am also interested in
                gaming , watching technical blogs , and sports . My hobbies are
                listening to songs, singing, watching anime, playing volley ball
                and football during my leisure hours .
              </p>
            </ScrollAnimation>
          </div>

          <div class='row text-center'>
            <div id='tl-dr'>
              <h3> Self Proclamations:</h3>
              <div class='tldr-proc'>
                <div class='tldr-icon' id='tldr-keyboard'>
                  <ScrollAnimation duration='3' animateIn='lightSpeedIn'>
                    <i
                      title='Yes I am a dedicated Web Developer'
                      id='popover'
                      data-trigger='hover'
                      class='fa fa-keyboard-o'
                    ></i>
                  </ScrollAnimation>
                </div>
                <h5>Full Stack Web Developer</h5>
              </div>
              <div class='tldr-proc'>
                <div class='tldr-icon'>
                  <ScrollAnimation duration='3' animateIn='lightSpeedIn'>
                    <i
                      class='fa fa-pencil'
                      title='I love handling large  datas ,I love to make beautiful user interface'
                      id='popover'
                      data-trigger='hover'
                    />
                  </ScrollAnimation>
                </div>
                <h5>Data Science Enthusiast</h5>
              </div>
              <div class='tldr-proc'>
                <div class='tldr-icon'>
                  <ScrollAnimation duration='3' animateIn='lightSpeedIn'>
                    <i
                      title='My thinking capabilities is increasing everyday with Competitive Coding'
                      id='popover'
                      data-trigger='hover'
                      class='fas fa-laptop-code'
                    ></i>
                  </ScrollAnimation>
                </div>
                <h5>Competitive Programmer</h5>
              </div>
            </div>
          </div>
        </Col>
      </ScrollAnimation>
    </Element>
  );
};

export default About;
