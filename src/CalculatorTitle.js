import React from "react";

const CalculatorTitle = (props) => {
    return (
        <div className=" bg-green-600 text-white text-center w-96 py-3 text-2xl font-black">{props.value}</div>
    );
}

export default CalculatorTitle;