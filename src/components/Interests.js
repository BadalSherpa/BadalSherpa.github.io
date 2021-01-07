import React from "react";
import "./Interests.css";
import { Col, Row } from "antd";
import ScrollAnimation from "react-animate-on-scroll";

const Interests = () => {
  return (
    <Col id='services' style={{ textAlign: "center" }}>
      <div class='overlay'>
        <div style={{ paddingBottom: "5vh", fontSize: "1.5rem" }}>
          <strong>What I do</strong>
        </div>
        <Row>
          <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
            <ScrollAnimation
              duration='5'
              animateOut='fadeIn'
              animateIn='zoomIn'
            >
              <div className='iconR'>
                <i class='fa fa-code'></i>
              </div>
              <h3>Web Development</h3>
              <p>
                I have always been passionate about web build design and
                development . Web Development isn't just what a product looks
                like and feels like on the outside. During the development phase
                the designs undertaken encompasses the internal functionality of
                a product as well as the overall user experience. I strive to
                design interfaces and experiences that people can enjoy on all
                digital mediums.
              </p>
            </ScrollAnimation>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
            <ScrollAnimation duration='6' animateIn='zoomIn'>
              <div className='iconR'>
                <i class='fa fa-laptop'></i>
              </div>
              <h3>Competitive Programming</h3>
              <p>
                Being a Computer Science student and having a string hold in
                programming languages like Java and C++ . I'm passionate about
                competitive programming as it helps to increase our problem
                solving skills and helps us bring codes into real worls
                practise. I am striving to be a good programmer and learning it
                day by day , I also love to keep my code simple so as to keep it
                understandable for every programming enthusiast.
              </p>
            </ScrollAnimation>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
            <ScrollAnimation duration='7' animateIn='zoomIn'>
              <div className='iconR'>
                <i class='fa fa-book'></i>
              </div>
              <h3>Study</h3>
              <p>
                {" "}
                I am currently pursuing my
                <em>
                  {" "}
                  Bachelores Tech in Computer Science Engineering
                </em> from{" "}
                <strong>Lovely Professional University Phagwara, Punjab</strong>
                . These day I have been focusing on competitive programming and
                have been part of many of the online coding contests. I am an
                enthusiastic learner and believe in working hard and enjoying
                life aswell.
              </p>
            </ScrollAnimation>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Interests;
