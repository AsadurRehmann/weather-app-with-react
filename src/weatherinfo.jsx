import SearchBox from "./searchbox";
import InfoBox from "./infobox";
import { useState } from "react";

export default function WeatherInfo() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "",
    feelslike: 0,
    temp: 0,
    tempMin: 0,
    tempMax: 0,
    humidity: 0,
    weather: "",
  });

  let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Weather APP</h1>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo} />
    </>
  );
}
