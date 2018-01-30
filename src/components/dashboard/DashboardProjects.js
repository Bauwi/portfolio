import React, { Component } from "react";

import DashboardProjectsNew from "./DashboardProjectsNew";
import DashboardProjectsTable from "./DashboardProjectsTable";

export default class DashboardProjects extends Component {
  render() {
    return (
      <div>
        <h2 className="dashboard__tab-title">Projects</h2>
        <DashboardProjectsNew />
        <DashboardProjectsTable />
      </div>
    );
  }
}
