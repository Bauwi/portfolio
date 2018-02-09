import React, { Component } from "react";
import { Icon } from "antd";

import StyledWrapper from "../StyledWrapper";
const WrapperHeader = (
  <header className="styled-wrapper__header">
    <p>lastYear.map(day => {"{"} </p>
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
    year: "Jan 15th 2018",
    subtitle: {
      description: "Building my Portfolio and resume."
    },
    infos: {
      technos: ["React", "Redux", "Express", "MongoDB", "Mongoose"]
    }
  },
  {
    title: "Chat App with React, Redux, Express and websockets",
    year: "Jan 5th 2018",
    subtitle: {
      url: "",
      github: "https://github.com/Bauwi/node-redux-chat-app"
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
  },
  {
    title: "The Complete Node.js Developer Course (2nd Edition)",
    year: "Dec 22nd 2017",
    subtitle: {
      url: "https://www.udemy.com/the-complete-nodejs-developer-course-2"
    },
    infos: {
      technos: [
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "socket.io",
        "herokuapp",
        "jQuery"
      ]
    }
  },
  {
    title: "Blog App with React, Redux and Firestore",
    year: "Nov 13th 2017",
    subtitle: {
      url: "http://www.tekkne.com",
      github: "https://github.com/Bauwi/blog-app"
    },
    infos: {
      technos: ["React", "Redux", "Firestore"]
    }
  },
  {
    title: "The Complete React Web Developer Course (with Redux)",
    year: "Oct 2nd 2017",
    subtitle: {
      description: "",
      url: "https://www.udemy.com/react-2nd-edition/"
    },
    infos: {
      technos: [
        "React",
        "Redux",
        "React-Router",
        "Webpack",
        "Babel",
        "Jest",
        "Enzyme",
        "Firebase"
      ]
    }
  },
  {
    title: "Forum with React and Meteor",
    year: "Aug 2nd 2017",
    subtitle: {
      github: "https://github.com/Bauwi/forum-react-meteor"
    },
    infos: {
      technos: ["React", "Meteor", "React-Router", "Mocha", "MongoDB", "DDP"]
    }
  },
  {
    title: "Full-stack Web Apps with Meteor and React",
    year: "Jul 2nd 2017",
    subtitle: {
      url: "https://www.udemy.com/meteor-react/"
    },
    infos: {
      technos: [
        "React",
        "Meteor",
        "React-Router",
        "Mocha",
        "MongoDB",
        "DDP",
        "SCSS"
      ]
    }
  },
  {
    title: "Modern React with Redux",
    year: "Jun 24th 2017",
    subtitle: {
      url: "https://www.udemy.com/react-redux/"
    },
    infos: {
      technos: ["React", "Redux", "React-Router"]
    }
  },
  {
    title: "Pomodoro Clock built with HTML, CSS, Bootstrap and jQuery",
    year: "Jun 9th 2017",
    subtitle: {
      url: "https://codepen.io/Beauwie/full/XgXaJr/"
    },
    infos: {
      technos: ["HTML5", "CSS3", "jQuery"]
    }
  },
  {
    title: "Calculator built with HTML, CSS, Bootstrap and jQuery",
    year: "Jun 4th 2017",
    subtitle: {
      url: "https://codepen.io/Beauwie/pen/yXNBOP"
    },
    infos: {
      technos: ["HTML5", "CSS3", "jQuery"]
    }
  },
  {
    title: "Tribute Page built with HTML, CSS, Bootstrap and jQuery",
    year: "May 20th 2017",
    subtitle: {
      url: "https://codepen.io/Beauwie/details/BREmjQ/"
    },
    infos: {
      technos: ["HTML5", "CSS3", "jQuery"]
    }
  },
  {
    title: "Front-End Developement FreeCodeCamp certificate",
    year: "May 2017",
    subtitle: {
      url: ""
    },
    infos: {
      technos: ["HTML5", "CSS3", "javaScript", "Bootstrap", "jQuery", "AJAX"]
    }
  }
];

export default class ResumeRecent extends Component {
  renderYear = () => {
    return year.map(project => {
      return (
        <li key={project.year} className="resume__section__year-item">
          <header>{project.year}:</header>

          <section>
            <div>
              <p>{project.title}</p>

              {project.subtitle.url && (
                <a href={project.subtitle.url} target="_blank">
                  <Icon type="link" />
                </a>
              )}
              {project.subtitle.github && (
                <a href={project.subtitle.github} target="_blank">
                  <Icon type="github" />
                </a>
              )}
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
          <ul className="resume__section">{this.renderYear()}</ul>
        </StyledWrapper>
      </div>
    );
  }
}
