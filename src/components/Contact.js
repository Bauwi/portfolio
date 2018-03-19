import React, { Component } from "react";
import ContactForm from "./ContactForm";

const animation = [
  { className: "cube1--initial", delay: 2500 },

  { className: "ninja--initial", delay: 2500 },
  { className: "ninja--enter", delay: 2500 },

  { className: "strip--appear", delay: 1500 },
  { className: "cube1--translate", delay: 1000 },
  { className: "cube1--rotate", delay: 3500 },
  { className: "cube1--grow", delay: 3800 },
  { className: "inputs--initial", delay: 4000 },
  { className: "inputs--appear", delay: 6600 }
];

const animationBackground = [
  { className: "wrap__background-change", delay: 3500 }
];

export default class More extends Component {
  state = {
    cube1ClassName:
      "cube1 cube1--initial ninja--initial ninja--enter  strip--appear cube1--translate cube1--rotate cube1--grow inputs--appear inputs--initial ",
    wrapClassName: "wrap wrap__background-change"
  };

  componentDidMount() {
    this.applyTransition(animation);
    this.applyBackgroundTransition(animationBackground);
  }

  applyTransition = transitions => {
    transitions.forEach((cur, i) => {
      setTimeout(() => {
        console.log(cur);
        this.setState(prevState => ({
          cube1ClassName: prevState.cube1ClassName.replace(
            cur.className.trim(),
            ""
          )
        }));
      }, cur.delay);
    });
  };

  applyBackgroundTransition = transitions => {
    transitions.forEach((cur, i) => {
      setTimeout(() => {
        console.log(cur);
        this.setState(prevState => ({
          wrapClassName: prevState.wrapClassName.replace(
            cur.className.trim(),
            ""
          )
        }));
      }, cur.delay);
    });
  };

  render() {
    console.log(this.state.wrapClassName);
    return (
      <div className={this.state.wrapClassName}>
        <div className={this.state.cube1ClassName}>
          <div className="front">
            <svg id="headband" viewBox="0 0 790.58 1415.07">
              <path
                d="M549.47,509.89"
                fill="#333"
                stroke="red"
                strokeLinecap="round"
                strokeWidth="3"
                transform="translate(-313.37 -2.25)"
              />
              <path
                d="M629.37,440.73s26.23-17.89,32.2-102.55c3.2-45.41,1.25-93.22-1.24-127.79-2.95-40.88-17.68-80.18-43.14-112.3-23.65-29.84-59-63.46-108.26-84.1-38-15.92-81.16-15.89-118.44,1.6-36.81,17.27-75.86,51.65-77.11,119.89,0,0-1.19,38.16,38.16,96.59S375.38,428.8,375.38,428.8s-31,96.59,89.43,96.59S629.37,440.73,629.37,440.73Z"
                fill="#333"
                stroke="grey"
                strokeLinecap="round"
                strokeWidth="30"
                transform="translate(-313.37 -2.25)"
              />
              <path
                d="M438.58,632.71,534,1379.16,784.38,1121.6l-186-531.82S567.36,625.55,438.58,632.71Z"
                fill="#333"
                stroke="grey"
                strokeLinecap="round"
                strokeWidth="30"
                transform="translate(-313.37 -2.25)"
              />
              <path
                d="M648.44,534.93l255.18,550.9L755.76,1262.31l69.16,155,279-381.57L717.61,456.23S691.37,515.85,648.44,534.93Z"
                fill="#333"
                stroke="grey"
                strokeLinecap="round"
                strokeWidth="30"
                transform="translate(-313.37 -2.25)"
              />
            </svg>
            <div className="strip strip__small" />
          </div>
          <div className="back">
            <div className="ninja__container">
              <svg id="ninja" viewBox="0 0 1290.92 1229.97">
                <line
                  fill="none"
                  stroke="#333"
                  strokeLinecap="round"
                  strokeWidth="69"
                  x1="34.5"
                  x2="1185.12"
                  y1="-165.5"
                  y2="942.33"
                />
                <path
                  d="M1055.26,30.17c232.4,164.26,272.55,350.43,272.55,350.43,79.09,202,8.52,283.5-7.3,311.49S1267,703,1267,703s-46.24-21.9-91.26-52.32-1.22-79.09-1.22-79.09c15.82-26.77-11-43.8-11-43.8s-64.49-54.75-108.29-92.47-23.12,6.08-23.12,6.08C1157.47,660.45,1174.5,1026,1174.5,1026L1168,1150c-8.21,98.55-87.6,19.16-93.08,11s-172.47-197.1-249.12-271-131.4-16.43-158.78,0-213.53,227.22-213.53,227.22L386,1186.09c-57.19,52.32-73-32.85-73-32.85l2.3-167.07a143.81,143.81,0,0,1,1.54-19c46.63-315.39,134.86-503.78,134.86-503.78,20.68-56-13.38-26.77-13.38-26.77L328.86,519.31c-32.85,19.47-7.3,54.75-7.3,54.75,43.8,63.27-3.65,71.79-3.65,71.79L251,688.44c-53.54,35.29-75.44,7.3-75.44,7.3-19.41-10.45-32-43.36-38.75-67.23a159.82,159.82,0,0,1-6.09-45.34l.72-72.53A245.08,245.08,0,0,1,141,444.87c89.84-310.14,296.18-411,296.18-411Z"
                  fill="#333"
                  stroke="none"
                  strokeWidth="57"
                  transform="translate(-102.21 -1.62)"
                />
              </svg>
            </div>
          </div>
          <div className="top" />
          <div className="bottom">bottom</div>
          <div className="left">
            <div className="left__content">
              <div className=" strip strip__large strip__large--left">
                <span />
                <span />
              </div>
              <div className="contact__form__infos">
                <p>kvn.philippe[at]gmail.com</p>
                <p>+33699010175</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="contact__form__container">
              <h1>Contact</h1>
              <div className="contact__form">
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="strip strip__large strip__large--right" />
          <div className="strip strip__small strip__large--right" />
          <div className="strip strip__small strip__large--right strip__large--right--alternative" />
        </div>
      </div>
    );
  }
}
