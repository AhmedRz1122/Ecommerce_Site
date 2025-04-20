import React from 'react';
import Arrival1 from '../assets/mens_jacketbg.png';
import Arrival2 from '../assets/boot-bgr.png';
import Arrival3 from '../assets/Arrival3.jpg';
import Arrival4 from '../assets/jacket_girlbg.png';
import './New_Arrival.css';

const New_Arrival = () => {
  return (
    <div className="New_Arrival">
      <h1 className="New_Arrival_Title">New Arrival</h1>
      <p className="New_Arrival_Text">
        The only app in the market where it helps to communicate quick and easy
      </p>
      <div className="Arrival_container">
        <div className="Arrival_left">
          <div className="container1">
            <img src={Arrival1} alt="" className="Arrival1_img" />
            <h3>Skinny cool jeans for him</h3>
          </div>
          <div className="container2">
            <img src={Arrival2} alt="" className="Arrival2_img" />
            <h3>Curious Yellow boots</h3>
          </div>
          <div className="container4">
            <img src={Arrival4} alt="" className="Arrival4_img" />
            <h3>Wind Breakers</h3>
          </div>
          <div className="container3">
            <img src={Arrival3} alt="" className="Arrival3_img" />
            <h3>All from 100% recycled cotton</h3>
            <p>The only app in the market where it helps you communicate quick and easy</p>
          </div>
          
        </div>

        <div className="Arrival_right">
          <div className="AR_con1">
            <button className="btn_plus1">+</button>
            <button className="btnArrival1">View More</button>
          </div>
          <div className="AR_con2">
            <button className="btn_plus2">+</button>
            <button className="btnArrival2">View More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New_Arrival;