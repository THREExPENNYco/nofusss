import React from "react";
import image from "../components/componentAssets/nofussbackground.png";
import { Spring } from "react-spring/renderprops";

function Splash() {
  return (
    <Spring
      from={{ opacity: 0, marginLeft: -100 }}
      to={{ opacity: 1, marginLeft: 0 }}
      config={{ duration: 1000 }}
    >
      {spring => (
        <div style={spring}>
          <div className="splash">
            <img src={image} className="splash-image"></img>
          </div>
        </div>
      )}
    </Spring>
  );
}

export default Splash;
