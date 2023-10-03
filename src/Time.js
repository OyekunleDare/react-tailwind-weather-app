import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
 
// function Time() {
//     const myElement = (
//         <div>
//             <h2 style={{fontSize:'14px', marginTop:'-347px'}}>Today's Date : <b>{new Date().toDateString()}</b> | Current Time : <b>{new Date().toLocaleTimeString()}</b></h2>
//         </div>
//     );
 
//     ReactDOM.render(
//         myElement,
//         document.getElementById("roots")
//     );
// }
 
// setInterval(Time, 1000);


// const Time = () => {
//     const [date, setDate] = useState(new Date());

//     useEffect(() => {
//         var timer = setInterval(() => { setDate(new Date()) }, 1000)
//         return function cleanup() {
//                 clearInterval(timer);
//             }
//     }
//     );

//     return(
//         <>
//             <h1 className="text-center text-xl">Date : <b>{date.toLocaleDateString()} </b> | Time : <b>{date.toLocaleTimeString()}</b></h1>
//         </>
//     )
// }

class Time extends React.Component {
    constructor(props){
        super(props);
        this.state = {count : new Date()};
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({count : new Date()})
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        return(
            <>
                <h1 className="text-center text-2xl">Date: <span className=" font-bold">{this.state.count.toLocaleDateString()}</span> |  Time: <span className=" font-bold">{this.state.count.toLocaleTimeString()}</span></h1>
            </>
        );
    }
}
 
export default Time;