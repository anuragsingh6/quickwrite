import React from "react";

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