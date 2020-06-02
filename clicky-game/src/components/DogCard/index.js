import React from "react";
import "./style.css";

function DogCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <span onClick={() => props.shuffleDog(props.array)} className="shuffle">
      </span>
    </div>
  );
}

export default DogCard;
