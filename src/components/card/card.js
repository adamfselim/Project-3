import React from 'react';
import "./card.css";
import Navbar from '../../components/navbar/navbar';

export const Card = (props) => (

    <div className="cardBackground">

        <div className="imagecard">
            <Navbar />
        </div>

        <div className="bg-dark text-white">
            <div className={props.cardImage}>

                <h1>{props.title}</h1>
                <h1>Dude wat?</h1>
                <p>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </p>
                <div> {props.children}
                </div>
                
            </div>
        </div>
    </div>

);
export default Card;


