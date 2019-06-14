import React, { Component } from "react";
import "./Die.css";

export default class Die extends Component {
  render() {
    const { diceFace } = this.props;
    return (
      <div className="Die">
        <i className={`Die-dice fa fa-dice-${diceFace}`} />
      </div>
    );
  }
}
