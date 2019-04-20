import React from "react";
// import "../../components/images/";
import "./volunteer.css";
import Card from "../../components/card/card";
import Navbar from '../../components/navbar/navbar';
import volunteerImg from '../../components/images/volunteer.jpg';
import Calendar from "../../components/calendar/Calendar";
import EventFormContainer from "../../containers/EventFormContainer";


export const Volunteer = ()  => {
   return(
        <div className="Overlay"  style={{backgroundImage:`url(${volunteerImg})`}}>
           <Navbar />
            <h1>Dude wat?</h1>
            <p>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </p>
            
           <Card />
           <EventFormContainer />
           <Calendar />
           
        </div>
    );
  
};

export default Volunteer; 