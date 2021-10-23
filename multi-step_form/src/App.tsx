import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SignupForm from './components/SignupForm/SignupForm';

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <SignupForm />
      </BrowserRouter>
    </div>
  );
}
