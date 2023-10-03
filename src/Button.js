import React from "react";
import './index.css';

    const But = (props) => {
        return <input type="button" className=" rounded-md border-2 bg-green-500 mt-2 items-center w-full font-semibold" onClick={props.handleClick} value={props.label}/>
    }

export default But;