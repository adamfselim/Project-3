import React from "react";
import "../../components/navbar/navbar";
import "../../components/images/person.jpg"
import "./style.css";
import Navbar from '../../components/navbar/navbar';
import mainImg from '../../components/images/person.jpg';
import Card from "../../components/card/card";

export const Main = ()  => {
   return(
        <div className="Overlay"  style={{backgroundImage:`url(${mainImg})`}}>
            
            <h1>Dude wat?</h1>
            <p>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
            </p>

           <Card />
        </div>
    );
  
};

export default Main; 


