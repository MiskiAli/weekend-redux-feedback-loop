import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { Provider } from 'react-redux';
// import { combineReducers } from "redux";
import { combineReducers, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import registerServiceWorker from "./registerServiceWorker";

// Set Up Reducers

const feelingList = (state = [], action) => {
  switch (action.type) {
    case "GET_FEELING_LIST":
      return action.payload;
    default:
      return state;
  }
};

const storeInstance = createStore(
  combineReducers({
    // reducers here
    feelingList,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
