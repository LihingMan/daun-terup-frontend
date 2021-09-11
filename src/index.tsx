import React, { useEffect, lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from './Landing';

function App() {
  return (
    <Router>
      <Landing />
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
