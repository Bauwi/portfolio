import React, { Component } from "react";
import { Icon } from "antd";

import StyledWrapper from "../StyledWrapper";
const WrapperHeader = (
  <header className="styled-wrapper__header">
    <p>college().lycée().then(() => {"{"} </p>
  </header>
);

const WrapperFooter = (
  <footer>
    <p>{`};`}</p>
    <p />
  </footer>
);

const more = [
  {
    title: "Computer Skills",
    icon: "global",
    infos: {
      skills: [
        "Microsoft Office",
        "Autocad",
        "Photoshop",
        "Illustrator",
        "LabView",
        "Code::Blocks",
        "SolidWorks"
      ]
    }
  },
  {
    title: "Languages",
    icon: "flag",
    infos: {
      skills: [
        "French",
        "English: Advanced ( TOEIC 825 2011)",
        "Spanish: Basic"
      ]
    }
  },
  {
    title: "Various",
    icon: "car",
    infos: {
      skills: ["Driving License (B)"]
    }
  }
];

export default class ResumeMore extends Component {
  renderMore = () => {
    return more.map(item => {
      return (
        <li key={item.title} className="resume__section__item">
          <header>
            <div>
              <h3>{item.title}</h3>
              <Icon type={item.icon} />
            </div>
          </header>
          <ul>
            {item.infos.skills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </li>
      );
    });
  };

  render() {
    return (
      <div className="resume__wrapper">
        <StyledWrapper header={WrapperHeader} footer={WrapperFooter}>
          <div>
            <h2>More</h2>
          </div>
          <ul className="resume__section">{this.renderMore()}</ul>
        </StyledWrapper>
      </div>
    );
  }
}
