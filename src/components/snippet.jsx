import React from "react";

function Snippet(props) {
  return (
    <article>
      <h1 className="article-title">{props.snippetHead}</h1>
      <hr></hr>
      <p className="article-par">{props.snippet}</p>
    </article>
  );
}

export default Snippet;
