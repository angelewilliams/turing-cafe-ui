import React, { Component } from 'react';
import './App.css';
import Reservations from '../../src/Reservations/Reservations'
import Form from '../../src/Form/Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
    }
    this.addReservation = this.addReservation.bind(this)
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        throw new Error('Something went wrong')
      }
    })
    .then(reservations => this.setState(
      { reservations: reservations }))

  }

  addReservation = (resInfo) => {
    this.setState({ reservations: [...this.state.reservations, resInfo] }, () => {
    console.log(this.state.reservations)});
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={this.addReservation}/>
        <Reservations reservations={this.state.reservations} addReservation={this.addReservation}/>
      </div>
    )
  }
}

export default App;
