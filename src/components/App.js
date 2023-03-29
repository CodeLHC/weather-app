import "../styles/App.css";
import React from "react";
import LocationDetails from "./LocationDetails";
import ForecastList from "./ForecastList";
import ForecastDetails from "./ForecastDetails";

function App({ location, forecasts }) {
  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <LocationDetails city={location.city} country={location.country} />
      <ForecastList forecasts={forecasts} />
      <ForecastDetails forecast={forecasts[0]} />
    </div>
  );
}

export default App;
