import React from "react";
import "../../components/navbar/navbar";
import mapImg from '../../components/images/earth.jpg'
import "./map.css";
import Card from "../../components/card/card"

export const EventMap = () => {
    return(
    <div>
       <div className="overlay mapImg">
       
       <Card 
       cardImage="mapImg"
       />
       </div>


    
        
        
    </div>)
}
export default EventMap;