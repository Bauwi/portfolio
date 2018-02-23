import React, { Component } from "react";

import Dots from "./Dots";

import { Link, Element, scroller, scrollSpy, Events } from "react-scroll";

export default class Slider extends Component {
  state = {
    current: `${this.props.name}1`,
    coordsYStart: 0,
    moveY: 0
  };

  handleSetActive = current => {
    //Time out to smooth navigation. Avoid scrollY to trigger a multiple level move.
    setTimeout(() => {
      this.setState(() => ({ current }));
    }, 300);
  };

  scrollToWithContainer(to) {
    scroller.scrollTo(to, {
      duration: 500,
      delay: 0,
      smooth: "easeInOutCubic",
      containerId: this.props.name
    });
  }

  onLinkClick = to => {
    console.log(to);
    this.scrollToWithContainer(to);
    this.setState(() => ({ current: to }));
  };

  wheel = e => {
    const { current } = this.state;
    const currentIndex = parseInt(
      current.slice(current.length - 1, current.length),
      10
    );
    const next = `${this.props.name}${currentIndex + 1}`;
    const previous = `${this.props.name}${currentIndex - 1}`;
    if (Math.abs(e.deltaY) >= 100) {
      if (e.deltaY > 0 && currentIndex !== this.props.numofslides) {
        this.handleSetActive(next);
        this.scrollToWithContainer(next);
      } else if (e.deltaY < 0 && currentIndex !== 1) {
        this.handleSetActive(previous);
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
      current.slice(current.length - 1, current.length),
      10
    );
    const next = `${this.props.name}${currentIndex + 1}`;
    const previous = `${this.props.name}${currentIndex - 1}`;

    if (Math.abs(moveY) >= 70) {
      if (moveY > 0 && currentIndex !== this.props.numofslides) {
        this.handleSetActive(next);
        this.scrollToWithContainer(next);
      } else if (moveY < 0 && currentIndex !== 1) {
        this.handleSetActive(previous);
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
        <div className="slider-nav">
          <nav>
            {React.Children.map(this.props.children, (child, i) => {
              const navClassname =
                child.props.name === this.state.current
                  ? `slider-nav--navlink slider-nav--navlink--active`
                  : `slider-nav--navlink`;
              return (
                <div
                  className={navClassname}
                  onClick={() => {
                    this.scrollToWithContainer(child.props.name);
                    this.setState(() => ({ current: child.props.name }));
                  }}
                >
                  {child.props.navname}
                </div>
              );
            })}
          </nav>
        </div>
        <Element
          name="test7"
          className="element"
          id={this.props.name}
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

        <Dots
          onLinkClick={this.onLinkClick}
          containerID={this.props.name}
          dots={this.props.children}
          currentSlide={this.state.current}
          color={this.props.color}
        />
      </div>
    );
  }
}
