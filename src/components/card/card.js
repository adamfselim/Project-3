import React from 'react';
import "./card.css";
import Navbar from '../../components/navbar/navbar';

export const Card = (props) => (

    <div className={`cardBackground ${props.cardImage}`}>

        <div className="imagecard">
            <Navbar />
        </div>

        <div className="bg-dark text-white">
<<<<<<< HEAD
            <img src={props.src} alt="Card" />
            <div className="Overlay">
            
                <h1>{props.title}</h1>
                <p>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </p>
               
=======
            <div>
                <div> {props.children}
                </div>

>>>>>>> 799eb5d130ad410f1f076ebf6a87ce620bfca0d5
            </div>
        </div>
    </div>

);
export default Card;


