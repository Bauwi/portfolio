import React, { Component } from "react";

import DashboardAnalytics from "./DashboardAnalytics";
import DashboardSkills from "./DashboardSkills";
import DashboardProjects from "./DashboardProjects";

export default class Dashboard extends Component {
  state = {
    currentlyOn: 1
  };

  handleMenuClick = e => {
    const currentlyOn = e.target.value;
    this.setState(() => ({ currentlyOn }));
  };

  renderMain = () => {
    if (this.state.currentlyOn === 1) {
      return <DashboardAnalytics />;
    } else if (this.state.currentlyOn === 2) {
      return <DashboardProjects />;
    } else if (this.state.currentlyOn === 3) {
      return <DashboardSkills />;
    }
  };

  render() {
    console.log(this.state.currentlyOn);
    return (
      <div className="content-container portfolio">
        <div>
          <nav className="sidebar">
            <ul className="sidebar--portfolio">
              <li value="1" onClick={this.handleMenuClick}>
                ANALYTICS
              </li>
              <li value="2" onClick={this.handleMenuClick}>
                PROJECTS
              </li>
              <li value="3" onClick={this.handleMenuClick}>
                SKILLS
              </li>
            </ul>
          </nav>
        </div>

        <div className="portfolio__main">{this.renderMain()}</div>
      </div>
    );
  }
}
