import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import SignupForm from './components/SignupForm/SignupForm';

export default function App() {
  return (
    <div className="app">
      <Router>
        <SignupForm />
      </Router>
    </div>
  );
}
