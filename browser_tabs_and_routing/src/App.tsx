import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Routes from './components/Routes';

export default function App() {
  return (
    <Router>
      <div className="app">
        <div className="browser">
          <Header />

          <div className="viewport">
            <Routes />
          </div>
        </div>
      </div>
    </Router>
  );
}
