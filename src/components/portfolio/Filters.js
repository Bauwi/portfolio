import React, { Component } from "react";
import { connect } from "react-redux";
import { Checkbox, Icon } from "antd";

import { updateCategories, updateTechnologies } from "../../actions/filters";

const CheckboxGroup = Checkbox.Group;
const catOptions = ["Projects", "Boilerplates", "Node Modules", "Snippets"];
const techOptions = [
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

export class Filters extends Component {
  state = {
    visible: false,
    technologies: ["HTML5", "CSS3", "JavaScript"],
    categories: ["Projects", "Boilerplates", "Node Modules", "Snippets"]
  };

  showFilters = () => {
    this.setState(({ visible }) => ({ visible: !visible }));
  };

  onCategoriesCheckboxChange = checkedValues => {
    // this.setState(() => ({ categories: checkedValues }));
    this.props.updateCategories(checkedValues);
  };
  onTechnologiesCheckboxChange = checkedValues => {
    // this.setState(() => ({ technologies: checkedValues }));
    this.props.updateTechnologies(checkedValues);
  };

  render() {
    const panelClassname = this.state.visible
      ? "portfolio__filters__panel portfolio__filters__panel--visible"
      : "portfolio__filters__panel portfolio__filters__panel--hidden";
    return (
      <div className="portfolio__filters">
        <div className="bookmark" onClick={this.showFilters}>
          <Icon type="filter" />
        </div>

        <div className={panelClassname}>
          <h3>Categories</h3>
          <CheckboxGroup
            options={catOptions}
            defaultValue={this.props.filters.categories}
            onChange={this.onCategoriesCheckboxChange}
          />
          <h3>Technologies</h3>
          <div>
            <CheckboxGroup
              options={techOptions}
              defaultValue={this.props.filters.technologies}
              onChange={this.onTechnologiesCheckboxChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToTprops = dispatch => ({
  updateCategories: categories => dispatch(updateCategories(categories)),
  updateTechnologies: technologies => dispatch(updateTechnologies(technologies))
});

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps, mapDispatchToTprops)(Filters);
