const getWeatherData = () => {
  const script = document.createElement("script"),
    url =
      "https://www.sfchronicle.com/external/weather/weather.json?callback=hdnWeatherJsonpCallback";

  script.src = url;
  document.head.appendChild(script);
};

const hdnWeatherJsonpCallback = data => {
  const cities = data.cities,
    citySelect = document.getElementById("city-select"),
    current = document.getElementById("current"),
    currentTemp = current.querySelector(".current-temp"),
    currentCond = current.querySelector(".current-cond"),
    forecast = document.getElementById("forecast"),
    weekly = forecast.querySelector(".weekly-forecast");

  for (let city of cities) {
    const selectOption = document.createElement("option");

    selectOption.innerHTML = city.geoloc.city;
    citySelect.appendChild(selectOption);

    if (city.geoloc.city === "Palo Alto") {
      selectOption.setAttribute("selected", true);

      populateCityData(currentTemp, currentCond, city, weekly);
    }

    citySelect.addEventListener("change", function() {
      if (citySelect.value === city.geoloc.city) {
        if (weekly.innerHTML !== "") {
          weekly.innerHTML = "";
        }

        populateCityData(currentTemp, currentCond, city, weekly);
      }
    });
  }
};

const populateCityData = (temp, condition, theCity, week) => {
  temp.innerHTML = "Current Temp: " + theCity.current[0].temp + "&#176;";
  condition.innerHTML = "Current Coundition: " + theCity.current[0].condition;

  for (let day of theCity.weekly) {
    let weeklyDiv = document.createElement("div");
    let weeklyCondition = document.createElement("div");
    weeklyCondition.setAttribute("id", "weekly-condition");
    weeklyDiv.setAttribute("id", "weekly-day");
    let weeklyListItem = document.createElement("li");

    weeklyDiv.innerHTML = day.weekday;
    weeklyCondition.innerHTML = +day.low + "&#176;" + " " + day.daycondition;
    weeklyListItem.appendChild(weeklyDiv);
    weeklyListItem.appendChild(weeklyCondition);
    week.appendChild(weeklyListItem);
  }
};

const init = () => {
  getWeatherData();
};

init();

// If a user refreshed the page, we would not need to load the weather data again unless 10 minutes had elapsed ?

//   If the user left the page open all day, the page will update the weather data every 10 minutes ?
//     Instead of the abbreviated days("Mon", "Tues", etc) we had full names("Monday", "Tuesday", etc) ?
//       Given that in the data the icon(example: "mostlycloudy") refers to an image path "/not/really/a/thing/mostlycloud.png", could you render HTML to display the weather icons for each entry ?
//         What other improvements do you think should be made if you had more time ?
