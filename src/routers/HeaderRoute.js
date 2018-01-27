import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props => (
      <div>
        <Header />
        <Component {...props} />
        <Footer />
      </div>
    )}
  />
);
