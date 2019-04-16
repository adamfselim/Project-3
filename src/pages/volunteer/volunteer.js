import React from "react";
// import "../../components/images/";
import "./volunteer.css";
import Card from "../../components/card/card";
import Navbar from '../../components/navbar/navbar';
import volunteerImg from '../../components/images/volunteer.jpg';
import Calendar from '../../components/calendar/Calendar';
import '../../components/calendar/calendar.css';

export const Volunteer = () => {
    return (
        <div className="overlay volunteerImage">

            <Card />
            <h2>Register to Volunteer and help our community!</h2>
            <Calendar />
        </div>
    );

};

export default Volunteer; 