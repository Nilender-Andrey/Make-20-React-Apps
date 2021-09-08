import React from 'react';
import { NavLink } from 'react-router-dom';
import Tab from './Tab';

export default function Header() {
  return (
    <div className="tabs">
      <NavLink className="link" to="/" activeClassName="is-active" exact>
        <Tab name="Home" />
      </NavLink>

      <NavLink className="link" to="/about" activeClassName="is-active" exact>
        <Tab name="About" />
      </NavLink>

      <NavLink className="link" to="/features" activeClassName="is-active" exact>
        <Tab name="Features" />
      </NavLink>
    </div>
  );
}
