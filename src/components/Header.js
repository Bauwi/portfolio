import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import capitalize from "../utils/capitalize";

export class Header extends Component {
  render() {
    const cleanLocation = this.props.location.pathname
      .split("")
      .slice(1, this.props.location.pathname.length)
      .join("");
    const subheaderLeftClassName = `header__sub-header__section header__sub-header__section--left--${cleanLocation}`;
    return (
      <header className="header">
        <div className="content-container">
          <h1 className="header__name">
            JOHN <span className="header__surname">DOE</span>{" "}
          </h1>
          <nav className="header__navigation">
            <NavLink to="/resume">RESUME</NavLink>
            <span>/</span>
            <NavLink to="/portfolio">PORTFOLIO</NavLink>
            <span>/</span>
            <NavLink to="/skills">SKILLS</NavLink>
            <span>/</span>
            <NavLink to="/more">MORE</NavLink>
            {this.props.isAuthenticated && (
              <span>
                <span>/</span>
                <NavLink to="/dashboard">DASHBOARD</NavLink>
              </span>
            )}
          </nav>
        </div>
        <header className="header__sub-header">
          <section className={subheaderLeftClassName}>
            <p>{capitalize(this.props.history.location.pathname)}</p>
          </section>
          <section className="header__sub-header__section header__sub-header__section--right">
            <p>
              <i className="fa fa-envelope" />
              <i className="fa fa-github" />
              <i className="fa fa-codepen" />
            </p>
          </section>
        </header>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.user
});

export default withRouter(connect(mapStateToProps)(Header));
