import React, { Component } from "react";
import "./Die.css";

export default class Die extends Component {
  render() {
    const { diceFace, isRolling, rollDirection } = this.props;
    return (
      <i
        className={`Die fa fa-dice-${diceFace} ${isRolling &&
          `Die-rolling ${rollDirection}`}`}
      />
    );
  }
}
