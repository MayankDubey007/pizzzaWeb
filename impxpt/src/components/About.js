import React from "react";
import ABT from "./Abt.jpg";
import "./About.css";
import BTN from "./BTN";
const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25 Cimg">
            <h3 >About Us</h3>
            <img src={ABT} alt="abt" />
          </div>
          <div className="col-6"style={{marginTop:"100px"}} >
            <h1>WELLCOME TO MAESTRO PIZZINI</h1>
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
        </div>
      </div>
    </div>
  );
};

export default About;
