// Feature 1
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
let currentTime = `${day}, ${hours}:${minutes}`;
let h2 = document.querySelector("h2");
h2.innerHTML = `${currentTime}`;

// Feature 2

function searchEngine(event) {
  event.preventDefault();
  let city = document.querySelector("input");
  searchCity(city.value);
}
let mainButton = document.querySelector("button");
mainButton.addEventListener("click", searchEngine);

// Weather API
function searchCity(city) {
  let apiKey = "01f86de3d92d61b4e683e072bb26da5c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(displayTemperature);
}

function displayTemperature(response) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let degree = document.querySelector("p.degree");
  degree.innerHTML = `${temperature} °C`;
}

// Location

function retrievePosition(position) {
  let apiKey = "01f86de3d92d61b4e683e072bb26da5c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  axios.get(url).then(displayTemperature);
}
function getCurrentLocations(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retrievePosition);
}
let locationButton = document.querySelector("button.location");
locationButton.addEventListener("click", getCurrentLocations);
navigator.geolocation.getCurrentPosition(retrievePosition);
