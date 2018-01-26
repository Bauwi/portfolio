import React, { Component } from "react";

export default class Portfolio extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="portfolio">
        <div className="square" />
        <h1>My Portfolio</h1>
      </div>
    );
  }
}
