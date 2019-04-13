import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/navbar";
import Mainpage from './pages/Mainpage/main';
import Volunteer from './pages/volunteer/volunteer';
import Card from './pages/volunteer/volunteer';

class App extends Component {
  render() {
    return (
     <Router>
      <div className="App">
       <Navbar />
        <Switch>
        <Route exact path="/" component={Mainpage} />
        <Route exact path="/volunteer" component={Volunteer} />
        </Switch>
       
      </div>
 </Router>
    );
  }
}

export default App;
