import React, { PureComponent} from "react";
import Message from "./Message";
import Login from "./Login";
import Logout from "./Logout";

class Home extends PureComponent {
    constructor(props){
        super(props);
        this.state = {isLogged : false};
        this.ifLoginClicked = this.ifLoginClicked.bind(this);
        this.ifLoggedOut = this.ifLoggedOut.bind(this);
    }

    ifLoginClicked(){
        this.setState({isLogged:true});
    }

    ifLoggedOut(){
        this.setState({isLogged:false});
    }

    render(){
        return(
            <div>
                <Message isLoggedIn={this.state.isLogged} />

                    { this.state.isLogged ? (<Logout click={this.ifLoggedOut} />) : (<Login click={this.ifLoginClicked} />) }
            </div>
        );
    }
}

export default Home;