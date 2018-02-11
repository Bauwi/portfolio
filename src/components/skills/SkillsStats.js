import React, { Component } from "react";
import { connect } from "react-redux";
import StyledWrapper from "../StyledWrapper";

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
          <h2>Stats</h2>
          <div className="skills__section skills__section--stats">
            <p>
              5468 lines written over {this.props.projects.length} projects,
              including :{" "}
            </p>
            <ul>
              <li>
                <span>{numOfComponents}</span> components built.
              </li>
              <li>
                <span>{clientjs}</span> lines of client-side code.
              </li>
              <li>
                <span>{serverjs}</span> lines of server-side code.
              </li>
              <li>
                <span>{css}</span> of css designed.
              </li>
              <li>
                <span>{html}</span> of HTML marked out.
              </li>
            </ul>
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
