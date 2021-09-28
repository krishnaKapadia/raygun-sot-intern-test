/** @format */

import React from "react";

export class Bulb extends React.Component {
  getCssClassForColor(color) {
    if (color == "red") {
      return "red-light";
    }

    if (color == "yellow") {
      return "yellow-light";
    }

    if (color == "green") {
      return "green-light";
    }
  }

  render() {
    const { color, isOn } = this.props;
    let cssClass = "";

    if (isOn) {
      cssClass = this.getCssClassForColor(color);
    }

    return <div className={`trafficLight-bulb ${cssClass}`} />;
  }
}
