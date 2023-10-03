import React from "react";
import OutputScreen from "./OutputScreen";

const Output = (props) => {
    return(
        <div className="mt-2">
            <OutputScreen value={props.question} />
            <OutputScreen value={props.answer} />
        </div>
    );
}

export default Output;