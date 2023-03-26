import React from "react";

function ForcastSummary({ date, temperature, description, icon }) {
  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{date}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        {icon}
      </div>
      <div className="forecast-summary__temperature">{`${temperature}°C`}</div>
      <div className="forecast-summary__description">{description}</div>
    </div>
  );
}

export default ForcastSummary;
