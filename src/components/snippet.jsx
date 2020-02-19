import React from "react";
import chemicalpng from "../components/componentAssets/chemicalpng.png";
import familyownedpng from "../components/componentAssets/familyownedpng.png";
import paperpng from "../components/componentAssets/paperpng.png";

function Snippet(props) {
  if (props.image === "chemicalpng") {
    var image = chemicalpng;
  } else if (props.image === "familyownedpng") {
    var image = familyownedpng;
  } else if (props.image === "paperpng") {
    var image = paperpng;
  }

  return (
    <div>
      <img className="snippet-images" src={image}></img>
      <h1 className="article-title">{props.snippetHead}</h1>
      <hr></hr>
      <p className="article-par">{props.snippet}</p>
    </div>
  );
}

export default Snippet;
