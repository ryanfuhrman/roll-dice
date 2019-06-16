import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

export default class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diceOne: "one",
      diceTwo: "two",
      isRolling: false,
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
      isRolling: true,
    });

    setTimeout(() => {
      this.setState({
        isRolling: false,
      });
    }, 1000);
  }

  render() {
    const { diceOne, diceTwo, isRolling } = this.state;
    return (
      <div className="RollDice">
        <div className="RollDice-Dice">
          <Die
            diceFace={diceOne}
            isRolling={isRolling}
            rollDirection="Die-roll-left"
          />
          <Die
            diceFace={diceTwo}
            isRolling={isRolling}
            rollDirection="Die-roll-right"
          />
        </div>
        <button
          className={`RollDice-btn ${isRolling && "RollDice-btn-disabled"}`}
          onClick={this.roll}
          disabled={isRolling}
        >
          {isRolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}
