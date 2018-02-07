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

const year = [
  {
    title: "Portfolio",
    year: "Jan 15th 2018 - Feb 15th 2018",
    subtitle: {
      description: "Building my Portfolio and resume."
    },
    infos: {
      technos: ["React", "Redux", "Express", "MongoDB", "Mongoose"]
    }
  },
  {
    title: "React-Redux Chat App",
    year: "Jan 1st 2018 - Jan 15th 2018",
    subtitle: {
      description: "Project Following Andrew Mead's Node course"
    },
    infos: {
      technos: [
        "React",
        "Redux",
        "Express",
        "MongoDB",
        "Mongoose",
        "socket.io",
        "herokuapp"
      ]
    }
  }
];

export default class ResumePro extends Component {
  renderYear = () => {
    return year.map(project => {
      return (
        <li key={project.year} className="resume__section__year-item">
          <header>{project.year}:</header>
          <section>
            <div>
              <p>{project.title}</p>
              <p>{project.subtitle.description}</p>
            </div>
            <p>{project.infos.technos.map(tech => <span>{tech}, </span>)}</p>
          </section>
        </li>
      );
    });
  };

  render() {
    return (
      <div className="resume__wrapper">
        <StyledWrapper header={WrapperHeader} footer={WrapperFooter}>
          <div>
            <h2>Recent</h2>
          </div>
          <ul className="resume__section border-top-green">
            {this.renderYear()}
          </ul>
        </StyledWrapper>
      </div>
    );
  }
}
