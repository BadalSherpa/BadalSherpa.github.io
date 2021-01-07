import React from "react";
import { Col } from "antd";
import "./Resume.css";
import ScrollAnimation from "react-animate-on-scroll";
import BadalSherpaResume from "../resume/BadalSherpaResume.pdf";

const Resume = () => {
  return (
    <Col id='resume' style={{ textAlign: "center" }}>
      <div className='overlay'>
        {" "}
        <div className='container'>
          <div>
            <div>
              <h2>
                <em> Check Out My Resume!</em>
              </h2>
              <ScrollAnimation duration='3' animateIn='bounceIn'>
                <div id='resume-button'>
                  <a class='resume-btn wp4' href={BadalSherpaResume}>
                    Take A Copy of My Resume
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Resume;
