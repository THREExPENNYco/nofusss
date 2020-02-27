/* eslint-disable react/prop-types */
import React from 'react';
import { Spring } from 'react-spring/renderprops';

function Header(props) {
  return (
    <Spring
      from={{ opacity: 0, top: 100 }}
      to={{ opacity: 1 }}
      config={{ duration: 1000 }}
    >
      {(spring) => (
        <div className="services" style={spring}>
          <h1>{props.text}</h1>
          <hr className="services-hr" />
          <p className="header-par">{props.description}</p>
        </div>
      )}
    </Spring>
  );
}

export default Header;
