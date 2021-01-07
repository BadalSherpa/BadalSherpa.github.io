import React from "react";
import { Col, Button } from "antd";
import ScrollAnimation from "react-animate-on-scroll";
import "./Contact.css";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name='contact' className='element'>
      <ScrollAnimation animateIn='fadeLeft'>
        <Col id='contact'>
          <div style={{ textAlign: "center" }}>
            <div className='email-icon'>
              <ScrollAnimation duration='3' animateIn='bounceInDown'>
                <i class='fa fa-paper-plane-o '></i>
              </ScrollAnimation>
            </div>
            <h2>
              <strong>
                <em> Get In Touch!</em>
              </strong>
            </h2>
            <p>
              Whether you have an idea for a project or just want to chat, feel
              free to shoot me an email!
            </p>
            <p style={{ marginTop: "40px" }}>
              <ScrollAnimation duration='1' animateIn='swing'>
                {" "}
                <Button
                  type='dashed'
                  primary
                  href='mailto:BadalSherpa7@gmail.com'
                >
                  Say Hello
                </Button>
              </ScrollAnimation>
            </p>
          </div>
        </Col>
      </ScrollAnimation>
    </Element>
  );
};

export default Contact;
