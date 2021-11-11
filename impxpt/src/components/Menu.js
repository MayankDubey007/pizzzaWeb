import React from "react";
import ABT from "../img/bg2.jpg";
import "./Menu.css";
import BTN from "./BTN";

const Menu = () => {
  return (
    <div className="menu">
      <div className="container">
        <div className="row">
          <div className="col-6" style={{ marginTop: "100px" }}>
            <h3>The Pizza Menu</h3>
            <h1>CHICAGO THIN CRUST</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              doloremque dicta aliquam alias nihil molestiae. Ut aspernatur
              quaerat odit consectetur accusantium, beatae, pariatur inventore,
              natus necessitatibus velit autem nesciunt quam?
            </p>
            <div className="about__btn">
              <BTN title="Read More" />
            </div>
          </div>
          <div className="col-6 p-25 Cimg">
            <img src={ABT} alt="abt" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
