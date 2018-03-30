import React, { Component } from "react";

import Face from "./Face";
import MapComponent from "./MapComponent";

import applyTransition from "../../utils/applyTransition";

const animation = [
  { className: "about__mobility--dig", delay: 5000 },
  { className: "about__flag--appear", delay: 7000 }
];

export default class About extends Component {
  state = {
    aboutClassName: "about about__mobility--dig about__flag--appear",
    now: false,
    maybe: false
  };

  componentDidMount() {
    this.applyTransition(animation);
  }

  applyTransition = transitions => {
    transitions.forEach((cur, i) => {
      setTimeout(() => {
        console.log(cur);
        this.setState(prevState => ({
          aboutClassName: prevState.aboutClassName.replace(
            cur.className.trim(),
            ""
          )
        }));
      }, cur.delay);
    });
  };

  handleNow = () => {
    this.setState(prevState => ({ now: !prevState.now }));
  };

  handleMaybe = () => {
    this.setState(prevState => ({ maybe: !prevState.maybe }));
  };

  render() {
    return (
      <div className={this.state.aboutClassName}>
        <div className="about__shadow" />
        <div className="about__plan">
          <div className="about__id">
            <section className="flag--edge">
              <div className="flag__strip flag__strip--blue" />
              <div className="flag__strip flag__strip--white" />
              <div className="flag__strip flag__strip--red" />
            </section>
            <section>
              <h2 className="about__id__name">KEVIN PHILIPPE</h2>
              <p className="about__id__age">27</p>
              <p className="about__id__address">PARIS</p>
            </section>
          </div>

          <div className="about__mobility">
            <div className="about__mobility__cube">
              <div className="about__mobility__cube__left">
                <section className="flag flag--mobility flag--mobility--left">
                  <div className="flag__strip flag__strip--blue" />
                  <div className="flag__strip flag__strip--white" />
                  <div className="flag__strip flag__strip--red" />
                </section>{" "}
              </div>
              <div className="about__mobility__cube__front">
                <section className="flag flag--mobility flag--mobility--front">
                  <div className="flag__strip flag__strip--blue" />
                  <div className="flag__strip flag__strip--white" />
                  <div className="flag__strip flag__strip--red" />
                </section>

                <div className="about__mobility__cube__front__shadow" />
              </div>
              <MapComponent now={this.state.now} maybe={this.state.maybe} />
            </div>
            <footer className="about__mobility__legend">
              <p onMouseEnter={this.handleNow} onMouseLeave={this.handleNow}>
                now
              </p>
              <p
                onMouseEnter={this.handleMaybe}
                onMouseLeave={this.handleMaybe}
              >
                maybe
              </p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
