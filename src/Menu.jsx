import { Link } from 'react-router-dom';
import React from "react";

// The hamburger menu opened by clicking on the top right menu button.
function Menu(){
    return(
        <div className="menu">
            <Link to="/writer"><div>Start Writing</div></Link>
            <Link to="/"><div>Know More</div></Link>
        </div>
    )
}

export default Menu