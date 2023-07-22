/* eslint-disable no-console */
import axios from "axios";

const getForecast = (city, setErrorMessage) => {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";
  if (city) {
    endpoint += `?city=${city}`;
  }
  return axios
    .get(endpoint)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("No such town or city, try again!");
        console.error("Location is not valid", error);
      }
      if (status === 500) {
        setErrorMessage("Oopsie, server error. Try again later.");
        console.error("Server error", error);
      }
    });
};

export default getForecast;
