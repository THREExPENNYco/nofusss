import React from 'react';
import { Spring } from 'react-spring/renderprops';
import chemicalpng from './componentAssets/chemicalpng.png';
import familyownedpng from './componentAssets/familyownedpng.png';
import paperpng from './componentAssets/paperpng.png';

function Snippet(props) {
  let image; 
  if (props.image === 'chemicalpng') {
    image = chemicalpng;
  } else if (props.image === 'familyownedpng') {
    image = familyownedpng;
  } else if (props.image === 'paperpng') {
    image = paperpng;
  }

  return (
    <Spring
      from={{ opacity: 0, top: 100 }}
      to={{ opacity: 1 }}
      config={{ duration: 1000 }}
    >
      {(spring) => (
        <article style={spring}>
          <img className="snippet-images" alt={props.image} src={image} />
          <h1 className="article-title">{props.snippetHead}</h1>
          <hr />
          <p className="article-par">{props.snippet}</p>
        </article>
      )}
    </Spring>
  );
}

export default Snippet;
