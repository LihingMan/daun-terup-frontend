import React, { useEffect, lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import "antd/dist/antd.css";
import { ThemeProvider } from 'styled-components';
import Navbar from "../src/components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));