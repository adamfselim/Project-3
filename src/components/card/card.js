import React from 'react';
import "./card.css";
import Navbar from '../../components/navbar/navbar';

export const Card = (props) => (

    <div className={`cardBackground ${props.cardImage}`}>

        <div className="imagecard">
            <Navbar />
        </div>

        <div className="cardtext">
            <div>
                <div> {props.children}
                </div>

            </div>
        </div>
    </div>

);
export default Card;


