import React, { Component } from "react";

import Face from "./Face";
import Infos from "./Infos";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="svg-arrow__container">
          <svg id="arrow" viewBox="0 0 1398.72 1390.11">
            <line
              fill="none"
              stroke="#00fff8"
              strokeWidth="556"
              x1="679.99"
              x2="1202.98"
              y1="674.14"
              y2="1192.7"
            />
            <polygon
              fill="#00fff8"
              points="349.8 1283.66 0 0 1286.68 338.78 349.8 1283.66"
            />
            <line
              fill="none"
              stroke="#000"
              strokeWidth="418"
              x1="660.98"
              x2="1154.2"
              y1="655.29"
              y2="1144.33"
            />
            <polygon points="381.71 1170.81 85.86 85.12 1174.1 371.65 381.71 1170.81" />
            <line
              fill="none"
              stroke="#fff"
              strokeWidth="345"
              x1="645.37"
              x2="1132.24"
              y1="638.15"
              y2="1120.9"
            />
            <polygon
              fill="#fff"
              points="397.8 1095.16 135.53 132.7 1100.25 386.7 397.8 1095.16"
            />
          </svg>
        </div>
        <Face />
        <div className="infos__container">
          <Infos />
        </div>
      </div>
    );
  }
}
