import React, { Component } from "react";

import StyledWrapper from "../StyledWrapper";
const WrapperHeader = (
  <header className="styled-wrapper__header">
    <p>let basics, front, back;</p>
    <p>{"basics = {"}</p>
  </header>
);

const WrapperFooter = (
  <footer>
    <p>{`};`}</p>
    <p />
    <p />
    <p />
  </footer>
);

export default class SkillsBasics extends Component {
  render() {
    return (
      <header className="skills__wrapper">
        <StyledWrapper header={WrapperHeader} footer={WrapperFooter}>
          <h2>Basics</h2>
          <div className="skills__section border-top-red">
            <div className="">
              <h3>VanillaJS Principles : </h3>
              <p className="styled-wrapper__text styled-wrapper__text--curly">{`{`}</p>
              <ul>
                <li>
                  Scope <span className="styled-wrapper__text"> : true,</span>
                </li>
                <li>
                  Closures{" "}
                  <span className="styled-wrapper__text"> : true,</span>
                </li>
                <li>
                  Object Prototypes{" "}
                  <span className="styled-wrapper__text"> : true,</span>
                </li>
                <li>
                  async / await{" "}
                  <span className="styled-wrapper__text"> : true,</span>
                </li>
                <li>
                  Promises{" "}
                  <span className="styled-wrapper__text"> : true,</span>
                </li>
                <li>
                  Regular Expressions{" "}
                  <span className="styled-wrapper__text"> : true,</span>
                </li>
                <li>
                  Math library{" "}
                  <span className="styled-wrapper__text"> : true,</span>
                </li>
                <li>
                  DOM Manipulations{" "}
                  <span className="styled-wrapper__text"> : true,</span>
                </li>
              </ul>
              <p className="styled-wrapper__text styled-wrapper__text--curly">{`},`}</p>
            </div>
            <div>
              <h3>Philosophy</h3>
              <p className="styled-wrapper__text styled-wrapper__text--curly">{`{`}</p>
              <ul>
                <li>
                  Clean Code<span className="styled-wrapper__text">
                    {" "}
                    : true,
                  </span>
                </li>
                <li>
                  Functional Programming<span className="styled-wrapper__text">
                    {" "}
                    : true,
                  </span>
                </li>
                <li>
                  Scalability<span className="styled-wrapper__text">
                    {" "}
                    : true,
                  </span>
                </li>
                <li>
                  Reusability<span className="styled-wrapper__text">
                    {" "}
                    : true,
                  </span>
                </li>
                <li>
                  Security<span className="styled-wrapper__text"> : true,</span>
                </li>
                <li>
                  Speed<span className="styled-wrapper__text"> : true,</span>
                </li>
              </ul>
              <p className="styled-wrapper__text styled-wrapper__text--curly">{`}`}</p>
            </div>
          </div>
        </StyledWrapper>
      </header>
    );
  }
}
