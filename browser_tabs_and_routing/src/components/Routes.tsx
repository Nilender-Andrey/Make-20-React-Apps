import React from 'react';
import {
  BrowserRouter as Switch,
  Route,
  useLocation,

} from 'react-router-dom';
import About from './pages/About/About';
import Features from './pages/Features/Features';
import Home from './pages/Home/Home';

export default function Routes() {
  const { key } = useLocation();

  return (
    <Switch key={key}>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/features">
        <Features />
      </Route>
    </Switch>
  );
}
