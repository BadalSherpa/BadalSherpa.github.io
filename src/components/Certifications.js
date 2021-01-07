import React from "react";
import { Col, Row, Card, Tag } from "antd";
import "./Certifications.css";
import ScrollAnimation from "react-animate-on-scroll";
import DSA from "../images/certifications/Badal_DSA_GFG.png";
import GOOGLE from "../images/certifications/Badal_Google_Technical_Support_Fundamentals.png";
import WEB from "../images/certifications/Badal_Web_Development.png";
import JAVA from "../images/certifications/Badal_Java_Programming.png";

const { Meta } = Card;

const Certifications = () => {
  return (
    <Col id='certifications' style={{ textAlign: "center" }}>
      <div style={{ paddingBottom: "5vh", fontSize: "1.5rem" }}>
        <strong>My Certifications</strong>
        <p>Learning is never completed , Here are few of my certifications </p>
      </div>
      <Row>
        <Col xxl={8} xl={8} lg={12} md={12} sm={12} xs={24}>
          <ScrollAnimation duration='2' animateIn='bounceInLeft'>
            {" "}
            <div className='certificationiconR'>
              <Card
                cover={
                  <img
                    style={{ height: 213, width: 348 }}
                    alt='example'
                    src={DSA}
                  />
                }
              >
                <Meta title='Data Structures And Algorithms ' />
                <p style={{ marginTop: "1vh" }}>
                  <p>GeeksForGeeks</p>
                  <a href='https://media.geeksforgeeks.org/courses/certificates/fb257011906f1edca465dadceb724169.pdf'>
                    <Tag color='lime'>View Credentials</Tag>
                  </a>
                </p>
              </Card>
            </div>
          </ScrollAnimation>
        </Col>
        <Col xxl={8} xl={8} lg={12} md={12} sm={12} xs={24}>
          <ScrollAnimation duration='2' animateIn='bounceInUp'>
            <div className='certificationiconR'>
              <Card
                cover={
                  <img
                    style={{ height: 213, width: 348 }}
                    alt='Google Technical Support Fundamentals'
                    src={GOOGLE}
                  />
                }
              >
                <Meta title='Google Technical Support Fundamentals' />
                <p style={{ marginTop: "1vh" }}>
                  {" "}
                  <p>Google via Coursera</p>
                  <a href='https://www.coursera.org/account/accomplishments/verify/7KCGVSS7NLC3?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'>
                    {" "}
                    <Tag color='gold'> View Credentials</Tag>
                  </a>
                </p>
              </Card>
            </div>
          </ScrollAnimation>
        </Col>
        <Col xxl={8} xl={8} lg={12} md={12} sm={12} xs={24}>
          <ScrollAnimation duration='2' animateIn='bounceInRight'>
            <div className='certificationiconR'>
              <Card
                cover={
                  <img
                    style={{ height: 213, width: 348 }}
                    alt='web development'
                    src={WEB}
                  />
                }
              >
                <Meta title='Full Stack Web Development' />
                <p>Angela Lu via Udemy</p>
                <p style={{ marginTop: "1vh" }}>
                  <a href='https://www.udemy.com/certificate/UC-d9cbebc1-f98b-480f-9cb4-44fe3b14312d/'>
                    <Tag color='magenta'>View Credentials</Tag>
                  </a>
                </p>
              </Card>
            </div>
          </ScrollAnimation>
        </Col>
        {/* <Col xxl={8} xl={8} lg={12} md={12} sm={12} xs={24}>
          <ScrollAnimation duration='3' animateIn='bounceInLeft'>
            {" "}
            <div className='certificationiconR'>
              <Card
                cover={
                  <img
                    alt='example'
                    src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                  />
                }
                actions={[<EllipsisOutlined key='ellipsis' />]}
              >
                <Meta
                  title='Card title'
                  description='This is the description'
                />
              </Card>
            </div>
          </ScrollAnimation>
        </Col> */}
        <Col xxl={8} xl={8} lg={12} md={12} sm={12} xs={24}>
          <ScrollAnimation duration='2' animateIn='bounecInUp'>
            <div className='certificationiconR'>
              <Card
                cover={
                  <img
                    style={{ height: 213, width: 348 }}
                    alt='Java Programming'
                    src={JAVA}
                  />
                }
              >
                <Meta title='Java Programming' />
                <p>Upgrad</p>
                <a href='https://www.credential.net/453af4db-8598-4427-a22e-3e4385455043#gs.pz957u'>
                  <p style={{ marginTop: "1vh" }}>
                    <Tag color='cyan'>View Credentials</Tag>
                  </p>
                </a>
              </Card>
            </div>
          </ScrollAnimation>
        </Col>
        {/* <Col xxl={8} xl={8} lg={12} md={12} sm={12} xs={24}>
          <ScrollAnimation duration='3' animateIn='bounceInRight'>
            <div className='certificationiconR'>
              <Card
                cover={
                   <img
                    alt='example'
                    src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                  />
                }
                actions={[<EllipsisOutlined key='ellipsis' />]}
              >
                <Meta
                  title='Card title'
                  description='This is the description'
                />
              </Card>
            </div>
          </ScrollAnimation>
        </Col> */}
      </Row>
    </Col>
  );
};

export default Certifications;
