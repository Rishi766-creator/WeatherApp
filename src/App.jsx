import {useState,useEffect} from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { fetchWeatherByCity } from "./hooks/useWeather";
function App(){
  const [city,setCity]=useState("");
  const [weatherData,setWeatherData]=useState(null);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");
  const API_KEY=import.meta.env.VITE_WEATHER_API_KEY;

 
  const fetchCity=async(lat,lon)=>{
    setLoading(true);
    setError("");
    try{
      const res=await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      const data=await res.json();
      setWeatherData(data);
    
    }catch{
      setError("Unable to fetch location weather");
    }finally{
      setLoading(false);
    }
    };
    const handleSearch = async () => {
  if (!city) return;
  setLoading(true);
  setError("");

  try {
    const data = await fetchWeatherByCity(city, API_KEY);
    setWeatherData(data);
  } catch {
    setError("City not found");
  } finally {
    setLoading(false);
  }
};



  
  useEffect(()=>{
    if(!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        fetchCity(
          position.coords.latitude,
          position.coords.longitude
        )
      },()=>{
        setError("Location permission denied");
      }
    )
  },[]);
  const getBgClass=()=>{
    if(!weatherData) return "bg-gray-100";
    const condition=weatherData.weather[0].main;
    if(condition==="Clear") return "bg-blue-100";
    if(condition==="Clouds") return "bg-gray-200";
    if(condition==="Rain") return "bg-slate-300";
    return "bg-gray-100";
  }
  return(
    <div className={`min-h-screen ${getBgClass()} px-4`}>
      <Navbar />
      <SearchBar city={city} setCity={setCity} onSearch={()=>handleSearch(city)} />
      {loading && (
        <p className="text-center mt-6 text-blue-600 font-medium">Loading weather data...</p>
      )}
      {error && (
        <p className="text-center mt-6 text-red-500 font-medium">{error}</p>
      )}
      <WeatherCard weatherData={weatherData} />
    </div>
  )
}
export default App;