import React from "react";
import "../../components/images/earthmonth.png";
import Card from '../../components/card/card';
import './wastereduction.css';
import wasteImg from '../../components/images/earthmonth.png';
import Navbar from "../../components/navbar/navbar";


export const Wastereduction = () => {
    return (
        <div>
            

            <div className="overlay earthdayImage">
                <div className="">
                    <Navbar />
                    <img src={wasteImg} alt="wasteImg" id="wasteImg" class="center" />

                </div>
            </div>
        </div>
    )
};
export default Wastereduction;