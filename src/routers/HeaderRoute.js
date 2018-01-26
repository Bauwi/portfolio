import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import Store from "./../components/Store";

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props => (
      <div>
        <Header />
        <Component {...props} />
        <Store />
        <Footer />
      </div>
    )}
  />
);
