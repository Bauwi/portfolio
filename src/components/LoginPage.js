import React, { Component } from "react";
import { connect } from "react-redux";

import { startLogin } from "../actions/auth";

export class LoginPage extends Component {
  state = {
    username: "",
    password: ""
  };

  handleUsernameChange = e => {
    const username = e.target.value;
    this.setState(() => ({ username }));
  };

  handlePasswordChange = e => {
    const password = e.target.value;
    this.setState(() => ({ password }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.startLogin({
      username: this.state.username,
      password: this.state.password
    });
  };

  render() {
    console.log(this.props.isAutenticated);
    if (this.props.isAuthenticated) {
      return (
        <p>
          Auth status: <span style={{ color: "green" }}>OK.</span>
        </p>
      );
    }

    return (
      <div>
        <p>
          Auth status: <span style={{ color: "red" }}>Not Authenticated.</span>
        </p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            username :
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </label>
          <label htmlFor="">
            password :
            <input
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </label>
          <button>login</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startLogin: credentials => dispatch(startLogin(credentials))
});

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.user
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
