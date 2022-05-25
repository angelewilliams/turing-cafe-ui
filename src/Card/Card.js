import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="res-card">
      <h2>{props.name}</h2>
      <p>{props.date}</p>
      <p>{props.time}</p>
      <p>{`Number of guests: ${props.guests}`}</p>
      <button>Cancel</button>
    </div>
  )
}

export default Card;
