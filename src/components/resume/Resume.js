import React from "react";
import { Icon } from "antd";

import Slider from "../slider/Slider";
import { Element } from "react-scroll";

import ResumeYear from "./ResumeYear";
import ResumeAcademics from "./ResumeAcademics";
import ResumePro from "./ResumePro";

export default class Resume extends React.Component {
  render() {
    return (
      <div>
        <div className="bookmark bookmark--resume">
          <Icon type="file-pdf" />
        </div>
        <Slider numofslides={4} name="resumeSlider" color="green">
          <Element
            name={`resumeSlider1`}
            navname="This Year"
            style={{
              minHeight: "100vh"
            }}
          >
            <ResumeYear />
          </Element>
          <Element
            name={`resumeSlider2`}
            navname="Academics"
            style={{
              minHeight: "100vh"
            }}
          >
            <ResumeAcademics />
          </Element>
          <Element
            name={`resumeSlider3`}
            navname="Pro"
            style={{
              minHeight: "100vh"
            }}
          >
            <ResumePro />
          </Element>
          <Element
            name={`resumeSlider4`}
            navname="About"
            style={{
              minHeight: "100vh"
            }}
          >
            About
          </Element>
        </Slider>
      </div>
    );
  }
}
