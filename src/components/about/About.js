import React, { Component } from "react";

import Face from "./Face";
import MapComponent from "./MapComponent";
import Globe from "./Globe";

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
                <h2>Me</h2>
                <p>Kevin Philippe</p>
                <p>27 years old</p>
                <p>8 rue du chemin vert</p>
                <p>95610 Eragny sur Oise</p>
              </div>
              <footer className="about__legend">
                <h2>Mobility</h2>
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
          </section>
        </div>
        <div className="about__mobility">
          <MapComponent />
        </div>
      </div>
    );
  }
}
