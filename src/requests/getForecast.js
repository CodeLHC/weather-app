import axios from "axios";

const getForecast = (city) => {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";
  if (city) {
    endpoint += `?city=${city}`;
  }
  return axios
    .get(endpoint)
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
};

export default getForecast;
