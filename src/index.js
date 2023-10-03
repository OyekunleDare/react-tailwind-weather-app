import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import JoinName from './Destruct';
import Arrays from './Array';
import MyForm from './Form';
import Calculate from './Calculator';
import reportWebVitals from './reportWebVitals';
import Time from './Time';
import Home from './Dashboard';
import UseState from './UseState';
import Add from './Add';
import QuizApp from './QuizApp';
import Search from './Search';
import WhetherApp from './WhetherApp';

class Car {
  constructor(name,year){
    this.brand = name;
    this.years = year;
  }

  shows(){
    return 'The name of my car is ' + this.brand + ' made in ' + this.years;
    
  }
}

class Model extends Car {
  constructor(name,year,model) {
    super(name,year);
    this.models = model;
  }
  show(){
    return(
      <p className=' bg-red-500 text-white'>
        {this.shows()} It is a {this.models} brand
      </p>
    );
  }
}

const Click = () => {
  const [click, setClick] = useState (0);
     return(
        <>
          <h1>You've clicked {click} times</h1>
          <p>Your clicked time is { click % 2 == 0 ? 'even' : 'odd'}</p>
          <button onClick={() => setClick(click + 1)}>Click Me</button>
        </>
     );
}

class SetState extends React.Component {
  constructor (){
    super();
    this.state = { sayings : ""};
  }
  update(e){
    this.setState({ sayings : e.target.value });
  }

  render(){
    return(
      <div>
        Dare says <input type='text' ref='anything' onChange={this.update.bind(this)}/><br/>
        <i>{this.state.sayings}</i>
      </div>
    );
  }
}

const DemoComponent = (props) =>{
      return(
              <div>
                  <h2>Hello {props.user}</h2>
                  <Child user="Dare" userId="5555" />
              </div>
          );
  }

DemoComponent.defaultProps = {
  title : "Mr"
}

  const Child = (props) => {
    console.log(props);
      return(
          <>
            <h2> Hello {props.title} {props.user} , your User Id is {props.userId}</h2>
          </>
      );
  }



const MyCar = new Model('Ford',1980,'Mustang');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <WhetherApp />
    {/* <Search /> */}
    {/* <QuizApp /> */}
    {/* <Calculate /> 
    <Home />
    <Click />
    <UseState />
    <Add />
    <DemoComponent user="Funso" /> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
