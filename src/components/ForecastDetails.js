import React from "react";
import "../styles/ForecastDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faTemperatureArrowUp,
  faTemperatureArrowDown,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";
import formatDate from "../utils/formatDate";

function ForecastDetails({ forecast }) {
  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">{`The breakdown for ${formatDate(
        forecast.date
      )}`}</div>
      <FontAwesomeIcon
        icon={faTemperatureArrowUp}
        style={{ color: "#2B2D42" }}
      />
      <div>{`Max Temperature: ${forecast.temperature.max}`}</div>
      <FontAwesomeIcon
        icon={faTemperatureArrowDown}
        style={{ color: "#2B2D42" }}
      />
      <div>{`Min Temperature: ${forecast.temperature.min}`}</div>
      <FontAwesomeIcon icon={faDroplet} style={{ color: "#2B2D42" }} />
      <div>{`Humidity: ${forecast.humidity}%`}</div>
      <FontAwesomeIcon icon={faWind} style={{ color: "#2B2D42" }} />

      <div>{`Wind: ${forecast.wind.speed}mph`}</div>
    </div>
  );
}

export default ForecastDetails;
