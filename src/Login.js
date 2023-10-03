import React from "react";

const Login = (props) => {
    return(
        <button onClick={props.click} className=" border-2 py-1 px-3 bg-blue-700 text-white border-black rounded">Login</button>
    );
}

export default Login;