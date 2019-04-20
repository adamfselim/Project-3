import React from "react";
import "../../components/navbar/navbar";
import "../../components/images/earth.jpg"
import "./map.css";
import mapImg from "../../components/images/earth.jpg";
import Card from "../../components/card/card";

export const Eventmap = ()  => {
   return(
        <React.Fragment>
          <div id='backgroundimage5' className="overlay"  style={{backgroundImage:`url(${mapImg})`}}></div>
          <div id="contentCard"><Card cardImage="mapImg"/></div>
          
        </React.Fragment>
    );
  
};

export default Eventmap; 


