import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { Icon } from "antd";
import capitalize from "../utils/capitalize";

export class Header extends Component {
  render() {
    const cleanLocation = this.props.location.pathname.slice(
      1,
      this.props.location.pathname.length
    );
    const homeClassName = cleanLocation ? "" : "nav-active";
    const headerClassName = `header header--${cleanLocation}`;
    const headerMainClassName = `header__main header__main--${cleanLocation}`;
    return (
      <header className={headerClassName}>
        <div className={headerMainClassName}>
          <nav className="header__navigation">
            <NavLink to="/" activeClassName={homeClassName} menu="HOME">
              <Icon type="home" />
            </NavLink>
            <NavLink to="/resume" activeClassName="nav-activ" menu="RESUME">
              <Icon type="profile" />
            </NavLink>
            <NavLink
              to="/portfolio"
              activeClassName="nav-activ"
              menu="PORTFOLIO"
            >
              <Icon type="folder-open" />
            </NavLink>
            <NavLink to="/skills" activeClassName="nav-activ" menu="SKILLS">
              <Icon type="tool" />
            </NavLink>
            <NavLink to="/more" activeClassName="nav-activ" menu="MORE">
              <Icon type="bulb" />
            </NavLink>
            {this.props.isAuthenticated && (
              <NavLink to="/dashboard" activeClassName="nav-activ">
                <Icon type="dashboard" />
              </NavLink>
            )}
          </nav>
          <header className="header__location">
            <p>{capitalize(this.props.history.location.pathname)}</p>
          </header>
          <nav className="header__footer">
            <NavLink to="/about" activeClassName="nav-activ" menu="ABOUT">
              <Icon type="user" />
            </NavLink>
            <NavLink to="/contact" activeClassName="nav-activ" menu="CONTACT">
              <Icon type="mail" />
            </NavLink>
            <a
              href="https://github.com/Bauwi"
              target="_blank"
              rel="noopener noreferrer"
              menu="GITHUB"
            >
              <Icon type="github" />
            </a>
          </nav>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.user
});

export default withRouter(connect(mapStateToProps)(Header));
