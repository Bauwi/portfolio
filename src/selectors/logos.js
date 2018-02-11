import React from "react";

import Html5 from "../components/logos/Html5";
import Css3 from "../components/logos/Css3";
import JavaScript from "../components/logos/JavaScript";
import Sass from "../components/logos/Sass";
import ReactLogo from "../components/logos/ReactSVG";
import ReduxLogo from "../components/logos/ReduxLogo";
import NpmLogo from "../components/logos/NpmLogo";
import YarnLogo from "../components/logos/YarnLogo";
import WebpackLogo from "../components/logos/WebpackLogo";

const logos = {
  HTML5: <Html5 />,
  CSS3: <Css3 />,
  JavaScript: <JavaScript />,
  SASS: <Sass />,
  React: <ReactLogo />,
  Redux: <ReduxLogo />,
  npm: <NpmLogo />,
  yarn: <YarnLogo />,
  webpack: <WebpackLogo />
};

export default technologies => {
  return technologies.map(techno => {
    if (logos.hasOwnProperty(techno)) {
      return <li key={techno}>{logos[techno]}</li>;
    }
    return null;
  });
};
