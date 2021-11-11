import React from "react";

const btn = (props) => {
    const btn = {
            textDecoration: 'none',
            border:'none',
            outline: 'none',
            fontSize: '12px',
          }
          const btnSmart = {
          color:'white',
            fontWeight:'700',
            padding:'15px 30px',
            borderRadius:'30px',
            background:'rgb(255,69,79)'
        }
  return (
    <div className="banner__btn">
      <a style={btn,btnSmart}>{props.title}</a>
    </div>
  );
};

export default btn;