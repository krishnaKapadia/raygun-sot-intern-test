import React from 'react';
import './app.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return(
      <div className="app">
      <header className="app-header">
        
        <p>Build a traffic light!</p>

      </header>
    </div>
    );

  }
}

export default App;
