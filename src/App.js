import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import Navbar from "./components/navbar/navbar";
import Mainpage from './pages/Mainpage/main';
import Volunteer from './pages/volunteer/volunteer';
import Contact from './pages/contact/contact';
import Wastereduction from './pages/wastereduction/waste';


class App extends Component {
  render() {
    return (
     <Router>
      <div className="App">
       <Navbar />
        <Switch>
        <Route exact path="/" component={Mainpage} />
        <Route exact path="/volunteer" component={Volunteer} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/wastereduction" component={Wastereduction} />
        </Switch>
       
      </div>
 </Router>
    );
  }
}

export default App;
