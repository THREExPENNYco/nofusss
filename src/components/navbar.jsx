import React from "react";
import image from "../components/componentAssets/nofusslogo.png";
import { Spring } from "react-spring/renderprops";

function Navbar() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -100 }}
      to={{ opacity: 1, marginTop: 0 }}
      config={{ duration: 1000 }}
    >
      {props => (
        <nav style={props} className="main-nav">
          <img className="main-logo" src={image} alt="Nofuss Logo"></img>
        </nav>
      )}
    </Spring>
  );
}

export default Navbar;
