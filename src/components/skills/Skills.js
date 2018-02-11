import React, { Component } from "react";
import { Icon } from "antd";

import Slider from "../slider/Slider";
import { Element } from "react-scroll";

import SkillsStats from "./SkillsStats";
import SkillsBasics from "./SkillsBasics";
import SkillsFront from "./SkillsFront";
import SkillsBack from "./SkillsBack";
import Trees from "./Trees";

export default class Skills extends Component {
  state = {
    treeVisible: false
  };

  showModal = () => {
    this.setState({
      treeVisible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      treeVisible: false
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      treeVisible: false
    });
  };

  render() {
    return (
      <div>
        <div
          className="bookmark bookmark--front-skills"
          onClick={this.showModal}
        >
          <Icon type="fork" />
        </div>
        <Trees
          treeVisible={this.state.treeVisible}
          handleCancel={this.handleCancel}
          handleOk={this.handleOk}
        />
        <Slider name="skillsSlider" numofslides={4} color="red">
          <Element
            name={`skillsSlider1`}
            navname="Stats"
            style={{
              minHeight: "100vh"
            }}
          >
            <SkillsStats />
          </Element>
          <Element
            name={`skillsSlider2`}
            navname="Basics"
            style={{
              minHeight: "100vh"
            }}
          >
            <SkillsBasics />
          </Element>
          <Element
            name={`skillsSlider3`}
            navname="Front-End"
            style={{
              minHeight: "100vh"
            }}
          >
            <SkillsFront />
          </Element>
          <Element
            name={`skillsSlider4`}
            navname="Back-End"
            style={{
              minHeight: "100vh"
            }}
          >
            <SkillsBack />
          </Element>
        </Slider>
      </div>
    );
  }
}
