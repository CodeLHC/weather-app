import "../styles/ForecastList.css";
import React from "react";
import ForcastSummary from "./ForecastSummary";

function ForecastList({ forecasts, handleForecastSelect }) {
  return (
    <div className="forecast-list">
      {forecasts.map((forecast) => {
        return (
          <ForcastSummary
            key={forecast.date}
            date={forecast.date}
            iconCode={forecast.icon}
            temperature={forecast.temperature.max}
            description={forecast.description}
            handleForecastSelect={handleForecastSelect}
          />
        );
      })}
    </div>
  );
}

export default ForecastList;
