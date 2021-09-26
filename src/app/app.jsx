/** @format */

import React from "react";

import { TrafficLight } from "./components/trafficLight";

import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <p>Raygun Traffic Light Company</p>
        </header>

        <section className="app-body">
          <TrafficLight />
        </section>
      </div>
    );
  }
}

export default App;
