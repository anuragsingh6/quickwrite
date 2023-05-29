import React from "react";

function Section({children, ...attributes}){
    return(
        <>
        <div {...attributes}>
            {children}
        </div>
        </>
    )
}

export default Section