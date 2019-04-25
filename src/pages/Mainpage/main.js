import React from "react";
import "../../components/navbar/navbar";
import "../../components/images/Nature.jpg"
import "./style.css";
import mainImg from "../../components/images/Nature.jpg";
import Card from "../../components/card/card";
import waste2 from "../../components/images/wasteimage2.png";


export const Main = () => {
  return (
    <React.Fragment>
      <div id='backgroundimage' className="overlay" style={{ backgroundImage: `url(${mainImg})` }}></div>
      <div id="contentCard">
        <div id="cardtext">

          <Card
            cardImage="mainImg"
            title='The products of our own creation are purely a reflection of ourselves.'>
            

            <h5 id="maincontent">Overall management of municipal solid waste (MSW) across America is
              currently in fair condition. In many cases the transport and disposal of
               MSW is self-funding and managed by the private sector, and therefore is
                sufficiently funded. Americans annually generate about 258 million
                tons of MSW of which approximately 53% is deposited in landfills –
                a share that has plateaued in recent years. Currently, 35% of MSW is
                 recycled and 13% is combusted for energy production. There is a need
                 to change the way we think of how solid waste is generated, managed,
                 and potentially used as a resource. We need to recognize that what is
                 routinely discarded may in fact be a reusable resource.
             </h5>
              <img src={waste2} alt="waste2" className="waste2"/>
          </Card>
        </div>
      </div>

    </React.Fragment>
  );

};

export default Main;


