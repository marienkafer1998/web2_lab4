
const axios = require("axios");
const API_BASE_URL = "http://api.openweathermap.org/data/2.5/weather?APPID=c98ceead6e7b88c9c865eaf7bdbb291d";

async function loadWeatherWithCoords(lat, lon) {
    const API_URL = `${API_BASE_URL}&lat=${lat}&lon=${lon}`;

    return (await axios.get(API_URL)).data;
}


async function loadWeatherWithName(cityName) {
    const API_URL = `${API_BASE_URL}&q=${cityName}`;

    return (await axios.get(API_URL)).data;
}

module.exports = {
    loadWeatherWithCoords,
    loadWeatherWithName
};
