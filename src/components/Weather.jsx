import { useState, useRef, useEffect } from 'react'
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import cloudy from '../images/cloudy.png';
import rain from '../images/rain.png';
import snow from '../images/snow.png';
import sun from '../images/sun.png'; 
import thunder from '../images/thunder.png';
import mist from '../images/mist.png';


const Weather = () => {

  const inputRef = useRef()

  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": sun,
    "01n": sun,
    "02d": cloudy,
    "02n": cloudy,
    "03d": cloudy,
    "03n": cloudy,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "11d": thunder,
    "11n": thunder,
    "13d": snow,
    "13n": snow,
    "50d": mist,
    "50n": mist


  }

  const search = async (city) => {

    if(city === ""){
      alert("Entery city name");
      return; 
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

      const response = await fetch(url); 
      const data = await response.json();

      if(!response.ok){
        alert(data.message);
        return;
      }

      console.log(data);
      const icon = allIcons[data.weather[0].icon] || sun; 

      setWeatherData({ 
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name, 
        icon: icon
      })

    } catch (error){
      setWeatherData(false); 
      console.error("Error")

    }
  }

  useEffect(() => {
    search("Amsterdam");
  },[])

  return (
  <div className="bg-myOcean shadow-lg font-myText text-white rounded-lg flex flex-col items-center p-5 w-sm">

  {weatherData?<>
        <img src={weatherData.icon} alt="" className="w-30 mx-10 my-3"/>

        <div className="flex flex-row items-center justify-center gap-4 mt-3">
          <p className="font-bold text-2xl">{weatherData.temperature} °c</p>
          <p className="font-bold text-2xl">{weatherData.location}</p>
        </div>

      

      <div className="mt-8 flex justify-between">

        <div className="flex flex-start gap-2">
          <WiHumidity className="mt-1 w-6"/>
          <div>
            <p>{weatherData.humidity} %</p>
            <span>Humidity</span>
          </div>
        </div>

         <div className="flex flex-start gap-2">
          <FaWind className="mt-1 w-6"/>
          <div>
            <p>{weatherData.windSpeed} Km/h</p>
            <span>Wind speed</span>
          </div>
        </div>


      </div>
      
      </>:<></>} 

      <div className="flex ">
        <input ref={inputRef} type="text" placeholder="Search"/>
        <CiSearch className="search-icon" size={32}  onClick={() => search (inputRef.current.value)}/>
      </div>
      

    </div>
  )
}

export default Weather