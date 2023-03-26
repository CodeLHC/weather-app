import "../styles/App.css";
import React from "react";
import LocationDetails from "./LocationDetails";
import ForcastSummary from "./ForecastSummary";

function App({ location, forecasts }) {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <LocationDetails city={location.city} country={location.country} />
      <ForcastSummary
        date={forecasts[0].date}
        icon={forecasts[0].icon}
        temperature={forecasts[0].temperature.max}
        description={forecasts[0].description}
      />
    </div>
  );
}

export default App;
