<<<<<<< HEAD
//new calendar component code
import React from "react";
import Calendar from "./components/calendar/Calendar";
import "./App.css";
=======

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import Eventmap from './pages/Map/eventmap';
import Mainpage from './pages/Mainpage/main';
import Volunteer from './pages/volunteer/volunteer';
import Contact from './pages/contact/contact';
import Wastereduction from './pages/wastereduction/waste';
import Calendar from "./components/calendar/Calendar";
import "./App.css";
import wastereduction from "./components/images/earthmonth.png";



//new calendar component code

>>>>>>> 799eb5d130ad410f1f076ebf6a87ce620bfca0d5

class App extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <main>
          <Calendar />
        </main>
      </div>
=======
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
                <Route exact path="/map" component={Eventmap} />
                <Route exact path="/wastereduction" component={Wastereduction} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
>>>>>>> 799eb5d130ad410f1f076ebf6a87ce620bfca0d5
    );
  }
}

export default App;

