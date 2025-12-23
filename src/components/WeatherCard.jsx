import {useState} from 'react';
function WeatherCard({weatherData}){
    const [unit,setUnit]=useState("C");
    if(!weatherData) return null;
    const tempC=weatherData.main.temp;
    const tempF=(tempC*9)/5+32;

    return(
        <div className="bg-white shadow-lg rounded-xl p-6 mt-6 max-w-sm mx-auto">
            <h2 className="text-xl font-bold">{weatherData.name},{weatherData.sys.country}</h2>
            <p className="text-4xl mt-3 font-semibold">{unit==="C"?Math.round(tempC):Math.round(tempF)}°{unit}</p>
            <button onClick={()=>setUnit(unit === "C"?"F":"C")} className="mt-3 text-sm text-blue-600 font-medium">Switch to {unit==="C"?"F":"C"}</button>
            <p className="capitalize mt-1 text-gray-600">{weatherData.weather[0].description}</p>
            <div className="flex justify-between mt-6 text-sm text-gray-600">
                <span>Humidity:{weatherData.main.humidity}%</span>
                <span>Wind:{weatherData.wind.speed}%</span>
            </div>
        </div>
    )

}
export default WeatherCard;