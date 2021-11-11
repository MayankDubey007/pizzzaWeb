// export default // rafce
import React from "react";
import "./Navbar.css";
import Lg from "./logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        {/* <Lg /> */}
        <div className="logo"><img src={Lg} alt="" /></div>
        <ul className="navbar__ul">
          <li>
            <a >Home</a>
          </li>
          <li>
            <a >Menu</a>
          </li>
          <li>
            <a >About</a>
          </li>
          <li>
            <a >Shop</a>
          </li>
          <li>
            <a >News</a>
          </li>
          <li>
            <a >Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
