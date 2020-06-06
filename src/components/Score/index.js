import React from "react";
import "./style.css";

function Score(props) {
  return <h1 className="gameScore">
    <h3 className="status">Status: {props.status}</h3>
    <h3 className="score">Score: {props.score}</h3>
    <h3 className="goal">Goal: {props.goal}</h3>
    </h1>
};

export default Score;