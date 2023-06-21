import React from "react";

function LocationDetails({ city, country }) {
  return (
    <div>
      <h1 className="locationInfo">{`${city} ${country}`}</h1>
    </div>
  );
}

export default LocationDetails;
