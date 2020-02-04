import React from "react";

function Navbar() {
  return (
    <nav className="main-nav">
      <img
        className="main-logo"
        src={require("../components/componentAssets/nofusslogo.png")}
        alt="Nofuss Logo"
      ></img>
    </nav>
  );
}

export default Navbar;
