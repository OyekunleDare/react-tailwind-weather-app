import React, { useState } from "react";
import WhetherTitle from "./WhetherTitle";
import Footer from "./Footer";

const api = {
    key:'54528cc3dd8c5a966058a5bafa6bc5b5',
    base:'https://api.openweathermap.org/data/2.5/'
}

const WhetherApp = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const Search = (evt) => {
        if(evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setQuery("");
                //console.log(result);
            });
        }
    }

    const date = (d) =>{
        let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let dates = d.getDate();
    
        let day = days[d.getDay()];
    
        let month = months[d.getMonth()];
    
        let year = d.getFullYear();
    
        return `${day} ${month} ${dates}, ${year}`
    }

    return(
        <>
            <WhetherTitle value="My Whether App" />
            <div className="justify-center items-center text-center grid mt-4 mb-4">
                <div className="w-96 bg-slate-300 p-4 rounded-md">
            <input type="text" className="w-72 h-10 rounded-md drop-shadow-md p-4 text-lg mb-4" placeholder="Enter a specific location ...." onChange={evt => setQuery(evt.target.value)} value={query} onKeyPress={Search} />
              {(typeof weather.main != "undefined") ? (
                    <div className={(typeof weather.main.temp != "undefined" & weather.main.temp < 20) ? '"w-96 p-4 rounded-md bg-[url(img/blue.jpg)]' : '"w-96 bg-slate-300 p-4 rounded-md bg-[url(img/red.jpg)]'}>
                <p className="justify-center items-center text-center grid">
                    <span className="justify-center items-center grid text-center p-9 text-7xl mt-5 font-semibold bg-slate-900 text-white opacity-90 w-64 h-48 rounded-lg">
                    {Math.round(weather.main.temp * 10)/10}&#176;C
                        <span className="text-2xl text-center">
                            {weather.weather[0].main}
                        </span>
                    </span>
                </p>
                    <p className=" justify-center items-center text-center pt-2 text-3xl font-semibold drop-shadow-md shadow-blue-600 text-white">
                    {weather.name} , {weather.sys.country}
                    </p>

                <p className=" justify-start items-start text-center text-lg font-semibold drop-shadow-md shadow-blue-600 text-white">
                    {date(new Date())}
                </p>
                </div>
                ):(
                    <p className=" text-red-600 text-2xl font-semibold">Please enter a valid location</p>
                )}
            </div>
            </div>
            <Footer value="Designed by OYEKUNLE DARE EMMANUEL" />
        </>
    )
}

export default WhetherApp;