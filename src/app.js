function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#cityname");
  cityElement.innerHTML = response.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
  let windspeedElement = document.querySelector("#windspeed");
  windspeedElement.innerHTML = Math.round(response.data.wind.speed);
}
let apiKey = "c3895a10923317988546b6bf1fbc2d48";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
