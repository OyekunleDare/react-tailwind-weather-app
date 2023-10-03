import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

class MyForm extends React.Component {
    change(check){
        let val = check.target.value;
        if(Number(val)){
           document.getElementById('error').innerHTML = "Please Enter a valid text";
           document.getElementById('yes').innerHTML = "";
        }else if(val==""){
            document.getElementById('error').innerHTML = "You can't enter an empty space";
            document.getElementById('yes').innerHTML = "";
        }else{
            document.getElementById('yes').innerHTML = "Entered Value is : " + val;
            document.getElementById('error').innerHTML = "";
        }
    }

    // state = { inputValue : ""};

    // onSubmit = (event) => {
    //     event.preventDefault();
    //     document.getElementById('yes').innerHTML = "The name you entered was " + 
    // }
      render() {
                return(
                    <>
                        <h1 id='error' className=' text-red-600'></h1>
                        <h1 id='yes' className=' text-green-800'></h1>
                        <form>
                            <input type="text" className='border-2 border-black rounded-md mt-2 ml-2' onChange={this.change} /><br/>
                            <button>Submit</button>
                        </form>
                    </>
            );
        }
    }
export default MyForm;