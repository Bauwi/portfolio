import React, { Component } from "react";
import { connect } from "react-redux";

import Transition from "../Transition";
import StyledWrapper from "../StyledWrapper";
import ChartIllustr from "../ChartIllustr";

import globalStats from "../../selectors/globalStats";

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

export class SkillsStats extends Component {
  render() {
    console.log(this.props.globalStats);
    const {
      numOfComponents,
      clientjs,
      serverjs,
      css,
      html
    } = this.props.globalStats;
    return (
      <header className="skills__wrapper">
        <StyledWrapper header={WrapperHeader} footer={WrapperFooter}>
          <h2>Figure Me Out !</h2>
          <div className="skills__section skills__section--stats">
            <ChartIllustr />

            <div>
              <ul>
                <p>
                  5468 lines written over {this.props.projects.length} projects,
                  including :{" "}
                </p>
                <Transition name="splat">
                  <li key="1">
                    <span>{numOfComponents}</span> components built.
                  </li>
                  <li key="2">
                    <span>{clientjs}</span> lines of client-side code.
                  </li>
                  <li key="3">
                    <span>{serverjs}</span> lines of server-side code.
                  </li>
                  <li key="3">
                    <span>{css}</span> of css designed.
                  </li>
                  <li key="4">
                    <span>{html}</span> of HTML marked out.
                  </li>
                </Transition>
              </ul>
            </div>
          </div>
        </StyledWrapper>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects.projects,
  globalStats: globalStats(state.projects.projects)
});

export default connect(mapStateToProps)(SkillsStats);
