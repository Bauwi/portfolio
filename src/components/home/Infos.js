import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

export class Infos extends Component {
  handleRoute = route => {
    this.props.history.push(route);
  };

  render() {
    return (
      <div className="infos">
        <svg viewBox="0 0 5154.17 3318.49">
          <g id="contact">
            <text
              fill="#fff"
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="250"
              stroke="#fff"
              strokeWidth="92"
              transform="translate(166.67 276.82)"
            >
              Feel free to contact me !
            </text>
            <text
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="250"
              transform="translate(166.67 276.82)"
            >
              Feel free to contact me !
            </text>
            <text
              fill="none"
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="144.59"
              stroke="#fff"
              strokeWidth="92"
              transform="translate(2477.01 3202.95)"
            >
              Contact
            </text>
            <text
              fill="#fff"
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="144.59"
              stroke="#000"
              strokeWidth="65"
              transform="translate(2477.01 3202.95)"
            >
              Contact
            </text>
            <text
              onClick={() => this.handleRoute("/contact")}
              fill="#f2f2f2"
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="144.59"
              transform="translate(2477.01 3202.95)"
            >
              Contact
            </text>
          </g>
          <g id="portfolio">
            <text
              fill="#fff"
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="250"
              stroke="#fff"
              strokeWidth="92"
              transform="translate(166.67 276.82)"
            >
              Please, check my Portfolio...
            </text>
            <text
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="250"
              transform="translate(166.67 276.82)"
            >
              Please, check my Portfolio...
            </text>
            <text
              fill="none"
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="144.59"
              stroke="#fff"
              strokeWidth="92"
              transform="translate(1025.99 3202.95)"
            >
              Portfolio
            </text>
            <text
              fill="#f2f2f2"
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="144.59"
              stroke="#000"
              strokeWidth="65"
              transform="translate(1025.99 3202.95)"
            >
              Portfolio
            </text>
            <text
              onClick={() => this.handleRoute("/portfolio")}
              fill="#f2f2f2"
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="144.59"
              transform="translate(1025.99 3202.95)"
            >
              Portfolio
            </text>
          </g>
          <g id="skills">
            <text
              fill="#fff"
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="250"
              stroke="#fff"
              strokeWidth="92"
              transform="translate(239.36 276.82)"
            >
              ...and take a look at my skills.
            </text>
            <text
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="250"
              transform="translate(239.36 276.82)"
            >
              ...and take a look at my skills.
            </text>
            <text
              fill="none"
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="144.59"
              stroke="#fff"
              strokeWidth="92"
              transform="translate(1854.57 3202.95)"
            >
              Skills
            </text>
            <text
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="144.59"
              stroke="#000"
              strokeWidth="65"
              transform="translate(1854.57 3202.95)"
            >
              Skills
            </text>
            <text
              onClick={() => this.handleRoute("/skills")}
              fill="#f2f2f2"
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="144.59"
              transform="translate(1854.57 3202.95)"
            >
              Skills
            </text>
          </g>
          <g id="technos">
            <text
              fill="#f2f2f2"
              fontFamily="MyriadPro-It, Myriad Pro"
              fontSize="96.39"
              transform="translate(1036 2599.39)"
            >
              Rea
              <tspan x="144.39" y="0">
                c
              </tspan>
              <tspan x="185.75" y="0">
                t
              </tspan>
            </text>
            <text
              fill="#f2f2f2"
              fontFamily="MyriadPro-It, Myriad Pro"
              fontSize="96.39"
              transform="translate(1379.94 2599.39)"
            >
              Red
              <tspan x="144.68" y="0">
                u
              </tspan>
              <tspan x="195.1" y="0">
                x
              </tspan>
            </text>
            <text
              fill="#f2f2f2"
              fontFamily="MyriadPro-It, Myriad Pro"
              fontSize="96.39"
              transform="translate(1722.18 2604.78)"
            >
              Exp
              <tspan x="138.42" y="0">
                r
              </tspan>
              <tspan x="168.49" y="0">
                ess
              </tspan>
            </text>
            <text
              fill="#f2f2f2"
              fontFamily="MyriadPro-It, Myriad Pro"
              fontSize="96.39"
              transform="translate(2111.95 2609.39)"
            >
              MongoDB
            </text>
            <text
              fill="#f2f2f2"
              fontFamily="MyriadPro-It, Myriad Pro"
              fontSize="96.39"
              transform="translate(2594.49 2607.39)"
            >
              and Mo
              <tspan x="295.44" y="0">
                r
              </tspan>
              <tspan x="325.51" y="0">
                e
              </tspan>
            </text>
            <text
              fill="#fff"
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="250"
              stroke="#fff"
              strokeWidth="92"
              transform="translate(158.17 273.75)"
            >
              ...familiar with :
            </text>
            <text
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="250"
              transform="translate(158.17 273.75)"
            >
              ...familiar with :
            </text>
            <text
              fill="#fff"
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="250"
              stroke="#fff"
              strokeWidth="92"
              transform="translate(104.3 273.75)"
            >
              React
            </text>
            <text
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="250"
              transform="translate(104.3 273.75)"
            >
              React
            </text>
            <text
              fill="#fff"
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="250"
              stroke="#fff"
              strokeWidth="92"
              transform="translate(104.3 273.75)"
            >
              Redux
            </text>
            <text
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="250"
              transform="translate(104.3 273.75)"
            >
              Redux
            </text>
            <text
              fill="#fff"
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="250"
              stroke="#fff"
              strokeWidth="92"
              transform="translate(104.3 273.75)"
            >
              Express
            </text>
            <text
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="250"
              transform="translate(104.3 273.75)"
            >
              Express
            </text>
            <text
              fill="#fff"
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="250"
              stroke="#fff"
              strokeWidth="92"
              transform="translate(104.3 273.75)"
            >
              MongoDB
            </text>
            <text
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="250"
              transform="translate(104.3 273.75)"
            >
              MongoDB
            </text>
            <text
              fill="#fff"
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="250"
              stroke="#fff"
              strokeWidth="92"
              transform="translate(85.65 273.75)"
            >
              And more !
            </text>
            <text
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="250"
              transform="translate(85.65 273.75)"
            >
              And more !
            </text>
          </g>
          <g id="Front-End_Developper">
            <text
              fill="#fff"
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="192.79"
              stroke="#00f3ff"
              strokeWidth="95"
              transform="translate(1037.95 1990.66)"
            >
              Front-End Developer
            </text>
            <text
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="192.79"
              stroke="#00f3ff"
              strokeWidth="0.25"
              transform="translate(1031.59 1990.66)"
            >
              Front-End Developer
            </text>
            <text
              fill="#fff"
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="250"
              stroke="#fff"
              strokeWidth="92"
              transform="translate(170.21 273.75)"
            >
              I’m a Front-End Develope
              <tspan x="3014.28" y="0">
                r
              </tspan>
              <tspan x="3097.9" y="0">
                ...
              </tspan>
            </text>
            <text
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="250"
              transform="translate(170.21 273.75)"
            >
              I’m a Front-End Develope
              <tspan x="3014.28" y="0">
                r
              </tspan>
              <tspan x="3097.9" y="0">
                ...
              </tspan>
            </text>
          </g>
          <g id="Hi">
            <polygon
              fill="#00e7ff"
              points="324.85 1436.5 870.38 1436.5 175.19 1605.47 324.85 1436.5"
            />
            <text
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="1056.07"
              stroke="#00e7ff"
              strokeWidth="119"
              transform="translate(357.37 1319.27)"
            >
              Hi !
            </text>
            <text
              fill="#fff"
              fontFamily="Helvetica-BoldOblique, Helvetica"
              fontSize="1056.07"
              stroke="#000"
              strokeWidth="35"
              transform="translate(368.69 1319.27)"
            >
              Hi !
            </text>
          </g>
          <g id="I_am_Kevin">
            <text
              fontFamily="SignPainter-HouseScriptSemibold, SignPainter"
              fontSize="481.96"
              stroke="#00e7ff"
              strokeWidth="159"
              transform="translate(2322.45 1279.79)"
            >
              I
              <tspan x="87.71" y="0">
                ’
              </tspan>
              <tspan x="145.55" y="0">
                m
              </tspan>
              <tspan x="523.88" y="0">
                K
              </tspan>
              <tspan x="686.3" y="0">
                e
              </tspan>
              <tspan x="838.6" y="0">
                v
              </tspan>
              <tspan x="975.95" y="0">
                in.
              </tspan>
            </text>
            <text
              fontFamily="SignPainter-HouseScriptSemibold, SignPainter"
              fontSize="481.96"
              stroke="#000"
              strokeWidth="98"
              transform="translate(2322.45 1279.79)"
            >
              I
              <tspan x="87.71" y="0">
                ’
              </tspan>
              <tspan x="145.55" y="0">
                m
              </tspan>
              <tspan x="523.88" y="0">
                K
              </tspan>
              <tspan x="686.3" y="0">
                e
              </tspan>
              <tspan x="838.6" y="0">
                v
              </tspan>
              <tspan x="975.95" y="0">
                in.
              </tspan>
            </text>
            <text
              fill="#fff"
              fontFamily="SignPainter-HouseScriptSemibold, SignPainter"
              fontSize="481.96"
              transform="translate(2322.45 1278.82)"
            >
              I
              <tspan x="87.71" y="0">
                ’
              </tspan>
              <tspan x="145.55" y="0">
                m
              </tspan>
              <tspan x="523.88" y="0">
                K
              </tspan>
              <tspan x="686.3" y="0">
                e
              </tspan>
              <tspan x="838.6" y="0">
                v
              </tspan>
              <tspan x="975.95" y="0">
                in.
              </tspan>
            </text>
            <polygon
              fill="#00e7ff"
              points="3063.47 1596.97 3225.41 1346.35 3102.03 1346.35 3063.47 1596.97"
            />
            <polygon points="3143.76 1302.23 3116.49 1459.13 3211.17 1314.35 3143.76 1302.23" />
          </g>
        </svg>
      </div>
    );
  }
}

export default withRouter(Infos);
