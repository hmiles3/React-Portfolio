import React from "react";
import "./style.css";
import Me from "../Images/Me.jpeg";


function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: <img src={Me} alt="logo" /> }}>
      {props.children}
    </div>
  );
}

export default Hero;
