/** @format */

import React from "react";

import { Bulb } from "./bulb";

export class TrafficLight extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeLight: 1,
			showErrorLight: false
    };

  }

  cycleLightV1 = () => {
    let targetIndex;
    let currentIndex = this.state.activeLight;

    if (currentIndex == 2) {
      targetIndex = 0;
    } else {
			targetIndex = currentIndex + 1;
		}

    this.setState({ activeLight: targetIndex });
  }

  render() {
		const { activeLight } = this.state;

    return (
      <>
        <h2>Traffic light V1 system</h2>

        <div className="trafficLight-container">
          <Bulb color={"red"} isOn={activeLight == 0} />
          <Bulb color={"yellow"} isOn={activeLight == 1} />
          <Bulb color={"green"} isOn={activeLight == 2} />
        </div>

        <button onClick={this.cycleLightV1}>Cycle traffic light</button>
				{/* <button>Show error lights</button> */}
      </>
    );
  }
}