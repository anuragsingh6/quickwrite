import React from "react";

function Button({children,...attributes}){
    // return(<ReactElement.ReactElement className="main-div"></ReactElement.ReactElement>)
    // ≡
    return (
        <>
        <button type="button" className="main-button" {...attributes}>{children}</button>
        </>
    );
};

export default Button;