import "../styles/App.css";
import React from "react";
import LocationDetails from "./LocationDetails";

function App({location}) {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <LocationDetails city={location.city} country={location.country}/>
    </div>
  );
}

export default App;
