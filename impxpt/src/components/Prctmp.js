import React from "react";
import './Prctmp.css';
// import p1 from './pizza1.png';
import p1 from './pizza1.png'
import p2 from './pizza2.png'
import p3 from './pizza3.png'
import p4 from './pizza4.png'
import p5 from './pizza5.png'
import p6 from './pizza6.png'

const Prctmp = (props) => {
  return (
    <div className="col-3">
      <div className="price">
        <div className="price__img">
          <img src={props.Img} alt="pizza" />
        </div>
        <h1 className="price__text">{props.name}</h1>
        <p className="price_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          dolorum ea quod ducimus quos natus nostrum nobis cupiditate, placeat
          modi sunt molestiae quam voluptas vero, in esse debitis eum culpa?
        </p>
        <p className="price_rs">{props.prc}</p>
      </div>
    </div>
  );
};

export default Prctmp;
