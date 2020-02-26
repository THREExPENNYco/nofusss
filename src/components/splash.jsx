import React from 'react';
import { Spring } from 'react-spring/renderprops';
import image from './componentAssets/nofussbackground.png';

function Splash() {
  return (
    <Spring
      from={{ opacity: 0, marginLeft: -100 }}
      to={{ opacity: 1, marginLeft: 0 }}
      config={{ duration: 500 }}
    >
      {(spring) => (
        <div style={spring}>
          <div className="splash">
            <img src={image} className="splash-image" />
          </div>
        </div>
      )}
    </Spring>
  );
}

export default Splash;
