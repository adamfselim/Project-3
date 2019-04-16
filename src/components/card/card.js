import React from 'react';
import "./card.css";
import Navbar from '../../components/navbar/navbar';

export const Card = (props) => (

    <div>
        
        <div className="imagecard">
         <Navbar />
        </div>
       
        <div className="bg-dark text-white">
            <div className={props.cardImage}>
            
                <h1>{props.title}</h1>
                
            </div>
        </div>
    </div>

);
export default Card;


