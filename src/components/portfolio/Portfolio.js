import React, { Component } from "react";

import Filters from "./Filters";

import PortfolioProjectsList from "./PortfolioProjectsList";
import Loader from "../Loader";

export class Portfolio extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState(() => ({ loading: false }));
    }, 1000);
  }
  render() {
    if (this.state.loading) {
      return <Loader />;
    }
    return (
      <div className="portfolio__wrapper">
        <Filters />
        <div className="portfolio">
          <PortfolioProjectsList />
        </div>
      </div>
    );
  }
}

export default Portfolio;
