import React, { Component } from "react";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="content-container portfolio">
        <div>
          <nav className="sidebar">
            <ul className="sidebar--portfolio">
              <li>ANALYTICS</li>
              <li>PROJECTS</li>
              <li>SKILLS</li>
            </ul>
          </nav>
        </div>

        <div className="portfolio__main" />
      </div>
    );
  }
}
