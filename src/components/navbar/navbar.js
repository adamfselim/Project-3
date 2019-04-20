import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";


export const Navbar=() => {
  return (<div>
    <Link className="gleam" to="/">Gleam Globe</Link>
    <ul id="navbackground" className="nav justify-content-end">
      <li className="nav-item">
<<<<<<< HEAD
        <Link className="nav-link active navwhite container" to="/">Home |</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link navwhite" to="/volunteer">Volunteer |</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link navwhite" to="/map">Map |</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link navwhite" to="/contact">Contact |</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link navwhite" to="/wastereduction">Reduce Waste</Link>
=======
        <Link className="nav-link active navblack container" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link navblack" to="/volunteer">Volunteer</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link navblack" to="/map">Map</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link navblack" to="/contact">Contact</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link navblack" to="/wastereduction">Reduce Waste</Link>
>>>>>>> 799eb5d130ad410f1f076ebf6a87ce620bfca0d5
    </li>
    </ul>
   
  
  </div>
  )
}
export default Navbar; 