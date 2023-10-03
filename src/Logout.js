import React from "react";

const Logout = (props) => {
    return(
        <button onClick={props.click} className=" border-2 py-1 px-3 bg-red-700 text-white border-black rounded">Logout</button>
    );
}

export default Logout;