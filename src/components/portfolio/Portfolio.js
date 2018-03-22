import React, { Component } from "react";

import Filters from "./Filters";

import PortfolioProjectsList from "./PortfolioProjectsList";
import Cube from "../Cube";

export class Portfolio extends Component {
  state = {
    projectName: "Portfolio"
  };

  onMouseEnterProject = project => {
    this.setState(() => ({ projectName: project }));
  };
  resetProjectName = () => {
    this.setState(() => ({ projectName: "" }));
  };

  render() {
    return (
      <div className="portfolio__wrapper">
        <Filters />

        <div className="portfolio">
          <div className="portfolio__strip__large" />
          <h1>My Work</h1>
          <PortfolioProjectsList
            onMouseEnterProject={this.onMouseEnterProject}
            resetProjectName={this.resetProjectName}
          />
          <p className="portfolio__title">{this.state.projectName}</p>
        </div>
      </div>
    );
  }
}

export default Portfolio;
