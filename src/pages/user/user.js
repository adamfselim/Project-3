import React from "react";
import "../../components/navbar/navbar";
import "../../components/images/userpage.jpg";
import "./user.css";
import userImg from "../../components/images/userpage.jpg";
import Card from "../../components/card/card";
import { Link } from "react-router-dom";
export const User = ()  => {
   return(
    <React.Fragment>
      <div id='backgroundimage' className="overlay"  style={{backgroundImage:`url(${userImg})`}}></div>
        <div id="contentCard">
          <div id="cardtext">

          <Card 
          cardImage="userImg">
        
          
          </Card> 
        </div>
      </div>
       
        </React.Fragment>
    );
  
};

export default User; 


