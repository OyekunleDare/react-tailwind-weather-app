import React, {PureComponent} from "react";

class Add extends PureComponent {
    constructor(){
        super();
        this.state = {counter : 0};

        this.increase = this.increase.bind(this);
    }

    increase(){
        this.setState({counter: this.state.counter + 1});
    }

    render(){
        return(
            <div>
                <h1>Welcome to my counter</h1>
                <h2>{this.state.counter}</h2>
                <button onClick={this.increase}>Add</button>
            </div>
        );
    }
}

export default Add;