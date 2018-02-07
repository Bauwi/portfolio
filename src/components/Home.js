import React, { Component } from "react";

import StyledWrapper from "./StyledWrapper";

const WrapperHeader = (
  <header>
    <p>class WebDev extends Developper {`{`}</p>
    <p>getGreetings() {`{`}</p>
    <p>return {`{`}</p>
  </header>
);

const WrapperFooter = (
  <footer>
    <p>{`}`}</p>

    <p>{`}`}</p>
    <p>{`}`}</p>
    <p>export default WebDev;</p>
  </footer>
);

export default class Home extends Component {
  render() {
    return (
      <StyledWrapper header={WrapperHeader} footer={WrapperFooter}>
        <div className="home">
          <div className="home__left">Hi You</div>
          <div className="home__right">
            <img src="/tree.png" alt="" />
          </div>
        </div>
      </StyledWrapper>
    );
  }
}
