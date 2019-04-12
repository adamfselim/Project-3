import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/navbar"
import Mainpage from './pages/Mainpage/main';

class App extends Component {
  render() {
    return (
      <Route>
      <div className="App">
       <Navbar />
        <Switch>
        <Route exact path = "/main" Component = {Mainpage}></Route>
        </Switch>
       
      </div>
</Route>
    );
  }
}

export default App;
