import React, { useState } from "react";
import "./App.css";
import Suhu from "./components/Suhu";
import Highlights from "./components/Highlights";

function App() {
  const {city, setCity} = useState("Depok");
  const [weatherData, setWeatherData] = [useState(null)];

  const apirURL = `https://api.weatherapi.com/v1/current.json?key=e57e4269f7054422a0f85241240706&q=${city}&aqi=no`

  useEffect(()=>{
  fetch(apirURL)
  .then((response)=>{
    if(!response.ok){
      throw new Error("Error");
    }
    return response.json();
  })
  .then((data)=>{
    console.log(data);
    setWeatherData(data);
  })
  .catch((e)=>{
    console.log(e);
  })
},[city])

  return (
    <div className="bg-[#1F213A] h-screen flex justify-center align-top ">
      <div className=" mt-40 w-1/5 h-1/3 ">
        <Suhu />{" "}
      </div>


      <div className="mt-40 w-1/3 h-1/3 p-10 grid grid-cols-2 gap-6"> 
      <h2 className="text-slate-200 text-2xl col-span-2
      ">Today's Highlight</h2>
      <Highlights />
      <Highlights />
      <Highlights />
      <Highlights />
    </div>
    </div>
  );
}

export default App;
