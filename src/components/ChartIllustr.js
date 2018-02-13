import React, { Component } from "react";

const random4multiple = () => Math.ceil(Math.random() * 7) * 3 + "rem";

export default class ChartIllustr extends Component {
  state = {
    height1: "3rem",
    height2: "9rem",
    height3: "15rem",
    height4: "21rem",
    height5: "18rem",
    height6: "12rem",
    height7: "6rem"
  };

  animateBars = () => {
    setInterval(() => {
      this.setState(() => ({
        height1: random4multiple(),
        height2: random4multiple(),
        height3: random4multiple(),
        height4: random4multiple(),
        height5: random4multiple(),
        height6: random4multiple(),
        height7: random4multiple()
      }));
    }, 5000);
  };

  componentDidMount() {
    this.animateBars();
  }

  render() {
    console.log(this.state);
    const styleBar1 = {
      height: this.state.height1,
      width: "1rem",
      margin: ".5rem",
      backgroundColor: "#ffb3ba",
      color: "#ffb3ba",
      transition: "height 1500ms ease-in"
    };
    const styleBar2 = {
      height: this.state.height2,
      width: "1rem",
      margin: ".5rem",
      backgroundColor: "#ffdfba",
      color: "#ffdfba",
      transition: "height 1500ms ease-in"
    };
    const styleBar3 = {
      height: this.state.height3,
      width: "1rem",
      margin: ".5rem",
      backgroundColor: "#ffffba",
      color: "#ffffba",
      transition: "height 1500ms ease-in"
    };
    const styleBar4 = {
      height: this.state.height4,
      width: "1rem",
      margin: ".5rem",
      backgroundColor: "#baffc9",
      color: "#baffc9",
      transition: "height 1500ms ease-in"
    };
    const styleBar5 = {
      height: this.state.height5,
      width: "1rem",
      margin: ".5rem",
      backgroundColor: "#bae1ff",
      color: "#bae1ff",
      transition: "height 1500ms ease-in"
    };
    const styleBar6 = {
      height: this.state.height6,
      width: "1rem",
      margin: ".5rem",
      backgroundColor: "#f2e2ff",
      color: "#f2e2ff",
      transition: "height 1500ms ease-in"
    };
    const styleBar7 = {
      height: this.state.height7,
      width: "1rem",
      margin: ".5rem",
      backgroundColor: "#dcd6b4",
      color: "#dcd6b4",
      transition: "height 1500ms ease-in"
    };

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          marginBottom: "5rem",
          height: "21rem"
        }}
      >
        <div style={styleBar1}>1</div>
        <div style={styleBar2}>2</div>
        <div style={styleBar3}>3</div>
        <div style={styleBar4}>3</div>
        <div style={styleBar5}>3</div>
        <div style={styleBar6}>3</div>
        <div style={styleBar7}>3</div>
      </div>
    );
  }
}
