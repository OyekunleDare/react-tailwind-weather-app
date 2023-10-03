import logo from './logo.svg';
import React from 'react';
import './index.css';

const courses = [
    {
       id: 0,
       name: "Website Development",
       price: "$89.999" 
    },
    {
        id: 1,
        name: "Graphics Design",
        price: "$109.999" 
     },
     {
        id: 0,
        name: "Data Analytics",
        price: "$2999.999" 
     }
]

function Arrays(props) {
  const coursesData = courses.map((course) => <li key={course.id} className='text-center bg-green-600 mb-4 mt-4 rounded-full p-10 w-96 text-2xl'>
    <div>
        <p>{course.name}</p>
        <span>{course.price}</span>
    </div>
    </li>);
  return (
    <div className='container justify-center items-center grid'>
      <h1 className='text-green-800 text-3xl font-extrabold text-center'>Array with key</h1>
      <ul className=' text-white font-semibold'>{coursesData}</ul>
      <hr className=' h-10 bg-slate-600'/>
    </div>
  );
}
export default Arrays;
