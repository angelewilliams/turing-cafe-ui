import React from 'react';
import './Reservations.css';
import Card from '../../src/Card/Card'

const Reservations = ({reservations}) => {
  const reservationCards = reservations.map((res) => {
    return (
      <Card
        name={res.name}
        date={res.date}
        time={res.time}
        number={res.number}
        key={res.id}
      />
    )
  })

return (
  <section className="reservations-container">
    {reservationCards}
  </section>
)

}

export default Reservations;
