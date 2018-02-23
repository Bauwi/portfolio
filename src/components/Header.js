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
    const headerClassName = cleanLocation
      ? "header"
      : "header animated-sidebar";
    return (
      <header className={headerClassName}>
        <div className="header__main">
          <nav className="header__navigation">
            <NavLink to="/" activeClassName={homeClassName}>
              <Icon type="home" />
            </NavLink>
            <NavLink to="/resume" activeClassName="nav-activ">
              <Icon type="profile" />
            </NavLink>
            <NavLink to="/portfolio" activeClassName="nav-activ">
              <Icon type="folder-open" />
            </NavLink>
            <NavLink to="/skills" activeClassName="nav-activ">
              <Icon type="tool" />
            </NavLink>
            <NavLink to="/more" activeClassName="nav-activ">
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
            <NavLink to="/contact" activeClassName="nav-activ color-blue">
              <Icon type="mail" />
            </NavLink>
            <NavLink to="/github" activeClassName="nav-activ color-blue">
              <Icon type="github" />
            </NavLink>
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
