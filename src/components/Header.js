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
    const headerLocationClassname = `header__location header__location--${cleanLocation}`;
    console.log(cleanLocation);
    return (
      <header className="header">
        <div className="header__main">
          <nav className="header__navigation">
            <NavLink to="/" activeClassName="nav-activ color-blue">
              <Icon type="home" />
            </NavLink>
            <NavLink to="/resume" activeClassName="nav-activ color-green">
              <Icon type="profile" />
            </NavLink>
            <NavLink to="/portfolio" activeClassName="nav-activ color-pink">
              <Icon type="folder-open" />
            </NavLink>
            <NavLink to="/skills" activeClassName="nav-activ color-red">
              <Icon type="tool" />
            </NavLink>
            <NavLink to="/more" activeClassName="nav-activ color-lemon">
              <Icon type="bulb" />
            </NavLink>
            {this.props.isAuthenticated && (
              <NavLink to="/dashboard" activeClassName="nav-activ color-blue">
                <Icon type="dashboard" />
              </NavLink>
            )}
          </nav>
          <header className={headerLocationClassname}>
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
