import React from "react";
import iconData from "../data/iconData.json";
import formatDate from "../utils/formatDate";

function ForcastSummary({
  date,
  temperature,
  description,
  iconCode,
  handleForecastSelect,
}) {
  const weatherCode = `${iconCode.slice(0, 1)}00`;
  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{formatDate(date)}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <img src={iconData[weatherCode]} alt="weatherIcon" />
      </div>
      <div className="forecast-summary__temperature">{`${temperature}°C`}</div>
      <div className="forecast-summary__description">{description}</div>
      <button
        onClick={() => handleForecastSelect(formatDate(date))}
        type="button"
      >
        More Details
      </button>
    </div>
  );
}

export default ForcastSummary;
