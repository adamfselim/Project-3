import React from "react";
import "../../components/navbar/navbar";
import "../../components/images/";
import "./map.css";
import {Card};

export default function Volunteer() {
    return(<div>
   
       <div className="imagecard col-md-8 mx-auto">
       <h2> this is the text</h2>
       </div>

<Card className="bg-dark text-white">
  <Card.Img src="holder.js/100px270" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>;
</div>
    )
}