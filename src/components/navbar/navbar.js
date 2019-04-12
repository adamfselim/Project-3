import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (<div>
    
    <ul id="navbackground" class="nav justify-content-end">
      <li class="nav-item">
        <a class="nav-link active navwhite container" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link navwhite" href="#">Volunteer</a>
      </li>
      <li class="nav-item">
        <a class="nav-link navwhite" href="#">Map</a>
      </li>
      <li class="nav-item">
        <a class="nav-link navwhite" href="#">Contact</a>
      </li>
    </ul>
    <h1>Gleam Globe</h1>
  
  </div>
  )
}
