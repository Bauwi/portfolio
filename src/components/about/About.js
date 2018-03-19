import React, { Component } from "react";

import Face from "./Face";
import MapComponent from "./MapComponent";

import applyTransition from "../../utils/applyTransition";

const animation = [
  { className: "about__id--appear", delay: 2500 },

  { className: "about__plan--rotate", delay: 6000 },
  { className: "about__mobility--dig", delay: 7000 },
  { className: "about__flag--appear", delay: 8000 }
];

export default class About extends Component {
  state = {
    aboutClassName:
      "about about__id--appear about__plan--rotate about__mobility--dig about__flag--appear"
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
              <MapComponent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
