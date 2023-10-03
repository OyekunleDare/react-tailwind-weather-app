import React from "react";
import CalculatorTitle from "./CalculatorTitle";
import Output from "./OutputScreenRow";
import But from "./Button";
import Time from "./Time";


class Calculate extends React.Component {
    constructor() {
        super();
        
        this.state = {
          question: "",
          answer: ""
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
            const value = event.target.value;
            switch (value) {
                case "=": {

                    if (this.state.question !== "") {
                        var ans = "";
                        try {
                            ans = eval(this.state.question);
                        } catch (err) {
                            this.setState({ answer: "Math Error" });
                        }
                        if (ans === undefined) this.setState({ answer: "Math Error" });
                        // update answer in our state.
                        else this.setState({ answer: ans, question: "" });
                        break;
                    }
                }

                case "Clear": {
                    // if it's the Clears sign, just clean our
                    // question and answer in the state
                    this.setState({ question: "", answer: "" });
                    break;
                }
         
                case "Delete": {
                    var str = this.state.question;
                    str = str.substr(0, str.length - 1);
                    this.setState({ question: str });
                    break;
                }
         
                default: {
                    // for every other command, update the answer in the state
                    this.setState({ question: (this.state.question += value)});
                    
                }
            }
        }    

    render(){
        return(
            <div className=' container justify-center items-center grid p-4 bg-gray-400'>
                <CalculatorTitle value='REACT JS MINI CALCULATOR' />
                <Time />
                <Output question={this.state.question} answer={this.state.answer} />
                <div className="flex flex-row w-full space-x-4">
                    <But label={"Clear"} handleClick={this.handleClick}/>
                    <But label={"Delete"} handleClick = {this.handleClick}/>
                    <But label={"."} handleClick = {this.handleClick}/>
                    <But label={"/"} handleClick = {this.handleClick}/>
                </div>
                <div className="flex flex-row w-full space-x-5">
                    <But label={"7"} handleClick = {this.handleClick}/>
                    <But label={"8"} handleClick = {this.handleClick}/>
                    <But label={"9"} handleClick = {this.handleClick}/>
                    <But label={"*"} handleClick = {this.handleClick}/>
                    <But label={"%"} handleClick = {this.handleClick}/>
                </div>
                <div className="flex flex-row w-full space-x-4">
                    <But label={"6"} handleClick = {this.handleClick}/>
                    <But label={"5"} handleClick = {this.handleClick}/>
                    <But label={"4"} handleClick = {this.handleClick}/>
                    <But label={"-"} handleClick = {this.handleClick}/>
                </div>
                <div className="flex flex-row w-full space-x-4">
                    <But label={"3"} handleClick = {this.handleClick}/>
                    <But label={"2"} handleClick = {this.handleClick}/>
                    <But label={"1"} handleClick = {this.handleClick}/>
                    <But label={"+"} handleClick = {this.handleClick}/>
                </div>
                <div className="flex flex-row w-4/4 items-center justify-center space-x-4">
                    <But label={"sine"} handleClick = {this.handleClick}/>
                    <But label={"0"} handleClick = {this.handleClick}/>
                    <But label={"="} handleClick = {this.handleClick}/>
                </div>                
            </div>
        );
    }
}

export default Calculate;