import React from "react";
import { Col, Tag } from "antd";
import ScrollAnimation from "react-animate-on-scroll";

import {
  CodeChefIcon,
  GeeksForGeeksIcon,
  HackerEarthIcon,
  HackerRankIcon,
  CodeForcesIcon,
  LeetCodeIcon,
} from "../images/icons";
import "./CodingProfiles.css";

const CodingProfiles = () => {
  return (
    <Col id='code'>
      <ScrollAnimation duration='2' animateIn='rubberBand'>
        <div style={{ textAlign: "center" }}>
          <h2>
            <strong>My Coding Profiles</strong>
          </h2>
        </div>
        <div class='code' style={{ textAlign: "center" }}>
          <Col
            xxl={24}
            xl={24}
            lg={24}
            md={24}
            sm={24}
            xs={24}
            style={{
              marginTop: 20,
              marginLeft: 20,
              marginRight: 20,
              marginBottom: 20,
            }}
          >
            I believe that competitive coding helps us to do better in other
            subjects that we’re studying or learning. Within programming, we
            learn how to break down a problem into individual steps and to use a
            language that the computer understands to logically create a working
            program. In doing so, we develop a certain mindset on approaching
            problems and processing large amounts of information that is
            necessary with conquering any new topic. In other words, We learn to
            look at problems from a bigger picture and in a different
            persceptive and adapt to working through the frustrations of hitting
            brick walls to solve issues. So this are my coding profile where i
            have been coding whilch helps my thinking to improve first, before
            actually learning the what.
            <br />
            Lastly I believe Learning to code is more than just learning a
            computer language – it’s about creating an effective and productive
            mindset towards problem-solving that will positively affect any new
            intellectual endeavor we take on.
          </Col>
          <a href='https://codeforces.com/profile/BadalChangba'>
            <Tag icon={<GeeksForGeeksIcon />} color='darkgreen'>
              GeeksforGeeks
            </Tag>
          </a>
          <a href='https://www.codechef.com/users/sanssangay'>
            <Tag icon={<CodeChefIcon />} color='brown'>
              Codechef
            </Tag>
          </a>

          <a href='https://www.hackerearth.com/@badalsherpa7'>
            <Tag icon={<HackerRankIcon />} color='green'>
              HackerRank
            </Tag>
          </a>
          <a href='https://www.hackerrank.com/Badal_Sherpa'>
            <Tag icon={<HackerEarthIcon />} color='green'>
              HackerEarth
            </Tag>
          </a>
          <a href='https://codeforces.com/profile/BadalChangba'>
            <Tag icon={<CodeForcesIcon />} color='blue'>
              CodeForces
            </Tag>
          </a>
          <a href='https://leetcode.com/badal_sherpa/'>
            <Tag icon={<LeetCodeIcon />} color='yellow'>
              LeetCode
            </Tag>
          </a>
        </div>
      </ScrollAnimation>
    </Col>
  );
};

export default CodingProfiles;
