import React from "react";
import "./index.css"

const ButtonCreate = ({ type, children, handleClick }) => {
    return (
        <button type={type} className="button-default" onClick={() => handleClick()}>
            {children}
        </button>
    );
}

export default ButtonCreate;