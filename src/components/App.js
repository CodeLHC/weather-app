import "../styles/App.css";
import React, { useState } from "react";
import getForecast from "../requests/getForecast";
import LocationDetails from "./LocationDetails";
import ForecastList from "./ForecastList";
import ForecastDetails from "./ForecastDetails";

function App() {
  const [location, setLocation] = useState({
    city: "",
    country: "",
  });
  const [forecasts, setForecasts] = useState([]);
  const [selectedDate, setSelectedDate] = useState(0);
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const updateForecast = async () => {
    const forecastData = await getForecast();
    setLocation(forecastData.location);
    setForecasts(forecastData.forecasts);
    setSelectedDate(forecastData.forecasts[0].date);
  };

  React.useEffect(() => {
    updateForecast();
  }, []);

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <LocationDetails city={location.city} country={location.country} />
      <ForecastList
        forecasts={forecasts}
        handleForecastSelect={handleForecastSelect}
      />

      {selectedDate && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
}

export default App;
