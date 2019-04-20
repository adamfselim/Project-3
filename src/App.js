
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import Mainpage from './pages/mainpage/main';
=======
// import logo from './logo.svg';
import Eventmap from './pages/Map/eventmap';
import Mainpage from './pages/Mainpage/main';
>>>>>>> 799eb5d130ad410f1f076ebf6a87ce620bfca0d5
import Volunteer from './pages/volunteer/volunteer';
import Contact from './pages/contact/contact';
import EventMap from './pages/map/eventmap';
import Wastereduction from './pages/wastereduction/wastereduction';
import "./App.css";


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
<<<<<<< HEAD
                <Route exact path="/map" component={EventMap} />
=======
                <Route exact path="/map" component={Eventmap} />
>>>>>>> 799eb5d130ad410f1f076ebf6a87ce620bfca0d5
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

