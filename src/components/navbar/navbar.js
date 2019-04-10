import React from "react";
import "./navbar.css";

export default function Navbar() {
    return (<div>
      <h1>Gleam Globe</h1>
        <ul id="navbackground" className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active navwhite"  href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navwhite" href="#">Map</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navwhite" href="#">Volunteer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navwhite" href="#">Contact</a>
        </li>
      </ul>
      </div>
    )
}
