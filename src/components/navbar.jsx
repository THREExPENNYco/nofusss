import React from "react";
import image from "../components/componentAssets/nofusslogo.png";

function Navbar() {
  return (
    <nav className="main-nav">
      <img
        className="main-logo"
        src={image}
        alt="Nofuss Logo"
      ></img>
    </nav>
  );
}

export default Navbar;
