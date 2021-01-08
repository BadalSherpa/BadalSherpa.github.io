import React from "react";
import { Col, Row } from "antd";
import "./Skills.css";

import MERN from "../images/skills/mern.jfif";
import Java from "../images/skills/java.png";
import Cpp from "../images/skills/cpp.png";
import Python from "../images/skills/python.png";
import DSA from "../images/skills/dsa.jfif";
import Node from "../images/skills/node.png";
import Express from "../images/skills/express.png";
import MongoDb from "../images/skills/mongodb.png";
import REACT from "../images/skills/react.png";
import CSS from "../images/skills/css.png";
import Bootstrap from "../images/skills/bootstrap.png";
import Postman from "../images/skills/post.png";
import Wordpress from "../images/skills/word.jfif";
import Notepad from "../images/skills/note.png";
import Photoshop from "../images/skills/photoshop.png";
import Sub from "../images/skills/sub.jfif";
import Atom from "../images/skills/atom.jfif";
import Vs from "../images/skills/vs.jfif";
import Git from "../images/skills/git.png";
import HTML from "../images/skills/html.png";
import Js from "../images/skills/js.png";
import MicrosoftSSMS from "../images/skills/microsoft SSMS.jpg";
import Jquery from "../images/skills/jquery.png";
import Mysql from "../images/skills/mysql.jfif";
import Linux from "../images/skills/linux.png";
import Eclipse from "../images/skills/eclipse.png";
import Devcpp from "../images/skills/devc++.png";
import NetBeans from "../images/skills/net.png";
import Github from "../images/skills/github.png";
import Firebase from "../images/skills/firebase.png";

import ScrollAnimation from "react-animate-on-scroll";

const Skills = () => {
  return (
    <ScrollAnimation animateIn='zoomInRight'>
      <Col
        className='skills'
        id='skills'
        style={{ textAlign: "center", background: "white" }}
      >
        <div classNameName='overlay'>
          <div style={{ paddingBottom: "5vh", fontSize: "1.5rem" }}>
            <strong>Skills</strong>
            <p>
              I've been doing web development for about two years now, and I'm
              always eager to learn more in this fast-paced industry.
            </p>
          </div>
          <Row gutter={100}>
            <Col xxl={14} xl={14} lg={14} md={24} sm={24} xs={24}>
              <h3>Programming Languages and Technologies I've worked with:</h3>
              <Row style={{ margin: "5vw" }}>
                <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <div className=' skill-icon'>
                    <img
                      title='JAVA'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={Java}
                      alt='Java'
                    />
                  </div>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <div className=' skill-icon'>
                    <img
                      title='C++'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={Cpp}
                      alt='C++'
                    />
                  </div>
                </Col>

                <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <div className=' skill-icon'>
                    <img
                      title='Data Structures And Algorithms'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={DSA}
                      alt='Data Structure and Algorithms'
                    />
                  </div>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <div className=' skill-icon'>
                    <img
                      title='MERN'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={MERN}
                      alt='MERN'
                    />
                  </div>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <div className=' skill-icon'>
                    <img
                      title='MongoDb'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={MongoDb}
                      alt='MongoDb'
                    />
                  </div>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <div className=' skill-icon'>
                    <img
                      title='Express JS'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={Express}
                      alt='Express'
                    />
                  </div>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <div className=' skill-icon'>
                    <img
                      title='REACT'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={REACT}
                      alt='React'
                    />
                  </div>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <div className=' skill-icon'>
                    <img
                      title='Node Js'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={Node}
                      alt='Node Js'
                    />
                  </div>
                </Col>

                <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <div className=' skill-icon'>
                    <img
                      title='HTML'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={HTML}
                      alt='Hyper Text Markup Language'
                    />
                  </div>
                </Col>

                <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <div className=' skill-icon'>
                    <img
                      title='CSS'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={CSS}
                      alt='Cascading style sheet'
                    />
                  </div>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <div className=' skill-icon'>
                    <img
                      title='JavaScript'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={Js}
                      alt='Java Script'
                    />
                  </div>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <div className=' skill-icon'>
                    <img
                      title='Jquery'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={Jquery}
                      alt='Jquery'
                    />
                  </div>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <div className=' skill-icon'>
                    <img
                      title='Bootstrap'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={Bootstrap}
                      alt='Bootstrap'
                    />
                  </div>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <div className=' skill-icon'>
                    <img
                      title='Mysql'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={Mysql}
                      alt='Mysql'
                    />
                  </div>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <div className=' skill-icon'>
                    <img
                      title='Python'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={Python}
                      alt='Python'
                    />
                  </div>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <div className=' skill-icon'>
                    <img
                      title='Firebase'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={Firebase}
                      alt='Firebase'
                    />
                  </div>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <div className=' skill-icon'>
                    <img
                      title='Linux'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={Linux}
                      alt='Linux'
                    />
                  </div>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <div className=' skill-icon'>
                    <img
                      title='Wordpress'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={Wordpress}
                      alt='Wordpress'
                    />
                  </div>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <div className=' skill-icon'>
                    <img
                      title='Git'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={Git}
                      alt='git'
                    />
                  </div>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={6}>
                  <div className=' skill-icon'>
                    <img
                      title='Photoshop'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={Photoshop}
                      alt='Photoshop'
                    />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xxl={10} xl={10} lg={10} md={24} sm={24} xs={24}>
              <h3>Some Tools & IDE's I've Worked With:</h3>
              <Row style={{ margin: "2vw" }}>
                <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={6}>
                  <div className=' sicon'>
                    <img
                      title='Visual Studio Code'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={Vs}
                      alt='visual studio code'
                    />
                  </div>
                </Col>
                <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={6}>
                  <div className=' sicon'>
                    <img
                      title='Eclipse'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={Eclipse}
                      alt='eclipse'
                    />
                  </div>
                </Col>

                <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={6}>
                  <div className=' sicon'>
                    <img
                      title='Atom'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={Atom}
                      alt='Atom'
                    />
                  </div>
                </Col>

                <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={6}>
                  <div className=' sicon'>
                    <img
                      title='Notepad'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={Notepad}
                      alt='Notepad'
                    />
                  </div>
                </Col>

                <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={6}>
                  <div className=' sicon'>
                    <img
                      title='Dev++'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={Devcpp}
                      alt='Dev ++'
                    />
                  </div>
                </Col>
                <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={6}>
                  <div className=' sicon'>
                    <img
                      title='NetBeans'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={NetBeans}
                      alt='NetBeans'
                    />
                  </div>
                </Col>
                <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={6}>
                  <div className=' sicon'>
                    <img
                      title='Microsoft SSMS'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={MicrosoftSSMS}
                      alt='Microsoft SSMS'
                    />
                  </div>
                </Col>
                <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={6}>
                  <div className=' sicon'>
                    <img
                      title='Sublime'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={Sub}
                      alt='Sublime'
                    />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xxl={10} xl={10} lg={10} md={24} sm={24} xs={24}>
              <h3>Project Tools</h3>
              <Row style={{ margin: "2vw" }}>
                <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={6}>
                  <div className='sicon'>
                    <img
                      title='Github'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={Github}
                      alt='Github'
                    />
                  </div>
                </Col>
                <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={6}>
                  <div className='sicon'>
                    <img
                      title='Postman'
                      id='popover'
                      data-trigger='hover'
                      className='img-responsive'
                      src={Postman}
                      alt='Postman'
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Col>
    </ScrollAnimation>
  );
};

export default Skills;
