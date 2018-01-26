import React, { Component } from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import Home from "../components/Home";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import More from "../components/More";

import HeaderRoute from "./HeaderRoute";

import Header from "./../components/Header";

export const history = createHistory();

history.listen((location, done) => {
  console.log(location);
});

export class AppRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home} exact />
          <HeaderRoute path="/resume" component={Resume} />
          <HeaderRoute path="/portfolio" component={Portfolio} />
          <HeaderRoute path="/more" component={More} />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;
