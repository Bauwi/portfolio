import React, { Component } from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import TransitionGroup from "react-transition-group/TransitionGroup";
import AnimatedSwitch from "../components/animated_switch";

import HeaderRoute from "./HeaderRoute";
import PrivateRoute from "./PrivateRoute";

import Home from "../components/Home";
import Missed from "../components/missed";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import LoginPage from "../components/LoginPage";
import Dashboard from "../components/dashboard/Dashboard";

import Header from "../components/Header";
import Footer from "../components/Footer";

export const history = createHistory();

history.listen((location, done) => {
  console.log(location);
});

export class AppRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          projects: json.slice(0, 7)
        });
      });
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <PrivateRoute exact path="/dashboard" component="dashboard" />
        <Route
          render={({ location }) => (
            <TransitionGroup component="div" className="main">
              <AnimatedSwitch key={location.key} location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/dashboard" component={Dashboard} />

                <Route component={Missed} />
              </AnimatedSwitch>
            </TransitionGroup>
          )}
        />
        <Footer />
      </div>
    );
  }
}

export default AppRouter;
