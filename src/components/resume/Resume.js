import React from "react";
import { Icon } from "antd";
import axios from "axios";
import Slider from "../slider/Slider";
import { Element } from "react-scroll";

import ResumeRecent from "./ResumeRecent";
import ResumeAcademics from "./ResumeAcademics";
import ResumePro from "./ResumePro";
import ResumeMore from "./ResumeMore";

export default class Resume extends React.Component {
  downloadPDF = () => {
    const response = {
      file: "http://localhost:3001/download"
    };
    window.location.href = response.file;
  };

  render() {
    return (
      <div>
        <div className="bookmark" onClick={this.downloadPDF}>
          <Icon type="file-pdf" />
        </div>
        <Slider numofslides={4} name="resumeSlider" color="green">
          <Element
            name={`resumeSlider1`}
            navname="Recent"
            style={{
              minHeight: "100vh"
            }}
          >
            <ResumeRecent />
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
            navname="More"
            style={{
              minHeight: "100vh"
            }}
          >
            <ResumeMore />
          </Element>
        </Slider>
      </div>
    );
  }
}
