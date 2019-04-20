import React, { Component } from 'react';

/* Import Components */
import Input from '../EventInput/Input';
import Button from '../buttons/Button';
import "./EventFormContainer.css";

class EventFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newEvent: {
        date: '',
        start_time: '',
        street_address: '',
      },

    }

    this.handleDate = this.handleDate.bind(this);
    this.handleStartTime = this.handleStartTime.bind(this);
    this.handleStreetAddress = this.handleStreetAddress.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleDate(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newEvent:
      {
        ...prevState.newEvent, date: value
      }
    }), () => console.log(this.state.newEvent))
  }

  handleStartTime(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newEvent:
      {
        ...prevState.newEvent, start_time: value
      }
    }), () => console.log(this.state.newEvent))
  }

  handleStreetAddress(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newEvent:
      {
        ...prevState.newEvent, street_address: value
      }
    }), () => console.log(this.state.newEvent))
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      newEvent:
      {
        ...prevState.newEvent, [name]: value
      }
    }), () => console.log(this.state.newEvent))
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let eventData = this.state.newEvent;

    fetch('http://example.com', {
      method: "POST",
      body: JSON.stringify(eventData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => {
      response.json().then(eventData => {
        console.log("Successful" + eventData);
      })
    })
  }

  handleClearForm(e) {

    e.preventDefault();
    this.setState({
      newEvent: {
        date: '',
        start_time: '',
        street_address: '',
      },
    })
  }

  render() {
    return (

      <form className="container-fluid" onSubmit={this.handleFormSubmit}>

        <Input inputType={'text'}
          title={'Event Date'}
          name={'date'}
          value={this.state.newEvent.date}
          placeholder={'Enter date of event: day/month/year'}
          handleChange={this.handleDate}

        /> {/* date of event */}

        <Input inputType={'text'}
          name={'start_time'}
          title={'Time of Event'}
          value={this.state.newEvent.start_time}
          placeholder={'Enter Time of Event:(ex) 9:00am'}
          handleChange={this.handleStartTime} /> {/* time of event */}

        <Input inputType={'text'}
          name={'street_address'}
          title={'Location of Event'}
          value={this.state.newEvent.street_address}
          placeholder={'Enter Street Address:(ex)1365 W Warner Rd'}
          handleChange={this.handleStreetAddress} /> {/* time of event */}

        <Button
          action={this.handleFormSubmit}
          type={'primary'}
          title={'Create Event'}
          style={buttonStyle}
        /> { /*Submit */}

        <Button
          action={this.handleClearForm}
          type={'secondary'}
          title={'Clear Form'}
          style={buttonStyle}
        /> {/* Clear the form */}

      </form>

    );
  }
}

const buttonStyle = {
  margin: '10px 10px 10px 10px'
}

export default EventFormContainer;