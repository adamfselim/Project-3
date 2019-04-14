import React from 'react';



export const Card = (props) => (

    <div>
        
        <div className="imagecard col-md-8 mx-auto">
        
        </div>
        
        <div className="bg-dark text-white">
            <img src={props.src} alt="Card image" />
            <div className="Overlay">
            
                <h1>{props.title}</h1>
                <p>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </p>
                <h2>Last updated 3 mins ago</h2>
            </div>
        </div>
    </div>

);
export default Card;

