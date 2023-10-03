import React from "react";
import './index.css';

const OutputScreen = (props) =>{
   return (
        <div>
            <input type="text" readOnly className=" w-96 items-end justify-end bg-slate-500 h-10 text-white pr-3 text-right text-4xl font-bold" value={props.value} />
        </div>
   );
}

export default OutputScreen;