import React from "react";
import './Shop.css'
import BTN from './BTN'
const Shop = () => {
  return (
    <div className="shop">
      <div className="container">
        <div className="shop__text">
          <div>
            <h1>Free Delivery With PIZZA OF THE DAY Only 8.99 USD</h1>
          <BTN title="CALL NOW"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
