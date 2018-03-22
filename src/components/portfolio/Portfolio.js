import React, { Component } from "react";

import Filters from "./Filters";

import PortfolioProjectsList from "./PortfolioProjectsList";
import Loader from "../Loader";
import Cube from "../Cube";

export class Portfolio extends Component {
  state = {
    loading: true,
    projectName: "Portfolio"
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => ({ loading: false }));
    }, 1000);
  }

  onMouseEnterProject = project => {
    this.setState(() => ({ projectName: project }));
  };
  resetProjectName = () => {
    this.setState(() => ({ projectName: "" }));
  };

  render() {
    if (this.state.loading) {
      return <Loader />;
    }
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
