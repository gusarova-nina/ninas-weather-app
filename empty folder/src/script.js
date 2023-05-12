  document.querySelector("#main-temperature").innerHTML = `${Math.round(
    response.data.main.temp
  )}°`;
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function findCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchPosition);
}

function searchPosition(position) {
  let apiKey = "7ce1ca7802b06113d47476aa0d7d11c9";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(displayWeather);
}

let dateElement = document.querySelector("#current-date");
let timeElement = document.querySelector("#current-time");
let now = new Date();
dateElement.innerHTML = formatDate(now);
timeElement.innerHTML = formatTime(now);

let searchForm = document.querySelector("#city-search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#local-button");
currentLocationButton.addEventListener("click", findCurrentLocation);

searchCity("Laguna Beach");

//Temperature
function getFahrenheitTemp(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#main-temperature");
  currentTemp.innerHTML = `46°`;
}

function getCelsiusTemp(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#main-temperature");
  currentTemp.innerHTML = `8°`;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", getFahrenheitTemp);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", getCelsiusTemp);
