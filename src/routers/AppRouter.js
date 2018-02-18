import React, { Component } from "react";
import { Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import TransitionGroup from "react-transition-group/TransitionGroup";
import AnimatedSwitch from "../components/animated_switch";

import PrivateRoute from "./PrivateRoute";

import Home from "../components/home/Home";
import Missed from "../components/missed";
import Resume from "../components/resume/Resume";
import Portfolio from "../components/portfolio/Portfolio";
import Skills from "../components/skills/Skills";
import LoginPage from "../components/LoginPage";
import Dashboard from "../components/dashboard/Dashboard";
import NotFound from "../components/NotFound";

import Header from "../components/Header";

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
        <PrivateRoute exact path="/dashboard" component="div" />
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

                <Route component={NotFound} />
              </AnimatedSwitch>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default AppRouter;
