import React from "react";
import "../../components/navbar/navbar";
import "../../components/images/Nature.jpg"
import "./style.css";
import mainImg from "../../components/images/Nature.jpg";
import Card from "../../components/card/card";

export const Main = ()  => {
   return(
    <React.Fragment>
      <div id='backgroundimage' className="overlay"  style={{backgroundImage:`url(${mainImg})`}}></div>
        <div id="contentCard">
          <div id="cardtext">

          <Card 
          cardImage="mainImg">
            <h3>“The products of our own creation are purely a reflection of ourselves.”</h3>
     
          </Card> 
        </div>
      </div>
       
        </React.Fragment>
    );
  
};

export default Main; 


