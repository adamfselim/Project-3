
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';

import Mainpage from './pages/Mainpage/main';
import Volunteer from './pages/volunteer/volunteer';
import Contact from './pages/contact/contact';
import Wastereduction from './pages/wastereduction/waste';
import Calendar from "./components/calendar/Calendar";
import "./App.css";
import wastereduction from "./components/images/earthmonth.png";



//new calendar component code


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            
            <div className="imagecard col-md-8 mx-auto">
            
            </div>
            
            <div className="bg-dark text-white">
              <Switch>
                <Route exact path="/" component={Mainpage} />
                <Route exact path="/volunteer" component={Volunteer} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/map" component={Contact} />
                <Route exact path="/wastereduction" component={Wastereduction} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

