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
  const [errorMessage, setErrorMessage] = useState("");

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const updateForecast = async (city) => {
    const forecastData = await getForecast(city, setErrorMessage);
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
      <div className="heading">
        <h1>WeatherWise</h1>
      </div>
      <LocationDetails
        city={location.city}
        country={location.country}
        errorMessage={errorMessage}
      />
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />
      {!errorMessage && (
        <>
          <ForecastList
            forecasts={forecasts}
            handleForecastSelect={handleForecastSelect}
          />

          {selectedDate && <ForecastDetails forecast={selectedForecast} />}
        </>
      )}
    </div>
  );
}

export default App;
