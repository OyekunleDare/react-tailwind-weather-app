import logo from './logo.svg';
import React from 'react';
import './index.css';

const courses = [
  "Website Development",
  "Graphics",
  "Data Analytics",
];

function App(props) {
  const coursesData = courses.map((course) => <li>{course}</li>);
  return (
    <div className='container justify-center items-center grid'>
      <h1 className='text-green-700 text-3xl font-extrabold'>Available Courses</h1>
      <ul className=' text-blue-500 font-semibold'>{coursesData}</ul>
    </div>
  );
}
export default App;
