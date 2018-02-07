import React, { Component } from "react";

import StyledWrapper from "../StyledWrapper";
const WrapperHeader = (
  <header className="styled-wrapper__header">
    <p>back = {"{"}</p>
  </header>
);

const WrapperFooter = (
  <footer>
    <p>{`};`}</p>
    <p />
    <p>export default [...basics, ...front, ...back];</p>
  </footer>
);

export default class SkillsBack extends Component {
  render() {
    return (
      <div className="skills__wrapper">
        <StyledWrapper header={WrapperHeader} footer={WrapperFooter}>
          <div className="skills__front__title">
            <h2>Back-End Skills</h2>
          </div>
          <div className={`skills__section border-top-red`}>
            <div>
              <h3>
                Basics :{" "}
                <span className="styled-wrapper__text styled-wrapper__text--curly">{`{`}</span>
              </h3>

              <ul>
                <li>
                  Route Configuration{" "}
                  <span className="styled-wrapper__text"> : true,</span>
                </li>
                <li>
                  SSR <span className="styled-wrapper__text"> : true,</span>
                </li>
                <li>
                  DRY <span className="styled-wrapper__text"> : true,</span>
                </li>
                <li>
                  YAGNI <span className="styled-wrapper__text"> : true,</span>
                </li>
                <li>
                  KISS <span className="styled-wrapper__text"> : true,</span>
                </li>
              </ul>
              <p className="styled-wrapper__text styled-wrapper__text--curly">{`}`}</p>

              <h3>
                Node.js :{" "}
                <span className="styled-wrapper__text styled-wrapper__text--curly">{`{`}</span>
              </h3>

              <ul>
                <li>
                  Package Manager<span className="styled-wrapper__text">
                    {" "}
                    : [ npm, Yarn ],
                  </span>
                </li>
                <li>
                  Frameworks<span className="styled-wrapper__text">
                    {" "}
                    : "Express",
                  </span>
                </li>
                <li>
                  Testing<span className="styled-wrapper__text">
                    {" "}
                    : [ Jest, Mocha, Enzyme ],
                  </span>
                </li>
              </ul>
              <p className="styled-wrapper__text styled-wrapper__text--curly">{`}`}</p>
            </div>
            <div>
              <h3>
                Technicals :{" "}
                <span className="styled-wrapper__text styled-wrapper__text--curly">{`{`}</span>
              </h3>

              <ul>
                <li>
                  Authentication{" "}
                  <span className="styled-wrapper__text">
                    : [ JWT, Oauth 2 ],
                  </span>
                </li>

                <li>
                  GraphQL<span className="styled-wrapper__text">
                    {" "}
                    : "In Progress",
                  </span>
                </li>
                <li>
                  RESTful APIs<span className="styled-wrapper__text">
                    {" "}
                    : true,
                  </span>
                </li>
                <li>
                  Websockects<span className="styled-wrapper__text">
                    {" "}
                    : "sockets.io",
                  </span>
                </li>
              </ul>
              <p className="styled-wrapper__text styled-wrapper__text--curly">{`}`}</p>

              <h3>
                Serverless :{" "}
                <span className="styled-wrapper__text styled-wrapper__text--curly">{`{`}</span>
              </h3>

              <ul>
                <li>
                  Firebase{" "}
                  <span className="styled-wrapper__text">
                    : [ Real-Time database, Firestore],
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
                  Robot3T <span className="styled-wrapper__text">: true,</span>
                </li>
                <li>
                  Postman <span className="styled-wrapper__text">: true,</span>
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
