import React from 'react';
import './Reservations.css';
import Card from '../../src/Card/Card'

const Reservations = (props) => {
  return (
    <section>
    <h2>Hello, Reservation test </h2>
    <Card props={props}/>
    </section>
  )
}

export default Reservations;
