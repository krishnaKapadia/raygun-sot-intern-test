import React from 'react';
import './app.css';
import { setState } from '../../node_modules/expect/build/jestMatchersObject';

class App extends React.Component {

  lightColours = [0,1,2];
  lightOn = 0;

  constructor(props) {
    super(props);
    this.state = {lightOn: 2};
  }

  render() {
    return(
      <div className="app">
        <header className="app-header">
          
          <p>Build a traffic light!</p>

          (this.state.lightOn = 0) ?  <div className="RedLight"> </div> :  <div className="GreyLight"> </div>
          <div className="OrangeLight"> </div>
          <div className="GreenLight"> </div>
          <button onClick={changeColor(this.state.lightOn)}>CLICK TO CHANGE COLOURS</button>

        </header>
      </div>
    );

  }

  changeColor(lightOn) {
    setState({lightOn: 0});

    //identify which light is already on
    var nextLight = this.lightColours.get(lightOn + 1);

    // go to the next light in the list
    if(nextLight == 0){
    }
}

}



export default App;
