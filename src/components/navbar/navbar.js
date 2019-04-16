import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";


export const Navbar=() => {
  return (<div>
    
    <ul id="navbackground" className="nav justify-content-end">
      <li className="nav-item">
        <Link className="nav-link active navwhite container" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link navwhite" to="/volunteer">Volunteer</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link navwhite" to="/map">Map</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link navwhite" to="/contact">Contact</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link navwhite" to="/reducewaste">Reduce Waste</Link>
    </li>
    </ul>
   
  
  </div>
  )
}
export default Navbar; 