import React from "react";
import { Col, Timeline } from "antd";
import { ClockCircleOutlined, LoadingOutlined } from "@ant-design/icons";
import "./Experiences.css";
import ScrollAnimation from "react-animate-on-scroll";

const Experiences = () => {
  return (
    <ScrollAnimation duration='5' animateIn='fadeIn'>
      <Col
        id='experiences'
        style={{ textAlign: "center", background: "white" }}
      >
        <ScrollAnimation animateIn='jello' duration='3'>
          <div style={{ paddingBottom: "5vh", fontSize: "1.5rem" }}>
            <strong>My Experiences</strong>
          </div>
          <Timeline mode='alternate'>
            <Timeline.Item
              dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
            >
              <a href='https://altermate.in/'>
                <strong>
                  Altermate.in ( Full Stack Web Developer Intern )
                </strong>
              </a>
              <p>Nov 2020-Dec 2020</p>
            </Timeline.Item>
            <Timeline.Item color='green'>
              Designed and developed the company website from scratch and
              integrated the backend using MERN stack that can easily be scaled
              depending on company needs
            </Timeline.Item>

            <Timeline.Item color='green'>
              Maintained all the REST API routes, integrated sendgrid,
              bigbluebutton to the company backend server
            </Timeline.Item>

            <Timeline.Item color='green'>
              Maintained and validated all the user’s side inputs
            </Timeline.Item>

            <Timeline.Item color='green'>
              Coordinated with others member of the IT department
            </Timeline.Item>
            <Timeline.Item
              dot={
                <LoadingOutlined
                  style={{ fontSize: "16px", color: "orange" }}
                />
              }
            >
              <a href='https://techlious.com/'>
                <strong>Techlious Networks (MERN Stack Web Developer)</strong>
              </a>
              <p>Dec 2020</p>
            </Timeline.Item>
            <Timeline.Item color='green'>
              Designed the Client Relationship Management System using Ant
              Design with React
            </Timeline.Item>
            <Timeline.Item color='green'>
              Build the entire Layout of the Management system
            </Timeline.Item>
            <Timeline.Item color='green'>
              Integrated real time responsive Apexcharts for maintaining charts
              and graphs for recording the datas and showing analysis. .
            </Timeline.Item>
            <Timeline.Item color='green'>
              Created the components dynamic and scalable using usestate hooks
              as per the requirement of the project
            </Timeline.Item>
          </Timeline>
        </ScrollAnimation>
      </Col>
    </ScrollAnimation>
  );
};

export default Experiences;
