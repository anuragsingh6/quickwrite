import { Link } from 'react-router-dom';
import React from "react";

function Menu(){
    return(
        <div className="menu">
            <Link to="/writer"><div>Start Writing</div></Link>
            <Link to="/"><div>Know More</div></Link>
            {/* <Link to="/#more"><div onClick={()=>{document.getElementById("more").scrollIntoView();window.scrollBy(0,-150);}}>Know More</div></Link> */}
        </div>
    )
}

export default Menu