import React from 'react';
import './app.css';

class Lights extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        activeLight: 1
    }
    
    this.handleClick = this.handleClick.bind(this);

  }

    handleClick(e) {
      e.preventDefault();
      console.log('Click', this.state);
    }

    

  render() {
    return(
    <div>
      <div className="lights-container">
          <div className="red"></div>
          <div className="orange"></div>
          <div className="green"></div>
      </div>
        <button className="traffic-button" onClick={this.handleClick}>i'm a button</button>
    </div>
    );

  }
}

// button 
// do something onclick
// lights to have state
// 

export default Lights;
