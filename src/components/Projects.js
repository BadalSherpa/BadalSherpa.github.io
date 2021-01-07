import React, { useState } from "react";
import { Col, Row, Card, Modal, Tag, Button } from "antd";
import "./Projects.css";
import { EllipsisOutlined } from "@ant-design/icons";
import ScrollAnimation from "react-animate-on-scroll";
import SecretsBook from "../images/projects/SecretsBook.png";
import NotesKeeper from "../images/projects/NotesKeeper.png";
import CodingHumans from "../images/projects/www.codinghumans.xyz.png";
import SimonGame from "../images/projects/Simon Game.png";
import DrumKit from "../images/projects/Drum-kit-web-game.png";
import WebSite_Design from "../images/projects/StartUp-Website-Design.png";
import Simple_Portfolio from "../images/projects/Simple-Portfolio-website.png";

import {
  ReactJSIcon,
  MongoDBIcon,
  NodeJSIcon,
  Html,
  Css,
  Bootstrap,
  JavaScriptIcon,
  GithubIcon,
  DemoIcon,
} from "../images/icons";

const { Meta } = Card;

const Projects = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [isModalVisible1, setIsModalVisible1] = useState(false);

  const [isModalVisible2, setIsModalVisible2] = useState(false);

  const [isModalVisible3, setIsModalVisible3] = useState(false);

  const [isModalVisible4, setIsModalVisible4] = useState(false);

  const [isModalVisible5, setIsModalVisible5] = useState(false);

  const [isModalVisible6, setIsModalVisible6] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const showModal1 = () => {
    setIsModalVisible1(true);
  };
  const showModal2 = () => {
    setIsModalVisible2(true);
  };
  const showModal3 = () => {
    setIsModalVisible3(true);
  };
  const showModal4 = () => {
    setIsModalVisible4(true);
  };
  const showModal5 = () => {
    setIsModalVisible5(true);
  };
  const showModal6 = () => {
    setIsModalVisible6(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };
  const handleCancel2 = () => {
    setIsModalVisible2(false);
  };
  const handleCancel3 = () => {
    setIsModalVisible3(false);
  };
  const handleCancel4 = () => {
    setIsModalVisible4(false);
  };
  const handleCancel5 = () => {
    setIsModalVisible5(false);
  };
  const handleCancel6 = () => {
    setIsModalVisible6(false);
  };
  return (
    <Col id='projects' style={{ textAlign: "center" }}>
      <div class='overlay'>
        <div style={{ paddingBottom: "5vh", fontSize: "1.5rem" }}>
          <strong>My Projects</strong>
          <p>more projects to come...</p>
        </div>
        <Row>
          <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
            <ScrollAnimation duration='3' animateIn='slideInLeft'>
              {" "}
              <div className='projecticonR'>
                <Card
                  cover={
                    <img
                      style={{ height: 215, width: 348 }}
                      alt='SecretsBook'
                      src={SecretsBook}
                    />
                  }
                  actions={[
                    <EllipsisOutlined key='ellipsis' onClick={showModal1} />,
                  ]}
                >
                  <Meta title='SECRETS BOOK' />
                  <p style={{ marginTop: "1vh" }}>
                    <Tag icon={<ReactJSIcon />} color='lightblue'>
                      React JS
                    </Tag>
                    <Tag icon={<MongoDBIcon />} color='green'>
                      MongoDB
                    </Tag>
                    <Tag icon={<NodeJSIcon />} color='lightgreen'>
                      Node JS
                    </Tag>
                  </p>
                </Card>

                <Modal
                  visible={isModalVisible1}
                  onCancel={handleCancel1}
                  footer={[<Button onClick={handleCancel1}>Close</Button>]}
                >
                  <div>
                    <Card
                      style={{ textAlign: "center" }}
                      bordered={false}
                      cover={<img alt='Secretsbook' src={SecretsBook} />}
                    >
                      <h4>SecretsBook</h4>
                      <p>Don't keep your secrets , Share them anonymously</p>
                      <p>
                        This project is a web application build using MERN ,
                        Here I have integrated the Google Oauth2 using the
                        Google developer console and google apis for easy login
                        and registration of the users. It's a web application
                        where you can share your secrets anonymously which makes
                        it fun to share it here.
                      </p>

                      <Col style={{ paddingBottom: "1vh" }}>
                        <a href='https://github.com/BadalSherpa/SecretsBook'>
                          <Tag icon={<GithubIcon />} color='orange'>
                            View Source Code
                          </Tag>
                        </a>
                      </Col>
                      <Col>
                        <a href=' https://secret-woodland-78897.herokuapp.com/'>
                          <Tag icon={<DemoIcon />} color='green'>
                            View Demo
                          </Tag>
                        </a>
                      </Col>
                    </Card>
                  </div>
                </Modal>
              </div>
            </ScrollAnimation>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
            <ScrollAnimation duration='3' animateIn='slideInUp'>
              {" "}
              <div className='projecticonR'>
                <Card
                  cover={
                    <img
                      style={{ height: 213, width: 348 }}
                      alt='NotesKeeper'
                      src={NotesKeeper}
                    />
                  }
                  actions={[
                    <EllipsisOutlined key='ellipsis' onClick={showModal2} />,
                  ]}
                >
                  <Meta title='NOTES KEEPER' />
                  <p style={{ marginTop: "1vh" }}>
                    <Tag icon={<ReactJSIcon />} color='lightblue'>
                      React JS
                    </Tag>
                    <Tag icon={<MongoDBIcon />} color='green'>
                      MongoDB
                    </Tag>
                    <Tag icon={<NodeJSIcon />} color='lightgreen'>
                      Node JS
                    </Tag>
                  </p>
                </Card>
                <Modal
                  visible={isModalVisible2}
                  onCancel={handleCancel2}
                  footer={[<Button onClick={handleCancel2}>Close</Button>]}
                >
                  <div>
                    <Card
                      style={{ textAlign: "center" }}
                      bordered={false}
                      cover={<img alt='NotesKeeper' src={NotesKeeper} />}
                    >
                      <h4>NotesKeeper</h4>
                      <p>Store your notes safely</p>
                      <p>
                        This is a React web application named as NotesKeeper
                        where we can keep your notes and information . This web
                        app helps for easy storing of notes for students and
                        official workers. This appiclation is based on MERN
                        stack . This application is hosted in netlify for the
                        easy hosting.
                      </p>

                      <Col style={{ paddingBottom: "1vh" }}>
                        <a href='https://github.com/BadalSherpa/NotesKeeper'>
                          <Tag icon={<GithubIcon />} color='orange'>
                            View Source Code
                          </Tag>
                        </a>
                      </Col>
                      <Col>
                        <a href='https://noteskeeperbybadal.netlify.app/'>
                          <Tag icon={<DemoIcon />} color='green'>
                            View Demo
                          </Tag>
                        </a>
                      </Col>
                    </Card>
                  </div>
                </Modal>
              </div>
            </ScrollAnimation>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
            <ScrollAnimation duration='3' animateIn='slideInRight'>
              <div className='projecticonR'>
                <Card
                  cover={
                    <img
                      style={{ height: 213, width: 348 }}
                      alt='example'
                      src={CodingHumans}
                    />
                  }
                  actions={[
                    <EllipsisOutlined key='ellipsis' onClick={showModal3} />,
                  ]}
                >
                  <Meta title='MCQs Website (www.codinghumans.xyz)' />
                  <p style={{ marginTop: "1vh" }}>
                    <Tag icon={<Html />} color='lightblue'>
                      HTML
                    </Tag>
                    <Tag icon={<Css />} color='green'>
                      CSS
                    </Tag>
                    <Tag icon={<JavaScriptIcon />} color='yellow'>
                      JavaScript
                    </Tag>
                    <Tag icon={<Bootstrap />} color='lightgreen'>
                      Bootstrap
                    </Tag>
                  </p>
                </Card>
                <Modal
                  visible={isModalVisible3}
                  onCancel={handleCancel3}
                  footer={[<Button onClick={handleCancel3}>Close</Button>]}
                >
                  <div>
                    <Card
                      style={{ textAlign: "center" }}
                      bordered={false}
                      cover={<img alt='Codinghumans' src={CodingHumans} />}
                    >
                      <h4>Codinghumans</h4>
                      <p>
                        Get all MCQs, Codes, Programs and Techncal blogs related
                        to Computer Science
                      </p>
                      <p>
                        CodingHumans is a platform where you can find all the
                        contents, problems and solutions for all kinds of
                        programming and Computer Science related topics . This
                        site is hosted in blogger and made using html, Css,
                        JavaScript and Bootstrap.
                      </p>

                      <Col style={{ paddingBottom: "1vh" }}>
                        <a href='https://www.codinghumans.xyz/p/about-us.html'>
                          <Tag icon={<GithubIcon />} color='orange'>
                            View Source Code
                          </Tag>
                        </a>
                      </Col>
                      <Col>
                        <a href='https://www.codinghumans.xyz/'>
                          <Tag icon={<DemoIcon />} color='green'>
                            View Site
                          </Tag>
                        </a>
                      </Col>
                    </Card>
                  </div>
                </Modal>
              </div>
            </ScrollAnimation>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
            <ScrollAnimation duration='3' animateIn='slideInLeft'>
              {" "}
              <div className='projecticonR'>
                <Card
                  cover={
                    <img
                      style={{ height: 213, width: 348 }}
                      alt='SimonGame'
                      src={SimonGame}
                    />
                  }
                  actions={[
                    <EllipsisOutlined key='ellipsis' onClick={showModal4} />,
                  ]}
                >
                  <Meta title='SIMON GAME' />
                  <p style={{ marginTop: "1vh" }}>
                    <Tag icon={<Html />} color='cyan'>
                      HTML
                    </Tag>
                    <Tag icon={<Css />} color='green'>
                      CSS
                    </Tag>
                    <Tag icon={<JavaScriptIcon />} color='yellow'>
                      JavaScript
                    </Tag>
                  </p>
                </Card>
                <Modal
                  visible={isModalVisible4}
                  onCancel={handleCancel4}
                  footer={[<Button onClick={handleCancel4}>Close</Button>]}
                >
                  <div>
                    <Card
                      style={{ textAlign: "center" }}
                      bordered={false}
                      cover={<img alt='Simon Game' src={SimonGame} />}
                    >
                      <h4>Simon Game</h4>
                      <p>Lets test your Memory Power</p>
                      <p>
                        This is the another version of Simon game created using
                        just HTML, CSS, and Javascript . It is the exciting game
                        of lights and sounds in which players must repeat random
                        sequences of lights by pressing the colored pads in the
                        correct order . It's fast-paced play, with lights and
                        sounds that can challenge you.
                      </p>

                      <Col style={{ paddingBottom: "1vh" }}>
                        <a href='https://github.com/BadalSherpa/SimonGame'>
                          <Tag icon={<GithubIcon />} color='orange'>
                            View Source Code
                          </Tag>
                        </a>
                      </Col>
                      <Col>
                        <a href='https://badalsherpa.github.io/SimonGame/'>
                          <Tag icon={<DemoIcon />} color='green'>
                            Live Demo
                          </Tag>
                        </a>
                      </Col>
                    </Card>
                  </div>
                </Modal>
              </div>
            </ScrollAnimation>
          </Col>

          <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
            <ScrollAnimation duration='3' animateIn='slideInUp'>
              <div className='projecticonR'>
                <Card
                  cover={
                    <img
                      style={{ height: 213, width: 348 }}
                      alt='example'
                      src={DrumKit}
                    />
                  }
                  actions={[
                    <EllipsisOutlined key='ellipsis' onClick={showModal} />,
                  ]}
                >
                  <Meta title='DRUM KIT VIRTUAL PLAYER' />
                  <p style={{ marginTop: "1vh" }}>
                    <Tag icon={<Html />} color='cyan'>
                      HTML
                    </Tag>
                    <Tag icon={<Css />} color='green'>
                      CSS
                    </Tag>
                    <Tag icon={<JavaScriptIcon />} color='yellow'>
                      JavaScript
                    </Tag>
                  </p>
                </Card>
                <Modal
                  visible={isModalVisible}
                  onCancel={handleCancel}
                  footer={[<Button onClick={handleCancel}>Close</Button>]}
                >
                  <div>
                    <Card
                      style={{ textAlign: "center" }}
                      bordered={false}
                      cover={<img alt='Drum Kit' src={DrumKit} />}
                    >
                      <h4>Drum Kit Virtual Game</h4>
                      <p>Lets test your Memory Power</p>
                      <p>
                        This is a simple virtual Drum kit player made which can
                        be played virtually without having access to the real
                        life , drum . Its can be easily played by small kids to
                        big adults who wants to have a drum rolling fun😄🤗 To
                        play the Drum kit you can simply tap the drum images by
                        tapping it or by pressing the keys shown on the drum kit
                        images using your keyboard . Play the drum virtually 🥁
                      </p>

                      <Col style={{ paddingBottom: "1vh" }}>
                        <a href='https://github.com/BadalSherpa/Drum-kit-Game'>
                          <Tag icon={<GithubIcon />} color='orange'>
                            View Source Code
                          </Tag>
                        </a>
                      </Col>
                      <Col>
                        <a href='https://badalsherpa.github.io/Drum-kit-Game/'>
                          <Tag icon={<DemoIcon />} color='green'>
                            Live Demo
                          </Tag>
                        </a>
                      </Col>
                    </Card>
                  </div>
                </Modal>
              </div>
            </ScrollAnimation>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
            <ScrollAnimation duration='3' animateIn='slideInRight'>
              <div className='projecticonR'>
                <Card
                  cover={
                    <img
                      style={{ height: 213, width: 348 }}
                      alt='Web Design'
                      src={WebSite_Design}
                    />
                  }
                  actions={[
                    <EllipsisOutlined key='ellipsis' onClick={showModal5} />,
                  ]}
                >
                  <Meta title='STARTUP WEBSITE DESIGN' />
                  <p style={{ marginTop: "1vh" }}>
                    <Tag icon={<Html />} color='cyan'>
                      HTML
                    </Tag>
                    <Tag icon={<Css />} color='green'>
                      CSS
                    </Tag>
                    <Tag icon={<JavaScriptIcon />} color='yellow'>
                      JavaScript
                    </Tag>
                    <Tag icon={<Bootstrap />} color='purple'>
                      Bootstrap
                    </Tag>
                  </p>
                </Card>
                <Modal
                  visible={isModalVisible5}
                  onCancel={handleCancel5}
                  footer={[<Button onClick={handleCancel5}>Close</Button>]}
                >
                  <div>
                    <Card
                      style={{ textAlign: "center" }}
                      bordered={false}
                      cover={
                        <img
                          alt='Startup Website Template'
                          src={Simple_Portfolio}
                        />
                      }
                    >
                      <h4>Tindog startup Frontend</h4>
                      <p>Startup Ready Website Frontend</p>
                      <p>
                        This site can be used as a start up website for the Dog
                        Lovers . IF Tinder is for humans why not TinDog for
                        dogs. Her your can see all the positions and features of
                        designes like cards, carousels designed using Bootstrap
                        framework,Html ,css . Note this site only have frontend
                        features right now
                      </p>

                      <Col style={{ paddingBottom: "1vh" }}>
                        <a href='https://github.com/BadalSherpa/Tindog-project'>
                          <Tag icon={<GithubIcon />} color='orange'>
                            View Source Code
                          </Tag>
                        </a>
                      </Col>
                      <Col>
                        <a href='https://badalsherpa.github.io/Tindog-project/'>
                          <Tag icon={<DemoIcon />} color='green'>
                            View Site
                          </Tag>
                        </a>
                      </Col>
                    </Card>
                  </div>
                </Modal>
              </div>
            </ScrollAnimation>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
            <ScrollAnimation duration='3' animateIn='slideInRight'>
              <div className='projecticonR'>
                <Card
                  cover={
                    <img
                      style={{ height: 213, width: 348 }}
                      alt='StartUpWebsite'
                      src={Simple_Portfolio}
                    />
                  }
                  actions={[
                    <EllipsisOutlined key='ellipsis' onClick={showModal6} />,
                  ]}
                >
                  <Meta title='SIMPLE PORTFOLIO WEBSITE' />
                  <p style={{ marginTop: "1vh" }}>
                    <Tag icon={<Html />} color='cyan'>
                      HTML
                    </Tag>
                    <Tag icon={<Css />} color='green'>
                      CSS
                    </Tag>
                    <Tag icon={<JavaScriptIcon />} color='yellow'>
                      JavaScript
                    </Tag>
                    <Tag icon={<Bootstrap />} color='purple'>
                      Bootstrap
                    </Tag>
                  </p>
                </Card>

                <Modal
                  visible={isModalVisible6}
                  onCancel={handleCancel6}
                  footer={[<Button onClick={handleCancel6}>Close</Button>]}
                >
                  <div>
                    <Card
                      style={{ textAlign: "center" }}
                      bordered={false}
                      cover={
                        <img
                          alt='Simple Portfolio Website'
                          src={Simple_Portfolio}
                        />
                      }
                    >
                      <h4>Simple Portfolio Website</h4>
                      <p>Basic Porfolio Template</p>
                      <p>
                        This is my first Portfolio website that i created using
                        HTML, CSS , JavaScript and Bootstrap.
                      </p>

                      <Col style={{ paddingBottom: "1vh" }}>
                        <a href='https://github.com/BadalSherpa/WebAestro'>
                          <Tag icon={<GithubIcon />} color='orange'>
                            View Source Code
                          </Tag>
                        </a>
                      </Col>
                      <Col>
                        <a href='https://badalsherpa.github.io/WebAestro/'>
                          <Tag icon={<DemoIcon />} color='green'>
                            View Site
                          </Tag>
                        </a>
                      </Col>
                    </Card>
                  </div>
                </Modal>
              </div>
            </ScrollAnimation>
          </Col>
        </Row>
        <ScrollAnimation animateIn='rubberBand'>
          <a href='https://github.com/BadalSherpa'>
            <Button
              type='primary'
              shape='round'
              icon={<GithubIcon />}
              size={100}
            >
              MORE PROJECTS HERE
            </Button>
          </a>
        </ScrollAnimation>
      </div>
    </Col>
  );
};

export default Projects;
