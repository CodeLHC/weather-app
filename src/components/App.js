import "../styles/App.css";
import React from "react";
import LocationDetails from "./LocationDetails";
import ForecastList from "./ForecastList";

function App({ location, forecasts }) {
  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <LocationDetails city={location.city} country={location.country} />
      <ForecastList forecasts={forecasts} />
    </div>
  );
}

export default App;
