import React from "react";

// Each individual division in the home page.
function Segment({children, ...attributes}){
    return(
        <>
        <div {...attributes}>
            {children}
        </div>
        </>
    )
}

export default Segment