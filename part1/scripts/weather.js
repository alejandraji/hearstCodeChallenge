window.onload = () => {
  const newDiv = document.createElement("div");
  document.body.appendChild(newDiv);
  newDiv.setAttribute("id", "current");
};

const getWeatherData = () => {
  const script = document.createElement("script"),
    url =
      "https://www.sfchronicle.com/external/weather/weather.json?callback=hdnWeatherJsonpCallback";

  script.src = url;
  document.head.appendChild(script);
};

const hdnWeatherJsonpCallback = data => {
  const cities = data.cities,
    // citySelect = document.getElementById("city-select"),
    current = document.getElementById("current"),
    // currentTemp = current.querySelector(".current-temp"),
    // currentCond = current.querySelector(".current-cond"),
    // forecast = document.getElementById("forecast"),
    // weekly = forecast.querySelector(".weekly-forecast");
  for (let city of cities) {
    const selectOption = document.createElement("option");

    selectOption.innerHTML = city.geoloc.city;

    if (city.geoloc.city === "Palo Alto") {
      selectOption.setAttribute("selected", true);

      for (let current of city.current) {
        currentTemp.innerHTML = "Current Temp: " + current.temp + "&#176;";
        currentCond.innerHTML = "Current Coundition: " + current.condition;
      }

      for (let day of city.weekly) {
        weeklyListItem = document.createElement("li");
        weeklyListItem.innerHTML = day.weekday;
        weekly.appendChild(weeklyListItem);
      }
    }
  }
};

const init = () => {
  getWeatherData();
};

init();
