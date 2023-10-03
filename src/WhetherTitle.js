import React from "react";

const WhetherTitle = (props) =>{
    return(
        <div>
            <div className="grid bg-zinc-500 text-white text-center py-3 text-5xl font-black uppercase">{props.value}</div>
        </div>
    );
}

export default WhetherTitle;