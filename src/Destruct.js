import logo from './logo.svg';
import React from 'react';
import './index.css';

const JoinLastName = ({firstName , lastName}) => firstName + " - " + lastName;

const person = {
    firstName: "Dare",
    lastName: "Oyekunle"
}

const myArray = ["suv","f-250","mustang"];

const [x,,z] = myArray;

function JoinName() {
  return (
    <div className='container justify-center items-center grid'>
      <h1 className='text-green-700 text-3xl font-extrabold'>{x} {z}</h1>
    </div>
  );
}
export default JoinName;
