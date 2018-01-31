import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { Icon } from "antd";

export class Header extends Component {
  render() {
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
          <nav className="header__footer">
            <NavLink to="/contact" activeClassName="nav-activ color-blue">
              <Icon type="mail" />
            </NavLink>
            <NavLink to="/github" activeClassName="nav-activ color-blue">
              <Icon type="github" />
            </NavLink>
            <NavLink to="/codepen" activeClassName="nav-activ color-blue">
              <Icon type="codepen" />
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

export default connect(mapStateToProps)(Header);
