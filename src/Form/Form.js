import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.makeReservation = this.makeReservation.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  makeReservation = (event) => {
    event.preventDefault();
    this.props.addReservation(this.state);
    this.clearForm();
  }

  clearForm = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: ''
    })
  }

  render(){
    return(
      <form className="res-form">
        <input
          className='name-input'
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={event => this.handleChange(event)}
        />
        <input
          className='date-input'
          type='text'
          placeholder='Date (mm/dd)'
          name='date'
          value={this.state.date}
          onChange={event => this.handleChange(event)}
        />
        <input
          className='time-input'
          type='text'
          placeholder='Time'
          name='time'
          value={this.state.time}
          onChange={event => this.handleChange(event)}
        />
        <input
          className='number-input'
          type='number'
          placeholder='Number of guests'
          name='number'
          value={this.state.number}
          onChange={event => this.handleChange(event)}
        />
        <button onClick={event => this.makeReservation(event)}>Make Reservation</button>
      </form>
    )
  }
}

export default Form;
