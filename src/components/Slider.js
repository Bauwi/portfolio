import React, { Component } from "react";

import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

const durationFn = function(deltaTop) {
  return deltaTop;
};

export default class Slider extends Component {
  state = {
    current: "insideContainer1"
  };

  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });
  }

  handleSetActive = current => {
    this.setState(() => ({ current }));
  };

  scrollToWithContainer(to) {
    scroller.scrollTo(to, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutCubic",
      containerId: "containerElement"
    });
  }

  wheel = e => {
    const { current } = this.state;
    const currentIndex = current.slice(current.length - 1, current.length);
    const next = `insideContainer${parseInt(currentIndex) + 1}`;
    const previous = `insideContainer${parseInt(currentIndex) - 1}`;

    if (Math.abs(e.deltaY) >= 100) {
      if (e.deltaY > 0) {
        this.scrollToWithContainer(next);
        console.log(next);
      } else if (e.deltaY < 0) {
        this.scrollToWithContainer(previous);
      }
    }

    // console.info("x" + e.deltaX);
    console.info("y" + e.deltaY);
    // console.info("z" + e.deltaZ);
    // console.info("mode" + e.deltaMode);
  };

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  render() {
    console.log(this.props.children);
    return (
      <div className="slider" onWheel={e => this.wheel(e)}>
        <nav className="slider-nav">
          {React.Children.map(this.props.children, (child, i) => {
            // Ignore the first child
            console.log(this.props.children[i].props.name);
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
                {this.props.children[i].props.name}
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
            // Ignore the first child
            console.log(this.props.children[i].props.name);
            return child;
          })}
        </Element>
      </div>
    );
  }
}
