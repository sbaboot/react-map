// src/Travels.js
import React from "react";

const TravelItem = props => (
  <figure>
    <img src={props.image} alt={props.country} />
    <figcaption>
      <h1>{props.destination}</h1>
      <p>{props.country}</p>
      <p>{props.distance}</p>
    </figcaption>
  </figure>
);

export default TravelItem;