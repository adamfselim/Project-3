import React from "react";
// import "../../components/images/";
import "./volunteer.css";
import Card from "../../components/card/card";
import Navbar from '../../components/navbar/navbar';
import volunteerImg from '../../components/images/recycle-20525_640.jpg';

export const Volunteer = ()  => {
   return(
        <div className="Overlay"  style={{backgroundImage:`url(${volunteerImg})`}}>
            <Navbar/>
            <h1>Dude wat?</h1>
            <p>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </p>

            <Card />
        </div>
    );
  
};

export default Volunteer; 