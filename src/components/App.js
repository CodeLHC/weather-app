import "../styles/App.css";
import React, { useState } from "react";
import getForecast from "../requests/getForecast";
import LocationDetails from "./LocationDetails";
import ForecastList from "./ForecastList";
import ForecastDetails from "./ForecastDetails";
import SearchForm from "./SearchForm";

function App() {
  const [location, setLocation] = useState({
    city: "",
    country: "",
  });
  const [forecasts, setForecasts] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const [searchText, setSearchText] = useState("");

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const updateForecast = async (city) => {
    const forecastData = await getForecast(city);
    setLocation(forecastData.location);
    setForecasts(forecastData.forecasts);
    setSelectedDate(forecastData.forecasts[0].date);
  };

  React.useEffect(() => {
    updateForecast();
  }, []);

  const handleCitySearch = () => {
    updateForecast(searchText);
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <LocationDetails city={location.city} country={location.country} />
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />
      <ForecastList
        forecasts={forecasts}
        handleForecastSelect={handleForecastSelect}
      />

      {selectedDate && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
}

export default App;
