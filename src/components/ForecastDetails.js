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
      <div className="forcast-details__horizontal-capture">
        <div className="grouped-vertical-view">
          <FontAwesomeIcon
            icon={faTemperatureArrowUp}
            style={{ color: "#2B2D42" }}
          />
          {`Max Temperature: ${forecast.temperature.max}`}
        </div>
        <div className="grouped-vertical-view">
          <FontAwesomeIcon
            icon={faTemperatureArrowDown}
            style={{ color: "#2B2D42" }}
          />
          {`Min Temperature: ${forecast.temperature.min}`}
        </div>
        <div className="grouped-vertical-view">
          <FontAwesomeIcon icon={faDroplet} style={{ color: "#2B2D42" }} />
          {`Humidity: ${forecast.humidity}%`}
        </div>
        <div className="grouped-vertical-view">
          <FontAwesomeIcon icon={faWind} style={{ color: "#2B2D42" }} />

          {`Wind: ${forecast.wind.speed}mph`}
        </div>
      </div>
    </div>
  );
}

export default ForecastDetails;
