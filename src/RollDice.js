import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

export default class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diceOne: "one",
      diceTwo: "two",
    };
    this.roll = this.roll.bind(this);
  }

  static defaultProps = {
    diceFaces: ["one", "two", "three", "four", "five", "six"],
  };

  roll() {
    const roll1 = Math.floor(Math.random() * 6);
    const roll2 = Math.floor(Math.random() * 6);

    this.setState({
      diceOne: this.props.diceFaces[roll1],
      diceTwo: this.props.diceFaces[roll2],
    });
  }

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-Dice">
          <Die diceFace={this.state.diceOne} />
          <Die diceFace={this.state.diceTwo} />
        </div>
        <button className="RollDice-btn" onClick={this.roll}>
          Roll Dice!
        </button>
      </div>
    );
  }
}
