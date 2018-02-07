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
  options: ["HTML5", "CSS3", "JavaScript"],
  imgSrc: ""
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

  handleImageChange = e => {
    const file = e.target.files[0];
    console.log(file);

    if (!file.type.includes("image/")) {
      alert("Please select an image file");
      return;
    }

    if (typeof FileReader === "function") {
      const reader = new FileReader();

      reader.onload = event => {
        const imgSrc = event.target.result;
        this.setState(() => ({ imgSrc }));
      };
      reader.readAsDataURL(file);
    } else {
      alert("Sorry, FileReader API not supported");
    }
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
          createdAt: date,
          imgSrc: this.state.imgSrc
        })
        .then(() => {
          this.setState(() => initialState);
        });
    } else {
      return console.log("This date is not valid");
    }
  };

  render() {
    console.log(this.state.imgSrc);
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
                  defaultValue="Project"
                  style={{ width: 120 }}
                  onChange={this.handleSelectChange}
                >
                  <Option value="Projects">Project</Option>
                  <Option value="Boilerplates">Boilerplate</Option>
                  <Option value="Snippets">Snippet</Option>
                  <Option value="Node Modules">Node Module</Option>
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
            </div>
            <div className="project-form--right">
              <p>Another part</p>
              <div className="project-form__image__container">
                <img src={this.state.imgSrc} alt="" />
              </div>
              <input type="file" onChange={this.handleImageChange} />
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
