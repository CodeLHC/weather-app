import React from "react";
import formatDate from "../utils/formatDate";

function ForecastDetails({ forecast }) {
  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div>{formatDate(forecast.date)}</div>
      <div>{`Max Temperature: ${forecast.temperature.max}`}</div>
      <div>{`Min Temperature: ${forecast.temperature.min}`}</div>
      <div>{`Humidity: ${forecast.humidity}%`}</div>
      <div>{`Wind: ${forecast.wind}mph`}</div>
    </div>
  );
}

export default ForecastDetails;
