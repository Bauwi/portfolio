import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

import { Table } from "antd";

export class DashboardProjectsTable extends Component {
  render() {
    const columns = [
      {
        title: "Title",
        dataIndex: "title",
        render: text => <a href="#">{text}</a>
      },
      {
        title: "Description",
        dataIndex: "description"
      },
      {
        title: "Type",
        dataIndex: "type"
      },
      {
        title: "Date",
        dataIndex: "createdAt"
      }
    ];

    const data = this.props.projects.map(project => ({
      ...project,
      createdAt: moment(project.createdAt).format("Do MMM, YYYY"),
      key: project._id
    }));

    return (
      <div className="dashboard__section">
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects.projects
});

export default connect(mapStateToProps)(DashboardProjectsTable);
