import React from 'react';
import logo from '../assets/traffic-light.svg';
import './app.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Build a traffic light!
        </p>
      </header>
    </div>
  );
}

export default App;
