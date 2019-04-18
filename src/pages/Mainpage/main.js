import React from "react";
import "../../components/navbar/navbar";
import "../../components/images/Nature.jpg"
import "./style.css";
import Navbar from '../../components/navbar/navbar';
import mainImg from '../../components/images/Nature.jpg';
import Card from "../../components/card/card";

export const Main = ()  => {
   return(
        <div className="overlay mainImg"  style={{backgroundImage:`url(${mainImg})`}}>
             <Card 
             cardImage="mainImg"
             />
          
        </div>
    );
  
};

export default Main; 


