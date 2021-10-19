import React, { useEffect, lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./modules/Landing";
import CreateGame from "./modules/CreateGame";
import GlobalStyles from "styles/globalStyles";
import GameRoom from "./modules/GameRoom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import allReducers from "./redux/reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

const reduxStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <>
      <Provider store={reduxStore}>
        <GlobalStyles />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Landing} exact />
            <Route path="/create-game/:game" component={CreateGame} exact />
            <Route path="/games/:roomId" component={GameRoom} exact />
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
