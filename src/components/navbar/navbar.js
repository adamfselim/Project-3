import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (<div>
    
    <ul id="navbackground" class="nav justify-content-end">
      <li class="nav-item">
        <a class="nav-link active navwhite container" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link navwhite" href="/volunteer">Volunteer</a>
      </li>
      <li class="nav-item">
        <a class="nav-link navwhite" href="map">Map</a>
      </li>
      <li class="nav-item">
        <a class="nav-link navwhite" href="/contact">Contact</a>
      </li>
    </ul>
   
  
  </div>
  )
}
