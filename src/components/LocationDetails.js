import React from "react";

function LocationDetails({ city, country, errorMessage }) {
  return errorMessage ? (
    <h1>{errorMessage}</h1>
  ) : (
    <h1 className="location-info">{`${city} ${country}`}</h1>
  );
}

LocationDetails.defaultProps = {
  errorMessage: "",
};

export default LocationDetails;
