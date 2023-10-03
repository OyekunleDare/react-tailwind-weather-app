import React, {useState} from "react";

const Example = (props) => {
    return(
        <>
            <h1>{props.value}</h1>
        </>
    );
}

const UseState = () => {
    const [change, setChange] = useState(true);

    return(
        <>
            <button onClick={() => setChange(!change)}>
                Click Here !
            </button>

            { change ? <Example value="Welcome Dare" /> : <Example value="Welcome to coding" /> }

        </>
    );
}

export default UseState;