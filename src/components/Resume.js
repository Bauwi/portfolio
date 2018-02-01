import React from "react";

import Slider from "./slider/Slider";
import { Element } from "react-scroll";

export default class Resume extends React.Component {
  render() {
    return (
      <Slider numofslides={4}>
        <Element
          name={`insideContainer1`}
          navname="Academics"
          style={{
            minHeight: "100vh"
          }}
        >
          Academics
        </Element>
        <Element
          name={`insideContainer2`}
          navname="Professional"
          style={{
            minHeight: "100vh"
          }}
        >
          Professional
        </Element>
        <Element
          name={`insideContainer3`}
          navname="About"
          style={{
            minHeight: "100vh"
          }}
        >
          About
        </Element>
        <Element
          name={`insideContainer4`}
          navname="New"
          style={{
            minHeight: "100vh"
          }}
        >
          New
        </Element>
      </Slider>
    );
  }
}
