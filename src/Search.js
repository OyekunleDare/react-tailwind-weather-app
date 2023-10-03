import React, { useState } from "react";
import Filter from "./Filter";
import Footer from "./Footer";
import JSonData from "../src/MOCK_DATA.json";

const Search = () => {

    const [searchTerm,setSearchTerm] = useState("");

    return(
        <div className=" justify-center items-center">
            <Filter value="Search Filter" />

            <div className="grid justify-center items-center">
            <input type="text" className=" pl-3 mb-5 h-12 w-96 bg-gray-500 bg-opacity-100 border-gray-800 text-2xl rounded-md border-2 mt-5 text-white" placeholder="Search....."
            onChange={(event) => {setSearchTerm(event.target.value)}} />
            </div>

            <div className="grid justify-center items-center">
                <table className="font-bold border table-auto">
                    <tr className="border p-3"><td className="border p-3">#</td><td className="border p-3">First Name</td><td className="border p-3">Last Name</td><td className="border p-3">Emaill Address</td></tr>
                {JSonData.filter(
                    (val) => {
                        if (searchTerm == "") {
                            return val
                        } else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase()) || val.last_name.toLowerCase().includes(searchTerm.toLowerCase()) || val.email.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase()) === ""){
                            return "No search returned"
                        }
                    }
                ).map((val,key) => {
                    return(
                        <tr className="text-sm font-medium border" key={key}>
                            <td className="border p-3">{val.id}</td><td className="border p-3">{val.first_name}</td><td className="border p-3">{val.last_name}</td><td className="border p-3">{val.email}</td>
                        </tr>
                    );
                })}
                </table>
            </div>
            
            <Footer value="Designed by OYEKUNLE DARE EMMANUEL" />
        </div>
    );
}

export default Search; 