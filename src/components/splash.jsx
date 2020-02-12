import React from "react"; 
import image from "../components/componentAssets/nofussbackground.png"; 

function Splash(props) { 
    const welcome = "Let Us Do All The Work"; 
    return (
        <div className="splash">
            <img src={image} className="splash-image"></img>
        </div>
    )
}

export default Splash; 