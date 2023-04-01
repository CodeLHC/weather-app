import axios from "axios";

const getForecast = () => {
  return axios
    .get("https://cmd-shift-weather-app.onrender.com/forecast?city=Manchester")
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
};

export default getForecast;
