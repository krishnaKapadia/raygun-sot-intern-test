import React from 'react';
import './app.css';
import Lights from './Lights';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="app">
        <header className="app-header">
          <Lights/>

          <p>Build a traffic light!</p>

        </header>
      </div>
    );

  }
}

export default App;
