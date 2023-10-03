import React from "react";

const Footer = (props) =>{
    return(
        <div className="grid bg-zinc-500 text-white text-center py-3 text-sm font-semibold mt-4">{props.value}</div>
    );
}

export default Footer;