import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

export class Header extends Component {
  handleLeavePage = e => {
    // this.props.history.listenBefore((location, done) => {
    //   return new Promise((resolve, reject) => {
    //     resolve(
    //       setTimeout(() => {
    //         console.log("Promise resolved");
    //       }, 10000)
    //     );
    //   }).then(done);
    // });
    console.log(this.props.history);
  };

  render() {
    return (
      <div className="header">
        <div className="content-container">
          <h1 className="header__name">KEVIN PHILIPPE</h1>
          <nav className="header__navigation">
            <p onClick={this.handleLeavePage}>Portfolio</p>
            <span>/</span>
            <NavLink to="/portfolio">PORTFOLIO</NavLink>
            <span>/</span>
            <NavLink to="/more">MORE</NavLink>
          </nav>
        </div>
      </div>
    );
  }
}
export default withRouter(Header);
