
// CREATE DATABASE project_three_user_info;
// use project_three_user_info;


import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import API from "../utils/API.js";


// const bodyParser = require('body-parser');
// import './config/config.js';


class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',

    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  
  // componentDidMount() {
  //   axios.get('mongodb://localhost:27017/user_login_db') 
  //     .then(response => this.setState({password, username})
    

  //     )}
      


  handleSubmit(e) {
    // this is submitted below
    // console.log('sign-up handleSubmit, username: ')
    // console.log(this.state.username)
    e.preventDefault();

    
      
    
      // this.componentDidMount();
      
    


    // console.log('The form was submitted with the following data:');
    // console.log(this.state);
  //   axios.post('http://localhost:3000/signUp', {
  //     username: this.state.username,
  //     password: this.state.password
  //   })

  //     .then(response => {
  //       console.log(response)
  //       if (!response.data.errmsg) {
  //         console.log('successful signup')
  //         this.setState({ //redirect to login page
  //           redirectTo: '/login'
  //         })
  //       } else {
  //         console.log('username already taken')
  //       }
  //     })
  //     .catch(error => {
  //       console.log('signup error: ')
  //       console.log(error)
  //     })
    }


   handleFormCenter = event => {
    event.preventDefault();
    if (this.state.firstname && this.state.lastname && this.state.email && this.state.password) {
      API.saveFormCenter({
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password
      })
        .then(res => this.loadFormCenter())
        .catch(err => console.log(err));
    }
  
  };



render() {
  return (
    <div className="FormCenter">
      <form onSubmit={this.handleSubmit} className="FormFields">
        <div className="FormField">
          <label className="FormField__Label" htmlFor="firstname">First Name</label>
          <input type="text" id="name" className="FormField__Input" placeholder="Enter Your first Name" name="First Name" value={this.state.name} onChange={this.handleChange} />
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="Lastname">Last Name</label>
          <input type="text" id="Lastname" className="FormField__Input" placeholder="Enter Your Last Name" name="Last Name" value={this.state.name} onChange={this.handleChange} />
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="password">Password</label>
          <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="confirmPassword">Confirm Password</label>
          <input type="ConfirmPassword" id="ConfirmPassword" className="FormField__Input" placeholder="Confirm Password" name="Confirm Password" value={this.state.password} onChange={this.handleChange} />
        </div>
        <div className="FormField">
          <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
          <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
        </div>

        {/* <div className="FormField">
          <label className="FormField__CheckboxLabel">
            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
          </label>
        </div> */}

        <div className="FormField">
          <button className="FormField__Button mr-20" onClick={this.handleEvent}>Sign Up</button> <Link to="/signInForm" className="FormField__Link">I'm already member</Link>
        </div>
      </form>
    </div>
  );
}
}


export default SignUpForm;