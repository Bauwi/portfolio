import React, { Component } from "react";
import StackGrid, { transitions } from "react-stack-grid";
import { connect } from "react-redux";

import randomStyle from "../utils/randomStyle";

const { flip } = transitions;

export class Portfolio extends Component {
  renderProjects = () => {
    return this.props.projects.map(project => (
      <div key={project._id} className={randomStyle()}>
        <h5 className="grid-item__title">{project.title}</h5>
      </div>
    ));
  };

  render() {
    return (
      <div className="content-container portfolio">
        <div>
          <nav className="sidebar">
            <ul className="sidebar--portfolio">
              <li>ALL</li>
              <li>PROJECTS</li>
              <li>BOILERPLATES</li>
              <li>SNIPPETS</li>
              <li>ALGORYTHMICS</li>
            </ul>
          </nav>
        </div>

        <div className="portfolio__main">
          <StackGrid
            columnWidth={150}
            appearDelay={100}
            gutterWidth={10}
            gutterHeight={40}
            appear={flip.appear}
            appeared={flip.appeared}
            enter={flip.enter}
            entered={flip.entered}
            leaved={flip.leaved}
          >
            {this.renderProjects()}
          </StackGrid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects.projects
});

export default connect(mapStateToProps)(Portfolio);
