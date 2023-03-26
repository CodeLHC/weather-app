import "../styles/ForecastList.css";
import React from "react";
import ForcastSummary from "./ForecastSummary";

function ForecastList({ forecasts }) {
  return (
    <div className="forecast-list">
      {forecasts.map((forecast) => {
        return (
          <ForcastSummary
            key={forecast.date}
            date={forecast.date}
            icon={forecast.icon}
            temperature={forecast.temperature.max}
            description={forecast.description}
          />
        );
      })}
    </div>
  );
}

export default ForecastList;
