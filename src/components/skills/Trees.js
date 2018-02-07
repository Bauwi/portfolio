import React, { Component } from "react";
import Tree from "react-d3-tree";
import { Modal, Button } from "antd";

const styles = {
  nodes: {
    node: {
      name: { stroke: "#f7f7f7", fontFamily: "Special Elite" },
      circle: { stroke: "#f7f7f7", fill: "red", r: "7" }
    },
    leafNode: {
      name: { stroke: "#f7f7f7", fontFamily: "Special Elite" },
      circle: {
        stroke: "#f7f7f7",
        fill: "rgb(100,100,100)",
        r: "7"
      }
    }
  },

  links: { stroke: "rgb(100,0,0)", strokeWidth: 1 }
};

const FrontData = [
  {
    name: "Front-End Skills",
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
                children: [
                  { name: "React-Router" },
                  { name: "Redux" },
                  { name: "Redux Thunk" }
                ]
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

const BackData = [
  {
    name: "Back-End Skills",
    children: [
      {
        name: "Node.js",
        children: [
          {
            name: "Package Manager",
            attributes: {
              "1": "npm",
              "2": "Yarn"
            }
          },
          {
            name: "Frameworks",
            children: [{ name: "Express" }]
          },
          {
            name: "Testing",
            children: [{ name: "Jest" }, { name: "Mocha" }, { name: "Enzyme" }]
          }
        ]
      },
      {
        name: "Techniques",
        children: [
          {
            name: "Authentication",
            children: [{ name: "JWT" }, { name: "OAuth 2" }]
          },
          { name: "GraphQL" },
          { name: "RESTful APIs" },
          { name: "websockets", children: [{ name: "socket.io" }] }
        ]
      },
      {
        name: "Databases",
        children: [
          {
            name: "NoSQL",
            children: [{ name: "MongoDB" }]
          }
        ]
      },
      {
        name: "Serverless",
        children: [
          {
            name: "Firebase",
            children: [{ name: "Real-time DB" }, { name: "Firestore" }]
          }
        ]
      }
    ]
  }
];

export default class Trees extends Component {
  state = { front: true };

  switchData = () => {
    console.log(this.state.front);
    this.setState(({ front }) => ({ front: !front }));
  };

  render() {
    const frontTreeClassname = this.state.front
      ? "tree__container"
      : "tree__container tree--hidden";

    const backTreeClassname = !this.state.front
      ? "tree__container"
      : "tree__container tree--hidden";
    return (
      <div className="skills__modal">
        <Modal
          title="Front-End Skills Tree"
          visible={this.props.treeVisible}
          onOk={this.props.handleOk}
          onCancel={this.props.handleCancel}
          wrapClassName="skills__modal"
          style={{ top: 20 }}
          footer={null}
        >
          <Button onClick={this.switchData}>switch</Button>
          <div className={frontTreeClassname}>
            <div
              id="treeWrapper"
              style={{
                color: "#f7f7f7",
                margin: "auto",
                width: "100%",
                height: "75vh",
                background: "transparent"
              }}
            >
              <Tree
                data={FrontData}
                orientation="vertical"
                initialDepth={1}
                translate={{ x: 570, y: 20 }}
                styles={styles}
              />
            </div>
          </div>

          <div className={backTreeClassname}>
            <div
              id="treeWrapper2"
              style={{
                color: "#f7f7f7",
                margin: "auto",
                width: "100%",
                height: "75vh",
                background: "black"
              }}
            >
              <Tree
                data={BackData}
                orientation="vertical"
                initialDepth={1}
                translate={{ x: 570, y: 20 }}
                styles={styles}
              />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
