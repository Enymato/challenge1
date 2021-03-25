function displayTheWeather(response) {
  document.querySelector(".seoul").innerHTML = response.data.name;
  document.querySelector(".fs-1").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(".fs-6").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function countryData(event) {
  event.preventDefault();
  let apiKey = "ddaf6a178fcca0c86aa8279f49640c8c";
  let city = document.querySelector("#search-input").value;
  let apiUrl = ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayTheWeather);
}
function change(event) {
  event.preventDefault();
  let weather = document.querySelector(".fs-1");
  weather.innerHTML = `22°☁`;
}
function changeOne(event) {
  event.preventDefault();
  let weatherOne = document.querySelector(".fs-1");
  weatherOne.innerHTML = `45°☁`;
}
let now = new Date();
let days = [
  " Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let numberDay = days[now.getDay()];
let months = [
  "December",
  "January",
  " March",
  "April",
  "May",
  "June",
  " July",
  "August",
  "September",
  "October",
  "November"
];
let numbermonth = months[now.getMonth()];
let numberWeek = now.getDate();
let time = now.getHours();
if (time < 10) {
  time = `0${time}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let dateNow = document.querySelector(".card-header");
dateNow.innerHTML = ` ${numberDay} ${numberWeek} ${numbermonth} ${time}:${minutes}`;
let country = document.querySelector("#search");
country.addEventListener("submit", countryData);
let numberCelsius = document.querySelector("#celsius");
numberCelsius.addEventListener("click", change);
let numberFahrenheit = document.querySelector("#fahrenheit");
numberFahrenheit.addEventListener("click", changeOne);
