import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";

import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";

import LoadingPage from "./components/LoadingPage";

// import "normalize-css/normalize.css";
// import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

const user = JSON.parse(sessionStorage.getItem("user"));

// if (user && user.token) {
//   store.dispatch(login(user));
// }

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// check if app has already been rendered to avoid useless re-rendering
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("root"));
renderApp();
