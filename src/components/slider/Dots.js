import React, { Component } from "react";
import { scroller } from "react-scroll";

export default class Dots extends Component {
  scrollToWithContainer(to) {
    scroller.scrollTo(to, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutCubic",
      containerId: this.props.containerId
    });
  }

  handleDotClick = index => {
    this.props.onLinkClick(`${this.props.containerID}${index}`);
  };

  renderDots = () =>
    this.props.dots.map((child, i) => {
      const className =
        child.props.name === this.props.currentSlide
          ? `dotstyle-drawcircle--yellow current`
          : "";

      return (
        <li
          onClick={() => this.handleDotClick(i + 1)}
          key={child.props.name}
          className={className}
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 16 16"
            preserveAspectRatio="none"
          >
            <circle cx="8" cy="8" r="6.215" />
          </svg>
        </li>
      );
    });

  render() {
    return (
      <div className="dotstyle__wrapper">
        <div className="dotstyle dotstyle-drawcircle">
          <ul>{this.renderDots()}</ul>
        </div>
      </div>
    );
  }
}
