import { useState } from "react";
import "./App.css";

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const API = "YOUR_API_KEY";

  const searchWeather = async () => {

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`
    );

    const data = await res.json();
    setWeather(data);
  };

  return (
    <div className="container">

      <h1>Weather App</h1>

      <input
        placeholder="Enter City"
        onChange={(e)=>setCity(e.target.value)}
      />

      <button onClick={searchWeather}>
        Search
      </button>

      {weather && weather.main && (

        <div className="card">

          <h2>{weather.name}</h2>

          <h3>{weather.main.temp} °C</h3>

          <p>{weather.weather[0].main}</p>

          <p>Humidity : {weather.main.humidity}%</p>

          <p>Wind : {weather.wind.speed} m/s</p>

        </div>

      )}

    </div>
  );
}

export default App;