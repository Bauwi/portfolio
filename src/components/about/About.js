import React, { Component } from "react";

import Face from "./Face";
import MapComponent from "./MapComponent";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about__id">
          <section>
            <div className="about__id__face">
              <Face />
            </div>
            <div className="about__id__infos">
              <div className="about__id__infos__top">
                <p>Kevin Philippe</p>
                <p>27 years old</p>
                <p>8 rue du chemin vert</p>
                <p>95610 Eragny sur Oise</p>
              </div>
            </div>
          </section>
        </div>
        <div className="about__mobility">
          <MapComponent />
          <footer className="about__legend">
            <div>
              <p>Now</p>
              <img src="marker-now.png" alt="maybe marker" />
            </div>
            <div>
              <p>Maybe ?</p>
              <img src="marker.png" alt="maybe marker" />
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
