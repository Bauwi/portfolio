import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import StackGrid, { transitions } from "react-stack-grid";
import sizeMe from "react-sizeme";

import PortfolioProjectsListItem from "./PortfolioProjectsListItem";

import getVisibleProjects from "../../selectors/filters";

const { fade } = transitions;

export class PortfolioProjectsList extends Component {
  renderProjects = () => {
    return this.props.projects.map(project => (
      <PortfolioProjectsListItem
        key={project._id}
        project={project}
        onMouseEnterProject={this.props.onMouseEnterProject}
        resetProjectName={this.props.resetProjectName}
      />
    ));
  };

  render() {
    console.log(this.props.projects);
    const { size: { width } } = this.props;
    return (
      <div className="portfolio__main">
        <div className="portfolio__main__container">
          <StackGrid
            columnWidth={
              width <= 600 ? "100%" : width <= 800 ? "33.33%" : "25%"
            }
            appearDelay={100}
            gutterWidth={500}
            gutterHeight={1}
            appear={fade.appear}
            appeared={fade.appeared}
            enter={fade.enter}
            entered={fade.entered}
            leaved={fade.leaved}
          >
            {this.renderProjects()}
          </StackGrid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: getVisibleProjects(state.projects.projects, state.filters)
  // projects: state.projects.projects
});

export default sizeMe()(
  withRouter(connect(mapStateToProps)(PortfolioProjectsList))
);
