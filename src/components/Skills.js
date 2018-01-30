import React, { Component } from "react";
import Tree from "react-d3-tree";
import { Modal, Button } from "antd";

const myTreeData = [
  {
    name: "Skills",
    attributes: {
      HTML5: "Basics",
      CSS3: "Basics",
      JavaScript: "Basics"
    },
    children: [
      {
        name: "CSS3",
        children: [
          {
            name: "Responsive Web",
            attributes: {
              "1": "Media Queries",
              "2": "Accessibility"
            }
          },
          {
            name: "Preprocessors",
            attributes: {
              "1": "Sass"
            }
          },
          {
            name: "Framework",
            attributes: {
              "1": "Bootstrap",
              "2": "Ant Design"
            }
          }
        ]
      },
      {
        name: "JavaScript",
        children: [
          {
            name: "VanillaJS",
            children: [
              {
                name: "Standards",
                attributes: {
                  "1": "ES5",
                  "2": "ES6",
                  "3": "ES7"
                }
              }
            ]
          },
          {
            name: "Task Runners",
            attributes: { "1": "npm scripts" }
          },
          {
            name: "Package Managers",
            attributes: {
              "1": "npm",
              "2": "Yarn"
            }
          },
          {
            name: "Libraries",
            children: [
              {
                name: "React",
                attributes: { version: "16.0.0" },
                children: [{ name: "Redux" }, { name: "Redux Thunk" }]
              },
              {
                name: "jQuery"
              }
            ]
          },
          {
            name: "Testing",
            attributes: {
              "1": "Jest",
              "2": "Mocha",
              "3": "Enzyme"
            }
          },
          {
            name: "Module Loader / Bundler",
            attributes: {
              "1": "webpack"
            }
          }
        ]
      },
      {
        name: "Tools",
        children: [
          {
            name: "Debugging",
            attributes: {
              "1": "Chrome console",
              "2": "React Developer Tool",
              "3": "Redux DevTools"
            }
          },
          {
            name: "Version control",
            attributes: { "1": "Git" }
          },
          {
            name: "Linter",
            attributes: { "1": "ESLint - AirBnB" }
          },
          {
            name: "Design",
            attributes: { "1": "Photoshop", "2": "Illustrator" }
          }
        ]
      }
    ]
  }
];

export default class Skills extends Component {
  state = { visible: false };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div className="skills content-container">
        <header className="skills__general">
          <h2>General</h2>
          <div className="skills__general--section-container skills__section">
            <div className="">
              <h3>VanillaJS Principles</h3>
              <ul>
                <li>Scope</li>
                <li>Closures</li>
                <li>Object Prototypes</li>
                <li>async / await</li>
                <li>Promises</li>
                <li>Regular Expressions</li>
                <li>Math library</li>
                <li>DOM Manipulations.</li>
              </ul>
            </div>
            <div>
              <h3>Philosophy</h3>
              <ul>
                <li>Clean Code</li>
                <li>Functional Programming</li>
                <li>Scalability</li>
                <li>Reusability</li>
                <li>Security</li>
                <li>Speed</li>
              </ul>
            </div>
          </div>
        </header>
        <div className="skills__specific">
          <h2>Specific</h2>
          <div className="skills__specific--section-container">
            <div className="skills__section skills__section--left">
              <h3>Front-End</h3>
              <div className="skills__modal">
                <h4>Front-End skills tree</h4>
                <Button
                  type="primary"
                  onClick={this.showModal}
                  className="open-button"
                >
                  <i className="fa fa-tree" /> Show
                </Button>
                <Modal
                  title="Front-End Skills Tree"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                  wrapClassName="skills__modal"
                  style={{ top: 20 }}
                  footer={null}
                >
                  <div
                    id="treeWrapper"
                    style={{
                      color: "#f7f7f7",
                      margin: "auto",
                      width: "100%",
                      height: "75vh",
                      background: "black"
                    }}
                  >
                    <Tree
                      data={myTreeData}
                      orientation="vertical"
                      initialDepth={1}
                      translate={{ x: 550, y: 20 }}
                      styles={{
                        links: { stroke: "yellow", strokeWidth: 3 }
                      }}
                    />
                  </div>
                </Modal>
              </div>
              <h4>Basics</h4>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
              </ul>
              <h4>CSS3</h4>
              <ul>
                <li>Responsive Web: Media Queries, Accessibility.</li>
                <li>Preprocessors: SASS</li>
                <li>Framework / Libraries : Bootstrap, Ant Design</li>
              </ul>
              <h4>JavaScript</h4>
              <ul>
                <li>Standards: ES5, ES6, ES7</li>
                <li>Tasks Runners: npmscripts</li>
                <li>Framework / Libraries : React, jQuery</li>
                <li>React: Redux, Redux-thunk</li>
                <li>Package Managers: npm Yarn</li>
                <li>Units Testing: Jest, Mocha, Enzyme</li>
                <li>Module Loader / Bundler: webpack</li>
              </ul>
              <h4>Tools</h4>
              <ul>
                <li>
                  Debugging: Chrome console, React Developer Tool, Redux
                  DevTools
                </li>
                <li>Version Control: Git</li>
                <li>Linter: ESLint (AirBnB guidelines)</li>
                <li>Design: Photoshop, Illustrator</li>
              </ul>
            </div>
            <div className="skills__section skills__section--right">
              <div>
                <h3>Back-End</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
