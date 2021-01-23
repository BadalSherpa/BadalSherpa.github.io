import React from "react";
import { Col, Row, Button } from "antd";
import Rocket from "../images/rocket12.png";
import ScrollAnimation from "react-animate-on-scroll";
import "./Connect.css";
import { animateScroll as scroll } from "react-scroll";

const Connect = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <Row
      id='connect'
      xs={24}
      sm={24}
      md={24}
      lg={24}
      style={{ textAlign: "center", backgroundColor: "black" }}
    >
      <Col xs={24} sm={24} md={24} lg={24}>
        <div
          style={{ listStyle: "none" }}
          className=' ull social-buttons animated fadeIn'
        >
          <ScrollAnimation duration='3' animateIn='bounce'>
            <a
              id='linkedin'
              href='http://www.linkedin.com/in/badal-sherpa-5799a9196/'
            >
              <i class='fa fa-linkedin'></i>
            </a>
            <a id='github' href='https://github.com/BadalSherpa'>
              <i class='fa fa-github'></i>
            </a>
            <a
              id='stackoverflow'
              href='https://stackoverflow.com/users/13983584/badal-sherpa'
            >
              <i class='fa fa-stack-overflow'></i>
            </a>

            <a id='twitter' href='https://twitter.com/SherpaBadal'>
              <i class='fa fa-twitter'></i>
            </a>

            <a id='instagram' href='https://www.instagram.com/_sans7_/'>
              <i class='fa fa-instagram'></i>
            </a>

            <a id='facebook' href='https://www.facebook.com/sangay.chan/'>
              <i class='fa fa-facebook'></i>
            </a>
          </ScrollAnimation>
        </div>
      </Col>

      <Col xs={24} sm={24} md={24} lg={24}>
        <ScrollAnimation duration='3' animateIn='lightSpeedIn'>
          <div style={{ height: "100px" }}>
            <Button
              style={{
                backgroundColor: "transparent",
                backgroundRepeat: "no-repeat",
                border: "none",
                cursor: "pointer",
                outline: "none",
              }}
              onClick={scrollToTop}
              id='to-top'
            >
              <img src={Rocket} alt="Badal's Rocket"></img>
              <p style={{ color: "white" }}>Go to top Rocket!</p>
            </Button>
          </div>
        </ScrollAnimation>
        <div>
          <p style={{ color: "white" }}>
            Badal Sherpa ©2020 Created by Badal Sherpa
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default Connect;
