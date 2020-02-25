// create a variable to store the data
// const jsonData = data;
// console.log(jsonData);
// //create variable to extract Palo Alto
// let paloAltoCity = jsonData.cities[9].geoloc.city;
// console.log(paloAltoCity);
// //create variable to store Palo Alto temperature
// let paloTemp = jsonData.cities[9].current[0].temp;
// console.log("paloTemp:", paloTemp);
// // create variable to store Palo Alto condition
// let paloCondition = jsonData.cities[9].current[0].condition;
// console.log("paloAltoCondition:", paloCondition);
// // create variable to store weekly Data
// const weeklyData = jsonData.cities[9].weekly;
// console.log("weeklyForecast:", weeklyData);
// // create variable to extract ONLY Palo Alto days
// const paloAltoWeekly = weeklyData.map(weekTemp => weekTemp.day);
// console.log("Weekly Palo Alto Day:", paloAltoWeekly);
// // create variable to store Palo Alto weekly condition
// const paloAltoCondition = weeklyData.map(
//   weekCondition => weekCondition.daycondition
// );
// console.log("Weekly Palo Alto Condition:", paloAltoCondition);

// const hdnWeatherJsonpCallback = data => {
//   const cities = data.cities,
//     citySelect = document.getElementById("city-select"),
//     current = document.getElementById("current"),
//     currentTemp = current.querySelector(".current-temp"),
//     currentCond = current.querySelector(".current-cond"),
//     forecast = document.getElementById("forecast"),
//     weekly = forecast.querySelector(".weekly-forecast");

//   for (let city of cities) {
//     const selectOption = document.createElement("option");

//     selectOption.innerHTML = city.geoloc.city;
//     citySelect.appendChild(selectOption);

//     if (city.geoloc.city === "Palo Alto") {
//       selectOption.setAttribute("selected", true);

//       for (let current of city.current) {
//         currentTemp.innerHTML = "Current Temp: " + current.temp + "&#176;";
//         currentCond.innerHTML = "Current Coundition: " + current.condition;
//       }

//       for (let day of city.weekly) {
//         weeklyListItem = document.createElement("li");
//         weeklyListItem.innerHTML = day.weekday;
//         weekly.appendChild(weeklyListItem);
//       }
//     }
//   }
// };
