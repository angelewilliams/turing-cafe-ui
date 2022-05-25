import React, { Component } from 'react';
import './App.css';
import Reservations from '../../src/Reservations/Reservations'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        throw new Error('Something went wrong')
      }
    })
    .then(data => console.log(data))

  }



  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
        <Reservations/>
        </div>
      </div>
    )
  }
}

export default App;
