import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button, Checkbox, Select, Input } from "antd";
import moment from "moment";

import { startAddProject } from "../../actions/projects";

const CheckboxGroup = Checkbox.Group;
const Option = Select.Option;
const { TextArea } = Input;

const initialState = {
  visible: false,
  confirmLoading: false,
  title: "",
  description: "",
  type: "project",
  createdAt: 0,
  options: ["HTML5", "CSS3", "JavaScript"]
};

export class DashboardProjectsNew extends Component {
  state = initialState;

  handleTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };

  handleDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  handleSelectChange = value => {
    this.setState(() => ({ type: value }));
  };

  handleDateChange = e => {
    const dateStr = e.target.value;

    this.setState(() => ({ createdAt: dateStr }));
  };

  onCheckboxChange = checkedValues => {
    console.log("checked = ", checkedValues);
    this.setState(() => ({ options: checkedValues }));
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false
    });
  };

  handleSubmit = () => {
    this.setState({
      confirmLoading: true
    });
    const rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
    const dateStr = this.state.createdAt;
    if (dateStr.match(rxDatePattern)) {
      const date = moment(dateStr, "MM/DD/YYYY").valueOf();
      this.props
        .startAddProject({
          title: this.state.title,
          description: this.state.description,
          type: this.state.type,
          options: this.state.options,
          createdAt: date
        })
        .then(() => {
          this.setState(() => initialState);
        });
    } else {
      return console.log("This date is not valid");
    }
  };

  render() {
    const plainOptions = [
      "HTML5",
      "CSS3",
      "JavaScript",
      "SASS",
      "React",
      "Redux",
      "npm",
      "yarn",
      "webpack",
      "jest",
      "mocha",
      "Node.js",
      "Express",
      "Authentication",
      "Oauth",
      "JWT",
      "MongoDB",
      "Mongoose",
      "Firebase",
      "HerokuApp"
    ];
    console.log();
    return (
      <div className="dashboard__section">
        <Button onClick={() => this.setState(() => ({ visible: true }))}>
          New
        </Button>
        <Modal
          title="New Project"
          visible={this.state.visible}
          onOk={this.handleSubmit}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
        >
          <form className="project-form">
            <div>
              <label htmlFor="">Title:</label>
              <Input
                value={this.state.title}
                type="text"
                onChange={this.handleTitleChange}
              />
              <label htmlFor="">Description:</label>
              <TextArea
                value={this.state.description}
                type="text"
                onChange={this.handleDescriptionChange}
              />
            </div>

            <div>
              <label htmlFor="">Type: </label>
              <Select
                defaultValue="project"
                style={{ width: 120 }}
                onChange={this.handleSelectChange}
              >
                <Option value="project">Project</Option>
                <Option value="boilerplate">Boilerplate</Option>
                <Option value="snippet">Snippet</Option>
                <Option value="algorithmics">algorithmics</Option>
              </Select>
            </div>
            <div>
              <label htmlFor="">Date (MM/DD/YYYY): </label>
              <Input
                onChange={this.handleDateChange}
                value={this.state.createdAt}
                type="text"
              />
            </div>
            <div>
              <h3>Technologies</h3>
              <div>
                <CheckboxGroup
                  options={plainOptions}
                  defaultValue={["HTML5", "CSS3", "JavaScript"]}
                  onChange={this.onCheckboxChange}
                />
              </div>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddProject: project => dispatch(startAddProject(project))
});

export default connect(undefined, mapDispatchToProps)(DashboardProjectsNew);
