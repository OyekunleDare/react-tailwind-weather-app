import React from "react";

const QuizTitle = (props) => {
    return(
        <div className="grid bg-zinc-500 text-white text-center py-3 text-5xl font-black">{props.value}</div>
    );
}

export default QuizTitle;