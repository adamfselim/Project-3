import React from "react";
import "./volunteer.css";
import Card from "../../components/card/card";
import Navbar from '../../components/navbar/navbar';
import volunteerImg from '../../components/images/volunteerpage.jpg';
import Calendar from '../../components/calendar/Calendar';
import '../../components/calendar/calendar.css';

export const Volunteer = () => {
    return (
        <div className="overlay volunteerImg">
 <h2>Register to Volunteer and help our community!</h2>
            <Card 
            cardImage="volunteerImg"
            >
            <Calendar />
            
            </Card>
            
        </div>
    );

};

export default Volunteer; 