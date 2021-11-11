// rafce
import React from "react";
import "./Header.css";
import Navbar from "./Navbar";
import BTN from "./BTN";

const Header = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Pizza Delivery</h3>
            <h1>MAESTRO PIZINNI</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              perspiciatis nostrum natus vitae assumenda.
            </p>
            <BTN title="Delivery Now"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
