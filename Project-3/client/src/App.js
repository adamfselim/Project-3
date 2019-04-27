
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, } from 'react-router-dom';
// import logo from './logo.svg';
import Eventmap from './pages/Map/eventmap';
import Mainpage from './pages/Mainpage/main';
import Volunteer from './pages/volunteer/volunteer';
import Contact from './pages/contact/contact';
import EventMap from './pages/Map/eventmap';
import Wastereduction from './pages/wastereduction/waste';
// import Calendar from "./components/calendar/Calendar";
import "./App.css";
// import wastereduction from "./components/images/earthmonth.png";
// import MapContainer from './components/map/MapContainer';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';


class App extends Component {
  render() {
    return (
      // <Router>
      //   <div className="App">
      //     <div>

      //       <div className="imagecard col-md-8 mx-auto">

      //       </div>

      //       <div className="bg-dark text-white">
      //         <Switch>
      //           <Route exact path="/" component={Mainpage} />
      //           <Route exact path="/volunteer" component={Volunteer} />
      //           <Route exact path="/contact" component={Contact} />
      //           <Route exact path="/map" component={Eventmap} />
      //           <Route exact path="/wastereduction" component={Wastereduction} />
      //         </Switch>
      //       </div>
      //     </div>
      //   </div>
      // </Router>

      <Router basename="/react-auth-ui/">
        <div className="App">
          <div className="App__Aside"></div>
          <div className="imagecard col-md-8 mx-auto"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
              <NavLink exact to="/sign-Up" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>

            <div className="FormTitle">
              <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
            </div>
            <div className="bg-dark text-white">
            <Switch>
            <Route path="/sign-in" component={SignInForm} />
            
            <Route exact path="/volunteer" component={Volunteer} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/map" component={Eventmap} />
            <Route exact path="/wastereduction" component={Wastereduction} />
            <Route exact path="/sign-Up" component={SignUpForm} />
            <Route exact path="/" component={Mainpage} />
         </Switch>
          </div>
</div>
        </div>
      </Router>
      );

  }
}

export default App;

