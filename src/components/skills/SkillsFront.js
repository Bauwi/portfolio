import React, { Component } from "react";

import StyledWrapper from "../StyledWrapper";
const WrapperHeader = (
  <header className="styled-wrapper__header">
    <p>front = {"{"}</p>
  </header>
);

const WrapperFooter = (
  <footer>
    <p>{`};`}</p>
    <p />
    <p />
  </footer>
);

export default class SkillsFront extends Component {
  render() {
    return (
      <div className="skills__wrapper">
        <StyledWrapper header={WrapperHeader} footer={WrapperFooter}>
          <div className="skills__front__title">
            <h2>Front-End Skills</h2>
          </div>
          <div className="skills__section">
            <div>
              <h3>
                Basics :{" "}
                <span className="styled-wrapper__text styled-wrapper__text--curly">{`{`}</span>
              </h3>

              <ul>
                <li>
                  HTML5 <span className="styled-wrapper__text"> : true,</span>
                </li>
                <li>
                  CSS3 <span className="styled-wrapper__text"> : true,</span>
                </li>
                <li>
                  JavaScript{" "}
                  <span className="styled-wrapper__text"> : true,</span>
                </li>
              </ul>
              <p className="styled-wrapper__text styled-wrapper__text--curly">{`}`}</p>

              <h3>
                CSS3 :{" "}
                <span className="styled-wrapper__text styled-wrapper__text--curly">{`{`}</span>
              </h3>

              <ul>
                <li>
                  Responsive Web<span className="styled-wrapper__text">
                    {" "}
                    : [ Media Queries, Accessibility ],
                  </span>
                </li>
                <li>
                  Preprocessors<span className="styled-wrapper__text">
                    {" "}
                    : "SASS",
                  </span>
                </li>
                <li>
                  Framework<span className="styled-wrapper__text">
                    {" "}
                    : [ Bootstrap, Ant Design ],
                  </span>
                </li>
              </ul>
              <p className="styled-wrapper__text styled-wrapper__text--curly">{`}`}</p>
            </div>
            <div>
              <h3>
                JavaScript :{" "}
                <span className="styled-wrapper__text styled-wrapper__text--curly">{`{`}</span>
              </h3>

              <ul>
                <li>
                  Standards{" "}
                  <span className="styled-wrapper__text">
                    : [ ES5, ES6, ES7 ],
                  </span>
                </li>

                <li>
                  Tasks Runners<span className="styled-wrapper__text">
                    {" "}
                    : "npmscripts",
                  </span>
                </li>
                <li>
                  Libraries<span className="styled-wrapper__text">
                    {" "}
                    : [ React, jQuery ],
                  </span>
                </li>
                <li>
                  React<span className="styled-wrapper__text">
                    {" "}
                    : [ React-Router, Redux, Redux-thunk ],
                  </span>
                </li>
                <li>
                  Package Managers<span className="styled-wrapper__text">
                    {" "}
                    : [ npm, Yarn ],
                  </span>
                </li>
                <li>
                  Units Testing<span className="styled-wrapper__text">
                    {" "}
                    : [ Jest, Mocha, Enzyme ],
                  </span>
                </li>
                <li>
                  Bundler<span className="styled-wrapper__text">
                    {" "}
                    : "webpack",
                  </span>
                </li>
              </ul>
              <p className="styled-wrapper__text styled-wrapper__text--curly">{`}`}</p>
              <h3>
                Tools :{" "}
                <span className="styled-wrapper__text styled-wrapper__text--curly">{`{`}</span>
              </h3>

              <ul>
                <li>
                  Debugging{" "}
                  <span className="styled-wrapper__text">
                    : [ Chrome console, React Developer Tool, Redux DevTools ],
                  </span>
                </li>
                <li>
                  Version Control{" "}
                  <span className="styled-wrapper__text">: "Git",</span>
                </li>
                <li>
                  Linter{" "}
                  <span className="styled-wrapper__text">
                    : "ESLint (AirBnB guidelines)",
                  </span>
                </li>
                <li>
                  Design{" "}
                  <span className="styled-wrapper__text">
                    : [ Photoshop, Illustrator ],
                  </span>
                </li>
              </ul>
              <p className="styled-wrapper__text styled-wrapper__text--curly">{`}`}</p>
            </div>
          </div>
        </StyledWrapper>
      </div>
    );
  }
}
