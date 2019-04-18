import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" id ="home" href="home">Welcome</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="volunteer">Volunteer<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="map">Map</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="contact">Contact</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="recycle">Waste/Recycle</a>
          </li>
        </ul>
        </div>
      </nav>
  )
}



export default App;
