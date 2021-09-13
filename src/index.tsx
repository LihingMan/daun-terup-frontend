import React, { useEffect, lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './Landing';
// import './App.css';
import CreateGame from './CreateGame';
import GlobalStyles from '../styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/create-game/:game" component={CreateGame} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
