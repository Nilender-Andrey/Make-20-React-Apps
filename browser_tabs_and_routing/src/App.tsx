/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';

import './App.css';
import Tab from './components/Tab';

export default function App() {
  return (
    <div className="app">
      <div className="browser">
        <div className="tabs">

          <Tab>
            <a href="!#">Home</a>
          </Tab>
          <Tab>
            <a href="!#">About</a>
          </Tab>
          <Tab>
            <a href="!#">Features</a>
          </Tab>

        </div>

        <div className="viewport">Pages Go Here</div>
      </div>
    </div>
  );
}
