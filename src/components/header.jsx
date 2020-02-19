import React from "react";
import { Spring } from "react-spring/renderprops";

function Header() {
  return (
    <Spring
      from={{ opacity: 0, top: 100 }}
      to={{ opacity: 1 }}
      config={{ duration: 2000 }}
    >
      {props => (
        <div className="services" style={props}>
          <h1>Services We Provide</h1>
          <hr className="services-hr" />
        </div>
      )}
    </Spring>
  );
}

export default Header;
