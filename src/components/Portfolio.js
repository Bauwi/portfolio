import React, { Component } from "react";
import StackGrid, { transitions } from "react-stack-grid";

import randomStyle from "../utils/randomStyle";

const { flip } = transitions;

export default class Portfolio extends Component {
  render() {
    return (
      <div className="content-container portfolio">
        <div>
          <nav className="sidebar">
            <ul className="sidebar--portfolio">
              <li>ALL</li>
              <li>PROJECTS</li>
              <li>BOILERPLATES</li>
              <li>SNIPPETS</li>
              <li>ALGORYTHMICS</li>
            </ul>
          </nav>
        </div>

        <div className="portfolio__main">
          <StackGrid
            columnWidth={150}
            gutterWidth={0}
            gutterHeight={0}
            appearDelay={100}
            appear={flip.appear}
            appeared={flip.appeared}
            enter={flip.enter}
            entered={flip.entered}
            leaved={flip.leaved}
          >
            <div key="key1" className={randomStyle()}>
              Item 1
            </div>
            <div key="key2" className={randomStyle()}>
              Item 2
            </div>
            <div key="key3" className={randomStyle()}>
              Item 3
            </div>
            <div key="key4" className={randomStyle()}>
              Item 4
            </div>
            <div key="key5" className={randomStyle()}>
              Item 5
            </div>
            <div key="key6" className={randomStyle()}>
              Item 6
            </div>
            <div key="key7" className={randomStyle()}>
              Item 7
            </div>
            <div key="key8" className={randomStyle()}>
              Item 8
            </div>
            <div key="key9" className={randomStyle()}>
              Item 9
            </div>
            <div key="key10" className={randomStyle()}>
              Item 10
            </div>
          </StackGrid>
        </div>
      </div>
    );
  }
}
