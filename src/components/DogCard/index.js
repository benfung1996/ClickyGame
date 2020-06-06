import React from "react";
import "./style.css";

const DogCard = props => (
    <div className="card">
      <div className="img-container hover">
        <img alt={props.name} src={props.image} id={props.id} 
        onClick={() => props.shuffledDog(props.id)} className="shuffle"/>
      </div>

    </div>
);

export default DogCard;
