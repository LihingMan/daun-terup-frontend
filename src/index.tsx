import React, { useEffect, lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./modules/Landing";
import CreateGame from "./modules/CreateGame";
import GlobalStyles from "styles/globalStyles";
import GameRoom from "./modules/GameRoom";
import { Provider } from "react-redux";
import { createStore } from "redux";

const reduxStore = createStore(() => ({
  birds: [
    {
      name: "robin",
      views: 1,
    },
  ],
}));

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
