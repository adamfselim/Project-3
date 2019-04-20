import React from "react";
import "../../components/navbar/navbar";
import "../../components/images/contact.jpg";
import './contact.css';
import contactImg from "../../components/images/contact.jpg";
import Card from "../../components/card/card";

export const Contact = () => {
    return (
        <React.Fragment>
          <div id='backgroundimage4' className="overlay"  style={{backgroundImage:`url(${contactImg})`}}></div>
          <div id="contentCard"><Card cardImage="contactImg"/>
            <adress id ="addy">
              <h3>Contact Team Awesome!</h3>
              Email us at <a href="mailto:savetheearth@gmail.com">savetheearth@gmail.com</  a>.<br></br>
              348 N Oak Cir<br></br>
              Gilbert, AZ 85233<br></br>
              United States<br></br>
            </adress>
          </div>
          
        </React.Fragment>
        
    );
  
};

export default Contact; 

