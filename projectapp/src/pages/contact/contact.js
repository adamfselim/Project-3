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
          <div id="contentCard"><Card cardImage="contactImg">            
            <adress id ="addy">
              <h3>Contact The Gleam Globe Team!</h3>
              Email us at <a href="mailto:savetheearth@gmail.com">savetheearth@gmail.com</  a>.<br></br>
              348 N Oak Cir<br></br>
              Gilbert, AZ 85233<br></br>
              United States<br></br>
              <br></br>
              <u>About Us:</u><br></br>
              <br></br>
              “The products of our own creation are purely a reflection of ourselves.”<br></br>
              <br></br>
              Our founders Christine, Viviana, Christian, Justin, and the Adams came together to form a non profit organization called Gleam Globe to help save the world.   &nbsp;We here at Gleam Globe wanted to create a space where like-minded people could come together in a social space to post before and after pictures of their work, create events, and be social while helping to protect the environment.  &nbsp; Because if you save the world and you dont post about it, what's the point?
            </adress>
            </Card>
          </div>
          
        </React.Fragment>
        
    );
  
};

export default Contact; 

