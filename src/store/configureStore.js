import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import authReducer from "../reducers/auth";
import filtersReducer from "../reducers/filters";
import projectsReducer from "../reducers/projects";
import animationsReducer from "../reducers/animations";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// STORE CREATION
// The combineReducers function turns an object whose values are
// different reducing functioins into a single reducing function you
// can pass to createStore

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      filters: filtersReducer,
      projects: projectsReducer,
      animations: animationsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
