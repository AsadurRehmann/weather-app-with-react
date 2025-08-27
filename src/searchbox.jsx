import TextField from "@mui/material/TextField";
import "@fontsource/roboto/300.css";
import Button from "@mui/material/Button";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./searchbox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "f9ae1e55fbbacaf1907eef84c31027d3";

  let getWeatherInfo = async () => {
    try {
      let respone = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let responseJSON = await respone.json();
      let result = {
        city: city,
        temp: responseJSON.main.temp,
        tempMin: responseJSON.main.temp_min,
        tempMax: responseJSON.main.temp_max,
        humidity: responseJSON.main.humidity,
        feelsLike: responseJSON.main.feels_like,
        weather: responseJSON.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handelSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <div className="searchBox">
        <form onSubmit={handelSubmit}>
          <TextField
            className="searchin"
            id="city"
            label="City Name"
            variant="outlined"
            value={city}
            onChange={handleChange}
            required
          />
          <Button
            className="searchbtn"
            variant="contained"
            endIcon={<SearchOutlinedIcon />}
            type="submit"
          >
            Search
          </Button>
          {error && <p style={{color:"red"}}>No such place exists in our API</p>}
        </form>
      </div>
    </>
  );
}
