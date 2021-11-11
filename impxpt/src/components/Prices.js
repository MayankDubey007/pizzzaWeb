import React from "react";
import Prctmp from "./Prctmp";
// import p1 from './pizza1.png'
// import p2 from './pizza2.png'
// import p3 from './pizza3.png'
// import p4 from './pizza4.png'
// import p5 from './pizza5.png'
// import p6 from './pizza6.png'

const Prices = () => {
    return (
        <div className="prices">
            <div className="container">
                <div className="row">
                    <Prctmp name="Pizza Margeritta" Img="'p1'" prc="$39" />
                    <Prctmp name="Beer Pizza Crust" Img="'p2'" prc="$25" />
                    <Prctmp name="Pizza Biscuit Bake" Img="'p3'" prc="$49" />
                </div>
                <div className="row">
                    <Prctmp name="Pizza Prosciutto" Img="'p4'" prc="$25" />
                    <Prctmp name="Crazy Crust Pizza" Img="'p5'" prc="$29" />
                    <Prctmp name="Low Carb Pizza" Img="'p6'" prc="$49" />
                </div>
            </div>
            
        </div>
    )
}

export default Prices
