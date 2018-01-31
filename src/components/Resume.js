import React from "react";

import Slider from "./Slider";
import { Element } from "react-scroll";

export default class Resume extends React.Component {
  render() {
    return (
      <Slider numOfSlides={3}>
        <Element
          name={`insideContainer1`}
          style={{
            minHeight: "100vh"
          }}
        >
          Slider 1
        </Element>
        <Element
          name={`insideContainer2`}
          style={{
            minHeight: "100vh"
          }}
        >
          slider 2
        </Element>
        <Element
          name={`insideContainer3`}
          style={{
            minHeight: "100vh"
          }}
        >
          Slider 3
        </Element>
      </Slider>
    );
  }
}
