import React, { useEffect, lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./modules/Landing";
import CreateGame from "./modules/CreateGame";
import GlobalStyles from "../styles/globalStyles";
import GameRoom from "./modules/GameRoom";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/create-game/:game" component={CreateGame} exact />
          <Route path="/games/:roomId" component={GameRoom} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
