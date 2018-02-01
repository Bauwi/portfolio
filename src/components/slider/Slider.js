import React, { Component } from "react";

import Dots from "./Dots";

import { Link, Element, scroller } from "react-scroll";

export default class Slider extends Component {
  state = {
    current: "insideContainer1",
    coordsYStart: 0,
    moveY: 0
  };

  handleSetActive = current => {
    this.setState(() => ({ current }));
  };

  scrollToWithContainer(to) {
    scroller.scrollTo(to, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutCubic",
      containerId: "containerElement"
    });
  }

  wheel = e => {
    console.log(React.Children);
    const { current } = this.state;
    const currentIndex = parseInt(
      current.slice(current.length - 1, current.length)
    );
    const next = `insideContainer${currentIndex + 1}`;
    const previous = `insideContainer${currentIndex - 1}`;

    if (Math.abs(e.deltaY) >= 100) {
      if (e.deltaY > 0 && currentIndex !== this.props.numofslides) {
        this.scrollToWithContainer(next);
      } else if (e.deltaY < 0 && currentIndex !== 1) {
        this.scrollToWithContainer(previous);
      }
    }
  };

  touchStart = e => {
    this.setState(() => ({ moveY: 0 }));

    const coordsYStart = e.touches[0].clientY;
    console.log("YStart", coordsYStart);
    this.setState(() => ({ coordsYStart }));
  };

  touchMove = e => {
    const moveY = this.state.coordsYStart - e.touches[0].clientY;
    console.log(moveY);
    this.setState(() => ({ moveY }));
  };

  touchEnd = e => {
    console.log("moveY on touch end: ", this.state.moveY);
    const { moveY } = this.state;

    const { current } = this.state;
    const currentIndex = parseInt(
      current.slice(current.length - 1, current.length)
    );
    const next = `insideContainer${currentIndex + 1}`;
    const previous = `insideContainer${currentIndex - 1}`;

    if (Math.abs(moveY) >= 70) {
      if (moveY > 0 && currentIndex !== this.props.numofslides) {
        this.scrollToWithContainer(next);
      } else if (moveY < 0 && currentIndex !== 1) {
        this.scrollToWithContainer(previous);
      }
    }
  };

  render() {
    return (
      <div
        className="slider"
        onWheel={e => this.wheel(e)}
        onTouchStart={e => this.touchStart(e)}
        onTouchMove={e => this.touchMove(e)}
        onTouchEnd={e => this.touchEnd()}
      >
        <nav className="slider-nav">
          {React.Children.map(this.props.children, (child, i) => {
            return (
              <Link
                activeClass="active"
                onSetActive={this.handleSetActive}
                to={this.props.children[i].props.name}
                spy={true}
                smooth={true}
                duration={250}
                containerId="containerElement"
                style={{ display: "inline-block", margin: "20px" }}
              >
                {this.props.children[i].props.navname}
              </Link>
            );
          })}
        </nav>

        <Element
          name="test7"
          className="element"
          id="containerElement"
          style={{
            position: "relative",
            height: "100vh",
            overflowY: "hidden"
          }}
        >
          {React.Children.map(this.props.children, (child, i) => {
            return child;
          })}
        </Element>

        <Dots dots={this.props.children} currentSlide={this.state.current} />
      </div>
    );
  }
}
